$(document).ready(function() {
  // TODO: audit: is this used?
  $('.mobile-nav-toggle-btn').click(function(e) {
    $('.mobile-nav-toggle-btn').toggleClass('open');
  });

  // TODO: audit: is this used?
  $('.timeline').each(function() {
    var timeline = $(this);
    var timelineNav = timeline.next();
    var timelineNavPrevArrow = timelineNav.find('.nav-prev').first();
    var timelineNavNextArrow = timelineNav.find('.nav-next').first();
    var timelineNavPage = timelineNav.find('.slick-slider__nav__page');
    var timelineNavSlideCount = timelineNav.find('.slick-slider__nav__slidecount');

    function timelineNumbering(slick) {
      timelineNavPage.text(parseInt(parseInt(slick.currentSlide) / parseInt(slick.options.slidesToScroll)) + 1);
      timelineNavSlideCount.text(Math.ceil(parseInt(slick.slideCount) / parseInt(slick.options.slidesToScroll)));
    }
    // offsets the timeline to the .container class's left offset
    timeline.on('init', function(event, slick) {
      timelineNumbering(slick);
      $(window).on('resize', function() {
        if ($(window).width() >= 768) {
          timeline.find('.slick-track').css({
            'left': ($('.container:eq(1)').offset().left - $('body').offset().left) + 'px'
          });
        } else {
          timeline.find('.slick-track').css({
            'left': ''
          });
        }
      }).trigger('resize');
    });
    // initializes slick for each timeline and sets up breakpoints
    timeline.slick({
      variableWidth: true,
      infinite: false,
      slidesToScroll: 4,
      prevArrow: timelineNavPrevArrow,
      nextArrow: timelineNavNextArrow,
      responsive: [{
        breakpoint: 576,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          variableWidth: true,
          slidesToScroll: 3
        }
      }, ]
    }).on('afterChange', function(event, slick, currentSlide, nextSlide) {
      timelineNumbering(slick);
    });
  });
});


/**
 * Navigation skips links
 */
// https://webflow.com/accessibility/checklist/task/include-a-skip-to-main-link
$(document).ready(function () {
  $("#skip-link").on("click keydown", function (e) {
    if (e.type === "keydown" && e.which !== 13) {
      return;
    }
    e.preventDefault();
    var target = $("main");
    target.attr("tabindex", "-1");
    target.focus();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  });
});


/**
 * Localization
 */
// Define function that gets GEO info
async function getLocation() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// create function that initializes toggle state and tracks toggle cliks
function countryToggler() {
  let country = sessionStorage.getItem("geoip");
  const usToggles = document.querySelectorAll("[country-toggle='US']");
  const caToggles = document.querySelectorAll("[country-toggle='CA']");
  if (country === "CA") {
    addActiveClass(caToggles);
    removeActiveClass(usToggles);
  } else {
    addActiveClass(usToggles);
    removeActiveClass(caToggles);
  }

  function setUS() {
    document.querySelector("body").setAttribute("data-geoip", "US");
    removeActiveClass(caToggles);
    addActiveClass(usToggles);
    sessionStorage.setItem("geoip", "US");
  }

  function setCA() {
    document.querySelector("body").setAttribute("data-geoip", "CA");
    addActiveClass(caToggles);
    removeActiveClass(usToggles);
    sessionStorage.setItem("geoip", "CA");
  }

  for (let i = 0; i < caToggles.length; i++) {
    caToggles[i].addEventListener("click", setCA);
  }
  for (let i = 0; i < usToggles.length; i++) {
    usToggles[i].addEventListener("click", setUS);
  }
  for (let i = 0; i < caToggles.length; i++) {
    caToggles[i].addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        setCA();
      }
    });
  }
  for (let i = 0; i < usToggles.length; i++) {
    usToggles[i].addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        setUS();
      }
    });
  }
}

function addActiveClass(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("active");
  }
}

function removeActiveClass(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
}

async function personalize() {
  // Read user props from Wave cookie
  const wvUserPropsString = readCookie("wv-user-props");
  // If present, then credentialied user. Add logged in attribute to body. Otherwise add looged-out attribute
  if (wvUserPropsString) {
    document.querySelector("body").setAttribute("credentials", "logged-in");
  } else {
    document.querySelector("body").setAttribute("credentials", "logged-out");
  }
}

async function localize() {
  // check session storage for geo ip and if not set then set it
  if (!sessionStorage.getItem("geoip")) {
    // Get geo data from API and store country code
    let geoJSON = await getLocation();
    let countryCode = geoJSON.country_code;
    sessionStorage.setItem("geoip", countryCode);
    document.querySelector("body").setAttribute("data-geoip", countryCode);
  } else {
    document
      .querySelector("body")
      .setAttribute("data-geoip", sessionStorage.getItem("geoip"));
  }

  // if toggle is on page then run country toggler function
  if (document.querySelector("[country-toggle]")) {
    countryToggler();
  }

  // alert any observers that geolocation is loaded
  const geoLocated = new Event('geolocated')
  document.dispatchEvent( geoLocated );
}

personalize();
localize();


/**
 * Dynamic Breadcrumb Schema
 */
