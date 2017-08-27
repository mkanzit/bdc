/**
 * parsley class
 */
Orange.parsley = {
    init: function() {
        $(".form-parsley-validate").parsley({

            // Class that would be added on every failing validation Parsley field
            errorClass: 'validetta-error',

            // Same for success validation
            successClass: 'validetta',

            // Return the `$element` that will receive these above success or error classes
            // Could also be (and given directly from DOM) a valid selector like `'#div'`
            classHandler: function(el) {
                return el.$element.closest(".item-form");
            },

            // Return the `$element` where errors will be appended
            // Could also be (and given directly from DOM) a valid selector like `'#div'`
            errorsContainer: function(el) {
                return el.$element.closest(".item-form");
            },

            // ul elem that would receive errors' list
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',

            // li elem that would receive error message
            errorTemplate: '<li class="msg-error"></li>'
        });
    },
    multiTelPattern: function(el, after) {//Ajout d'un espace après l'insersion de 10 chiffre
        after = after || 10;
        var v = el.val().replace(/[^\dA-Z]/g, ''),
            reg = new RegExp(".{" + after + "}", "g");
        el.val(v.replace(reg, function(a, b, c) {
            return a + ', ';
        }));
    },
    validatePassword: function(passwordField, form) {    // Validation des mots de passes
        var password = passwordField;
        var minCaractere = form.find('.list-validetta li:first-child');
        var minChiffre = form.find('.list-validetta li:nth-child(2)');
        var minMaj = form.find('.list-validetta li:nth-child(3)');
        var specialCaracter = form.find('.list-validetta li:nth-child(4)');
        var minChiffreReg = /\d+/; //Regex pour tester s'il y a un chiffre
        var minMajReg = /[A-Z]/; //Regex pour tester s'il y a une Majiscule

        // this regex must be the same as the server side regex !
        var apiPassReg = /^(((?=.*[a-z])(?=.*[\d]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[\d]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[\d]))|((?=.*[a-z])(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[\W]))|((?=.*[a-z])(?=.*[\d])(?=.*[\W])(?=.*[^a-zA-Z0-9]))|((?=.*[A-Z])(?=.*[\d])(?=.*[^a-zA-Z0-9])(?=.*[\W]))).{8,30}$/i;

        // 6 caractères minimum
        minCaractere.toggleClass('checked', (password.length >= passMinLength));

        // 1 chiffre minimum
        minChiffre.toggleClass('checked', minChiffreReg.test(password));

        // 1 majuscule minimum
        minMaj.toggleClass('checked', minMajReg.test(password));

        // 1 caracter special minimum
        specialCaracter.toggleClass('checked', carracterReg.test(password));

        // special char validation is only in web platform
        return (apiPassReg.test(password) && carracterReg.test(password));
    },
    confirmPassword: function(passwordField, confirmPasswordField) {    //Comparer le mot de passe et la confirmation
        return (passwordField === confirmPasswordField);
    },
    isValidDateRange: function(startRangeField, endRangeField) {    //check the date interval
        var startRangeValue = startRangeField.val();
        var endRangeValue = endRangeField.val();

        var  isValidStartDate = dateReg.test(startRangeValue);
        var  isValidEndDate = dateReg.test(endRangeValue);


        if( (!startRangeValue && !endRangeValue) || (!startRangeValue && isValidEndDate) || (isValidStartDate && !endRangeValue) ){
            startRangeField.closest('.item-form').removeClass('validetta-error');
            endRangeField.closest('.item-form').removeClass('validetta-error');
            $('.parsley-errors-list').html('');

            return true;
        }

        // console.log(dateReg.test(endRangeValue));
        //
        var dSplit = startRangeValue.split("/");
        startRangeValue=new Date(dSplit[2],dSplit[1]-1,dSplit[0]);

        dSplit = endRangeValue.split("/");
        endRangeValue=new Date(dSplit[2],dSplit[1]-1,dSplit[0]);

        var isValid = isValidStartDate && isValidEndDate && (endRangeValue >= startRangeValue);

        if(!isValid){
            startRangeField.closest('.item-form').addClass('validetta-error');
            endRangeField.closest('.item-form').addClass('validetta-error');
        }
        else{
            startRangeField.closest('.item-form').removeClass('validetta-error');
            endRangeField.closest('.item-form').removeClass('validetta-error');
            $('.parsley-errors-list').html('');
        }

        return (isValid);
    }
};
