/**
 * flexslider class
 */
Orange.ColorBox = {
    init: function () {
        var $widthDvice = $(window).width();
        var $this = this;
        if ($('#subscribe').length > 0) {
            if ($widthDvice < 767) {
                $.colorbox({inline: true, href: "#subscribe", width: '95%'});
            } else {
                $.colorbox({inline: true, href: "#subscribe"});
            }
        }
        if ($widthDvice < 767) {
            cboxOptions = {
                inline: true,
                width: '95%'
            };
        } else {
            cboxOptions = {
                inline: true
            };
        }
        if ($('.js-popup-open').length > 0) {
            $(".js-popup-open").colorbox(cboxOptions);
        }
        if ($('.js-popup-open-map').length > 0) {
            $(".js-popup-open-map").colorbox({
                inline: true,
                onComplete:function(){
                  window.dispatchEvent(new Event('resize'));
                  $('#address').val($('#adresse-input').val() + " " + $('#Pays').val() );
              }  
            });
        }
        $('.form-confirme').submit(function (e) {
            $.colorbox({html:$($(this).attr("action"))});
             e.preventDefault();
        });
        $('.close-pupup').click(function (e) {
            //$.colorbox({html:$($(this).attr("action"))});
            $.colorbox.close(); 
             e.preventDefault();
        });
        
    }
};