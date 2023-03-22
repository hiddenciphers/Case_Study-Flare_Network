(function ($) {

    window.cl_search_bar = {
        click_filter: function (e) {
            const $box = $(e.currentTarget);
            const type = $box.data('type');
            if (!type) {
                return;
            }
            cl_search_bar.toggle_filter(type);
        },
        get_box: function (type) {
            const $box = $('.dropdown-input[data-type=' + type + ']');
            if (!$box.length) {
                return false;
            }
            return $box;
        },
        toggle_filter: function (type) {
            const $box = this.get_box(type);
            if (!$box) {
                return;
            }
            if ($box.hasClass('open')) {
                this.close_filter(type);
            } else {
                this.open_filter(type);
            }
        },
        open_filter: function (type) {
            const $box = this.get_box(type);
            if (!$box) {
                return;
            }
            $box.addClass('open');
            this.open_dropdown(type);
            this.close_all(type);
        },
        close_filter: function (type) {
            const $box = this.get_box(type);
            if (!$box) {
                return;
            }
            $box.removeClass('open');
            this.close_dropdown(type);
        },
        open_dropdown: function (type) {
            const $box = this.get_box(type);
            if (!$box) {
                return;
            }
            const $filter = $('.dropdown-' + type),
                box_top = $box.position().top,
                box_left = $box.position().left,
                box_width = $box.width(),
                box_heght = $box.height(),
                filter_width = $filter.width(),
                caret_height = 8,
                filter_top = box_top + box_heght + caret_height,
                filter_left = box_left + box_width / 2 - filter_width / 2
            ;
            $filter.css('top', filter_top + 'px');
            if (type != 'tags') {
                $filter.css('left', filter_left + 'px');
            }
            $filter.addClass('show');
        },
        close_dropdown: function (type) {
            const $filter = $('.dropdown-' + type);
            $filter.removeClass('show');
        },
        close_all: function (excluded_type) {
            var type;
            $('.search-filter-bar .dropdown-input').each(function (index, el) {
                type = $(el).data('type');

                if (!excluded_type || type != excluded_type) {
                    cl_search_bar.close_filter(type);
                }
            });
        },
        submit_form: function (e) {
            cl_search_bar.collect_filter_values();
        },
        collect_filter_values: function () {
            jQuery('.cl-search-form .dropdown-input').each(function (index, el) {
                let values = [],
                    $el = $(el),
                    type = $el.data('type'),
                    $input = jQuery('.dropdown-input[data-type=' + type + '] input'),
                    label = jQuery('.dropdown-input[data-type=' + type + ']').data('label'),
                    $hidden_input = jQuery('.cl-search-form input[name=' + type + ']')
                ;
                jQuery('.filter-option[data-type=' + type + '] input[type=checkbox]:checked').each(function (index, el) {
                    let $el = $(el),
                        value = $el.val();

                    if (values.indexOf(value) == -1) {
                        values.push(value);
                    }
                });
                if (values.length) {
                    $input.val(label + ' (' + values.length + ')');
                } else {
                    $input.val(label);
                }
                $hidden_input.val(values.join(','));
            });
        },
        clear_all: function () {
            jQuery('.search-filter-bar input[name="s"]').val('');
            jQuery('.search-filter-bar .dropdown-input').each(function (i, el) {
                let $el = $(el),
                    type = $el.data('type'),
                    label = $el.data('label');

                $el.find('input').val(label);
                jQuery('.search-filter-bar input[name=' + type + ']').val('');
            });
            jQuery('.cl-search-form .dropdown-filter input[type="checkbox"]').prop('checked', false);
        },
        search_icon_click: function () {
            jQuery('form.cl-search-form').submit();
        },
        body_click: function (event) {
            const $target = $(event.target);

            const $box = $target.closest('.dropdown-input,.dropdown-filter');
            if (!$box.length) {
                cl_search_bar.close_all('');
            }
        },
        search_order_change: function (event) {
            let $el = $(event.currentTarget),
                value = $el.val();

            $('.cl-search-form input[name="sortby"]').val(value);
            $('.cl-search-form').submit();
        },
        remove_criteria: function (event) {
            let $el = $(event.currentTarget),
                $criteria = $el.closest('.search-criteria'),
                type = $criteria.data('type'),
                id = $criteria.data('id')
            ;

            $('.filter-option[data-value="' + id + '"][data-type="' + type + '"] input').attr('checked', false).change();
            if ( type == 'tags') {
                $('.filter-option[data-value="' + id + '"][data-type="services"] input').attr('checked', false).change();
            }
            $('.cl-search-form').submit();
        },
        live_seach: function(event) {
            if (event.keyCode == 27) {
                cl_search_bar.close_live_search_box();
            } else if (event.keyCode == 13) {
                cl_search_bar.go_to_search_page();
            }
            clearTimeout(cl_search_bar.live_search_timeout);
            cl_search_bar.live_search_timeout = setTimeout(cl_search_bar.do_live_search, 200);
        },
        do_live_search: function() {
            const $input = $('.clls-input'),
                $results = $('.clls-results');

            let s = $input.val();
            cl_search_bar.live_search_data.s = s;

            let template = wp.template('post_search_template');
            wp.ajax.post(
                'cl_load_more',
                cl_search_bar.live_search_data
            ).done(function (response) {
                if (typeof response.results != 'undefined' && response.results.length) {
                    let html = '';
                    for (i = 0; i < response.results.length; i++) {
                        html += template(response.results[i]);
                    }
                    $results.html(html);
                } else {
                    $results.html('<span>No result found.</span>');
                }
            });
        },
        live_search_timeout: null,
        live_search_data: {},
        collect_live_search_data: function() {
            jQuery('.cl-search-form .dropdown-input').each(function (index, el) {
                let values = [],
                    $el = $(el),
                    type = $el.data('type'),
                    $input = jQuery('.dropdown-input[data-type=' + type + '] input'),
                    label = jQuery('.dropdown-input[data-type=' + type + ']').data('label'),
                    $hidden_input = jQuery('.cl-search-form input[name=' + type + ']')
                ;
                cl_search_bar.live_search_data[type] = $hidden_input.val();
            });
        },
        open_live_search_box: function(event) {
            cl_search_bar.collect_live_search_data();
            $('.clls-overlay').addClass('show');
            $('.clls-input').focus();
            $('body').css('overflow', 'hidden');
            $('.clls-overlay.show').on('click', function(event) {
                if (event.target == event.currentTarget) {
                    cl_search_bar.close_live_search_box();
                }
            });
        },
        close_live_search_box: function() {
            $('.clls-overlay').removeClass('show');
            $('.clls-input').val('');
            $('.clls-results').html('');
            $('body').css('overflow', 'initial');
        },
        go_to_search_page() {
            $('input[name="s"]').val($('.clls-input').val());
            jQuery('form.cl-search-form').submit();
        }
    };

    $(function () {
        $('body').off('click', cl_search_bar.body_click).on('click', cl_search_bar.body_click);
        // $('.search-filter-bar .search i').off('click', cl_search_bar.search_icon_click).on('click', cl_search_bar.search_icon_click);
        $('form.cl-search-form').off('submit', cl_search_bar.submit_form).on('submit', cl_search_bar.submit_form);
        $('.filter-option input').off('change', cl_search_bar.collect_filter_values).on('change', cl_search_bar.collect_filter_values);
        $('.clear-all-button').off('click', cl_search_bar.clear_all).on('click', cl_search_bar.clear_all);
        $('#search_sortby').off('change', cl_search_bar.search_order_change).on('change', cl_search_bar.search_order_change);
        $('.search-criteria i').off('click', cl_search_bar.remove_criteria).on('click', cl_search_bar.remove_criteria);
        $('.clls-input').off('keyup', cl_search_bar.live_seach).on('keyup', cl_search_bar.live_seach);
        // $('input[name="s"]').off('click', cl_search_bar.open_live_search_box).on('click', cl_search_bar.open_live_search_box);
        $('.clls-input-close').off('click', cl_search_bar.close_live_search_box).on('click', cl_search_bar.close_live_search_box);

        jQuery('#team_picks_slider_items').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: jQuery('#team_picks .navigation-arrows'),
            prevArrow: '<a href="javascript:void(0)" type="button" class="slick-prev"></a>',
            nextArrow: '<a href="javascript:void(0)" type="button" class="slick-next"></a>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        jQuery('#developer_corner_slider_items').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: jQuery('#developer_corner .navigation-arrows'),
            prevArrow: '<a href="javascript:void(0)" type="button" class="slick-prev"></a>',
            nextArrow: '<a href="javascript:void(0)" type="button" class="slick-next"></a>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var open_second_menu = function(e) {
            e.preventDefault();
            setTimeout(function(){
                $('.main-header-menu').addClass('second-page');
            }, 100);
        }

        var close_second_menu = function(e) {
            e.preventDefault();
            setTimeout(function() {
                $('.main-header-menu').removeClass('second-page');
            }, 100);
        }

        jQuery('.menu-item-more .menu-link').click(open_second_menu);
        jQuery('.menu-item-less .menu-link').click(close_second_menu);
    });

    window.cl_loadmore = function () {
        let template = wp.template('post_template');
        if (typeof window.loadmore_data === 'undefined') {
            window.loadmore_data = {};
        }
        $('.loadmore-btn').addClass('loading');
        wp.ajax.post(
            'cl_load_more',
            window.loadmore_data
        ).done(function (response) {
            if (typeof response.results != 'undefined' && response.results.length) {
                let html = '';
                for (i = 0; i < response.results.length; i++) {
                    html += template(response.results[i]);
                }
                $('.blog-post-bar').append(html);
                if (response.is_last_page || response.results.length < 10) {
                    $('.post-pagination').hide();
                } else {
                    window.loadmore_data.paged = response.next_page;
                    $('.loadmore-showing-text').text(response.loadmore_showing_text);
                }
            }
            $('.loadmore-btn').removeClass('loading');
        });
    }

    window.post_progress = {
        init: function () {
            const $post_content = $('.post-editor-content'),
                $outline_els = $post_content.find('h2')
            ;

            $outline_els.each(function (index, el) {
                post_progress.create_outline(index, $(el));
            });

            $('.post-outline-select').change(function () {
                if (this.value) {
                    post_progress.go_to_heading(this.value);
                }
            });
        },
        create_outline: function (index, $el) {
            $el.data('outline_id', index + 1).attr('data-outline_id', index + 1);
            let el_id = '';

            if ( $el.attr('id') ) {
                el_id = $el.attr('id');
            } else {
                el_id = $el.text().replace(/[\s\,\’\“\'\"\”\:\?]/g, '_').toLowerCase();
                $el.attr('id', el_id);
            }
        },
        go_to_heading: function (outline_id) {
            let $heading = $('.post-editor-content h2[data-outline_id=' + outline_id + ']');
            if (!$heading.length) {
                return;
            }
            let $root = $('html, body');

            $root.animate({
                scrollTop: $heading.offset().top - 30
            }, 800);
        },
        update_outline_progress: function () {
            const $post_content = $('.post-editor-content'),
                $headings = $post_content.find('h2');

            let scrolled_passed_items = [];

            scrolled_passed_items.push(0);

            $headings.each(function (index, el) {
                let $el = $(el);

                if (post_progress.scroll_passed($el)) {
                    scrolled_passed_items.push($el.data('outline_id'));
                }
            });

            let active_item = scrolled_passed_items[scrolled_passed_items.length - 1];
            $('.post-outline-list .post-outline-item[data-outline_id='+active_item+']').addClass('active');
            $('.post-outline-list .post-outline-item').each(function(index, el) {
                let $el = $(el);
                if ($el.hasClass('active') && $el.data('outline_id') != active_item) {
                    $el.removeClass('active');
                }
            });
        },
        scroll_passed: function ($el) {
            let el_bottom = $el.offset().top + $el.outerHeight(),
                window_bottom = $(window).scrollTop() + $(window).height();

            return window_bottom > el_bottom;
        },
        update_post_progress: function () {
            let $post_content = $('.post-editor-content'),
                post_content_top = $post_content.offset().top,
                post_content_passed = $(window).scrollTop(),
                post_content_height = $post_content.height() + post_content_top - $(window).height(),
                percent = post_content_passed / post_content_height * 100
            ;

            if (percent < 0) {
                percent = 0;
            } else if (percent > 100) {
                percent = 100;
            }

            $('.progress-line-inner').css('width', percent + '%');
        },
        toggle_mobile_share: function () {
            $('.post-mobile-share').toggle();
        },
    };
})(jQuery);