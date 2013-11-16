(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/ContentCheckbox', 'jst/content_migrations/ContentCheckboxCollection', 'compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/CollectionView', 'compiled/str/TextHelper'], function(Backbone, template, checkboxCollectionTemplate, CheckboxCollection, CollectionView, TextHelper) {
    var ContentCheckboxView, _ref;

    return ContentCheckboxView = (function(_super) {
      __extends(ContentCheckboxView, _super);

      function ContentCheckboxView() {
        this.toplevelCheckboxEvents = __bind(this.toplevelCheckboxEvents, this);
        this.uncheckAllChildren = __bind(this.uncheckAllChildren, this);
        this.checkAllChildren = __bind(this.checkAllChildren, this);        _ref = ContentCheckboxView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContentCheckboxView.prototype.template = template;

      ContentCheckboxView.prototype.els = {
        '[data-content=sublevelCheckboxes]': '$sublevelCheckboxes',
        '.showHide': '$showHide'
      };

      ContentCheckboxView.prototype.initialize = function() {
        ContentCheckboxView.__super__.initialize.apply(this, arguments);
        this.hasSubItemsUrl = !!this.model.get('sub_items_url');
        this.hasSubItems = !!this.model.get('sub_items');
        this.$el.on("click", "#selectAll-" + this.cid, this.checkAllChildren);
        this.$el.on("click", "#selectNone-" + this.cid, this.uncheckAllChildren);
        if (this.hasSubItemsUrl) {
          return this.$el.on("change", "#checkbox-" + this.cid, this.toplevelCheckboxEvents);
        }
      };

      ContentCheckboxView.prototype.toJSON = function() {
        var json, _ref1;

        json = ContentCheckboxView.__super__.toJSON.apply(this, arguments);
        json.hasSubCheckboxes = this.hasSubItems || this.hasSubItemsUrl;
        json.onlyLabel = this.hasSubItems && !this.hasSubItemsUrl;
        json.checked = (_ref1 = this.model.collection) != null ? _ref1.isTopLevel : void 0;
        json.iconClass = this.getIconClass();
        json.count = this.model.get('count');
        json.showHide = this.model.get('count') || (this.hasSubItems && this.model.get('sub_items').length > 2);
        return json;
      };

      ContentCheckboxView.prototype.iconClasses = {
        course_settings: "icon-settings",
        syllabus_body: "icon-syllabus",
        context_modules: "icon-module",
        assignments: "icon-assignment",
        quizzes: "icon-quiz",
        assessment_question_banks: "icon-collection",
        discussion_topics: "icon-discussion",
        wiki_pages: "icon-note-light",
        context_external_tools: "icon-lti",
        announcements: "icon-announcement",
        calendar_events: "icon-calendar-days",
        rubrics: "icon-rubric",
        groups: "icon-group",
        learning_outcomes: "icon-standards",
        attachments: "icon-document",
        assignment_groups: "icon-gradebook",
        folders: "icon-folder"
      };

      ContentCheckboxView.prototype.getIconClass = function() {
        return this.iconClasses[this.model.get('type')];
      };

      ContentCheckboxView.prototype.afterRender = function() {
        if (this.hasSubItems) {
          this.sublevelCheckboxes = new CheckboxCollection(this.model.get('sub_items'));
          return this.renderSublevelCheckboxes();
        }
      };

      ContentCheckboxView.prototype.checkAllChildren = function(event) {
        var _ref1;

        event.preventDefault();
        if ((_ref1 = this.model.collection) != null ? _ref1.isTopLevel : void 0) {
          return this.$el.find('[type=checkbox]').slice(1).prop('checked', true);
        } else {
          return this.$el.find('[type=checkbox]').prop('checked', true);
        }
      };

      ContentCheckboxView.prototype.uncheckAllChildren = function(event) {
        var _ref1;

        event.preventDefault();
        if ((_ref1 = this.model.collection) != null ? _ref1.isTopLevel : void 0) {
          return this.$el.find('[type=checkbox]').slice(1).prop('checked', false);
        } else {
          return this.$el.find('[type=checkbox]').prop('checked', false);
        }
      };

      ContentCheckboxView.prototype.toplevelCheckboxEvents = function(event) {
        if (!this.hasSubItemsUrl) {
          return;
        }
        if ($(event.target).is(':checked')) {
          this.$sublevelCheckboxes.hide();
          return this.$showHide.hide();
        } else {
          this.$sublevelCheckboxes.show();
          this.$showHide.show();
          if (!this.sublevelCheckboxes) {
            this.fetchSublevelCheckboxes();
            return this.renderSublevelCheckboxes();
          }
        }
      };

      ContentCheckboxView.prototype.fetchSublevelCheckboxes = function() {
        var dfd;

        this.sublevelCheckboxes = new CheckboxCollection;
        this.sublevelCheckboxes.url = this.model.get('sub_items_url');
        dfd = this.sublevelCheckboxes.fetch();
        return this.$el.disableWhileLoading(dfd);
      };

      ContentCheckboxView.prototype.renderSublevelCheckboxes = function() {
        var checkboxCollectionView;

        checkboxCollectionView = new CollectionView({
          collection: this.sublevelCheckboxes,
          itemView: ContentCheckboxView,
          el: this.$sublevelCheckboxes,
          template: checkboxCollectionTemplate
        });
        return checkboxCollectionView.render();
      };

      return ContentCheckboxView;

    })(Backbone.View);
  });

}).call(this);
