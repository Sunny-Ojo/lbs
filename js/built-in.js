        var revapi139,
            tpj;
        var $ = jQuery.noConflict();
        (function() {
            if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
            else onLoad();

            function onLoad() {
                if (tpj === undefined) {
                    tpj = jQuery;
                    if ("off" == "on") tpj.noConflict();
                }
                if (tpj("#rev_slider_139_1").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_139_1");
                } else {
                    revapi139 = tpj("#rev_slider_139_1").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "include/rs-plugin/js/",
                        sliderLayout: "fullscreen",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                touchOnDesktop: "off",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            },
                            arrows: {
                                style: "uranus",
                                enable: true,
                                hide_onmobile: false,
                                hide_under: 0,
                                hide_onleave: false,
                                tmp: '',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 15,
                                    v_offset: 0
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 15,
                                    v_offset: 0
                                }
                            },
                            bullets: {
                                enable: true,
                                hide_onmobile: false,
                                style: "bullet-bar",
                                hide_onleave: false,
                                direction: "horizontal",
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 30,
                                space: 5,
                                tmp: ''
                            }
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [868, 768, 960, 720],
                        lazyType: "none",
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        fullScreenAutoWidth: "on",
                        fullScreenAlignForce: "on",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "0px",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                    revapi139.on("revolution.slide.onloaded", function(e) {
                        revapi139.addClass("tiny_bullet_slider");
                    });
                }; /* END OF revapi call */
            }; /* END OF ON LOAD FUNCTION */
        }()); /* END OF WRAPPING FUNCTION */

        jQuery(window).on('load', function() {
            $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
                default_offset_pct: 0.5
            });
        });