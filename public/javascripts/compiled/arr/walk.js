(function() {
  define(function() {
    var walk;

    return walk = function(arr, prop, iterator) {
      var item, _i, _len;

      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        item = arr[_i];
        iterator(item, arr);
        if (item[prop] != null) {
          walk(item[prop], prop, iterator);
        }
      }
      return arr;
    };
  });

}).call(this);
