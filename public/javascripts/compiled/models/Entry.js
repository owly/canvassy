(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'jquery', 'underscore', 'Backbone', 'jquery.ajaxJSON'], function(I18n, $, _, Backbone) {
    var Entry, _ref;

    return Entry = (function(_super) {
      __extends(Entry, _super);

      function Entry() {
        _ref = Entry.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Entry.prototype.defaults = {
        id: null,
        parent_id: null,
        message: I18n.t('no_content', 'No Content'),
        user_id: null,
        read_state: 'read',
        forced_read_state: false,
        created_at: null,
        updated_at: null,
        deleted: false,
        attachment: null,
        replies: [],
        canAttach: ENV.DISCUSSION.PERMISSIONS.CAN_ATTACH,
        "new": false,
        highlight: false
      };

      Entry.prototype.computedAttributes = [
        'canModerate', 'canReply', 'speedgraderUrl', 'inlineReplyLink', {
          name: 'allowsSideComments',
          deps: ['parent_id', 'deleted']
        }, {
          name: 'allowsThreadedReplies',
          deps: ['deleted']
        }, {
          name: 'showBoxReplyLink',
          deps: ['allowsSideComments']
        }, {
          name: 'collapsable',
          deps: ['replies', 'allowsSideComments', 'allowsThreadedReplies']
        }, {
          name: 'summary',
          deps: ['message']
        }
      ];

      Entry.prototype.read = function() {
        return "" + ENV.DISCUSSION.ENTRY_ROOT_URL + "?ids[]=" + (this.get('id'));
      };

      Entry.prototype.create = function() {
        var parentId;

        this.set('author', ENV.DISCUSSION.CURRENT_USER);
        parentId = this.get('parent_id');
        if (parentId === null) {
          return ENV.DISCUSSION.ROOT_REPLY_URL;
        } else {
          return ENV.DISCUSSION.REPLY_URL.replace(/:entry_id/, parentId);
        }
      };

      Entry.prototype["delete"] = function() {
        return ENV.DISCUSSION.DELETE_URL.replace(/:id/, this.get('id'));
      };

      Entry.prototype.update = function() {
        return ENV.DISCUSSION.DELETE_URL.replace(/:id/, this.get('id'));
      };

      Entry.prototype.sync = function(method, model, options) {
        if (options == null) {
          options = {};
        }
        options.url = this[method]();
        return Backbone.sync(method, this, options);
      };

      Entry.prototype.parse = function(data) {
        if (_.isArray(data)) {
          return data[0];
        } else {
          return data;
        }
      };

      Entry.prototype.toJSON = function() {
        var json;

        json = Entry.__super__.toJSON.apply(this, arguments);
        return _.pick(json, 'id', 'parent_id', 'message', 'user_id', 'read_state', 'forced_read_state', 'created_at', 'updated_at', 'deleted', 'attachment', 'replies', 'author');
      };

      Entry.prototype.canModerate = function() {
        var isAuthorsEntry;

        isAuthorsEntry = this.get('user_id') === ENV.DISCUSSION.CURRENT_USER.id;
        return isAuthorsEntry && ENV.DISCUSSION.PERMISSIONS.CAN_MANAGE_OWN || ENV.DISCUSSION.PERMISSIONS.MODERATE;
      };

      Entry.prototype.canReply = function() {
        if (this.get('deleted')) {
          return false;
        }
        if (!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY) {
          return false;
        }
        return true;
      };

      Entry.prototype.inlineReplyLink = function() {
        if (ENV.DISCUSSION.THREADED && (this.allowsThreadedReplies() || this.allowsSideComments())) {
          return true;
        }
        return false;
      };

      Entry.prototype.allowsThreadedReplies = function() {
        if (this.get('deleted')) {
          return false;
        }
        if (!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY) {
          return false;
        }
        if (!ENV.DISCUSSION.THREADED) {
          return false;
        }
        return true;
      };

      Entry.prototype.allowsSideComments = function() {
        if (this.get('deleted')) {
          return false;
        }
        if (!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY) {
          return false;
        }
        if (ENV.DISCUSSION.THREADED) {
          return false;
        }
        if (this.get('parent_id')) {
          return false;
        }
        return true;
      };

      Entry.prototype.showBoxReplyLink = function() {
        return this.allowsSideComments();
      };

      Entry.prototype.collapsable = function() {
        return this.hasChildren() || this.allowsSideComments() || this.allowsThreadedReplies();
      };

      Entry.prototype.speedgraderUrl = function() {
        if (ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE) {
          return ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE.replace(/%22%3Astudent_id%22/, this.get('user_id'));
        }
      };

      Entry.prototype.summary = function() {
        this.escapeDiv || (this.escapeDiv = $('<div/>'));
        return this.escapeDiv.html(this.get('message')).text();
      };

      Entry.prototype.markAsRead = function() {
        var url;

        this.set('read_state', 'read');
        url = ENV.DISCUSSION.MARK_READ_URL.replace(/:id/, this.get('id'));
        return $.ajaxJSON(url, 'PUT');
      };

      Entry.prototype.markAsUnread = function() {
        var url;

        this.set({
          read_state: 'unread',
          forced_read_state: true
        });
        url = ENV.DISCUSSION.MARK_UNREAD_URL.replace(/:id/, this.get('id'));
        return $.ajaxJSON(url, 'DELETE', {
          forced_read_state: true
        });
      };

      Entry.prototype.hasChildren = function() {
        return this.get('replies').length > 0;
      };

      return Entry;

    })(Backbone.Model);
  });

}).call(this);
