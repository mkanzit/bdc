/**
 * ScrollTo class
 */
Orange.ScrollTo = {
    init: function (element) {
        var $elementTo = element,
            $top = $elementTo.offset().top - $('.header').height() ;               
                $('html, body').animate({
                    scrollTop: $top
                }, 1000);        
    }
}; 