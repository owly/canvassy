(function() {
  define(function() {
    return function(array, victim) {
      var index, suspect, _i, _len;

      for (index = _i = 0, _len = array.length; _i < _len; index = ++_i) {
        suspect = array[index];
        if (!(suspect === victim)) {
          continue;
        }
        array.splice(index, 1);
        break;
      }
      return array;
    };
  });

}).call(this);
