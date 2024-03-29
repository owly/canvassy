(function() {
  define(['Backbone', 'jquery', 'underscore', 'compiled/fn/preventDefault', 'jquery.toJSON', 'jquery.disableWhileLoading', 'jquery.instructure_forms'], function(Backbone, $, _, preventDefault) {
    var ValidatedMixin;

    return ValidatedMixin = {
      fieldSelectors: null,
      findField: function(field) {
        var $el, selector, _ref;

        selector = ((_ref = this.fieldSelectors) != null ? _ref[field] : void 0) || ("[name='" + field + "']");
        $el = this.$(selector);
        if ($el.data('rich_text')) {
          $el = $el.next('.mceEditor').find(".mceIframeContainer");
        }
        return $el;
      },
      showErrors: function(errors) {
        var $input, field, fieldName, html, message, _results;

        _results = [];
        for (fieldName in errors) {
          field = errors[fieldName];
          $input = this.findField(fieldName);
          html = ((function() {
            var _i, _len, _results1;

            _results1 = [];
            for (_i = 0, _len = field.length; _i < _len; _i++) {
              message = field[_i].message;
              _results1.push(message);
            }
            return _results1;
          })()).join('</p><p>');
          $input.errorBox("<div>" + html + "</div>");
          field.$input = $input;
          _results.push(field.$errorBox = $input.data('associated_error_box'));
        }
        return _results;
      }
    };
  });

}).call(this);
