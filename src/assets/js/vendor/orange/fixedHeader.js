/**
 * flexslider class
 */
Orange.FixedHeader = {
    init: function () {
        if($('.page-phenix').length<1 ){
            var viewportWidth = jQuery(window).width(),
                nav = $('.header');
            if (viewportWidth > 767) {
              
                if ($(this).scrollTop() > 40) {
                    nav.addClass("header-fixed");
                    $('.js-compte').insertAfter('.sb-search-link');
                } else {
                    nav.removeClass("header-fixed");
                    $('.js-compte').appendTo('.item-compte-login');
                }
                jQuery(document).scroll(function () {
                     
                    if ($(this).scrollTop() > 40) {
                        nav.addClass("header-fixed");
                        $('.js-compte').insertAfter('.sb-search-link');
                    } else {
                        nav.removeClass("header-fixed");
                        $('.js-compte').appendTo('.item-compte-login');
                    }
                });
            }else{
                 $('.js-cart').insertBefore('.sb-search-link');
                 $('.js-compte').insertBefore('.sb-search-link');
                
            }
        }
    }
}; 