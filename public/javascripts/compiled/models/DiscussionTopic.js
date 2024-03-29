(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussion_topics', 'Backbone', 'jquery', 'underscore', 'compiled/collections/ParticipantCollection', 'compiled/collections/DiscussionEntriesCollection', 'compiled/models/Assignment'], function(I18n, Backbone, $, _, ParticipantCollection, DiscussionEntriesCollection, Assignment) {
    var DiscussionTopic, _ref;

    return DiscussionTopic = (function(_super) {
      __extends(DiscussionTopic, _super);

      function DiscussionTopic() {
        this.present = __bind(this.present, this);        _ref = DiscussionTopic.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionTopic.prototype.resourceName = 'discussion_topics';

      DiscussionTopic.prototype.defaults = {
        discussion_type: 'side_comment',
        podcast_enabled: false,
        podcast_has_student_posts: false,
        require_initial_post: false,
        is_announcement: false,
        subscribed: false
      };

      DiscussionTopic.prototype.dateAttributes = ['last_reply_at', 'posted_at', 'delayed_post_at'];

      DiscussionTopic.prototype.initialize = function() {
        var assign,
          _this = this;

        this.participants = new ParticipantCollection;
        this.entries = new DiscussionEntriesCollection;
        this.entries.url = function() {
          return "" + (_.result(_this, 'url')) + "/entries";
        };
        this.entries.participants = this.participants;
        this.set('set_assignment', this.get('assignment') != null);
        assign = new Assignment(this.get('assignment') || {});
        assign.alreadyScoped = true;
        return this.set('assignment', assign);
      };

      DiscussionTopic.prototype.present = function() {
        return Backbone.Model.prototype.toJSON.call(this);
      };

      DiscussionTopic.prototype.topicSubscribe = function() {
        this.set('subscribed', true);
        return $.ajaxJSON(ENV.DISCUSSION.SUBSCRIBE_URL, 'PUT');
      };

      DiscussionTopic.prototype.topicUnsubscribe = function() {
        this.set('subscribed', false);
        return $.ajaxJSON(ENV.DISCUSSION.UNSUBSCRIBE_URL, 'DELETE');
      };

      DiscussionTopic.prototype.toJSON = function() {
        var assignment, json;

        json = DiscussionTopic.__super__.toJSON.apply(this, arguments);
        if (!json.set_assignment) {
          delete json.assignment;
        }
        assignment = json.assignment ? typeof json.assignment.toJSON === 'function' ? json.assignment.toJSON() : json.assignment : null;
        return _.extend(json, {
          summary: this.summary(),
          unread_count_tooltip: this.unreadTooltip(),
          reply_count_tooltip: this.replyTooltip(),
          assignment: assignment
        });
      };

      DiscussionTopic.prototype.unreadTooltip = function() {
        return I18n.t('unread_count_tooltip', {
          zero: 'No unread replies',
          one: '1 unread reply',
          other: '%{count} unread replies'
        }, {
          count: this.get('unread_count')
        });
      };

      DiscussionTopic.prototype.replyTooltip = function() {
        return I18n.t('reply_count_tooltip', {
          zero: 'No replies',
          one: '1 reply',
          other: '%{count} replies'
        }, {
          count: this.get('discussion_subentry_count')
        });
      };

      DiscussionTopic.prototype.fetchEntries = function() {
        var baseUrl,
          _this = this;

        baseUrl = _.result(this, 'url');
        return $.get("" + baseUrl + "/view", function(_arg) {
          var entries, forced_entries, participants, unread_entries;

          unread_entries = _arg.unread_entries, forced_entries = _arg.forced_entries, participants = _arg.participants, entries = _arg.view;
          _this.unreadEntries = unread_entries;
          _this.forcedEntries = forced_entries;
          _this.participants.reset(participants);
          return _this.entries.reset(entries);
        });
      };

      DiscussionTopic.prototype.summary = function() {
        return $('<div/>').html(this.get('message')).text() || '';
      };

      DiscussionTopic.prototype.updateOneAttribute = function(key, value, options) {
        var data;

        if (options == null) {
          options = {};
        }
        data = {};
        data[key] = value;
        options = _.defaults(options, {
          data: JSON.stringify(data),
          contentType: 'application/json'
        });
        return this.save({}, options);
      };

      DiscussionTopic.prototype.positionAfter = function(otherId) {
        var collection, otherIndex;

        this.updateOneAttribute('position_after', otherId);
        collection = this.collection;
        otherIndex = collection.indexOf(collection.get(otherId));
        collection.remove(this, {
          silent: true
        });
        collection.models.splice(otherIndex, 0, this);
        return collection.reset(collection.models);
      };

      return DiscussionTopic;

    })(Backbone.Model);
  });

}).call(this);
