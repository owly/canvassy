(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'jst/content_migrations/ProgressingContentMigration', 'jst/content_migrations/ProgressingIssues', 'compiled/views/PaginatedCollectionView', 'compiled/views/content_migrations/ContentMigrationIssueView', 'compiled/views/content_migrations/ProgressBarView', 'compiled/views/content_migrations/ProgressStatusView', 'compiled/views/content_migrations/SelectContentView'], function($, Backbone, template, progressingIssuesTemplate, PaginatedCollectionView, ContentMigrationIssueView, ProgressBarView, ProgressStatusView, SelectContentView) {
    var ProgressingContentMigrationView, _ref;

    return ProgressingContentMigrationView = (function(_super) {
      __extends(ProgressingContentMigrationView, _super);

      function ProgressingContentMigrationView() {
        this.showSelectContentDialog = __bind(this.showSelectContentDialog, this);
        this.render = __bind(this.render, this);        _ref = ProgressingContentMigrationView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProgressingContentMigrationView.prototype.template = template;

      ProgressingContentMigrationView.prototype.tagName = 'li';

      ProgressingContentMigrationView.prototype.className = 'clearfix migrationProgressItem';

      ProgressingContentMigrationView.prototype.events = {
        'click .showIssues': 'toggleIssues',
        'click .selectContentBtn': 'showSelectContentDialog'
      };

      ProgressingContentMigrationView.prototype.els = {
        '.migrationIssues': '$migrationIssues',
        '.changable': '$changable',
        '.progressStatus': '$progressStatus',
        '.selectContentDialog': '$selectContentDialog',
        '[data-bind=migration_issues_count]': '$issuesCount'
      };

      ProgressingContentMigrationView.prototype.initialize = function() {
        var _this = this;

        ProgressingContentMigrationView.__super__.initialize.apply(this, arguments);
        this.issuesLoaded = false;
        this.progress = this.model.progressModel;
        this.issues = this.model.issuesCollection;
        return this.model.on('continue', function() {
          var _ref1;

          if ((_ref1 = _this.progress) != null) {
            _ref1.poll();
          }
          return _this.render();
        });
      };

      ProgressingContentMigrationView.prototype.toJSON = function() {
        var json;

        json = ProgressingContentMigrationView.__super__.toJSON.apply(this, arguments);
        json.display_name = this.displayName();
        json.created_at = this.createdAt();
        json.issuesCount = this.model.get('migration_issues_count');
        switch (this.model.get('workflow_state')) {
          case "waiting_for_select":
            json.waiting_for_select = true;
            break;
          case "completed":
          case "failed":
            if (this.model.get('migration_issues_count') > 0) {
              json.migration_issues = true;
            }
            break;
          case "failed":
            json.message = this.model.get('message') || this.progress.get('message');
            break;
          case "running":
            json.loading = true;
        }
        return json;
      };

      ProgressingContentMigrationView.prototype.displayName = function() {
        return this.model.get('migration_type_title') || 'Content Migration';
      };

      ProgressingContentMigrationView.prototype.createdAt = function() {
        return this.model.get('created_at') || $.dateToISO8601UTC(new Date());
      };

      ProgressingContentMigrationView.prototype.render = function() {
        var issuesCollectionView, progressStatus;

        ProgressingContentMigrationView.__super__.render.apply(this, arguments);
        issuesCollectionView = new PaginatedCollectionView({
          collection: this.issues,
          itemView: ContentMigrationIssueView,
          template: progressingIssuesTemplate
        });
        this.$migrationIssues.html(issuesCollectionView.render().el);
        progressStatus = new ProgressStatusView({
          model: this.model,
          el: this.$progressStatus
        });
        progressStatus.render();
        return this;
      };

      ProgressingContentMigrationView.prototype.afterRender = function() {
        var _this = this;

        if (this.model.get('workflow_state') === "running") {
          if (this.progress.get('workflow_state') === "running") {
            this.renderProgressBar();
          }
          this.progress.on('change:workflow_state', function(event) {
            if (_this.progress.get('workflow_state') === "running") {
              return _this.renderProgressBar();
            }
          });
        }
        return this.progress.on('complete', function(event) {
          return _this.updateMigrationModel();
        });
      };

      ProgressingContentMigrationView.prototype.renderProgressBar = function() {
        var progressBarView;

        progressBarView = new ProgressBarView({
          model: this.progress,
          el: this.$changable
        });
        return progressBarView.render();
      };

      ProgressingContentMigrationView.prototype.updateMigrationModel = function() {
        var _this = this;

        return this.model.fetch({
          error: function(model, response, option) {
            return _this.model.set('status', 'failed');
          },
          success: function(model, response, options) {
            return _this.render();
          }
        });
      };

      ProgressingContentMigrationView.prototype.toggleIssues = function(event) {
        var dfd,
          _this = this;

        event.preventDefault();
        if (this.issuesLoaded) {
          this.$migrationIssues.toggle();
          return this.setIssuesButtonText();
        } else {
          dfd = this.fetchIssues();
          return dfd.done(function() {
            _this.issuesLoaded = true;
            return _this.toggleIssues(event);
          });
        }
      };

      ProgressingContentMigrationView.prototype.fetchIssues = function() {
        var dfd;

        this.model.set('issuesButtonText', 'Loading...');
        dfd = this.issues.fetch();
        this.$el.disableWhileLoading(dfd);
        return dfd;
      };

      ProgressingContentMigrationView.prototype.setIssuesButtonText = function() {
        var btnText;

        btnText = this.model.get('issuesButtonText');
        if (btnText.indexOf("issues") !== -1 || btnText.indexOf("Loading...") !== -1) {
          this.$issuesCount.hide();
          return this.model.set('issuesButtonText', 'Hide Issues');
        } else {
          this.$issuesCount.show();
          return this.model.set('issuesButtonText', 'issues');
        }
      };

      ProgressingContentMigrationView.prototype.showSelectContentDialog = function(event) {
        event.preventDefault();
        this.selectContentView || (this.selectContentView = new SelectContentView({
          model: this.model,
          el: this.$selectContentDialog,
          title: 'Select Content',
          width: 900,
          height: 700
        }));
        return this.selectContentView.open();
      };

      return ProgressingContentMigrationView;

    })(Backbone.View);
  });

}).call(this);
