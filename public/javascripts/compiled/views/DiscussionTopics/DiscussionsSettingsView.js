(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'compiled/views/DialogFormView', 'compiled/models/DiscussionsSettings', 'compiled/models/UserSettings', 'jst/DiscussionTopics/DiscussionsSettingsView'], function(I18n, DialogFormView, DiscussionsSettings, UserSettings, template) {
    var DiscussionsSettingsView, _ref;

    return DiscussionsSettingsView = (function(_super) {
      __extends(DiscussionsSettingsView, _super);

      function DiscussionsSettingsView() {
        _ref = DiscussionsSettingsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionsSettingsView.prototype.defaults = {
        title: I18n.t("edit_settings", "Edit Discussions Settings")
      };

      DiscussionsSettingsView.prototype.template = template;

      DiscussionsSettingsView.prototype.initialize = function() {
        DiscussionsSettingsView.__super__.initialize.apply(this, arguments);
        this.model || (this.model = new DiscussionsSettings);
        this.userSettings = new UserSettings;
        return this.fetch();
      };

      DiscussionsSettingsView.prototype.render = function() {
        DiscussionsSettingsView.__super__.render.call(this, arguments);
        return this.$el.find('#manual_mark_as_read').prop('checked', this.userSettings.get('manual_mark_as_read'));
      };

      DiscussionsSettingsView.prototype.submit = function(event) {
        DiscussionsSettingsView.__super__.submit.call(this, event);
        this.userSettings.set('manual_mark_as_read', this.$el.find('#manual_mark_as_read').prop('checked'));
        return this.userSettings.save();
      };

      DiscussionsSettingsView.prototype.fetch = function() {
        var isComplete,
          _this = this;

        isComplete = $.Deferred();
        $.when(this.model.fetch(), this.userSettings.fetch()).then(function() {
          isComplete.resolve();
          return _this.render();
        });
        return this.$el.disableWhileLoading(isComplete);
      };

      return DiscussionsSettingsView;

    })(DialogFormView);
  });

}).call(this);
