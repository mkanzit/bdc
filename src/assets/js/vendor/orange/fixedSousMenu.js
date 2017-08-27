/**
 * fixedSousMenu class
 */
Orange.FixedSousMenu = {
    init: function () {
        var viewportWidth = jQuery(window).width(),
                sousMenu = $('.sous-menu');
        if ( sousMenu.length > 0) {
            var p = sousMenu;
            var position = p.position();
            var $window = $(window);
            jQuery(document).scroll(function () {
                //////////////////////////////////
                if ($(this).scrollTop() > position.top) {
                    sousMenu.addClass("sous-menu--fix");
                } else {
                    sousMenu.removeClass("sous-menu--fix");
                }
                //////////////////////////////////
                $('.sous-menu ul.sous-menu__links li').each(function () {
                    $ids = $(this).find('a').attr('href');
                    $lamCible = $($ids);
                    if ($lamCible.length) {
                        var distance = $lamCible.offset().top;
                        var distanceheight = $lamCible.offset().top + $lamCible.height()+40;
                        var $windowscrollTop = $window.scrollTop() + $('.sous-menu').height() + $('.header').height()+1;
                        if (($windowscrollTop >= distance) && ($windowscrollTop <= distanceheight)) {
                            $(this).addClass('active');
                        }else{
                            $(this).removeClass('active');
                        }
                    }

                });
            });               
            $('body').on('click', '.sous-menu ul.sous-menu__links li a', function (e) {    
                $id = $(this).attr('href'); // #idelement
                $cible = $($id); //getelement
                if($cible.css('padding-top')==='0px'){
                    $top = $cible.offset().top - $('.sous-menu').height() - $('.header').height() -30; 
                }else{
                    $top = $cible.offset().top - $('.sous-menu').height() - $('.header').height(); 
                }
                
                $('html, body').animate({
                    scrollTop: $top
                }, 1000);        
                e.preventDefault();
            });
            $('body').on('change', '.sous-menu-select', function (e) { 
                $index = $(this).prop('selectedIndex'); // #idelement
                $cibleId = $('.sous-menu ul.sous-menu__links li:eq('+$index+') a').attr('href');
                $cible = $($cibleId);
                if ($cible.length){
                    
                   if($cible.css('padding-top')==='0px'){
                    $top = $cible.offset().top - $('.sous-menu').height() - $('.header').height() -30; 
                }else{
                    $top = $cible.offset().top - $('.sous-menu').height() - $('.header').height(); 
                }
                    
                    $('html, body').animate({
                        scrollTop: $top
                    }, 1000);
                    e.preventDefault();
                }
                e.preventDefault();
            });
        }
    }
}; 