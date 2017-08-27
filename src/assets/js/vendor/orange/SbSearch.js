/**
 * flexslider class
 */
Orange.SbSearch = {
    init: function () {
        $('body').on('click', '#click-delete', function (e) {
            $('.sb-search-submit-header').addClass('inactive');
            $('.sb-search-submit-header').attr( "disabled", "disabled" );
            $('#input-delete').val('');   
            e.preventDefault();
        });
        $('body').on('keyup', '#sb-submit', function (e) {    
            if ($(this).val() === '') {
                $('.sb-search-submit').addClass('inactive');
                $('.sb-search-submit').attr( "disabled", "disabled" );
            }
            else {
                $('.sb-search-submit').removeClass('inactive');
                $('.sb-search-submit').removeAttr('disabled');
            }
        });
        $('body').on('keyup', '#input-delete', function (e) {  
            if ($(this).val() === '') {
                $('.sb-search-submit-header').addClass('inactive');
                $('.sb-search-submit-header').attr( "disabled", "disabled" );
            } else {
                $('.sb-search-submit-header').removeClass('inactive');
                $('.sb-search-submit-header').removeAttr('disabled');
            }


        });

    }

}; 