// Created by Nileforest*/
! function ( e ) {
    "use strict";
    var i = e( window ),
        a = e( document );
    e( function () {
        e( ".navigation-menu > ul > li:has( > ul)" ).addClass( "menu-dropdown-icon" ), e( ".navigation-menu > ul > li.menu-dropdown-icon" ).append( '<div class="dropworn-arrow"></div>' ), e( ".navigation-menu > ul > li > ul:not(:has(ul))" ).addClass( "normal-sub" ), e( ".navigation-menu > ul" ).before( '<a href="#" class="menu-mobile">Menu</a>' );
        var a = e( ".navigation-menu > ul > li" ),
            t = e( ".menu-mobile" );
        a.on( "mouseenter mouseleave", function ( a ) {
            i.width() > parseInt( 979 ) && ( e( this ).children( ".js-nav-dropdown" ).stop( !0, !1 ).fadeToggle( 150 ), e( this ).children( ".dropworn-arrow" ).stop( !0, !1 ).fadeToggle( 150 ), a.preventDefault() );
        } ), a.on( "click", function () {
            i.width() <= parseInt( 979 ) && ( e( this ).children( ".js-nav-dropdown" ).fadeToggle( 150 ), e( this ).children( ".dropworn-arrow" ).hide() );
        } ), t.on( "click", function ( i ) {
            e( ".navigation-menu > ul" ).toggleClass( "show-on-mobile" ), i.preventDefault();
        } );
    } ), e( function () {
        ! function ( e ) {
            if ( void 0 !== e ) {
                var a = e.offset().top,
                    t = i;
                t.on( "scroll", function () {
                    t.scrollTop() >= a ? e.addClass( "fixed" ) : e.removeClass( "fixed" );
                } );
            }
        }( e( "#header-sticky" ) );
    } ), i.bind( "DOMContentLoaded load resize", function () {
        var a = e( ".header" ).innerHeight();
        i.innerWidth() <= parseInt( 979 ) ? ( e( "#header-sticky" ).addClass( "no-stick" ), e( ".header" ).css( "height", "auto" ) ) : ( e( "#header-sticky" ).removeClass( "no-stick" ), e( ".header" ).css( "height", a ) );
    } ), e( function () {
        var t = e( ".sidebar-right" ),
            s = e( "#sidebar_toggle_btn" ),
            o = e( "#sidebar_close_icon" ),
            n = e( ".sidebar_overlay" );
        e( ".sidebar_overlay_active" );
        if ( s.on( "click", function () {
            e( this ).toggleClass( "active" ), t.toggleClass( "sidebar-open" ), n.toggleClass( "sidebar_overlay_active" );
        } ), o.on( "click", function () {
            s.removeClass( "active" ), t.removeClass( "sidebar-open" ), n.removeClass( "sidebar_overlay_active" );
        } ), a.on( "click touchstart", ".sidebar_overlay_active", function () {
            s.toggleClass( "active" ), t.toggleClass( "sidebar-open" ), n.toggleClass( "sidebar_overlay_active" );
        } ), e( function () {
            var i = e( "#search-overlay-menu-btn" ),
                a = e( ".search-overlay-menu, .search-overlay-menu .search-overlay-close" );
            i.on( "click", function ( i ) {
                e( ".search-overlay-menu" ).addClass( "open" ), e( '.search-overlay-menu > form > input[type="search"]' ).focus();
            } ), a.on( "click keyup", function ( i ) {
                i.target != this && "search-overlay-close" != i.target.className && 27 != i.keyCode || e( this ).removeClass( "open" );
            } );
        } ), e( 'a[data-toggle="tab"]' ).on( "shown.bs.tab", function ( i ) {
            e( e( i.target ).attr( "href" ) ).find( ".owl-carousel" ).owlCarousel( "invalidate", "width" ).owlCarousel( "update" );
        } ), e( ".js_tooltip" ).tipr(), e( ".slide-bg-image, .bg-image" ).each( function ( i ) {
            e( this ).attr( "data-background-img" ) && e( this ).css( "background-image", "url(" + e( this ).data( "background-img" ) + ")" ), e( this ).attr( "data-bg-position-x" ) && e( this ).css( "background-position", e( this ).data( "bg-position-x" ) );
        } ), i.width() > parseInt( 979 ) ) {
            var l = e( "nlpopup" ).data( "expires" ),
                r = 1500 * e( "nlpopup" ).data( "delay" ),
                d = function () {
                    var t = a.scrollTop(),
                        s = i.height(),
                        o = e( "#nlpopup" ),
                        n = t + Math.round( s / 2 ) - Math.round( o.outerHeight() / 2 );
                    n <= 40 && ( n = 40 ), o.css( "top", n ), e( "#nlpopup, #nlpopup_overlay" ).fadeIn( 500 );
                };
            e( ".nlpopup_close, #nlpopup_overlay" ).on( "click", function ( i ) {
                e.cookie( "nlpopup", "closed", {
                    expires: l,
                    path: "/"
                } ), e( "#nlpopup, #nlpopup_overlay" ).fadeOut( 200 ), i.preventDefault();
            } ), "closed" != e.cookie( "nlpopup" ) && setTimeout( d, r );
        }
        e( "ul.jq-accordian > li:has( > ul ) > a" ).append( "<span class='jq-accordionIcon'></span>" ), e( "ul.jq-accordian > li:has( > ul ) > a" ).attr( "href", "javascript:void(0)" ), e( "ul.jq-accordian li ul" ).hide();
        var c = e( "ul.jq-accordian li a" ),
            u = e( "ul.jq-accordian > li > a" );
        c.on( "click", function ( i ) {
            c.each( function ( i ) {
                e( this ).next().is( "ul" ) && e( this ).next().is( ":visible" ) && e( this ).next().slideUp();
            } ), ( i = e( i.target ) ).next().is( "ul" ) && i.next().is( ":visible" ) ? i.next().slideUp() : i.next().slideDown();
        } ), c.on( "click", function ( i ) {
            e( this ).hasClass( "is-active" ) ? e( this ).removeClass( "is-active" ) : ( u.not( this ).removeClass( "is-active" ), e( this ).addClass( "is-active" ) );
        } ), e( function () {
            var i = e( "#price_range_min" ).attr( "data-min" ),
                a = e( "#price_range_max" ).attr( "data-max" );
            e( ".price-range-slider" ).slider( {
                range: !0,
                min: 0,
                max: 1500,
                values: [ i, a ],
                step: 10,
                slide: function ( i, a ) {
                    e( "#price-range-from-to" ).html( "Price : <span class='from'>$" + a.values[ 0 ] + "</span> — <span class='to'>$" + a.values[ 1 ] ), e( "#price_range_min" ).val( a.values[ 0 ] ), e( "#price_range_max" ).val( a.values[ 1 ] );
                }
            } ), e( "#price-range-from-to" ).html( "Price : <span class='from'>$" + e( ".price-range-slider" ).slider( "values", 0 ) + "</span> — <span class='to'>$" + e( ".price-range-slider" ).slider( "values", 1 ) + "</span>" ), e( "#price_range_min" ).val( e( ".price-range-slider" ).slider( "values", 0 ) ), e( "#price_range_max" ).val( e( ".price-range-slider" ).slider( "values", 1 ) );
        } ), e( function () {
            e( ".nice-select-box" ).niceSelect();
        } ), e( ".slide-toggle-btn" ).on( "click", function ( i ) {
            e( "#" + e( this ).data( "toggleTarget" ) ).slideToggle( 300 );
        } ), e( ".fade-toggle-btn" ).on( "click", function ( i ) {
            e( "#" + e( this ).data( "toggleTarget" ) ).fadeToggle( 300 );
        } ), e( function () {
            var i = e( ".quantity" ).attr( "min" ),
                a = e( ".quantity" ).attr( "max" );
            e( ".quantityPlus" ).on( "click", function () {
                var i = parseInt( e( this ).next( ".quantity" ).val(), 10 );
                e( "p:first" ).text();
                i != a && e( this ).next( ".quantity" ).val( i + 1 );
            } ), e( ".quantityMinus" ).on( "click", function () {
                var a = parseInt( e( this ).prev( ".quantity" ).val(), 10 );
                a != i && e( this ).prev( ".quantity" ).val( a - 1 );
            } );
        } ), e( ".color-selector .entry" ).on( "click", function () {
            e( this ).parent().find( ".active" ).removeClass( "active" ), e( this ).addClass( "active" );
        } ), e( ".size-selector .entry" ).on( "click", function () {
            e( this ).parent().find( ".active" ).removeClass( "active" ), e( this ).addClass( "active" );
        } );
        var p = e( ".product-list-switcher" ),
            v = e( ".product-grid-switcher" ),
            m = e( ".product-list-item" );
        p.on( "click", function ( e ) {
            e.preventDefault(), m.addClass( "product-list-view" ), p.addClass( "product-view-icon-active" ), v.removeClass( "product-view-icon-active" );
        } ), v.on( "click", function ( e ) {
            e.preventDefault(), m.removeClass( "product-list-view" ), p.removeClass( "product-view-icon-active" ), v.addClass( "product-view-icon-active" );
        } );
    } ), e( function () {
        e( ".product-item-5" ).owlCarousel( {
            items: 5,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                775: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1170: {
                    items: 5
                }
            }
        } ), e( ".product-item-4" ).owlCarousel( {
            items: 4,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 2
                },
                775: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1170: {
                    items: 4
                }
            }
        } ), e( ".product-item-3" ).owlCarousel( {
            items: 3,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                775: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1170: {
                    items: 3
                }
            }
        } ), e( ".product-item-2" ).owlCarousel( {
            items: 2,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                775: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        } ), e( ".product-item-1" ).owlCarousel( {
            items: 1,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                775: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1170: {
                    items: 1
                }
            }
        } ), e( ".blog-carousel" ).owlCarousel( {
            items: 4,
            loop: !1,
            margin: 30,
            autoplay: !1,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !0,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                775: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        } ), e( ".testimonials-carousel" ).owlCarousel( {
            items: 1,
            loop: !0,
            margin: 0,
            slideSpeed: 300,
            autoplay: !0,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !1,
            navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
            nimateIn: "fadeIn",
            animateOut: "fadeOut"
        } ), e( ".brand-logo-carousel" ).owlCarousel( {
            items: 7,
            loop: !0,
            margin: 0,
            autoplay: !0,
            autoplayHoverPause: !0,
            singleItem: !0,
            dots: !1,
            nav: !1,
            transitionStyle: !0,
            responsive: {
                0: {
                    items: 1
                },
                250: {
                    items: 1
                },
                320: {
                    items: 2
                },
                480: {
                    items: 3
                },
                775: {
                    items: 4
                },
                991: {
                    items: 6
                },
                1170: {
                    items: 7
                }
            }
        } );
        var i = e( ".product-image-slider" ),
            a = e( ".product-image-slider-thumbnails" );
        i.slick( {
            dots: !1,
            fade: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            asNavFor: a,
            infinite: !1
        } ), a.slick( {
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: i,
            dots: !1,
            centerMode: !1,
            focusOnSelect: !0,
            infinite: !1
        } ), e( ".product-image-slider-thumbnails" ).find( "button" ).hasClass( "slick-arrow" ) ? ( e( ".product-image-slider-thumbnails" ).css( "padding-left", "30px" ), e( ".product-image-slider-thumbnails" ).css( "padding-right", "30px" ) ) : ( e( ".product-image-slider-thumbnails" ).css( "margin-left", "-7px" ), e( ".product-image-slider-thumbnails" ).css( "margin-right", "-7px" ) );
    } ),
        function () {
            var e, i = jQuery;
            i( document ).ready( function () {
                void 0 == i( "#rev_slider_1078_1" ).revolution ? revslider_showDoubleJqueryError( "#rev_slider_1078_1" ) : e = i( "#rev_slider_1078_1" ).show().revolution( {
                    sliderType: "standard",
                    jsFileLocation: "../plugins/rev_slider/js/",
                    sliderLayout: "fullwidth",
                    dottedOverlay: "none",
                    delay: 5e3,
                    touchenabled: "on",
                    swipe_velocity: .7,
                    swipe_min_touches: 1,
                    swipe_max_touches: 1,
                    drag_block_vertical: !1,
                    keyboardNavigation: "on",
                    fullWidth: "on",
                    fullScreen: "off",
                    navigation: {
                        keyboardNavigation: "off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        mouseScrollReverse: "default",
                        onHoverStop: "off",
                        arrows: {
                            style: "zeus",
                            enable: !0,
                            hide_onmobile: !0,
                            hide_under: 1025,
                            hide_onleave: !1,
                            tmp: "",
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: !0,
                            hide_onmobile: !1,
                            hide_over: 1025,
                            style: "metis",
                            hide_onleave: !1,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 20,
                            space: 10,
                            tmp: ""
                        }
                    },
                    viewPort: {
                        enable: !0,
                        outof: "pause",
                        visible_area: "80%",
                        presize: !1
                    },
                    hideTimerBar: "on",
                    responsiveLevels: [ 1240, 1024, 778, 480 ],
                    visibilityLevels: [ 1240, 1024, 778, 480 ],
                    gridwidth: [ 1240, 1024, 778, 480 ],
                    gridheight: [ 600, 600, 500, 400 ],
                    lazyType: "smart",
                    shadow: 0,
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    hideThumbsOnMobile: "off",
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: !1
                    }
                } );
            } );
        }();
}( jQuery );