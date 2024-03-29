(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['compiled/util/mixin', 'underscore', 'use!vendor/backbone', 'compiled/backbone-ext/Model/computedAttributes', 'compiled/backbone-ext/Model/dateAttributes', 'compiled/backbone-ext/Model/errors'], function(mixin, _, Backbone) {
    var _ref;

    return Backbone.Model = (function(_super) {
      __extends(Model, _super);

      function Model() {
        _ref = Model.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Model.mixin = function() {
        var mixins;

        mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return mixin.apply(null, [this].concat(__slice.call(mixins)));
      };

      Model.prototype.initialize = function(attributes, options) {
        var fn, _i, _len, _ref1;

        Model.__super__.initialize.apply(this, arguments);
        this.options = _.extend({}, this.defaults, options);
        if (this.__initialize__) {
          _ref1 = this.__initialize__;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            fn = _ref1[_i];
            fn.call(this);
          }
        }
        return this;
      };

      Model.prototype.save = function() {
        this.trigger("saving");
        return Model.__super__.save.apply(this, arguments);
      };

      Model.prototype.destroy = function() {
        this.trigger("destroying");
        return Model.__super__.destroy.apply(this, arguments);
      };

      Model.prototype.increment = function(key, delta) {
        if (delta == null) {
          delta = 1;
        }
        return this.set(key, this.get(key) + delta);
      };

      Model.prototype.decrement = function(key, delta) {
        if (delta == null) {
          delta = 1;
        }
        return this.increment(key, -delta);
      };

      Model.prototype.deepGet = function(property) {
        var next, split, value;

        split = property.split(".");
        value = this.get(split.shift());
        while (next = split.shift()) {
          value = value[next];
        }
        return value;
      };

      return Model;

    })(Backbone.Model);
  });

}).call(this);
