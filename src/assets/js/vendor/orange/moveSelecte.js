/**
 * flexslider class
 */
Orange.MoveSelected = {
    init: function () {
        var that = this;        
         $('body').on('click', '.js-moveToRight', function (e) { 
             to=$(this).parents('.select-multiple-item').find('.to');
             from=$(this).parents('.select-multiple-item').find('.from');            
             that.moveSelected(from, to);
             e.preventDefault();
             
         });
        $('body').on('click', '.js-moveToLeft', function (e) { 
             to=$(this).parents('.select-multiple-item').find('.to');
             from=$(this).parents('.select-multiple-item').find('.from');
             that.moveSelected(to, from);
             e.preventDefault();
         });
          var $widthDvice = $(window).width();
          if ($widthDvice < 768) {
             
              
            $('.js-moveToRight').each(function (index) {
              $leftlink=$(this).parents('.controls-select-multiple').find('.js-moveToLeft');
               $(this).insertAfter($leftlink);
            });
              
              
          }
    },
    moveSelected: function (from, to) {
       from.find('option:selected').remove().appendTo(to);
    }
}; 