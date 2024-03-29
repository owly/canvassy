(function() {
  define(['i18n!conversations', 'str/htmlEscape', 'jquery.instructure_misc_helpers'], function(I18n, h) {
    return function(strings, cutoff) {
      var str, strOrArray;

      if (cutoff == null) {
        cutoff = 2;
      }
      if (strings.length > cutoff) {
        strings = strings.slice(0, cutoff).concat([strings.slice(cutoff, strings.length)]);
      }
      return $.toSentence((function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = strings.length; _i < _len; _i++) {
          strOrArray = strings[_i];
          if (typeof strOrArray === 'string' || strOrArray.htmlSafe) {
            _results.push("<span>" + (h(strOrArray)) + "</span>");
          } else {
            _results.push("<span class='others'>\n  " + (h(I18n.t('other', 'other', {
              count: strOrArray.length
            }))) + "\n  <span>\n    <ul>\n      " + (((function() {
              var _j, _len1, _results1;

              _results1 = [];
              for (_j = 0, _len1 = strOrArray.length; _j < _len1; _j++) {
                str = strOrArray[_j];
                _results1.push('<li>' + h(str) + '</li>');
              }
              return _results1;
            })()).join('')) + "\n    </ul>\n  </span>\n</span>");
          }
        }
        return _results;
      })());
    };
  });

}).call(this);
