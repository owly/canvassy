(function() {
  define(['require'], function(require) {
    return {
      init: function() {
        var tour, _i, _len, _ref, _results;

        if (!ENV.TOURS) {
          return;
        }
        _ref = ENV.TOURS;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tour = _ref[_i];
          _results.push(require(["compiled/views/tours/" + tour], function(tour) {
            return new tour();
          }));
        }
        return _results;
      }
    };
  });

}).call(this);
