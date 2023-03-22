/**
 * GTM Script
 */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-HP8P');


/**
 * IMPORTANT
 * wave.js is required by Identity because it is responsible for setting some cookies
 * in the users' browser that Identity relies on during registration to figure out where
 * they came from. The Data team uses this information
 */
// Cookie functions from http://www.quirksmode.org/js/cookies.html
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  let domain = '.waveapps.com';
  domain = window.location.hostname.substring( window.location.hostname.indexOf('.') );
  document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
  return readCookie(name);
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

// Creates a cookie named 'original-referrer' if it doesn't already exist
function createOriginalReferrerCookie() {
  if (!readCookie('original-referrer')) {
    var referrer = getReferrer();
    createCookie('original-referrer', referrer, 30);
  }
}
// Creates a cookie named 'immediate-referrer' according to the following logic:
//
// 1. If cookie doesn't exist, create it.
// 2. If cookie doesn't contain utm_source, and referrer does, overwrite the cookie.
function updateImmediateReferrerCookie() {
  var referrer = getReferrer();
  var cookie = readCookie('immediate-referrer');
  if (!cookie) {
    cookie = createCookie('immediate-referrer', referrer, 30);
  }
  if (!hasUtmSource(cookie) && hasUtmSource(referrer) && !isWaveDomain(referrer)) {
    cookie = createCookie('immediate-referrer', referrer, 30);
  }
}
// Creates a cookie named 'landing-page' according to the following logic:
//
// 1. If cookie doesn't exist, create it.
// 2. If cookie doesn't have utm_source, and current url does, overwrite the cookie.
function updateLandingPageCookie() {
  var currentUrl = window.location.toString();
  var cookie = readCookie('landing-page');
  if (!cookie) {
    cookie = createCookie('landing-page', currentUrl, 30);
  }
  if (!hasUtmSource(cookie) && hasUtmSource(currentUrl)) {
    cookie = createCookie('landing-page', currentUrl, 30);
  }
}
// Creates a cookie named 'wave_client_id'
function createWaveClientIdCookie() {
  let cookie = readCookie('wave_client_id');
  if (!readCookie('wave_client_id')) {
    let uuid = generateUUID();
    createCookie('wave_client_id', uuid, 30);
  }
}

// Support functions
function getReferrer() {
  if (document.referrer === '') {
    return 'no-referrer';
  } else {
    return document.referrer;
  }
}

function isWaveDomain(url) {
  if (!url) return false;
  var domain = url.split('?')[0];
  return domain.indexOf('waveapps.com') != -1;
}

function hasUtmSource(url) {
  if (!url) return false;
  return url.indexOf('utm_source') != -1;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results === null) {
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

function generateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
