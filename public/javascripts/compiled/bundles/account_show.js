(function() {
  require(['compiled/behaviors/autocomplete'], function() {
    return $(document).ready(function() {
      return $('#course_name').on('autocompleteselect', function(e, ui) {
        var path;

        path = $(this).data('autocomplete-options')['source'].replace(/\?.+$/, '');
        return window.location = "" + path + "/" + ui.item.id;
      });
    });
  });

}).call(this);
