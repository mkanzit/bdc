/**
 * TableCheck class
 */



Orange.TableCheck = {
    init: function () {  
      
      this.Checkall('.chackallinput',  '.container');
      this.Checkall('.chackall',  '.container');
      
//        $('body').on('click', '.table-liste--check .form-type-checkbox', function (e) { 
//            if ($(this).find('input').is(":checked")) {
//                $(this).parents('tr').addClass('selected');
//            } else {
//                $(this).parents('tr').removeClass('selected');
//            }
//        });
//        $('body').on('click', '.chackall', function (e) { 
//            $('.table-facture input:checkbox:not(:disabled)').prop('checked', this.checked).trigger('change');
//        });
//
//        $('body').on('click', '.table-facture input:checkbox', function (e) { 
//            if ($('.table-facture input:checkbox:checked').length === $('.table-facture input:checkbox').length) {
//                $('.chackall').prop('checked', true);
//            } else {
//                $('.chackall').prop('checked', false);
//            }
//        });
//        
//        
//        
//        
//        $('body').on('click', '.chackallinput', function (e) { 
//          var $attrchackall=$(this).attr("data-chackall");
//          var $this=this;
//          $('input:checkbox').each(function (i) { 
//           if ($(this).attr("data-chackall")===$attrchackall){
//                 $(this).prop('checked', $this.checked).trigger('change');
//                 }
//          });
//        });
//
//        $('body').on('click', 'input[data-chackall]:checkbox', function (e) {      
//              if ($('input[data-chackall]:checkbox:checked').length === $('input[data-chackall]:checkbox').length) {
//                $('input[data-chackall].chackallinput').prop('checked', true);
//            } else {
//                $('input[data-chackall].chackallinput').prop('checked', false);
//            }
//       
//            
//        });
//        
//        
         
    },
  Checkall: function (elementHandler,  blocContainer) {
    $('body').on('click', 'input:checkbox:not('+elementHandler+')', function (e) {
      parent = $(this).closest(blocContainer);
      if ($(parent).find(elementHandler).length > 0) {
        if ($(parent).find('input:checkbox:checked:not('+elementHandler+')').length === $(parent).find('input:checkbox:not('+elementHandler+')').length) {
         $(parent).find(elementHandler).prop('checked', true);
        } else {
          $(parent).find(elementHandler).prop('checked', false);
        }
      }
    });
    $(document).on('click', elementHandler, function () {
      parent = $(this).closest(blocContainer);
      $(parent).find('input:checkbox:not(:disabled)').prop('checked', this.checked).trigger('change');
    }
            
    );
  }
};
