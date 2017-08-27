/**
 * SimpleToggle class
 */
Orange.SimpleToggle = {
    init: function () {
         var $widthDvice = $(window).width();
         var that = this;

        $(document).mouseup(function (e)
        {
            var container = $('.simpletoggle-content.sslist');
            var titleContainer = $('.js-st-title');

            if (!container.is(e.target) && container.has(e.target).length === 0 && !titleContainer.is(e.target) && titleContainer.has(e.target).length === 0){
                 container.slideUp();
                container.prev('.js-st-title').removeClass('open');
            }
        });
        
            $('body').on('click', '.js-st-title', function (e) {  
            if ($(this).next('.simpletoggle-content').length > 0) {
                $(this).next('.simpletoggle-content').slideToggle();
                $(this).toggleClass('open');
                e.preventDefault();
            }
        });
        
        if ($widthDvice < 768) { 
            $('body').on('click', '.js-st-title-mob', function (e) {    
            if ($(this).next('.simpletoggle-content-mob').length > 0) {
                $(this).next('.simpletoggle-content-mob').slideToggle();
                $(this).toggleClass('open');
                e.preventDefault();
            }
        });

        }
        if ($("input:radio[class='js-form-plus-input']").is(":checked")) {
            $('.js-form-plus').slideDown();
        } else {
            $('.js-form-plus').slideUp();
        }   
        $('body').on('change', "input:radio[name='genre']", function (e) {   
            if ($("input:radio[class='js-form-plus-input']").is(":checked")) {
                $('.js-form-plus').slideDown();
            } else {
                $('.js-form-plus').slideUp();
            }
        });
          
        $('body').on('click', '.js-open-editLigne', function (e) {        
            $(this).parents('tr').hide();
            $(this).parents('tr').next('.js-editLigne').show();
            e.preventDefault();
        });   
        $('body').on('click', '.js-editLigne input[type="reset"],.js-editLigne input[type="submit"]', function (e) {     
            $(this).parents('tr.js-editLigne').prev('tr').show();
            $(this).parents('tr').hide();
            e.preventDefault();
        });
        $('body').on('click', '.simpletoggle-close', function (e) {    
            $(this).parents('.simpletoggle-content').prev('.js-st-title').toggleClass('open');
            $(this).parents('.simpletoggle-content').slideToggle();
            if ($(this).attr('type') !== 'reset') {
                e.preventDefault();
            }
        });

         $('body').on('click', '#js-click-picto', function (e) {
            if ($('#js-content-click').length > 0) {
                $(this).toggleClass('open');
                $('#js-content-click').slideToggle();
                e.preventDefault();
            }
        });
        

    },
    toggleEdit: function () {
         $('body').on('click', '.js-header-toggle', function (e) {
            var attr = $(this).attr('data-close');
            $('.is-toggle').not(this).each(function (index) {
                $thisIsToggle =  $(this);
                if (typeof attr !== typeof undefined && attr !== false) {
                    $blocktoopen = $thisIsToggle.attr('data-close');
                }
                else {
                    $blocktoopen = $thisIsToggle.attr('href');
                }
              
                if ($($blocktoopen).length > 0) {
                    $('.js-header-toggle[href="' + $blocktoopen + '"]').removeClass('forclose');
                    $($blocktoopen).slideUp();
                }

            });
                $thisIsToggle = $('.is-toggle').not(this);
                if (typeof attr !== typeof undefined && attr !== false) {
                     $blocktoopen = $thisIsToggle.attr('data-close');
                }
                else {
                     $blocktoopen = $thisIsToggle.attr('href');
                }
                if ($($blocktoopen).length > 0) {
                    $('.js-header-toggle[href="' + $blocktoopen + '"]').removeClass('forclose');
                    $($blocktoopen).slideUp();
                }

            if (typeof attr !== typeof undefined && attr !== false) {
                 $blocktoopen = $(this).attr('data-close');
            }
            else {
                 $blocktoopen = $(this).attr('href');
            }
            if ($($blocktoopen).length > 0) {
                $('.js-header-toggle[href="' + $blocktoopen + '"]').toggleClass('forclose');
                $($blocktoopen).slideToggle();
            }
            e.preventDefault();
        });
    },
    alertClose: function () {
        $('body').on('click', '.alert .close', function (e) {
            $(this).parent('.alert').slideUp();
        });
    }
}; 