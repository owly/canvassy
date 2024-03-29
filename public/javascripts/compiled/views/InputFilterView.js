(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/InputView', 'vendor/jquery.placeholder'], function(InputView) {
    var InputFilterView, _ref;

    return InputFilterView = (function(_super) {
      __extends(InputFilterView, _super);

      function InputFilterView() {
        this.onInput = __bind(this.onInput, this);        _ref = InputFilterView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InputFilterView.prototype.events = {
        'keyup': 'keyup',
        'change': 'change'
      };

      InputFilterView.prototype.defaults = {
        onInputDelay: 200,
        modelAttribute: 'filter',
        minLength: 3
      };

      InputFilterView.prototype.onInput = function() {
        if (this.el.value !== this.lastValue) {
          this.updateModel();
          this.trigger('input', this.el.value);
        }
        return this.lastValue = this.el.value;
      };

      InputFilterView.prototype.onEnter = function() {
        this.el.select();
        return this.trigger('enter', this.el.value);
      };

      InputFilterView.prototype.keyup = function(event) {
        clearTimeout(this.onInputTimer);
        this.onInputTimer = setTimeout(this.onInput, this.options.onInputDelay);
        if ((event.which != null) && event.which === 13) {
          this.onEnter();
        }
        return null;
      };

      InputFilterView.prototype.change = InputFilterView.prototype.keyup;

      InputFilterView.prototype.afterRender = function() {
        return this.$el.placeholder();
      };

      return InputFilterView;

    })(InputView);
  });

}).call(this);
