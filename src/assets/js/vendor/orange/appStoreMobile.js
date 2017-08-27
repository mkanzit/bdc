/**
 * AppStoreMobile class
 */
Orange.AppStoreMobile = {
    init: function () {
        function SetSessionStorage() {
            sessionStorage.setItem('useWebsite','true');
        }
        function SetLocalstorage() {
             localStorage.setItem('useWebsite','true');
        }
        var md = new MobileDetect(window.navigator.userAgent);
        device_mobile = md.os();
        //image = "GooglePlay.png";
        //url = "http://store.nokia.com/content/372455";

        /* check devices */
        if (device_mobile === "AndroidOS") {
            image = "175x175bb.jpg";
            //url = "https://play.google.com/store/apps/details?id=com.orange.orangeetmoi";
        }
        if (device_mobile === "iOS") {
            image = "175x175bb.jpg";
            //url = "https://play.google.com/store/apps/details?id=com.orange.orangeetmoi";
        }
        if (device_mobile !== null) {
            if((sessionStorage.getItem('useWebsite')!=='true') && (localStorage.getItem('useWebsite')!=='true')){
            content = '<div class="appbox block color-white"><a class="close"><i class="icon ic-Delete "></i></a><div class="inbl mbm"><a href="http://app.orange.ma" class="inbl"><div  class="inbl mrs"><img src="../imgs/contenus/' + image + '" alt="Orange et Moi"></div><div class="inbl"><h4 class="color-orangeB">Orange et moi</h4><p><small>Installation et utilisation</small></p></div></a></div><p><a href="#" class="closelink">Ne jamais afficher ce message</a></p></div>';
            $('header').prepend(content);
            $('.appbox').slideDown('slow');

            $('body').on('click', ".appbox .close", function () {
                $('.appbox').slideUp();
                SetSessionStorage();
            });
            $('body').on('click', ".appbox .closelink", function () {
                $('.appbox').slideUp();
                SetLocalstorage();
            });
        }
        }
    }

};
