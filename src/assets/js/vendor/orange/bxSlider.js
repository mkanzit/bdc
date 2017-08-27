/**
 * BxSlider class
 */
Orange.BxSlider = {
    init: function () {

        if ($('.bxslider > li').length > 0) {
            var $autoDirection = 'next';
            if ($('html').attr('dir') === "rtl") {
                $autoDirection = 'prev';
            }
            
            $('.bxslider').each(function (i) {
        var $minSlides = '1';
        var $maxSlides = '1';
        if ($(this).hasClass('iscarousel')) {
          var slider = $(this).bxSlider({
             infiniteLoop: false,
            nextText: '<i class="icon ic-right"></i>',
            prevText: '<i class="icon ic-left"></i>',
            minSlides: 1,
            maxSlides: 3,
            slideWidth: 310,
            auto: false,
            autoDirection: $autoDirection,
            direction: "rtl",
            pager: ($(this).children().length < 2) ? false : true,
            touchEnabled: ($(this).children().length < 2) ? false : true,
            onSliderLoad: function () {
              $(".block-slider").css("visibility", "visible");
            }
          });

        } else {
          var slider2 = $(this).bxSlider({
            nextText: '<i class="icon ic-right"></i>',
            prevText: '<i class="icon ic-left"></i>',
            auto: ($(this).children().length < 2) ? false : true,
            autoDirection: $autoDirection,
            direction: "rtl",
            pager: ($(this).children().length < 2) ? false : true,
            touchEnabled: ($(this).children().length < 2) ? false : true,
            onSliderLoad: function () {
              $(".block-slider").css("visibility", "visible");
            }
          });
        }

            });
        $(window).on('orientationchange', function(){
            setTimeout(function(){
                $('.bxslider li').height( $('.bx-viewport').innerHeight() );
            }, 500);
        });
    }
    }
};
