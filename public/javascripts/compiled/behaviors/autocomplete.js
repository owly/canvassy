(function() {
  define(['jquery', 'jqueryui/autocomplete'], function($) {
    var createAutocompletes;

    createAutocompletes = function() {
      return $('input[data-behaviors~=autocomplete]').each(function() {
        var $el, options;

        $el = $(this);
        options = $el.data('autocomplete-options');
        return $el.autocomplete(options);
      });
    };
    $(document).ready(function() {
      return createAutocompletes();
    });
    return createAutocompletes;
  });

}).call(this);
