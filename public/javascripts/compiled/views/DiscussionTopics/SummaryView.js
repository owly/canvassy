(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussion_topics', 'Backbone', 'underscore', 'jst/DiscussionTopics/SummaryView', 'jst/_api_avatar'], function(I18n, Backbone, _, template) {
    var DiscussionTopicSummaryView, _ref;

    return DiscussionTopicSummaryView = (function(_super) {
      __extends(DiscussionTopicSummaryView, _super);

      function DiscussionTopicSummaryView() {
        _ref = DiscussionTopicSummaryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionTopicSummaryView.prototype.template = template;

      DiscussionTopicSummaryView.prototype.attributes = function() {
        return {
          'class': "discussion-topic " + (this.model.get('read_state')) + " " + (this.model.selected ? 'selected' : ''),
          'data-id': this.model.id
        };
      };

      DiscussionTopicSummaryView.prototype.events = {
        'change .toggleSelected': 'toggleSelected',
        'click': 'openOnClick'
      };

      DiscussionTopicSummaryView.prototype.initialize = function() {
        this.model.on('change reset', this.render, this);
        return this.model.on('destroy', this.remove, this);
      };

      DiscussionTopicSummaryView.prototype.toJSON = function() {
        var json;

        json = DiscussionTopicSummaryView.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          permissions: _.extend(this.options.permissions, json.permissions),
          selected: this.model.selected,
          unread_count_tooltip: I18n.t('unread_count_tooltip', {
            zero: 'No unread replies',
            one: '1 unread reply',
            other: '%{count} unread replies'
          }, {
            count: this.model.get('unread_count')
          }),
          reply_count_tooltip: I18n.t('reply_count_tooltip', {
            zero: 'No replies',
            one: '1 reply',
            other: '%{count} replies'
          }, {
            count: this.model.get('discussion_subentry_count')
          }),
          summary: this.model.summary()
        });
      };

      DiscussionTopicSummaryView.prototype.render = function() {
        DiscussionTopicSummaryView.__super__.render.apply(this, arguments);
        this.$el.attr(this.attributes());
        return this;
      };

      DiscussionTopicSummaryView.prototype.toggleSelected = function() {
        this.model.selected = !this.model.selected;
        this.model.trigger('change:selected');
        return this.$el.toggleClass('selected', this.model.selected);
      };

      DiscussionTopicSummaryView.prototype.openOnClick = function(event) {
        if (!$(event.target).closest(':focusable, label').length) {
          return window.location = this.model.get('html_url');
        }
      };

      return DiscussionTopicSummaryView;

    })(Backbone.View);
  });

}).call(this);
