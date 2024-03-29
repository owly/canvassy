(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'underscore', 'Backbone', 'jst/DiscussionTopics/discussion'], function(I18n, _, _arg, template) {
    var DiscussionView, View, _ref;

    View = _arg.View;
    return DiscussionView = (function(_super) {
      __extends(DiscussionView, _super);

      function DiscussionView() {
        this.hide = __bind(this.hide, this);
        this.togglePinned = __bind(this.togglePinned, this);
        this.onDelete = __bind(this.onDelete, this);
        this.togglePinned = __bind(this.togglePinned, this);
        this.toggleLocked = __bind(this.toggleLocked, this);        _ref = DiscussionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionView.prototype.template = template;

      DiscussionView.prototype.tagName = 'li';

      DiscussionView.prototype.className = 'discussion';

      DiscussionView.prototype.messages = {
        confirm: I18n.t('confirm_delete_discussion_topic', 'Are you sure you want to delete this discussion topic?'),
        "delete": I18n.t('delete', 'Delete'),
        lock: I18n.t('lock', 'Lock'),
        unlock: I18n.t('unlock', 'Unlock'),
        pin: I18n.t('pin', 'Pin'),
        unpin: I18n.t('unpin', 'Unpin')
      };

      DiscussionView.prototype.events = {
        'click .icon-lock': 'toggleLocked',
        'click .icon-pin': 'togglePinned',
        'click .icon-trash': 'onDelete',
        'click': 'onClick'
      };

      DiscussionView.prototype.defaults = {
        pinnable: false
      };

      DiscussionView.optionProperty('lockable');

      DiscussionView.optionProperty('pinnable');

      DiscussionView.prototype.initialize = function(options) {
        this.attachModel();
        return DiscussionView.__super__.initialize.apply(this, arguments);
      };

      DiscussionView.prototype.render = function() {
        DiscussionView.__super__.render.apply(this, arguments);
        this.$el.attr('data-id', this.model.get('id'));
        return this;
      };

      DiscussionView.prototype.toggleLocked = function(e) {
        var key, locked, pinned;

        e.preventDefault();
        key = this.model.get('locked') ? 'lock' : 'unlock';
        locked = !this.model.get('locked');
        pinned = locked ? false : this.model.get('pinned');
        this.model.save({
          locked: locked,
          pinned: pinned
        });
        return $(e.target).text(this.messages[key]);
      };

      DiscussionView.prototype.togglePinned = function(e) {
        var key, locked, pinned;

        e.preventDefault();
        key = this.model.get('pinned') ? 'pin' : 'unpin';
        pinned = !this.model.get('pinned');
        locked = pinned ? false : this.model.get('locked');
        this.model.save({
          locked: locked,
          pinned: pinned
        });
        return $(e.target).text(this.messages[key]);
      };

      DiscussionView.prototype.onDelete = function(e) {
        e.preventDefault();
        if (confirm(this.messages.confirm)) {
          return this["delete"]();
        }
      };

      DiscussionView.prototype["delete"] = function() {
        this.model.destroy();
        return this.$el.remove();
      };

      DiscussionView.prototype.togglePinned = function(e) {
        var key;

        e.preventDefault();
        key = this.model.get('pinned') ? 'pin' : 'unpin';
        this.model.updateOneAttribute('pinned', !this.model.get('pinned'));
        return $(e.target).text(this.messages[key]);
      };

      DiscussionView.prototype.onClick = function(e) {
        if (this.model.get('preventClick')) {
          return;
        }
        if (_.contains(['A', 'I'], e.target.nodeName)) {
          return;
        }
        return window.location = this.model.get('html_url');
      };

      DiscussionView.prototype.hide = function() {
        return this.$el.toggle(!this.model.get('hidden'));
      };

      DiscussionView.prototype.toJSON = function() {
        var base;

        base = _.extend(this.model.toJSON(), this.options);
        if (this.model.get('locked') && !_.intersection(ENV.current_user_roles, ['teacher', 'ta', 'admin']).length) {
          base.permissions["delete"] = false;
        }
        return base;
      };

      DiscussionView.prototype.attachModel = function() {
        return this.model.on('change:hidden', this.hide);
      };

      return DiscussionView;

    })(View);
  });

}).call(this);
