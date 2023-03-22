/**
 * Main js file
 */

(function( $ ) {

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const direction = document.getElementsByTagName("html")[0].getAttribute("dir");

    function keyboardNavigationOn(e) {
        var evtobj = window.event? event : e;
        if (evtobj.keyCode == 9 && evtobj.shiftKey) {
            $('body').addClass('keyboard-navigation-mode');
        }
    }

    function subMenuLocation() {
        if ( $(window).width() > 1200 ) {
            $('#primary-menu .sub-memain-navigation-wrapnu, #primary-menu .children').each(function (index, element) {
                var offset_right = $(element).offset().left + $(element).width() + 30;

                if (offset_right > $(window).width()) {
                    $(element).addClass('on-right');
                } else {
                    $(element).removeClass('on-right');
                }
            });
        }
    }
    // ABSOLUTE BOX WIDTH
    function absBlockWidth() {
        if( $(window).width() > 576 ) {
            $('.abs-box').each(function (index, element) {
                var container = $('.container').first();
                if ( $(element).hasClass('elementor-element') ) {
                    container = $(element).closest('.elementor-container');
                }
                if ( !$(element).find('.abs-box-bg').length ) {
                    $(element).append('<div class="abs-box-bg"></div>');
                }
                if ( $(element).hasClass('abs-box-right')) {
                    $(element).find('.abs-box-bg').css('rtl' !== direction ? 'right' : 'left', - ($(window).width() - container.outerWidth()) / 2 );
                } else {
                    $(element).find('.abs-box-bg').css('rtl' !== direction ? 'left' : 'right', - ($(window).width() - container.outerWidth()) / 2 );
                }
            });
        }
    }

    // CALCULATE MINIMUM CONTENT HEIGHT
    function minContentHeight(){
        var $content = $('#js-site-content'),
            offset_parts = 0,
            min_height = 0;

        if ($(window).width() > 768) {
            offset_parts += $('#main-footer').outerHeight() + $('#main-header').outerHeight() + $('#to-top').outerHeight();
            if ( $('body').hasClass('admin-bar') )  {
                offset_parts += $('#wpadminbar').outerHeight();
            }
            min_height = $(window).height() - offset_parts;

            if (min_height < $(window).height()) {
                $content.css('min-height', min_height);
            }
        }
    }

    document.onkeydown = keyboardNavigationOn;

    // Prevent double click on iPhone & iPad
    // $('.menu a').on('touchend', function(e) {
    //     e.preventDefault();
    //     var link = $(this).attr('href'),
    //         target = $(this).attr('target');
    //     if ( link ) {
    //         if (!target) target = '_self';
    //         window.open(link, target);
    //     }
    // });

    // Sticky header
    var header = $('#main-header');
    var stickyOffset = header.outerHeight();
    var stickyPoint = stickyOffset;
    var is_fixed = false,
        is_absolute = false,
        wHeight = $(window).height();

    if ( $(window).width() < 768) {
        stickyPoint = stickyOffset-60;
    }

    if ( header.hasClass('is-absolute') ) {
        is_absolute = true;
    }
    if ( header.hasClass('top-bar-absolute') && header.hasClass('is-absolute') ) {
        stickyOffset = 0;
    }
    if ( header.hasClass('mob-menu-additional') ) {
        is_fixed = true;
    }

    $('#primary-menu > li').addClass('nav-item');
    $('#primary-menu > li > a').addClass('nav-link');


    $(window).scroll(function(){
        if ( $(this).scrollTop() > stickyPoint ) {
            $('.header-sticky').addClass('sticky is-fixed').removeClass('sticky-off');
            if ( ! is_fixed ) {
                $('.header-sticky').addClass('is-fixed');
            }
            if ( ! is_absolute ) {
                $('body').css('padding-top', stickyOffset);
            }
            $('#to-top').fadeIn();
        } else {
            $('.header-sticky').removeClass('sticky').addClass('sticky-off');
            if ( ! is_fixed ) {
                $('.header-sticky').removeClass('is-fixed');
            }
            if ( ! is_absolute ) {
                $('body').css('padding-top', '0');
            }
            $('#to-top').fadeOut();
        }
        if ( $('.main-navigation').hasClass('active') ) {
            $('#mob-toggle').trigger('click');
        }

    });

    // ON LOAD
    $( window ).on( "load", function() {
        var location = window.location.href;
        var location_clear = location.split('#');

        if ( location_clear[0] ) {
            location = location_clear[0];
        }

//         $('#primary-menu a[href*="#"], a.callback-btn').each(function (index, el) {
//             var oldHref = $(el).attr('href');
//             var href = oldHref.split('#');
            
//             if (location.charAt(location.length - 1) == '/') {
//                 location = location.substr(0, location.length - 1);
//             }
//             if (href[0] == location) {
//                $(el).attr('href', '#' + href[1]);    
//             }
//         });

        $('body').scrollspy({
            target: '#site-navigation',
            offset: 60,
        });
        
        if ( !getCookie('subscribe_modal')) {
            setTimeout(function () {
                $('.subscribe-modal').modal('show');
                document.cookie = "subscribe_modal=yes; path=/;";
            }, 3000);
        }
        
        if ($(this).scrollTop() > stickyPoint) {
            $('.header-sticky').addClass('sticky');
        }
        // INIT HALF COLUMN BACKGROUND
        absBlockWidth();

        minContentHeight();

        // Hide preloader
        $('#js-page-preloader').fadeOut();

        // Calculate SubMenu position (avoid menus cut off & scroll bar)
        subMenuLocation();

        // Add sub-menu toggle
        $('.main-navigation .menu-item-has-children > a, .main-navigation .page_item_has_children > a').after('<i class="toggle-sub-menu"></i>');

        // Clone to mobile menu some elements
        $('.hero-aside .elementor-widget-container').children().each(function (index, element) {
            $(element).clone().appendTo('#js-mob-menu-additional').after('<span class="sep"></span>');
        });

        // Scroll to error after page reload
        var mc4wp_alert = $('.mc4wp-alert');
        if ( mc4wp_alert.length ) {
            $("html, body").animate({ scrollTop: mc4wp_alert.closest('.elementor-section').offset().top - 100 }, 600);

            var mc4wp_modal = mc4wp_alert.closest('.dm-modal');
            if (mc4wp_modal.length) {
                mc4wp_modal.modal('show');
            }
        }

        var elem_toggle = $('.elementor-toggle-item:first-child .elementor-tab-title');
        if ( elem_toggle.length ) {
            elem_toggle.trigger('click');
        }
        var post_navigation = $('.navigation.pagination');
        if ( post_navigation.length ) {
            $('.navigation.pagination .page-numbers').each(function (index, element) {
                var pagenum = element.innerText;
                if ( parseInt(pagenum) < 10) {
                    element.innerText = '0' + pagenum;
                }
            });
        }

        // Brand slider
        var brand_slider_left =  $('.js-brand-slider-left > .elementor-column-wrap > .elementor-widget-wrap'),
            brand_slider_right =  $('.js-brand-slider-right > .elementor-column-wrap > .elementor-widget-wrap');

            var sick_args = {
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 8000,
                cssEase: 'linear',
                pauseOnFocus: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            }
        if (brand_slider_left.length) {
            brand_slider_left.slick(sick_args);
        }
        if (brand_slider_right.length) {
            sick_args.rtl = true;
            brand_slider_right.attr('dir', 'rtl');
            brand_slider_right.slick(sick_args);
        }

        $('#form_dm-ct7-0 .wpcf7-validates-as-required').attr('required', 'required');

    });

    $(window).resize( function() {
        absBlockWidth();
        subMenuLocation();
    });

    // Masonry
    $('.masonry-grid').imagesLoaded().done( function( instance ) {
        $('.masonry-grid').masonry({
            itemSelector: '.new-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.new-item'
            }
        });
    });


    // SCROLL TO TOP
    $('#to-top , span.custom-logo-link').on('click', function(e) {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.main-navigation a').on('click', function(e) {
        $('body').removeClass('no-scroll');
        $('.page-backdrop, .main-navigation-wrap').removeClass('active');
    });


    // MOBILE MENU
    $('.mob-menu-toggle').on('click', function(e) {
        e.preventDefault();
        if ( $('.main-navigation-wrap').hasClass('active') ) {
            if ($(window).width() < 768) {
                $('body').removeClass('no-scroll');
            }
            $('.page-backdrop, .main-navigation-wrap').removeClass('active');
        } else {
            if ($(window).width() < 768) {
                $('body').addClass('no-scroll');
            }
            $('.page-backdrop, .main-navigation-wrap').addClass('active');
        }
    });

    $('.main-navigation').on('click', '.toggle-sub-menu', function(e) {
        $(this).next('ul').slideToggle(400);
    });

    // Validate comment form
    if ( $('#commentform').length ) {
        $('#commentform').validate();
    }

    var focusForm = false,
        contactForm = $('#form_dm-ct7-0'),
        contactFormSubmit   = contactForm.find('input[type="submit"]');

    contactForm.validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                phoneUS: true
            },
            email: {
                required: true,
                email: true
            },
        },
        errorElement: "span",
        onsubmit: false,
        errorPlacement: function ( error, element ) {
            error.addClass( "validate-error" );
            error.insertAfter( element );
            element.parent().find('.wpcf7-not-valid-tip').remove();
        },
    });

    contactFormSubmit.on('click', function(e) {
        if (!contactForm.valid()) {
            e.preventDefault();
        }
    });

    $('.wpcf7-tel').on('keypress', function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });

    $('.your-name input').on('keypress', function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if(!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0)) {
            return false;
        }
        return true;
    });

    document.addEventListener( 'wpcf7submit', function( event ) {
        return event.preventDefault();
    }, false );


    $('.js-select2').each(function (i, obj) {
        if (!$(obj).hasClass('select2-hidden-accessible')) {
            $(obj).select2({
                dropdownCssClass: "increasedzindexclass",
                minimumResultsForSearch: -1
            });
        }
    });

    function inputFocusIn(element){
        element.addClass('focus');
    }
    function inputFocusOut(group, val){
        group.removeClass('focus');
        if ( val ) {
            group.addClass('filled');
        } else {
            group.removeClass('filled');
        }
    }

    $('.form-group-label').on('focus', 'input, select, textarea', function(e) {
        inputFocusIn($(this).closest('.form-group-label'));
    });

    $('.form-group-label').on('blur', 'input, select, textarea', function(e) {
        inputFocusOut($(this).closest('.form-group-label'), $(this).val() );
    });

    $('.form-group-label .js-select2').on('select2:open', function (e) {
        inputFocusIn($(this).closest('.form-group-label'));
    });
    $('.form-group-label .js-select2').on('select2:close', function (e) {
        inputFocusOut($(this).parent('.form-group-label'), e.currentTarget.value);
    });

    $('.dm-team__more').on('click', function (e) {
        $('.flip-card.hover').removeClass('hover');
        $(this).closest('.flip-card').addClass('hover');
    });

    $(document).click(function(e) {
        if ($(e.target).is('.flip-card-back__close') || !$(e.target).is('.flip-card.hover, .flip-card.hover *')) {
            $('.flip-card').removeClass('hover');
        }
    });



})(jQuery);