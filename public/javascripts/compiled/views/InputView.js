(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var InputView, View, _ref;

    View = _arg.View;
    return InputView = (function(_super) {
      __extends(InputView, _super);

      function InputView() {
        _ref = InputView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InputView.prototype.tagName = 'input';

      InputView.prototype.defaults = {
        modelAttribute: 'unnamed'
      };

      InputView.prototype.initialize = function() {
        InputView.__super__.initialize.apply(this, arguments);
        return this.setupElement();
      };

      InputView.prototype.setElement = function() {
        InputView.__super__.setElement.apply(this, arguments);
        return this.setupElement();
      };

      InputView.prototype.setupElement = function() {
        this.lastValue = this.el.value;
        return this.modelAttribute = this.$el.attr('name') || this.options.modelAttribute;
      };

      InputView.prototype.attach = function() {
        var _this = this;

        if (!this.collection) {
          return;
        }
        this.collection.on('beforeFetch', function() {
          return _this.$el.addClass('loading');
        });
        this.collection.on('fetch', function() {
          return _this.$el.removeClass('loading');
        });
        return this.collection.on('fetch:fail', function() {
          return _this.$el.removeClass('loading');
        });
      };

      InputView.prototype.updateModel = function() {
        var value, _ref1, _ref2, _ref3, _ref4;

        value = this.el.value;
        if (value === '') {
          if ((_ref1 = this.model) != null) {
            _ref1.set(this.modelAttribute, value);
          }
          return (_ref2 = this.collection) != null ? _ref2.deleteParam(this.modelAttribute) : void 0;
        } else if (value.length < this.options.minLength) {

        } else {
          if ((_ref3 = this.model) != null) {
            _ref3.set(this.modelAttribute, value);
          }
          return (_ref4 = this.collection) != null ? _ref4.setParam(this.modelAttribute, value) : void 0;
        }
      };

      return InputView;

    })(View);
  });

}).call(this);
