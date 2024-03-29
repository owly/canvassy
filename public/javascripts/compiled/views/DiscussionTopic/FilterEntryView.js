(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'i18n!discussions', 'compiled/views/DiscussionTopic/EntryView', 'jst/discussions/results_entry'], function(_arg, I18n, EntryView, template) {
    var FilterEntryView, View, _ref;

    View = _arg.View;
    return FilterEntryView = (function(_super) {
      __extends(FilterEntryView, _super);

      function FilterEntryView() {
        this.updateReadState = __bind(this.updateReadState, this);        _ref = FilterEntryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FilterEntryView.prototype.els = {
        '.discussion_entry:first': '$entryContent',
        '.discussion-read-state-btn:first': '$readStateToggle'
      };

      FilterEntryView.prototype.events = {
        'click': 'click',
        'click .discussion-read-state-btn': 'toggleRead'
      };

      FilterEntryView.prototype.tagName = 'li';

      FilterEntryView.prototype.className = 'entry';

      FilterEntryView.prototype.template = template;

      FilterEntryView.prototype.initialize = function() {
        FilterEntryView.__super__.initialize.apply(this, arguments);
        return this.model.on('change:read_state', this.updateReadState);
      };

      FilterEntryView.prototype.toJSON = function() {
        return this.model.attributes;
      };

      FilterEntryView.prototype.click = function() {
        return this.trigger('click', this);
      };

      FilterEntryView.prototype.afterRender = function() {
        FilterEntryView.__super__.afterRender.apply(this, arguments);
        return this.updateReadState();
      };

      FilterEntryView.prototype.toggleRead = function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.model.get('read_state') === 'read') {
          return this.model.markAsUnread();
        } else {
          return this.model.markAsRead();
        }
      };

      FilterEntryView.prototype.updateReadState = function() {
        this.updateTooltip();
        this.$entryContent.toggleClass('unread', this.model.get('read_state') === 'unread');
        return this.$entryContent.toggleClass('read', this.model.get('read_state') === 'read');
      };

      FilterEntryView.prototype.updateTooltip = function() {
        var tooltip;

        tooltip = this.model.get('read_state') === 'unread' ? I18n.t('mark_as_read', 'Mark as Read') : I18n.t('mark_as_unread', 'Mark as Unread');
        return this.$readStateToggle.attr('title', tooltip);
      };

      return FilterEntryView;

    })(View);
  });

}).call(this);
