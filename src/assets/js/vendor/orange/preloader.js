/**
 * Preloader class
 */
Orange.Preloader = {
    init: function () {
        if ($('.preloader').length) {
            $('.preloader').delay(500).fadeOut(500);
        }
    },
    AddPreloader: function (stard, dom) {
        //some validations
        if (stard === false) {
           dom.find('.addpreloader').remove();
        }else{
            dom.prepend('<span class="addpreloader"></span>');
            dom.css('position','relative');
        }
        return true; 
    }

}; 