(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/ProgressStatus'], function(Backbone, template) {
    var ProgressingStatusView, _ref;

    return ProgressingStatusView = (function(_super) {
      __extends(ProgressingStatusView, _super);

      function ProgressingStatusView() {
        _ref = ProgressingStatusView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProgressingStatusView.prototype.template = template;

      ProgressingStatusView.prototype.initialize = function() {
        return this.progress = this.model.progressModel;
      };

      ProgressingStatusView.prototype.afterRender = function() {
        this.model.on('change:workflow_state', this.render);
        return this.progress.on('change:workflow_state', this.render);
      };

      ProgressingStatusView.prototype.toJSON = function() {
        var json;

        json = ProgressingStatusView.__super__.toJSON.apply(this, arguments);
        json.statusLabel = this.statusLabel();
        json.status = this.status({
          humanize: true
        });
        return json;
      };

      ProgressingStatusView.prototype.statusLabelClassMap = {
        completed: 'label-success',
        completed_with_issues: 'label-warning',
        failed: 'label-important',
        running: 'label-info'
      };

      ProgressingStatusView.prototype.statusLabel = function() {
        return this.statusLabelClassMap[this.statusLabelKey()];
      };

      ProgressingStatusView.prototype.statusLabelKey = function() {
        var count, status;

        count = this.model.get('migration_issues_count');
        status = this.status();
        if (this.status() === 'completed' && count) {
          return 'completed_with_issues';
        } else {
          return this.status();
        }
      };

      ProgressingStatusView.prototype.status = function(options) {
        var humanize, migrationState, progressState, status;

        if (options == null) {
          options = {};
        }
        humanize = options.humanize;
        migrationState = this.model.get('workflow_state');
        progressState = this.progress.get('workflow_state');
        status = migrationState !== "running" ? migrationState : progressState || "queued";
        if (humanize) {
          status = status.charAt(0).toUpperCase() + status.substring(1).toLowerCase();
          status = status.replace(/_/g, " ");
        }
        return status;
      };

      return ProgressingStatusView;

    })(Backbone.View);
  });

}).call(this);
