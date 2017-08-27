// cart //
try {
    // set a boolean value to check if the cart is visible or not //
    var isClosed_cart = true;
// catch click event of cart icon //
    $('a.cart_new').click(function () {
// if cart is closed open it
        if (isClosed_cart) {
            JQF('div#mycart').slideDown('slow');
            isClosed_cart = false;
        } else {
            JQF('div#mycart').slideUp('slow');
            isClosed_cart = true;
        }
    });

// check if the eshop basket is active, this is a event is  aviable on eshop //
    if (basketStatus === true) {
// get the number of items in the basket
        var numItems = $('.item-name-sample').length;
// insert the number/count of items in the bubble
        $('#bub').html(numItems);
    }
}
catch (err) {
    console.log('non cart');
}
// end cart //