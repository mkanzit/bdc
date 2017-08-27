;
(function ($) {
  /* Viewport */
  $(window).on('load resize orientationchane', function () {
    var viewport = $(this).width();
    if (viewport > 768) {
      $('meta[name="viewport"]').attr('content', 'width=1600');
    } else {
      $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
    }
  });

  $(document).ready(function () {
    /* Accordion */
    $('body').on('click', '.js-st-title', function (e) {
      if ($(this).next('.simpletoggle-content').length > 0) {
        $(this).next('.simpletoggle-content').slideToggle(function () {
          // $('.right-container .main-content').getNiceScroll().resize();
        });
        $(this).toggleClass('open');
        e.preventDefault();
      }
    });

    var blockWidget = $('#block-menu-aside').find('.widget');

    var $widthDvice = $(window).width();
    var speed = 300;
    var mainContainer = $('.main-container'),
        navbarToggle = mainContainer.find('.navbar-toggle'),
        leftContainer = mainContainer.find('.left-container'),
        widgetsOnMobile = mainContainer.find('.widgets-on-mobile'),
        widgetLinks = mainContainer.find('.widget-links'),
        dashboardItem = mainContainer.find('.dashboard-item'),
        widgetsForMobileTrigger = mainContainer.find('.widgets-for-mobile-trigger');

    if ($widthDvice < 768) {

      navbarToggle.click(function () {
        $(this).toggleClass('navbar-toggle-open');
        leftContainer.toggleClass('active');
        widgetsOnMobile.removeClass('active').slideUp(speed);
        widgetLinks.removeClass('active').slideUp(speed);
      });

      widgetsForMobileTrigger.click(function () {
        widgetsOnMobile.toggleClass('active');
        widgetsOnMobile.slideToggle(speed);
        leftContainer.removeClass('active');
        navbarToggle.removeClass('navbar-toggle-open');
        $(this).toggleClass('clicked');
      });

      dashboardItem.click(function () {
        $(this)
            .siblings().removeClass('active')
            .find(widgetLinks).slideUp(speed);

        $(this)
            .toggleClass('active')
            .find(widgetLinks).slideToggle(speed);
      });

      // close the notification box
      blockNotifications = $('.block-notifications');
      $('.block-notifications').find('.ic-Delete').on('click', function (event) {
        blockNotifications.css('transition', 'none').slideUp(300);
      });

      $('.block-menu-aside .block-widget .ic-Delete').on('click', function(){
        $(this).parent().removeClass('active');
      });

      blockWidget.on('click', function (e) {

        closeAll();

        if (e.target.className == 'ic-Delete') {
          $(this).removeClass('active');
        }else{
          $(this).addClass('active').siblings().removeClass('active');
        }
      });

      // $('.anchor').on('click', function () {
      //     if ($(this).hasClass('active')) {
      //         $(this).removeClass('active');
      //         $('.widgets').slideUp(speed);
      //     } else {
      //         $(this).addClass('active');
      //         $('.widgets').slideDown(speed);
      //     }
      //     // closeAll();
      // });


      // // add close button to aside-menu when a widget is opened on mobile
      // $('.block-widget-inner').click('.ic-Delete', function (event) {
      //     $('.anchor').addClass('opened');
      // });

      // // remove close button to aside-menu when a widget is closed on mobile
      // $('.block-widget-inner').click('.ic-Delete', function (event) {
      //     $('.anchor').removeClass('opened');
      // });

      // close the notification box
      // blockNotifications = $('.block-notifications');
      // $('.block-notifications').find('.ic-Delete').on('click', function (event) {
      //     blockNotifications.css('transition', 'none').slideUp(300);
      // });
    }



    $('.anchor').on('click', function () {
      closeAll();
    });

    var closeAll = function () {
      dashboardItem.removeClass('active');
      leftContainer.removeClass('active');
      navbarToggle.removeClass('navbar-toggle-open');
      widgetsOnMobile.removeClass('active').slideUp(speed);
      widgetLinks.removeClass('active').slideUp(speed);
    };


    // hide aside-menu when clicking outside its container
    $(document).click(function (event) {
      if (!$(event.target).closest('.block-menu-aside').length) {
        if ($('.block-menu-aside').is(":visible")) {
          $(this).find('.widgets').slideUp();
          $(this).find('.anchor').removeClass('active');
        }
      }

      lc = Boolean($(event.target).closest('.left-container').length || $(event.target).closest('.navbar-toggle').length);

      if ( (lc === false) &&  $('.left-container.active').length ) {
        navbarToggle.trigger('click');
        $('.sub-menu .close-menu').trigger('click');
      }
    });

  });
})(jQuery);
