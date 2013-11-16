(function() {
  define(function() {
    var round;

    return round = function(n, digits) {
      var x;

      x = Math.pow(10, digits);
      return Math.round(n * x) / x;
    };
  });

}).call(this);
