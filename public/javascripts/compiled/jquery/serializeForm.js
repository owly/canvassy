(function() {
  define(['jquery', 'underscore'], function($, _) {
    var getValue, isInput, rCRLF, rcheckboxOrRadio, rinput, rselectTextarea;

    rselectTextarea = /^(?:select|textarea)/i;
    rcheckboxOrRadio = /checkbox|radio/i;
    rCRLF = /\r?\n/g;
    rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|checkbox|radio|file)$/i;
    isInput = function(el) {
      return el.name && !el.disabled && rselectTextarea.test(el.nodeName) || rinput.test(el.type);
    };
    getValue = function(el) {
      var $input, resultFor, val;

      resultFor = function(val) {
        return {
          name: el.name,
          el: el,
          value: _.isString(val) ? val.replace(rCRLF, "\r\n") : val
        };
      };
      $input = $(el);
      val = rcheckboxOrRadio.test(el.type) ? el.checked : el.type === 'file' ? $input.val() ? el : void 0 : $input.hasClass('datetime_field_enabled') ? $input.val() === "" ? null : $input.data('date') || null : $input.data('rich_text') ? $input.editorBox('get_code', false) : $input.val();
      if (_.isArray(val)) {
        return _.map(val, resultFor);
      } else {
        return resultFor(val);
      }
    };
    return $.fn.serializeForm = function() {
      return _.chain(this[0].elements || this.find(':input')).filter(isInput).map(getValue).value();
    };
  });

}).call(this);