let windowPath = window.location.pathname;
let breadcrumbArray = windowPath.split("/").splice(1);

// Check if breadcrum array not empty and run createBreadcrumb function
if (breadcrumbArray.length > 1) {
  createBreadcrumb();
}

function createBreadcrumb() {
  let breadcrumbSchema = document.createElement("script");
  breadcrumbSchema.type = "application/ld+json";
  let schemaObject = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [],
  };
  let breadcrumbPath = "";
  for (let i = 0; i < breadcrumbArray.length; i++) {
    const element = breadcrumbArray[i];
    breadcrumbPath = breadcrumbPath + "/" + element;
    let breadcrumbObject = {
      "@type": "ListItem",
      position: i + 1,
      name: element,
      item: window.location.origin + breadcrumbPath,
    };
    schemaObject.itemListElement.push(breadcrumbObject);
  }
  breadcrumbSchema.innerText = JSON.stringify(schemaObject);
  document.body.appendChild(breadcrumbSchema);
}


/**
 * Show localized content to Webflow Editor
 */
$(document).ready(function () {
  if (Webflow.env("editor") != undefined) {
    // add temp-localize-show-all class to body
    $("body").addClass("temp-show-all");
    // if element with class localize-component exists on page
    if ($(".localize-component").length > 0) {
      alert("Page has localization\nOrange = US\nYellow = CA");
    }
  }
});


/**
 * Cookies
 */
$(document).ready(function () {
  createOriginalReferrerCookie();
  updateImmediateReferrerCookie();
  updateLandingPageCookie();
  createWaveClientIdCookie();
  // Add cookie for tracking MyPoints users
  if (getParameterByName("visit_id")) {
    var visit_id = getParameterByName("visit_id");
    createCookie("my_points_visit_id", visit_id, 30);
  }

  eraseCookie("wave-app-referrer");
});

/**
 * Analytics
 */
$(function() {
  // Amplitude Event
  $('[data-amplitude-event]').on('click', function(event) {
    var eventName = $(this).data('amplitude-event');
    var attributes = $(this).data('amplitude-properties') || {};
    if (attributes.toString() === "[object Object]") {
      window.WaveAnalytics.trackOnClick(eventName, attributes, event);
    } else {
      return;
    }
  });
});


/**
 * Anonymous
 */
$(document).ready(function() {
  // TODO: audit: is this used?
  $('.video-modal').on("click", function() {
    var $modalId = $(this).data("target");
    var $iframe = "<div class='embed-responsive embed-responsive-16by9'>" + "<iframe class='embed-responsive-item' src='" + $(this).data("src") + "?autoplay=1&enablejsapi=1&modestbranding=1' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen allow='autoplay; fullscreen'></iframe>" + "</div>";
    $($modalId).on('shown.bs.modal', function(e) {
      $(this).find(".modal-body").append($iframe);
    })
    $($modalId).on('hide.bs.modal', function(e) {
      $(this).find(".modal-body").empty();
      $iframe = null;
    })
  });

  // TODO: audit: is this used?
  $('.slick-slider--testimonial').each(function() {
    slider = $(this);
    slider.slick({
      prevArrow: $('.nav-prev'),
      nextArrow: $('.nav-next'),
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-slider__nav__page').text(nextSlide + 1);
    });
  });

  // TODO: audit: is this used?
  // This will need to be moved to per slider in the future.
  $('[id^=customSlider-slider-]').each(function() {
    slider = $(this);
    slider.slick({
      prevArrow: $('.custom-nav-prev'),
      nextArrow: $('.custom-nav-next'),
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('[class^=slick-slider__nav__page-]').text(nextSlide + 1);
    });
  });

  // TODO: audit: is this used?
  $('.slick-slider--freelancehub').each(function() {
    slider = $(this);
    slider.slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: $('.freelance-nav-prev'),
      nextArrow: $('.freelance-nav-next'),
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-slider__nav__page').text(nextSlide + 1);
    });
  });


  // Add simple support for background images
  // TODO: audit: is this used?
  document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

  document.addEventListener('lazyloaded', function(e) {
    $.fn.matchHeight._update();
  });


  // set filtering attrs/classes on body
  // TODO: audit: is this used?
  const wvUserPropsString = readCookie('wv-user-props');
  let css = '';
  if (wvUserPropsString) {
    wvUserProps = wvUserPropsString.replace(/['"]+/g, '').split('\\054');
    document.body.classList.add('logged-in');

    wvUserProps.forEach(function(prop) {
      let [key, value] = prop.split('=');
      if (value === '0'){
        value = false
      } else if (value === '1'){
        value = true
      }
      css += '[data-' + key + '="true"] .country-content--' + key.toUpperCase() + '--TRUE,' +
              '[data-' + key + '="false"] .country-content--' + key.toUpperCase() + '--FALSE { display: block; } ' +
              '[data-' + key + '="false"] .country-content--' + key.toUpperCase() + '--TRUE,' +
              '[data-' + key + '="true"] .country-content--' + key.toUpperCase() + '--FALSE { display: none; }';

      document.body.setAttribute("data-" + key, value);
    });
  } else {
    document.body.classList.add('logged-out');
  }
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  // style.type = 'text/css';
  head.appendChild(style);
  
});