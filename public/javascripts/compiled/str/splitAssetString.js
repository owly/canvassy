(function() {
  define(['str/pluralize'], function(pluralize) {
    return function(assetString) {
      var match;

      if (match = assetString.match(/(.*)_(\d+)$/)) {
        return [pluralize(match[1]), parseInt(match[2])];
      }
    };
  });

}).call(this);
