(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['use!vendor/backbone', 'underscore', 'compiled/util/mixin', 'compiled/backbone-ext/DefaultUrlMixin'], function(Backbone, _, mixin, DefaultUrlMixin) {
    var _ref;

    return Backbone.Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection() {
        _ref = Collection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Collection.mixin = function() {
        var mixins;

        mixins = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return mixin.apply(null, [this].concat(__slice.call(mixins)));
      };

      Collection.mixin(DefaultUrlMixin);

      Collection.prototype.defaults = {
        params: void 0,
        resourceName: void 0,
        contextAssetString: void 0
      };

      Collection.optionProperty = function(property) {
        return this.__optionProperties__ = (this.__optionProperties__ || []).concat([property]);
      };

      Collection.prototype.setOptionProperties = function() {
        var property, _i, _len, _ref1, _results;

        _ref1 = this.constructor.__optionProperties__;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          property = _ref1[_i];
          if (this.options[property] != null) {
            _results.push(this[property] = this.options[property]);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Collection.prototype.initialize = function(models, options) {
        this.options = _.extend({}, this.defaults, options);
        this.setOptionProperties();
        return Collection.__super__.initialize.apply(this, arguments);
      };

      Collection.prototype.setParam = function(name, value) {
        var _base, _ref1;

        if ((_ref1 = (_base = this.options).params) == null) {
          _base.params = {};
        }
        this.options.params[name] = value;
        return this.trigger('setParam', name, value);
      };

      Collection.prototype.setParams = function(params) {
        var name, value;

        for (name in params) {
          value = params[name];
          this.setParam(name, value);
        }
        return this.trigger('setParams', params);
      };

      Collection.prototype.deleteParam = function(name) {
        var _ref1;

        if ((_ref1 = this.options.params) != null) {
          delete _ref1[name];
        }
        return this.trigger('deleteParam', name);
      };

      Collection.prototype.fetch = function(options) {
        var _this = this;

        if (options == null) {
          options = {};
        }
        if ((options.data == null) && (this.options.params != null)) {
          options.data = this.options.params;
        }
        return Collection.__super__.fetch.call(this, options).fail(function(xhr) {
          return _this.trigger('fetch:fail', xhr);
        });
      };

      Collection.prototype.url = function() {
        return this._defaultUrl();
      };

      Collection.optionProperty('contextAssetString');

      Collection.optionProperty('resourceName');

      return Collection;

    })(Backbone.Collection);
  });

}).call(this);
