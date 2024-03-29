(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['Backbone', 'i18n!dashboard', 'underscore', 'jst/quickStartBar/QuickStartBarView', 'jquery.toJSON'], function(_arg, I18n, _, template) {
    var Model, QuickStartBarModel, QuickStartBarView, View, capitalize, _ref, _ref1;

    View = _arg.View, Model = _arg.Model;
    capitalize = function(str) {
      return str.replace(/\b[a-z]/g, function(match) {
        return match.toUpperCase();
      });
    };
    QuickStartBarModel = (function(_super) {
      __extends(QuickStartBarModel, _super);

      function QuickStartBarModel() {
        _ref = QuickStartBarModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuickStartBarModel.prototype.defaults = {
        expanded: false
      };

      return QuickStartBarModel;

    })(Model);
    return QuickStartBarView = (function(_super) {
      __extends(QuickStartBarView, _super);

      function QuickStartBarView() {
        this.toggleExpanded = __bind(this.toggleExpanded, this);
        this.switchFormView = __bind(this.switchFormView, this);
        this.onSaveFail = __bind(this.onSaveFail, this);
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);        _ref1 = QuickStartBarView.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      QuickStartBarView.prototype.events = {
        'click .nav a': 'onNavClick',
        'focus .expander': 'onExpandClick'
      };

      QuickStartBarView.prototype.initialize = function() {
        this.model || (this.model = new QuickStartBarModel);
        this.model.on('change:modelName', this.switchFormView);
        this.model.on('change:expanded', this.toggleExpanded);
        this.models = {};
        this.formViewsObj = _.reduce(this.options.formViews, function(h, v) {
          h[v.type] = v;
          return h;
        }, {});
        return this.model.attributes.modelName = this.options.formViews[0].type;
      };

      QuickStartBarView.prototype.onSaveSuccess = function(model) {
        this.switchFormView();
        return this.trigger('save');
      };

      QuickStartBarView.prototype.onSaveFail = function(model) {
        this.switchFormView();
        return this.trigger('saveFail');
      };

      QuickStartBarView.prototype.onNavClick = function(event) {
        var type;

        event.preventDefault();
        type = $(event.currentTarget).data('type');
        return this.model.set('modelName', type);
      };

      QuickStartBarView.prototype.onExpandClick = function(event) {
        return this.model.set('expanded', true);
      };

      QuickStartBarView.prototype.switchFormView = function() {
        var _base, _name, _ref2,
          _this = this;

        if (this.modelName) {
          this.$el.removeClass(this.modelName);
        }
        this.modelName = this.model.get('modelName');
        this.$el.addClass(this.modelName);
        if ((_ref2 = this.currentFormView) != null) {
          if (typeof _ref2.teardown === "function") {
            _ref2.teardown();
          }
        }
        this.currentFormView = (_base = this.views)[_name = this.modelName] || (_base[_name] = (function() {
          var view;

          view = new _this.formViewsObj[_this.modelName];
          view.on('save', _this.onSaveSuccess);
          return view.on('saveFail', _this.onSaveFail);
        })());
        this.currentFormView.render();
        this.$newItemFormContainer.empty().append(this.currentFormView.el);
        this.model.set('expanded', false);
        return this.updateActiveTab(this.modelName);
      };

      QuickStartBarView.prototype.toggleExpanded = function(model, expanded) {
        this.$el.toggleClass('expanded', expanded);
        return this.$el.toggleClass('not-expanded', !expanded);
      };

      QuickStartBarView.prototype.updateActiveTab = function(modelName) {
        return this.$('.nav a').each(function(index, tab) {
          var $tab;

          $tab = $(tab);
          if ($tab.is("[data-type=" + modelName + "]")) {
            return $tab.addClass('active');
          } else {
            return $tab.removeClass('active');
          }
        });
      };

      QuickStartBarView.prototype.cacheElements = function() {
        return this.$newItemFormContainer = $('.newItemFormContainer');
      };

      QuickStartBarView.prototype.render = function() {
        this.$el.html(template({
          formViews: this.options.formViews
        }));
        this.cacheElements();
        this.switchFormView();
        return QuickStartBarView.__super__.render.apply(this, arguments);
      };

      return QuickStartBarView;

    })(View);
  });

}).call(this);
