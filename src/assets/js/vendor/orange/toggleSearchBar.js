/**
 * toggleSearchBar class
 */
Orange.ToggleSearchBar = {
 
    init: function(el, hide){
         var elem = el;
         var hidenEl = hide;
         var sbsearch = $('.sb-search');
         if (hidenEl === true) {
            $(elem).removeClass('open-search-link');
            sbsearch.hide();
            return;
        } 
        $(elem).toggleClass('open-search-link');
        sbsearch.slideToggle();
        return this;
    },
    openSearchHeader: function () {
        var that = this;
        var sbsearchlink = $('.sb-search-link');
        var ssmenu = $('.ssmenu');
        sbsearchlink.on('click',function (event) {
            ssmenu.hide();
            that.init(this);
            event.preventDefault();
        });
    }
};