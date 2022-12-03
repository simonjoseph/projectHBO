(function($) {
    
    "use strict";

    /* ----- Preloader ----- */
    function preloaderLoad() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function() {
            $("#preloader").hide();
        });
    }

    /* ----- Navbar Scroll To Fixed ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    /** Main Menu Custom Script Start **/
    $(document).on('ready', function() {
        $("#respMenu").aceResponsiveMenu({
            resizeWidth: '768', // Set the same in Media query
            animationSpeed: 'fast', //slow, medium, fast
            accoridonExpAll: false //Expands all the accordion menu on click
        });
    });

    function mobileNavToggle() {
        if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
            var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
            subNavToggler.on('click', function () {
                var Self = $(this);
                Self.parent().parent().children('.sub-menu').slideToggle();
                return false;
            });

        };
    }

    /* ----- Tags Bar Code for job list 1 page ----- */
    $('.tags-bar > span i').on('click', function(){
        $(this).parent().fadeOut();
    });

    /* ----- This code for menu ----- */
    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = $('.header-navigation').next().offset().top;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
    });
    
    $(".mouse_scroll").on('click', function() {
        $('html, body').animate({
            scrollTop: $("#feature-property, #property-city").offset().top
        }, 1000);
    });
    /** Main Menu Custom Script End **/


    function makeTimer() {
    //  var endTime = new Date("20 Dec 2021 9:56:00 GMT+01:00");  
        var endTime = new Date("20 Dec 2021 9:56:00 GMT+01:00");      
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));  
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $(".days").html(days + "<span>Days</span>");
        $(".hours").html(hours + "<span>Hours</span>");
        $(".minutes").html(minutes + "<span>Minutes</span>");
        $(".seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 1000);
    
    /* ----- Blog innerpage sidebar according ----- */
    $(document).on('ready', function() {
        $('.collapse').on('show.bs.collapse', function () {
            $(this).siblings('.card-header').addClass('active');
        });
        $('.collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.card-header').removeClass('active');
        });
        
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /* ----- Menu Cart Button Dropdown ----- */
    $(document).on('ready', function() {
        // Loop through each nav item
        $('.cart_btn').children('ul.cart').children('li').each(function(indexCount){
            // loop through each dropdown, count children and apply a animation delay based on their index value
            $(this).children('ul.dropdown_content').children('li').each(function(index){
                // Turn the index value into a reasonable animation delay
                var delay = 0.1 + index*0.03;
                // Apply the animation delay
                $(this).css("animation-delay", delay + "s")
            });
        });
    });

    $('.selectpicker').selectpicker();

    const cd = new Date().getFullYear() + 1
    $('#countdown').countdown({
        year: cd
    });
    
    /* ----- fact-counter ----- */
    function counterNumber() {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    }
    $('.circlechart').circlechart(); // Initialization

    /* ----- Mobile Nav ----- */
    $(function() {
        $('nav#menu').mmenu();
    });
    
    $(function () {
      $("#switcher-id").change(function () {
        if ($(this).is(":checked")) {
          $(".second-switch-content").show();
          $(".first-switch-content").hide();
        } else {
          $(".second-switch-content").hide();
          $(".first-switch-content").show();
        }
      });
    });
    
    /* ----- Candidate SIngle Page Price Slider ----- */
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 50,
            max: 150,
            values: [ 50, 120 ],
            slide: function( event, ui ) {
                $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1) );
    });

    /* ----- Employee List v1 page range slider widget ----- */
    $(document).on('ready', function() {
        $(".slider-range").slider({
            range: true,
            min: 1000,
            max: 20000,
            values: [ 5000, 15000 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( ui.values[ 0 ] );
                $( ".amount2" ).val( ui.values[ 1 ] );
            }
        });
        $(".amount").change(function() {
            $(".slider-range").slider('values',0,$(this).val());
        });
        $(".amount2").change(function() {
            $(".slider-range").slider('values',1,$(this).val());
        });
    });

    /* ----- Pricing Range Slider ----- */
    $(document).on("ready", function() {
        $(".range-example-km").asRange({
          limit: false,
          min: 0,
          max: 150,
          range: false,
          step: 1,
          value: 50,
          format: function(value) {
              return value + ' km';
          }
        });
        $(".range-uilayouts").asRange({
            limit: false,
            max: 1000,
            min: 0,
            range: true,
            step: 1,
              format: function(value) {
                return '$' + value;
              }
        });
    });

    /* ----- Progress Bar ----- */
    if($('.progress-levels .progress-box .bar-fill').length){
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }

    // Display the progress bar calling progressbar.js
    $('.progressbar1').progressBar({
        shadow : false,
        percentage : false,
        animation : true,
        barColor : "#ff5a5f",
    });
    $('.progressbar2').progressBar({
        shadow : false,
        percentage : false,
        animation : true,
        barColor : "#ff5a5f",
    });
    $('.progressbar3').progressBar({
        shadow : false,
        percentage : false,
        animation : true,
        animateTarget : true,
        barColor : "#ff5a5f",
    });
    $('.progressbar4').progressBar({
        shadow : false,
        percentage : false,
        animation : true,
        animateTarget : true,
        barColor : "#ff5a5f",
    });
    $('.progressbar5').progressBar({
        shadow : false,
        percentage : false,
        animation : true,
        animateTarget : true,
        barColor : "#ff5a5f",
    });

    /* ----- Background Parallax ----- */
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(document).on('ready',function(){
        jQuery(window).stellar({ 
            horizontalScrolling: false,
            hideDistantElements: true,
            verticalScrolling: !isMobile.any(),
            scrollProperty: 'scroll',
            responsive: true
        });          
    });

    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type:"image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type:"image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    };

    $('#myTab a,#myTab2 a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    /* ----- Wow animation ----- */
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset: 0
        });
        wow.init();

        new WOW().init();
        $('#show_advbtn, #show_advbtn2').on('click', function(){
            new WOW().init();
        })
    }
    
    /* ----- Date & time Picker ----- */
    if($('.datepicker').length){
        $('.datepicker').datetimepicker();
    }


    // Custom Search Dropdown Script Start
    var showSuggestions = function() {
      $( ".top-search form.form-search .box-search" ).each(function() {
          $( "form.form-search .box-search input" ).on('focus', (function() {
              $(this).closest('.boxed').children('.overlay').css({
                  opacity: '1',
                  display: 'block'
              });
              $(this).parent('.box-search').children('.search-suggestions').css({
                  opacity: '1',
                  visibility: 'visible',
                  top: '77px'
              });
          }));
          $( "form.form-search .box-search input" ).on('blur', (function() {
              $(this).closest('.boxed').children('.overlay').css({
                  opacity: '0',
                  display: 'none'
              });
              $(this).parent('.box-search').children('.search-suggestions').css({
                  opacity: '0',
                  visibility: 'hidden',
                  top: '100px'
              });
          }));
      });

      $( ".top-search.style1 form.form-search .box-search" ).each(function() {
          $( "form.form-search .box-search input" ).on('focus', (function() {
              $(this).closest('.boxed').children('.overlay').css({
                  opacity: '1',
                  display: 'block'
              });
              $(this).parent('.box-search').children('.search-suggestions').css({
                  opacity: '1',
                  visibility: 'visible',
                  top: '50px'
              });
          }));
      });
    }; // Toggle Location
    $(function() {
      showSuggestions();
    });

    // Custom Shop item add Option increase decrease home 3
    $(function() {
      (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity-arrow-minus");
        var $quantityArrowPlus = $(".quantity-arrow-plus");
        var $quantityNum = $(".quantity-num");
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        function quantityMinus() {
          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }
        function quantityPlus() {
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      })();
    });
    

    /* ----- Home Maximage Slider ----- */
    if($('#maximage').length){
        $('#maximage').maximage({
            cycleOptions: {
                fx:'fade',
                speed: 500,
                timeout: 20000,
                prev: '#arrow_left',
                next: '#arrow_right'
            },
            onFirstImageLoaded: function(){
                jQuery('#cycle-loader').hide();
                jQuery('#maximage').fadeIn('fast');
            }
        });        
        // Helper function to Fill and Center the HTML5 Video
        jQuery('#html5video').maximage('maxcover');
            
        // To show it is dynamic html text
        jQuery('.in-slide-content').delay(2000).fadeIn();
    }

    /* ----- Slick Slider For Testimonial ----- */
    if($('.tes-for').length){
        $('.tes-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          autoplay: true,
          autoplaySpeed: 2000,
          asNavFor: '.tes-nav'
        });
        $('.tes-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.tes-for',
          dots: false,
          arrows: false,
          centerPadding: '1px',
          centerMode: true,
          focusOnSelect: true
        });
    }

    /* ----- Swiper Slider ----- */
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /*  Testimonial-Slider-Owl-carousel  */
    if($('.testimonial_slider_home1').length){
        $('.testimonial_slider_home1').owlCarousel({
            loop:true,
            margin:0,
            dots:true,
            nav:false,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="fa fa-arrow-left"></i>',
              '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1280: {
                    items: 2
                }
            }
        })
    }


    /*  Popular-Listing-Slider  */
    if($('.popular_listing_slider1').length){
        $('.popular_listing_slider1').owlCarousel({
            loop:true,
            margin:0,
            dots:true,
            nav:false,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="fa fa-arrow-left"></i>',
              '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1280: {
                    items: 4
                }
            }
        })
    }

    /*  Popular-Listing-Slider  */
    if($('.feature_product_slider').length){
        $('.feature_product_slider').owlCarousel({
            loop:true,
            margin:10,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1280: {
                    items: 5
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if($('.instagram_slider').length){
        $('.instagram_slider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:false,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                320:{
                    items:1,
                    center: false
                },
                375:{
                    items:2,
                    center: false
                },
                520:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if($('.listing_item_car_grid_slider').length){
        $('.listing_item_car_grid_slider').owlCarousel({
            loop:true,
            margin:30,
            center:true,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                480:{
                    items:1,
                    center: true
                },
                600: {
                    items: 1,
                    center: true
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2,
                    center: true
                },
                1200: {
                    items: 3,
                    center: true
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if($('.listing_item_1grid_slider').length){
        $('.listing_item_1grid_slider').owlCarousel({
            // animateOut: "slideOutDown",
            // animateIn: "slideInDown",
            autoplay: false,
            autoplayHoverPause:false,
            center:false,
            dots:true,
            loop:true,
            margin:0,
            nav:true,
            rtl:false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Shop-Item-2-Grid-Slider-Owl-carousel  */
    if($('.listing_item_2grid_slider').length){
        $('.listing_item_2grid_slider').owlCarousel({
            loop:true,
            margin:30,
            center:false,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if($('.listing_item_3grid_slider').length){
        $('.listing_item_3grid_slider').owlCarousel({
            loop:true,
            margin:30,
            center:true,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Shop-Item-4-Grid-Slider-Owl-carousel  */
    if($('.listing_item_4grid_slider').length){
        $('.listing_item_4grid_slider').owlCarousel({
            loop:true,
            margin:15,
            dots:true,
            nav:true,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                480:{
                    items:1,
                    center: true
                },
                600: {
                    items: 1,
                    center: true
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    /*  Shop-Item-5-Grid-Slider-Owl-carousel  */
    if($('.listing_item_5grid_slider').length){
        $('.listing_item_5grid_slider').owlCarousel({
            loop:true,
            margin:15,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Shop-Item-6-Grid-Slider-Owl-carousel  */
    if($('.listing_item_6grid_slider').length){
        $('.listing_item_6grid_slider').owlCarousel({
            loop:true,
            margin:15,
            center:false,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                630: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        })
    }

    /*  Shop-Item-7-Grid-Slider-Owl-carousel  */
    if($('.listing_item_7grid_slider').length){
        $('.listing_item_7grid_slider').owlCarousel({
            loop:true,
            margin:15,
            center:false,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 5
                },
                1500: {
                    items: 7
                }
            }
        })
    }

    /*  Shop-Item-7-Grid-Slider-Owl-carousel  */
    if($('.listing_item_8grid_slider').length){
        $('.listing_item_8grid_slider').owlCarousel({
            loop:true,
            margin:30,
            center:false,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 7
                },
                1500: {
                    items: 8
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if($('.recent_property_slider_home5').length){
        $('.recent_property_slider_home5').owlCarousel({
            loop:true,
            margin:30,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if($('.shop_slider_col6').length){
        $('.shop_slider_col6').owlCarousel({
            loop:true,
            margin:30,
            dots:true,
            nav:false,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1280: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1440: {
                    items: 6
                }
            }
        })
    }

    /*  Single-Slider-Owl-carousel  */
    if($('.single_product_slider').length){
        $('.single_product_slider').owlCarousel({
            // animateIn: 'fadeIn',
            loop:true,
            margin:30,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Sing-Slider-Owl-carousel  */
    if($('.single_page6_single_slider').length){
        $('.single_page6_single_slider').owlCarousel({
            center:true,
            loop:true,
            margin:30,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                480:{
                    items:1
                },
                520:{
                    items:1
                },
                768: {
                    items: 1,
                    center:true
                },
                992: {
                    items: 2,
                    center:true
                },
                1200: {
                    items: 2,
                    center:true
                }
            }
        })
    }

    /*  Sing-Slider-Owl-carousel  */
    if($('.bestseller_sidebar_slider').length){
        $('.bestseller_sidebar_slider').owlCarousel({
            loop:true,
            margin:30,
            dots:true,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
              '<i class="flaticon-left-arrow"></i>',
              '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.banner-style-one').length) {
        $('.banner-style-one').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: true,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: false
        });
        $('.banner-carousel-btn .left-btn').on('click', function() {
            $('.banner-style-one').trigger('next.owl.carousel');
            return false;
        });
        $('.banner-carousel-btn .right-btn').on('click', function() {
            $('.banner-style-one').trigger('prev.owl.carousel');
            return false;
        });
    }

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToHome').fadeIn();
            } else {
                $('.scrollToHome').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToHome').on('click',function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }
    
    /* ----- Mega Dropdown Content ----- */
    $(document).on('ready', function(){
        $("#show_advbtn, #show_advbtn2").on('click',function(){
            $("body").addClass("mobile_ovyh");
        });
        $("#show_advbtn, #show_advbtn2").on('click',function(){
            $("body").removeClass("mobile_ovyh");
        });
        $("#prncgs").on('click',function(){
            $(".dd_content2").toggle();
        });
        $("#prncgs2, #prncgs3, #prncgs4").on('click',function(){
            $(".dd_content2").toggle();
        });
        $(".drop_btn").on('click',function(){
            $(".drop_content").toggle();
        });
        $(".drop_btn2").on('click',function(){
            $(".drop_content2").toggle();
        });
        $(".drop_btn3").on('click',function(){
            $(".drop_content3").toggle();
        });
        $(".drop_btn4").on('click',function(){
            $(".drop_content4").toggle();
        });
        $(".drop_btn5 ").on('click',function(){
            $(".drop_content5 ").toggle();
        });
        $(".drop_btn6").on('click',function(){
            $(".drop_content6").toggle();
        });

        $(".filter_open_btn").on('click', function(){
            $(".sidebar_content_details.style3").addClass("sidebar_ml0");
        });

        $(".filter_closed_btn").on('click', function(){
            $(".sidebar_content_details.style3").removeClass("sidebar_ml0");
        });

        $(".filter_open_btn").on('click', function(){
            $("body").addClass("body_overlay");
        });

        $(".filter_closed_btn").on('click', function(){
            $("body").removeClass("body_overlay");
        });

        $(".overlay_close").on('click', function(){
            $(".white_goverlay").toggle(500);
        });

        $(".mega_tags_dropdown").on('click', function(){
            $(".tag_dropdown_content").toggle(500);
        });
        
        $('.sticky-nav-tabs-container li').on('click', function(){
            $('.sticky-nav-tabs-container li').removeClass('active');
            $(this).addClass('active');
        });
        
    });

    $(document).on("ready",function(){
        // $('.sidebar_switch').on('click', function() {
        //     $('.siderbar_left_home').toggle("Pulse");
        // });
        $('.sidebar_switch').on('click', function() {
            $('.siderbar_left_home').addClass("active");
        });
        $('.sidebar_close_btn').on('click', function() {
            $('.siderbar_left_home').removeClass("active");
        });
        $(".sidebar_switch").on('click', function(){
            $(".wrapper").addClass("body_overlay2");
        });

        $(".sidebar_switch_close").on('click', function(){
            $(".wrapper").removeClass("body_overlay2");
        });
    });

/* ======
   When document is ready, do
   ====== */
    $(document).on('ready', function() {
        // add your functions
        navbarScrollfixed();
        scrollToTop();
        wowAnimation();
        mobileNavToggle();

        
        // extending for text toggle
        $.fn.extend({
            toggleText: function(a, b){
                return this.text(this.text() == b ? a : b);
            }
        });
        if ($('.showFilter').length) {
            $('.showFilter').on('click', function () {
                $(this).toggleText('Show Filter', 'Hide Filter');
                $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended sidebarClosed');
                $('.listing_toogle_sidebar.sidenav').toggleClass('opened');
                $('.body_content').toggleClass('translated');
            });
        }

        $.fn.extend({
            toggleText2: function(a, b){
                return this.text(this.text() == b ? a : b);
            }
        });
    
        if ($('.showBtns').length) {
            $('.showBtns').on('click', function() {
                $(this).toggleText2('Show Filter', 'Hide Filter');
                $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended2 sidebarClosed2');
                $('.sidebar_content_details').toggleClass('is-full-width');
            });
        }

    });
    
/* ======
   When document is loading, do
   ====== */
    // window on Load function
    $(window).on('load', function() {
        // add your functions
        counterNumber();
        preloaderLoad();
        
    });
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });


})(window.jQuery);