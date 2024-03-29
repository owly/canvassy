(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'underscore', 'Backbone', 'jst/ComboBox', 'str/htmlEscape', 'vendor/ui.selectmenu'], function($, _, Backbone, template, htmlEscape) {
    var ComboBox;

    return ComboBox = (function() {
      function ComboBox(items, opts) {
        var _ref,
          _this = this;

        this.items = items;
        if (opts == null) {
          opts = {};
        }
        this._formatOption = __bind(this._formatOption, this);
        this._buildOption = __bind(this._buildOption, this);
        this._next = __bind(this._next, this);
        this._previous = __bind(this._previous, this);
        if (opts.value != null) {
          this._value = opts.value;
        }
        if (opts.label != null) {
          this._label = opts.label;
        }
        this.$el = $(template());
        this.$container = $('.ui-combobox-container', this.$el);
        this.$prev = $('.ui-combobox-prev', this.$el);
        this.$next = $('.ui-combobox-next', this.$el);
        this.$menu = $('select', this.$container);
        (_ref = this.$menu).append.apply(_ref, _.map(this.items, this._buildOption));
        this.$menu.selectmenu({
          style: 'dropdown',
          width: '230px',
          format: this._formatOption
        });
        this.$selectmenu = this.$menu.data('selectmenu').list;
        if (opts.selected != null) {
          this.select(opts.selected);
        }
        _.extend(this, Backbone.Events);
        this.$menu.change(function() {
          return _this.trigger('change', _this.selected());
        });
        this.$prev.bind('click', this._previous);
        this.$next.bind('click', this._next);
      }

      ComboBox.prototype.select = function(value) {
        var oldIndex;

        oldIndex = this._index();
        this.$menu.selectmenu("value", value);
        if (this._index() !== oldIndex) {
          this.$menu.change();
        }
        return this;
      };

      ComboBox.prototype.selected = function() {
        return this.items[this._index()];
      };

      ComboBox.prototype._index = function() {
        return this.$menu[0].selectedIndex;
      };

      ComboBox.prototype._previous = function(e) {
        var newIndex;

        e.preventDefault();
        e.stopPropagation();
        newIndex = (this._index() + this.items.length - 1) % this.items.length;
        return this.select(this._value(this.items[newIndex]));
      };

      ComboBox.prototype._next = function(e) {
        var newIndex;

        e.preventDefault();
        e.stopPropagation();
        newIndex = (this._index() + 1) % this.items.length;
        return this.select(this._value(this.items[newIndex]));
      };

      ComboBox.prototype._value = function(item) {
        return item.value;
      };

      ComboBox.prototype._label = function(item) {
        return item.label;
      };

      ComboBox.prototype._buildOption = function(item) {
        return "<option value='" + (this._value(item)) + "'>" + (htmlEscape(this._label(item))) + "</option>";
      };

      ComboBox.prototype._formatOption = function(label) {
        return "<span class='ui-selectmenu-item'>" + label + "</span>";
      };

      return ComboBox;

    })();
  });

}).call(this);
