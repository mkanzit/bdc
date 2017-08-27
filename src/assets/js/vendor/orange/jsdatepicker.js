/**
 * flexslider class
 */
Orange.Jsdatepicker = {
    init: function () {
        if ($(".datepicker-icon").length > 0) {
            $(".datepicker-icon").datepicker();
        }
    },
    reset: function () {
        if ($(".datepicker-icon").length > 0) {
            $(".datepicker-icon").removeClass("hasDatepicker").removeAttr('id');
            $(".datepicker-icon").datepicker();
        }
    }
};  