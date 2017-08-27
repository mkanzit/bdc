/**
 * MainMenu class
 */
Orange.MainMenu = {
    init: function () {
        var that = this;
        var $widthDvice = $(window).width();
        if ($widthDvice < 768) {
            $direction = 'left';
            $('body').on('click', '.main-menu > li.dropdown > a', function (e) { 
                var $dataTarget = $(this).attr('data-target');
                var $domtarget = $('.' + $dataTarget);
                $domtarget.toggle('slide', {direction: $direction}, 500);
                e.preventDefault();
            });
            $('body').on('click', '.close-ssmenu', function (e) { 
                $(this).toggleClass("close-ssmenu-toggle");
                $domtarget = $(this).parents('.ssmenu');
                $domtarget.toggle('slide', {direction: $direction}, 500);
                 e.preventDefault();
            });
        } else {
            $direction = 'up';
            $('body').on('click', '.main-menu > li.dropdown > a', function (e) { 
                var $dataTarget = $(this).attr('data-target');
                var $domtarget = $('.' + $dataTarget);
                $('.ssmenu').not($domtarget).hide();
                Orange.ToggleSearchBar.init('.sb-search-link', true);
                $domtarget.toggle('slide', {direction: $direction}, 500);
                e.preventDefault();
            });
            $('body').on('click', '.close-ssmenu', function (e) { 
                $(this).toggleClass("close-ssmenu-toggle");
                $domtarget = $(this).parents('.ssmenu');
                $domtarget.toggle('slide', {direction: $direction}, 500);
                 e.preventDefault();
            });
        }
        if ($widthDvice < 960) {
            $('.n3-title--alt').click(function (event) {
                if($(this).next('ul').length>0){
                event.preventDefault();
                $(this).toggleClass("open-toggle-title");
                $(this).next('ul').toggle();
            }
            });

        }
        if ($widthDvice < 768) {
            $('.navbar-toggle').click(function () {
                $(this).toggleClass('navbar-toggle-open');
                $('#navbar').toggle();
                $('.ssmenu-items .ssmenu:visible').hide();
            });
            $('.headband-title').click(function (e) {
                e.preventDefault();
                $(this).parents('.ssmenu:first').toggle('slide', {direction: 'left'}, 500);
                $('#navbar').show();
            });
        }
    }

}; 