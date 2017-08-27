var Orange = Orange || {},
        codeLength = 6,
        telLength = 10,
        passMinLength = 8,
        emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, //Regex pour les emails
        carracterReg = /[^a-zA-Z0-9]/, //Regex pour les caractères speciaux
        dateReg = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/,
        msisdnReg = /^((00|\+)?212|0)[1-9][0-9]{8}$/, //regex for msisdn fields
        $widthDvice = $(window).width();
$(document).ready(function () {
    if ($widthDvice < 767) {
        /* Sticky header */
        var scrollPos = 0;
        var header = $('.header');      

        $(window).scroll(function () {
            scrollPos = $(document).scrollTop();

            if (scrollPos >= 84) {

                header.addClass('header-fixed');

            } else {
                header.removeClass('header-fixed');
            }
        });
    }
    $(window).resize(function () {
        $widthDvice = $(window).width();
    });
    // gt, gte, lt, lte, notequalto extra validators
    var parseRequirement = function (requirement) {
        if (isNaN(+requirement))
            return parseFloat(jQuery(requirement).val());
        else
            return +requirement;
    };
    //Orange.Browser.init(); 
    Orange.ToggleSearchBar.openSearchHeader();
    Orange.MainMenu.init();
    Orange.SimpleToggle.init();
    Orange.SimpleToggle.toggleEdit();
    Orange.SimpleToggle.alertClose();
    Orange.TableCheck.init();
    Orange.Jsdatepicker.init();
    Orange.SbSearch.init();
    Orange.BxSlider.init();
    Orange.FixedHeader.init();
    Orange.MoveSelected.init();
    Orange.ColorBox.init();
    Orange.TabsOrange.init();
    Orange.FixedSousMenu.init();
    Orange.Preloader.init();
    //Orange.AppStoreMobile.init(); 
    function scrollToError() {
        var headerGap = $('.sticky-wrapper').innerHeight() + 20;
        var errorElem = $('.validetta-error');
        var scrollPos = errorElem.offset().top - headerGap;

        $('html, body').stop().animate({
            scrollTop: scrollPos
        }, 500);
    }

    //Validation des champs lors du changement de la la valeur des input
    if ($('.form-parsley-validate').length > 0) {
        Orange.parsley.init();
    }

    // window.Parsley.on('field:error', function(){
    //     var elem = this.$element.is(":focus") ? this.$element : false;
    //     var pos = elem.parents('.validetta-error').offset().top;
    //     $('html, body').stop().animate({
    //         scrollTop: pos - headerGap
    //     }, 500);
    // });

    $(".selectBox-tab").change(function () {
        $link = this.value; // #idelement
        window.location.href = $link;
    });


    $('body').on('change', 'input.js-radio-show', function (e) {
        $jsRadioContent = $(this).parents('.item-form').next('.js-radio-content');
        if ($(this).val() === 'tel') {
            $jsRadioContent.slideDown();
            $jsRadioContent.find('input').attr("required", "true");
        } else {
            $jsRadioContent.slideUp();
            $jsRadioContent.find('input').attr("required", "false");
        }
    });

    $('body').on('click', 'input[type="reset"]', function (e) {
        if ($(this).closest('.js-blockEdite').length > 0) {
            $href = $(this).closest('.js-blockEdite').attr('id');
            var $a = $('a[href="#' + $href + '"]');
            if ($a.hasClass('forclose') ){
                $('a[href="#' + $href + '"]').trigger("click");
            }
        }
    });

    $('body').on('click', '.js-blockEdite-close', function (e) {
        if ($(this).closest('.js-blockEdite').length > 0) {
            $href = $(this).closest('.js-blockEdite').attr('id');
            var $a = $('a[href="#' + $href + '"]');
            if ($a.hasClass('forclose') ){
                $('a[href="#' + $href + '"]').trigger("click");
            }
            e.preventDefault();
        }
    });

    $('body').on('input', 'form input[type="number"]', function (e) {
        this.value = this.value.replace(/[^0-9.]/g, '');
        this.value = this.value.replace(/(\..*)\./g, '$1');
    });

    $('body').on('click', '.navbar-toggle', function (e) {
        $('.sb-search').slideUp();
        $('.sb-search-link').removeClass('open-search-link');
    });

    if ($widthDvice < 768) {
        $('.title-footer').click(function (event) {
            event.preventDefault();
            $(this).toggleClass('open-toggle');
            $(this).next('ul').toggle('slow');
        });
        $('.item-block__action').click(function (e) {
            $(this).toggleClass('item-block__action-open');
            $(this).parents('.item-block:first').find('.item-block__content').toggle();
            e.preventDefault();
        });
        $('.item-block-padd .item-block__action').click(function (e) {
            $(this).toggleClass('item-block__action-open');
            $(this).next('.item-block__content').toggle();
            e.preventDefault();
        });
        $('.block-login h2').click(function () {
            $(this).toggleClass('open-title-block-2');
            $(this).next('form').toggle();
        });
        $elementa = $('a[href="#blockEditecontact"]').parents('.info-contact-item');
        $('#blockEditecontact').insertAfter($elementa);
        $elementa2 = $('a[href="#blockEditeadresse"]').parents('.info-contact-item');
        $('#blockEditeadresse').insertAfter($elementa2);

        $elementa5 = $('a[href="#blockPUK"]').parents('.info-ligne-item');
        $('#blockPUK').insertAfter($elementa5);
        $elementa = $('a[href="#addGroup"]').parents('.info-ligne-item');
        $('#addGroup').insertAfter($elementa);

        $elementa7 = $('.login-items');
        $('.captcha-logon').insertAfter($elementa7);
        



 $('.table-wrapper .fluid-table table').each(function(i, el){
    var table = $(el);
    var tr = table.find('tbody tr');

    tr.each(function(i, el){
        $(el).find('td,th').each(function(index, elm) {
            index = index+1;

            var valuedatath = table.find('.thead th:nth-child('+index+') >p').text();
            $(elm).attr('data-th', valuedatath);
        });
    });
});


        

 $(document).on("click",".smartbanner__exit",function() {
       $('html').removeAttr('data-smartbanner-original-margin-top');
    });

    }

    
 
    
    if ($widthDvice < 960) {
        $('.item-block-padd .item-block__action').click(function () {
            $(this).toggleClass('item-block__action-open');
            $(this).next('.item-block__content').toggle();
        });
    }

    $('.block-slider .block-theme-container').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    if ($widthDvice > 767) {
        $('.item-block').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        $('.item-block__action .block-icon').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.club-items .club-items__txt').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });


        $('.info-contact-col > .info-contact-row:first-child .info-contact-item').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });


        $('.title-height').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });


        $('.item-block-av .mod').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.block-height-visuel').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

    }
    /////
    $('.input-form').keyup(function () {
        if ($(this).val() === '')
            $(this).removeClass('active');
        else
            $(this).addClass('active');
    });
    ///////////////////
    $('.Cont-care__content').height($('.Cont-care img').height());
    $('.Cont-care__content').width($('.Cont-care img').width());
    if ($('.dropdown-black').length > 0) {
        $('.dropdown-black').selectBox({
            mobile: true
        });

        $('select.type-mobile-select').selectBox().change(function () {
            window.location.hash = $(this).val();
        });
    }
    ///////////////////////////////////////////////////////

    // Définition des validateurs specifiques
    //Strictement égale à une valeur
    window.Parsley.addValidator('eq', {
        validateString: function (value, requirement) {
            return value.length === parseRequirement(requirement);
        },
        priority: 32
    });

    //Multiple numéro
    window.Parsley.addValidator('mn', {
        validateString: function (value, requirement) {
            var tel = value.replace(/ /g, ""),
                    regExp = /^(\d{10}(, )?)+$/;

            return regExp.test(value);
        },
        priority: 32
    });

    //Validation du mot de passe
    window.Parsley.addValidator('ivp', {
        validateString: function (value, requirement) {
            var parentForm = arguments[2].$element.parents('form');
            return Orange.parsley.validatePassword(value, parentForm);
        },
        priority: 32
    });

    //Confirmation du mot de passe
    window.Parsley.addValidator('ivpc', {
        validateString: function (value, requirement) {
            var password = arguments[2].$element.parents('form').find('.password').val();
            return Orange.parsley.confirmPassword(password, value);
        },
        priority: 32
    });

    //Validation des champs de type date
    window.Parsley.addValidator('date', {
        validateString: function (value, requirement) {
            return dateReg.test(value);
        },
        priority: 32
    });

    //start range
    window.Parsley.addValidator('startRange', {
        validateString: function (value, requirement) {
            var startRangeField = arguments[2].$element.parents('form').find('.start-range');
            var endRangeField = arguments[2].$element.parents('form').find('.end-range');
            return Orange.parsley.isValidDateRange(startRangeField, endRangeField);
        },
        priority: 32
    });
    //end range
    window.Parsley.addValidator('endRange', {
        validateString: function (value, requirement) {
            var startRangeField = arguments[2].$element.parents('form').find('.start-range');
            var endRangeField = arguments[2].$element.parents('form').find('.end-range');
            return Orange.parsley.isValidDateRange(startRangeField, endRangeField);
        },
        priority: 32
    });

    //Validation for msisdn
    window.Parsley.addValidator('msisdn', {
        validateString: function (value, requirement) {
            return msisdnReg.test(value);
        },
        priority: 32
    });

    //Ajout d'un espace après l'insersion de 10 chiffre
    $('body').on('input propertychange', 'form .input-form', $.debounce(50, function (e) {
        //Stockage des valeurs de champ dans des variables
        var _this = $(this);

        //Verification des téléphones
        if (_this.hasClass('multiple')) {
            Orange.parsley.multiTelPattern(_this, 10);
        }
    }));

    //Activer et desactiver le boutton submit
    window.Parsley.on('field:validate', function () {
        var form = this.$element.closest("form");
          var submit = form.find('.submit');

        if(0 === submit.length){
            var formId = form.attr('id');
            submit = $("[form='"+formId+"']:submit");
        }

        this.removeError('customError');

        if (this.$element.data('parsley-ivp') && this.$element.val() === '') {
            Orange.parsley.validatePassword('', form);
        }

        // handle related attribute case (ex: equal-to)
        if (this.$element.data('parsley-related')) {
            var relatedEl = $(this.$element.data('parsley-related'));

            if (relatedEl.size() && relatedEl.val()){
                relatedEl.parsley().validate();
            }
        }

        if (form.hasClass('form-parsley-zone') ) {
            return true;
        }

        if (form.parsley().isValid()) {
            submit.prop("disabled", false);
            submit.removeClass('inactive');
        } else {
            form.find('.validetta-error:first').each(function (e) {
                var zoneId = $(this).closest('.js-blockEdite').attr('id');

                if (!zoneId) {
                    return;
                }

                var a = $('a[href=#' + zoneId + ']');

                if (!a.hasClass('forclose')) {
                    a.click();
                }
            });

            submit.prop("disabled", true);
            submit.addClass('inactive');
        }
    });

    //Reset Parsley on form reset
    $('body').on('click', ".form-parsley-validate input[type='reset']", function (event) {
        event.preventDefault();

        var form = $(this).closest('form');
        var submit = form.find('.submit');

        form[0].reset();
        form.find('select').selectBox('refresh');

        form.parsley().reset();
        submit.prop("disabled", true);
        submit.addClass('inactive');
    });

    $('body').on('change', ".lang_sms_used", function (event) {
        if(jQuery(this).val()==='fr'){
            $('.keyboardInputInitiator').hide();
            $('textarea.keyboardInput').parent('.item-form-input').removeClass('direction-rtl');
            $( "#keyboardInputClose" ).trigger("click");
            $('textarea.keyboardInput').val('');
            $('textarea.keyboardInput').parents('.item-form').removeClass('validetta-error');
            $('textarea.keyboardInput').parents('.item-form').removeClass('validetta');
            maxlimit=$('#sms_sms_length_fr').val();
        }
        else
        {
            $('.keyboardInputInitiator').show();
            $('textarea.keyboardInput').parent('.item-form-input').addClass('direction-rtl');
            $('textarea.keyboardInput').val('');
            $('textarea.keyboardInput').parents('.item-form').removeClass('validetta-error');
            $('textarea.keyboardInput').parents('.item-form').removeClass('validetta');
            maxlimit=$('#sms_sms_length_ar').val();
        }
    });

  

    /* Scroll to anchors */
    var elem   = $(window.location.hash);
    var topGap = 100;

    if( elem.length ) {
        $('html, body').animate({
            scrollTop: elem.offset().top - topGap
        }, 1000);
    }
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            $('body').addClass('windows-phone');
            //return "Windows Phone";
        }
        if (/android/i.test(userAgent)) {
            $('body').addClass('android');
            return "Android";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            $('body').addClass ('iOS');
            return "iOS";
        }
        $('body').addClass('desktop');
        return "unknown";
    }
getMobileOperatingSystem();
});
