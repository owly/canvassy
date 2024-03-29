(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jquery', 'compiled/widget/ContextSearch', 'jquery.instructure_date_and_time', 'jquery.disableWhileLoading'], function(_arg, _, $, ContextSearch) {
    var BaseItemView, View, _ref;

    View = _arg.View;
    return BaseItemView = (function(_super) {
      __extends(BaseItemView, _super);

      function BaseItemView() {
        _ref = BaseItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      BaseItemView.prototype.events = {
        'submit form': 'onFormSubmit'
      };

      BaseItemView.prototype.template = function() {
        return '';
      };

      BaseItemView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of a class to assign this too...",
        selector: {
          baseData: {
            type: 'course'
          },
          noExpand: true,
          browser: false
        }
      };

      BaseItemView.prototype.render = function() {
        this.$el.html(this.template());
        return BaseItemView.__super__.render.apply(this, arguments);
      };

      BaseItemView.prototype.afterRender = function() {
        this.$('.dateField').datetime_field();
        return this.contextSearch = new ContextSearch(this.$('.contextSearch'), this.contextSearchOptions);
      };

      BaseItemView.prototype.teardown = function() {
        return this.contextSearch.teardown();
      };

      BaseItemView.prototype.onFormSubmit = function(event) {
        var $form, dfd, json,
          _this = this;

        event.preventDefault();
        $form = $(event.target);
        json = $(event.target).toJSON();
        dfd = this.save(json);
        this.$('form').disableWhileLoading(dfd);
        dfd.done(function() {
          return _this.trigger('save');
        });
        return dfd.fail(function() {
          return _this.trigger('saveFail');
        });
      };

      BaseItemView.prototype.save = function() {
        return this.model.save();
      };

      BaseItemView.title = function(scope, text) {
        var title;

        title = "";
        I18n.scoped('dashboard', function(i) {
          return title = i.t(scope, text);
        });
        return title;
      };

      return BaseItemView;

    })(View);
  });

}).call(this);
