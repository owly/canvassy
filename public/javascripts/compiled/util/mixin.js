(function() {
  var __slice = [].slice;

  define(['underscore'], function(_arg) {
    var extend, mixin;

    extend = _arg.extend;
    return mixin = function() {
      var key, mixins, parentClassKey, prop, target, _i, _len, _name, _ref;

      target = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ('function' === typeof target) {
        target = target.prototype;
      }
      for (_i = 0, _len = mixins.length; _i < _len; _i++) {
        mixin = mixins[_i];
        for (key in mixin) {
          prop = mixin[key];
          if (key === 'events' || key === 'defaults' || key === 'els') {
            parentClassKey = (_ref = target.constructor) != null ? _ref.prototype[key] : void 0;
            target[key] = extend({}, parentClassKey, target[key], prop);
          } else if (key === 'attach' || key === 'afterRender' || key === 'initialize') {
            (target[_name = "__" + key + "__"] || (target[_name] = [])).push(prop);
          } else {
            target[key] = prop;
          }
        }
      }
      return target;
    };
  });

}).call(this);
