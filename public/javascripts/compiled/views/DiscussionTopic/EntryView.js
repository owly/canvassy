(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'i18n!discussions', 'compiled/discussions/MarkAsReadWatcher', 'compiled/arr/walk', 'Backbone', 'compiled/collections/EntryCollection', 'jst/discussions/_entry_content', 'jst/discussions/_deleted_entry', 'jst/discussions/entry_with_replies', 'jst/discussions/entryStats', 'compiled/discussions/Reply', 'compiled/discussions/EntryEditor', 'str/htmlEscape', 'vendor/jquery.ba-tinypubsub', 'compiled/str/convertApiUserContent', 'jst/_avatar', 'jst/discussions/_reply_form'], function(_, I18n, MarkAsReadWatcher, walk, Backbone, EntryCollection, entryContentPartial, deletedEntriesTemplate, entryWithRepliesTemplate, entryStats, Reply, EntryEditor, htmlEscape, _arg, convertApiUserContent) {
    var EntryView, publish, _ref;

    publish = _arg.publish;
    EntryView = (function(_super) {
      __extends(EntryView, _super);

      function EntryView() {
        this.renderTree = __bind(this.renderTree, this);
        this.toggleDeleted = __bind(this.toggleDeleted, this);
        this.toggleReadState = __bind(this.toggleReadState, this);        _ref = EntryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EntryView.instances = {};

      EntryView.collapseRootEntries = function() {
        return _.each(this.instances, function(view) {
          if (!view.model.get('parent')) {
            return view.collapse();
          }
        });
      };

      EntryView.expandRootEntries = function() {
        return _.each(this.instances, function(view) {
          if (!view.model.get('parent')) {
            return view.expand();
          }
        });
      };

      EntryView.setAllReadState = function(newReadState) {
        return _.each(this.instances, function(view) {
          return view.model.set('read_state', newReadState);
        });
      };

      EntryView.prototype.els = {
        '.discussion_entry:first': '$entryContent',
        '.replies:first': '$replies',
        '.headerBadges:first': '$headerBadges',
        '.discussion-read-state-btn:first': '$readStateToggle'
      };

      EntryView.prototype.events = {
        'click .loadDescendants': 'loadDescendants',
        'click [data-event]': 'handleDeclarativeEvent'
      };

      EntryView.prototype.defaults = {
        treeView: null,
        descendants: 2,
        children: 5,
        showMoreDescendants: 2
      };

      EntryView.prototype.template = entryWithRepliesTemplate;

      EntryView.prototype.tagName = 'li';

      EntryView.prototype.className = 'entry';

      EntryView.prototype.initialize = function() {
        EntryView.__super__.initialize.apply(this, arguments);
        this.constructor.instances[this.cid] = this;
        this.$el.attr('id', "entry-" + (this.model.get('id')));
        this.model.on('change:deleted', this.toggleDeleted);
        this.model.on('change:read_state', this.toggleReadState);
        this.model.on('change:editor', this.render);
        return this.model.on('change:editor', function(entry) {
          return entry.trigger('edited');
        });
      };

      EntryView.prototype.toggleRead = function(e) {
        e.preventDefault();
        if (this.model.get('read_state') === 'read') {
          this.model.markAsUnread();
        } else {
          this.model.markAsRead();
        }
        return EntryView.trigger('readStateChanged', this.model, this);
      };

      EntryView.prototype.handleDeclarativeEvent = function(event) {
        var $el, method;

        $el = $(event.currentTarget);
        method = $el.data('event');
        if (this.bypass(event)) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        return this[method](event, $el);
      };

      EntryView.prototype.bypass = function(event) {
        var clickedAdminLinks, target, targetHasEvent;

        target = $(event.target);
        if (target.data('bypass') != null) {
          return true;
        }
        clickedAdminLinks = $(event.target).closest('.admin-links').length;
        targetHasEvent = $(event.target).data('event');
        if (clickedAdminLinks && !targetHasEvent) {
          return true;
        } else {
          return false;
        }
      };

      EntryView.prototype.toJSON = function() {
        var json;

        json = this.model.attributes;
        json.edited_at = $.parseFromISO(json.updated_at).datetime_formatted;
        if (json.editor) {
          json.editor_name = json.editor.display_name;
          json.editor_href = "href=\"" + json.editor.html_url + "\"";
        } else {
          json.editor_name = I18n.t('unknown', 'Unknown');
          json.editor_href = "";
        }
        return json;
      };

      EntryView.prototype.toggleReadState = function(model, read_state) {
        this.setToggleTooltip();
        this.$entryContent.toggleClass('unread', read_state === 'unread');
        return this.$entryContent.toggleClass('read', read_state === 'read');
      };

      EntryView.prototype.toggleCollapsed = function(event, $el) {
        if (!this.addedCountsToHeader) {
          this.addCountsToHeader();
        }
        return this.$el.toggleClass('collapsed');
      };

      EntryView.prototype.expand = function() {
        return this.$el.removeClass('collapsed');
      };

      EntryView.prototype.collapse = function() {
        if (!this.addedCountsToHeader) {
          this.addCountsToHeader();
        }
        return this.$el.addClass('collapsed');
      };

      EntryView.prototype.addCountsToHeader = function() {
        var html, stats;

        stats = this.countPosterity();
        html = "<div class='new-and-total-badge'>\n  <span class=\"new-items\">" + stats.unread + "</span>\n  <span class=\"total-items\">" + stats.total + "</span>\n</div>";
        this.$headerBadges.append(entryStats({
          stats: stats
        }));
        return this.addedCountsToHeader = true;
      };

      EntryView.prototype.toggleDeleted = function(model, deleted) {
        this.$entryContent.toggleClass('deleted-discussion-entry', deleted);
        if (deleted) {
          this.model.set('updated_at', (new Date).toISOString());
          return this.model.set('editor', ENV.current_user);
        }
      };

      EntryView.prototype.setToggleTooltip = function() {
        var tooltip;

        tooltip = this.model.get('read_state') === 'unread' ? I18n.t('mark_as_read', 'Mark as Read') : I18n.t('mark_as_unread', 'Mark as Unread');
        return this.$readStateToggle.attr('title', tooltip);
      };

      EntryView.prototype.afterRender = function() {
        var _ref1;

        EntryView.__super__.afterRender.apply(this, arguments);
        if (this.options.collapsed) {
          this.collapse();
        }
        this.setToggleTooltip();
        if (this.model.get('read_state') === 'unread' && !this.model.get('forced_read_state') && !ENV.DISCUSSION.MANUAL_MARK_AS_READ) {
          if ((_ref1 = this.readMarker) == null) {
            this.readMarker = new MarkAsReadWatcher(this);
          }
          MarkAsReadWatcher.checkForVisibleEntries();
        }
        return publish('userContent/change');
      };

      EntryView.prototype.filter = EntryView.prototype.afterRender;

      EntryView.prototype.renderTree = function(opts) {
        var children, collection, descendants, page, replies;

        if (opts == null) {
          opts = {};
        }
        if (this.treeView != null) {
          return;
        }
        replies = this.model.get('replies');
        descendants = (opts.descendants || this.options.descendants) - 1;
        children = opts.children || this.options.children;
        collection = new EntryCollection(replies, {
          perPage: children
        });
        page = collection.getPageAsCollection(0);
        this.treeView = new this.options.treeView({
          el: this.$replies[0],
          descendants: descendants,
          collection: page,
          threaded: this.options.threaded,
          showMoreDescendants: this.options.showMoreDescendants
        });
        return this.treeView.render();
      };

      EntryView.prototype.renderDescendantsLink = function() {
        var stats;

        stats = this.countPosterity();
        this.descendantsLink = $('<div/>');
        this.descendantsLink.html(entryStats({
          stats: stats,
          showMore: true
        }));
        this.descendantsLink.addClass('showMore loadDescendants');
        return this.$replies.append(this.descendantsLink);
      };

      EntryView.prototype.countPosterity = function() {
        var stats;

        stats = {
          unread: 0,
          total: 0
        };
        if (this.model.attributes.replies == null) {
          return stats;
        }
        walk(this.model.attributes.replies, 'replies', function(entry) {
          if (entry.read_state === 'unread') {
            stats.unread++;
          }
          return stats.total++;
        });
        return stats;
      };

      EntryView.prototype.loadDescendants = function(event) {
        event.stopPropagation();
        event.preventDefault();
        return this.renderTree({
          children: this.options.children,
          descendants: this.options.showMoreDescendants
        });
      };

      EntryView.prototype.remove = function() {
        var html;

        if (confirm(I18n.t('are_your_sure_delete', 'Are you sure you want to delete this entry?'))) {
          this.model.set('deleted', true);
          this.model.destroy();
          html = deletedEntriesTemplate(this.toJSON());
          return this.$('.entry_content:first').html(html);
        }
      };

      EntryView.prototype.edit = function() {
        var _ref1;

        if ((_ref1 = this.editor) == null) {
          this.editor = new EntryEditor(this);
        }
        if (!this.editor.editing) {
          return this.editor.edit();
        }
      };

      EntryView.prototype.addReply = function(event, $el) {
        var _ref1,
          _this = this;

        if ((_ref1 = this.reply) == null) {
          this.reply = new Reply(this, {
            focus: true
          });
        }
        this.model.set('notification', '');
        this.reply.edit();
        return this.reply.on('save', function(entry) {
          _this.renderTree();
          _this.treeView.collection.add(entry);
          _this.treeView.collection.fullCollection.add(entry);
          _this.trigger('addReply');
          return EntryView.trigger('addReply', entry);
        });
      };

      EntryView.prototype.addReplyAttachment = function(event, $el) {
        event.preventDefault();
        return this.reply.addAttachment($el);
      };

      EntryView.prototype.removeReplyAttachment = function(event, $el) {
        event.preventDefault();
        return this.reply.removeAttachment($el);
      };

      EntryView.prototype.format = function(attr, value) {
        if (attr === 'message') {
          value = convertApiUserContent(value);
          this.$el.find('.message').removeClass('enhanced');
          publish('userContent/change');
          return value;
        } else if (attr === 'notification') {
          return value;
        } else {
          return htmlEscape(value);
        }
      };

      return EntryView;

    })(Backbone.View);
    return _.extend(EntryView, Backbone.Events);
  });

}).call(this);
