(function() {
  define(['i18n!conversations', 'underscore', 'str/htmlEscape', 'compiled/util/listWithOthers', 'jquery.instructure_misc_helpers'], function(I18n, _, h, listWithOthers) {
    var format;

    format = function(person) {
      var str;

      str = h(person.name);
      if (person.activeFilter) {
        str = "<span class='active-filter'>" + str + "</span>";
      }
      return $.raw(str);
    };
    return function(audience, options) {
      var person, _ref, _ref1;

      if (options == null) {
        options = {};
      }
      if (options.highlightFilters) {
        audience = _.groupBy(audience, function(user) {
          return user.activeFilter;
        });
        audience = ((_ref1 = audience[true]) != null ? _ref1 : []).concat((_ref = audience[false]) != null ? _ref : []);
      }
      audience = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = audience.length; _i < _len; _i++) {
          person = audience[_i];
          _results.push(format(person));
        }
        return _results;
      })();
      if (audience.length === 0) {
        return "<span>" + (h(I18n.t('notes_to_self', 'Monologue'))) + "</span>";
      } else {
        return listWithOthers(audience);
      }
    };
  });

}).call(this);
