(function ($) {
	"use strict";
    jQuery(document).ready(function($)
	{
	
      var rtlEnable = $('html').attr('dir');
      var sliderRtlValue = !(typeof rtlEnable === 'undefined' || rtlEnable === 'ltr') ;
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

            /**-------------------------
             * Padres y padrinos Slider
             * -----------------------*/

      $('.member-slider').slick(
			{
            rtl: sliderRtlValue,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            dots: false,
            arrows:false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

            /**-------------------------
             * Logos Slider
             * -----------------------*/

            $('.logo-slider').slick({
             rtl: sliderRtlValue,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            dots: false,
            arrows:false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 415,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
           
            });


         
        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        
        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        
        /*------------------------------
        smoth achor effect
        ------------------------------*/
        $(document).on('click','#primary-menu li a', function (e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0,1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass('active').siblings().removeClass('active');
            }
           
        });
      
       
        
        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
           bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
           bodyOvrelay.addClass('active');
        });

    });//end of document ready functino 

    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       
    });
           
    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

}(jQuery));	
