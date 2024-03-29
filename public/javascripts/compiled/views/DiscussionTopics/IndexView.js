(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/views/DiscussionTopics/DiscussionListView', 'jst/DiscussionTopics/IndexView', 'compiled/views/DiscussionTopics/DiscussionsSettingsView', 'compiled/views/DiscussionTopics/UserSettingsView'], function(_, _arg, DiscussionListView, template, DiscussionsSettingsView, UserSettingsView) {
    var IndexView, View, _ref;

    View = _arg.View;
    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.filterResults = __bind(this.filterResults, this);
        this.filter = __bind(this.filter, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.prototype.template = template;

      IndexView.prototype.el = '#content';

      IndexView.child('openDiscussionView', '.open.discussion-list');

      IndexView.child('lockedDiscussionView', '.locked.discussion-list');

      IndexView.child('pinnedDiscussionView', '.pinned.discussion-list');

      IndexView.prototype.events = {
        'click .ig-header .element_toggler': 'toggleDiscussionList',
        'click #edit_discussions_settings': 'toggleSettingsView',
        'change #onlyUnread, #onlyGraded': 'filterResults',
        'keyup #searchTerm': 'filterResults'
      };

      IndexView.prototype.filters = {
        onlyGraded: {
          active: false,
          fn: function(model) {
            return model.get('assignment_id');
          }
        },
        onlyUnread: {
          active: false,
          fn: function(model) {
            return model.get('unread_count') > 0 || model.get('read_state') === 'unread';
          }
        },
        searchTerm: {
          active: false,
          fn: function(model, term) {
            var regex;

            if (!term) {
              return;
            }
            regex = new RegExp(term, 'ig');
            return model.get('title').match(regex) || model.get('user_name').match(regex) || model.summary().match(regex);
          }
        }
      };

      IndexView.prototype.collections = function() {
        return [this.options.openDiscussionView.collection, this.options.lockedDiscussionView.collection, this.options.pinnedDiscussionView.collection];
      };

      IndexView.prototype.afterRender = function() {
        return this.$('#discussionsFilter').buttonset();
      };

      IndexView.prototype.activeFilters = function() {
        var _this = this;

        return _.select(this.filters, function(value, key) {
          return value.active;
        });
      };

      IndexView.prototype.filter = function(model, term) {
        return _.all(this.activeFilters(), function(filter) {
          return filter.fn.call(model, model, term);
        });
      };

      IndexView.prototype.filterResults = function(e) {
        var term,
          _this = this;

        if (e.target.type === 'checkbox') {
          this.filters[e.target.id].active = $(e.target).prop('checked');
          if ($('#searchTerm').val().length > 0) {
            term = $('#searchTerm').val();
          }
        } else {
          this.filters[e.target.id].active = $(e.target).val().length > 0;
          term = $(e.target).val();
        }
        return _.each(this.collections(), function(collection) {
          return collection.each(function(model) {
            if (_this.activeFilters().length > 0) {
              return model.set('hidden', !_this.filter(model, term));
            } else {
              return model.set('hidden', false);
            }
          });
        });
      };

      IndexView.prototype.toggleSettingsView = function() {
        return this.settingsView().toggle();
      };

      IndexView.prototype.toggleDiscussionList = function(e) {
        return $(e.currentTarget).find('i').toggleClass('icon-mini-arrow-down').toggleClass('icon-mini-arrow-right');
      };

      IndexView.prototype.settingsView = function() {
        this._settingsView || (this._settingsView = this.options.permissions.change_settings ? new DiscussionsSettingsView() : new UserSettingsView());
        return this._settingsView;
      };

      IndexView.prototype.toJSON = function() {
        return _.extend({}, {
          options: this.options,
          length: 1,
          atLeastOnePageFetched: true,
          new_topic_url: ENV.newTopicURL
        });
      };

      return IndexView;

    })(View);
  });

}).call(this);
