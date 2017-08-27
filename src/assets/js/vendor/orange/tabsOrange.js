/**
 * TabsOrange class
 */
Orange.TabsOrange = {

  init: function(el, hide) {
    $('body').on('change', ".type-mobile-select.dropdown-black", function(e) {
      var index = $('.tab-line a[href="' + $(this).find("option:selected").val() + '"]').parent().index();
      var active = $('.tab-line').tabs('option', 'active');
      $('.tab-line').tabs('option', 'active', index);
    });
    if ($('.tab-line').length > 0) {
      $('.tab-line').tabs();
    }
  }
};
