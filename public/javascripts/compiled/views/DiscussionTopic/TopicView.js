(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'jquery', 'Backbone', 'underscore', 'compiled/models/DiscussionTopic', 'compiled/views/DiscussionTopic/EntriesView', 'compiled/views/DiscussionTopic/EntryView', 'jst/discussions/_reply_form', 'compiled/discussions/Reply', 'compiled/widget/assignmentRubricDialog', 'compiled/util/wikiSidebarWithMultipleEditors', 'jquery.instructure_misc_helpers', 'str/htmlEscape'], function(I18n, $, Backbone, _, DiscussionTopic, EntriesView, EntryView, replyTemplate, Reply, assignmentRubricDialog, htmlEscape) {
    var TopicView, _ref;

    return TopicView = (function(_super) {
      __extends(TopicView, _super);

      function TopicView() {
        this.subscriptionStatusChanged = __bind(this.subscriptionStatusChanged, this);
        this.hideIfFiltering = __bind(this.hideIfFiltering, this);        _ref = TopicView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TopicView.prototype.events = {
        'click #discussion_topic .discussion-reply-action[data-event]': 'handleEvent',
        'click .add_root_reply': 'addRootReply',
        'click .discussion_locked_toggler': 'toggleLocked',
        'click .toggle_due_dates': 'toggleDueDates',
        'click .rte_switch_views_link': 'toggleEditorMode',
        'click .topic-subscribe-button': 'subscribeTopic',
        'click .topic-unsubscribe-button': 'unsubscribeTopic'
      };

      TopicView.prototype.els = {
        '.add_root_reply': '$addRootReply',
        '#discussion_topic': '$topic',
        '.due_date_wrapper': '$dueDates',
        '.reply-textarea:first': '$textarea',
        '#discussion-toolbar': '$discussionToolbar',
        '.topic-subscribe-button': '$subscribeButton',
        '.topic-unsubscribe-button': '$unsubscribeButton'
      };

      TopicView.prototype.initialize = function() {
        var _this = this;

        this.model.set('id', ENV.DISCUSSION.TOPIC.ID);
        this.model.cid = 'main';
        this.model.set('canAttach', ENV.DISCUSSION.PERMISSIONS.CAN_ATTACH);
        this.filterModel = this.options.filterModel;
        this.filterModel.on('change', this.hideIfFiltering);
        this.topic = new DiscussionTopic({
          id: ENV.DISCUSSION.TOPIC.ID
        });
        this.topic.url = ENV.DISCUSSION.ROOT_URL.replace(/\/view/m, '');
        this.topic.set('subscribed', ENV.DISCUSSION.TOPIC.IS_SUBSCRIBED);
        return EntryView.on('addReply', function() {
          return _this.setSubscribed(true);
        });
      };

      TopicView.prototype.hideIfFiltering = function() {
        if (this.filterModel.hasFilter()) {
          return this.$topic.addClass('hidden');
        } else {
          return this.$topic.removeClass('hidden');
        }
      };

      TopicView.prototype.afterRender = function() {
        TopicView.__super__.afterRender.apply(this, arguments);
        if ($(document.body).is('.with-right-side')) {
          $.scrollSidebar();
        }
        assignmentRubricDialog.initTriggers();
        this.$el.toggleClass('side_comment_discussion', !ENV.DISCUSSION.THREADED);
        return this.subscriptionStatusChanged();
      };

      TopicView.prototype.filter = TopicView.prototype.afterRender;

      TopicView.prototype.toggleLocked = function(event) {
        var locked;

        locked = $(event.currentTarget).data('mark-locked');
        return this.topic.save({
          locked: locked
        }).done(function() {
          return window.location.reload();
        });
      };

      TopicView.prototype.toggleDueDates = function(event) {
        event.preventDefault();
        this.$dueDates.toggleClass('hidden');
        return $(event.currentTarget).text(this.$dueDates.hasClass('hidden') ? I18n.t('show_due_dates', 'Show Due Dates') : I18n.t('hide_due_dates', 'Hide Due Dates'));
      };

      TopicView.prototype.toggleEditorMode = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return this.$textarea.editorBox('toggle');
      };

      TopicView.prototype.subscribeTopic = function(event) {
        event.preventDefault();
        this.topic.topicSubscribe();
        this.subscriptionStatusChanged();
        if (this.$subscribeButton.is(':focus')) {
          return this.$unsubscribeButton.focus();
        }
      };

      TopicView.prototype.unsubscribeTopic = function(event) {
        event.preventDefault();
        this.topic.topicUnsubscribe();
        this.subscriptionStatusChanged();
        if (this.$unsubscribeButton.is(':focus')) {
          return this.$subscribeButton.focus();
        }
      };

      TopicView.prototype.subscriptionStatusChanged = function() {
        var subscribed;

        subscribed = this.topic.get('subscribed');
        this.$discussionToolbar.removeClass('subscribed');
        this.$discussionToolbar.removeClass('unsubscribed');
        if (ENV.DISCUSSION.CAN_SUBSCRIBE) {
          if (subscribed) {
            return this.$discussionToolbar.addClass('subscribed');
          } else {
            return this.$discussionToolbar.addClass('unsubscribed');
          }
        }
      };

      TopicView.prototype.addReply = function(event) {
        var _this = this;

        if (event != null) {
          event.preventDefault();
        }
        if (this.reply == null) {
          this.reply = new Reply(this, {
            topLevel: true,
            focus: true
          });
          this.reply.on('edit', function() {
            var _ref1;

            return (_ref1 = _this.$addRootReply) != null ? _ref1.hide() : void 0;
          });
          this.reply.on('hide', function() {
            var _ref1;

            return (_ref1 = _this.$addRootReply) != null ? _ref1.show() : void 0;
          });
          this.reply.on('save', function(entry) {
            _this.setSubscribed(true);
            return _this.trigger('addReply', entry);
          });
        }
        this.model.set('notification', '');
        return this.reply.edit();
      };

      TopicView.prototype.setSubscribed = function(newValue) {
        this.topic.set('subscribed', true);
        return this.subscriptionStatusChanged();
      };

      TopicView.prototype.addReplyAttachment = EntryView.prototype.addReplyAttachment;

      TopicView.prototype.removeReplyAttachment = EntryView.prototype.removeReplyAttachment;

      TopicView.prototype.handleEvent = function(event) {
        var el, method;

        el = $(event.currentTarget);
        method = el.data('event');
        return typeof this[method] === "function" ? this[method](event, el) : void 0;
      };

      TopicView.prototype.render = function() {
        var html, modelData;

        if (ENV.DISCUSSION.PERMISSIONS.CAN_REPLY) {
          modelData = this.model.toJSON();
          modelData.showBoxReplyLink = true;
          html = replyTemplate(modelData);
          this.$('#discussion_topic').append(html);
        }
        return TopicView.__super__.render.apply(this, arguments);
      };

      TopicView.prototype.format = function(attr, value) {
        if (attr === 'notification') {
          return value;
        } else {
          return htmlEscape(value);
        }
      };

      TopicView.prototype.addRootReply = function(event) {
        var $el, target;

        $el = this.$(event.currentTarget);
        target = $('#discussion_topic .discussion-reply-form');
        this.addReply(event);
        return $('html, body').animate({
          scrollTop: target.offset().top - 100
        });
      };

      return TopicView;

    })(Backbone.View);
  });

}).call(this);
