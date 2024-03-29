(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/DiscussionTopics/DiscussionsSettingsView', 'compiled/views/DiscussionTopics/UserSettingsView', 'i18n!discussion_topics', 'underscore', 'jst/announcements/IndexView', 'compiled/views/PaginatedView', 'compiled/views/DiscussionTopics/SummaryView', 'compiled/collections/AnnouncementsCollection'], function(DiscussionsSettingsView, UserSettingsView, I18n, _, template, PaginatedView, DiscussionTopicSummaryView, AnnouncementsCollection) {
    var IndexView, _ref;

    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.handleSortUpdate = __bind(this.handleSortUpdate, this);
        this.modelMeetsFilterRequirements = __bind(this.modelMeetsFilterRequirements, this);
        this.toggleActionsForSelectedDiscussions = __bind(this.toggleActionsForSelectedDiscussions, this);
        this.fetchedLastPage = __bind(this.fetchedLastPage, this);
        this.fetchedNextPage = __bind(this.fetchedNextPage, this);
        this.addDiscussionTopicToList = __bind(this.addDiscussionTopicToList, this);
        this.renderList = __bind(this.renderList, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.prototype.template = template;

      IndexView.prototype.el = '#content';

      IndexView.prototype.events = {
        'change #onlyUnread, #onlyGraded, #searchTerm': 'handleFilterChange',
        'input #searchTerm': 'handleFilterChange',
        'keyup #searchTerm': 'handleFilterChange',
        'sortupdate': 'handleSortUpdate',
        'change #lock': 'toggleLockingSelectedTopics',
        'click #delete': 'destroySelectedTopics',
        'click #edit_discussions_settings': 'toggleSettingsView'
      };

      IndexView.prototype.initialize = function() {
        IndexView.__super__.initialize.apply(this, arguments);
        this.attachCollection();
        return this.render();
      };

      IndexView.prototype.attachCollection = function() {
        var _this = this;

        this.collection.on('remove', function() {
          if (!_this.collection.length) {
            return _this.render();
          }
        });
        this.collection.on('reset', this.render);
        this.collection.on('add', this.renderList);
        this.collection.on('fetch:next', this.fetchedNextPage);
        this.collection.on('fetched:last', this.fetchedLastPage);
        return this.collection.on('change:selected', this.toggleActionsForSelectedDiscussions);
      };

      IndexView.prototype.afterRender = function() {
        this.$('#discussionsFilter').buttonset();
        this.renderList();
        this.toggleActionsForSelectedDiscussions();
        return this;
      };

      IndexView.prototype.toggleSettingsView = function() {
        this.settingsView || (this.settingsView = this.options.permissions.change_settings ? new DiscussionsSettingsView() : new UserSettingsView());
        return this.settingsView.toggle();
      };

      IndexView.prototype.renderList = function() {
        var $list, makeSortable, nothingMatched;

        $list = this.$('.discussionTopicIndexList').empty();
        nothingMatched = !_.any(this.collection.map(this.addDiscussionTopicToList));
        this.$('.nothingMatchedFilter').toggle(nothingMatched && !this.collection.fetchingNextPage);
        makeSortable = !nothingMatched && !this.activeFilters.length && !this.isShowingAnnouncements() && this.options.permissions.moderate;
        if (makeSortable) {
          return $list.sortable({
            axis: 'y',
            cancel: 'a',
            containment: $list,
            cursor: 'ns-resize',
            handle: '.discussion-drag-handle',
            tolerance: 'pointer'
          });
        } else if ($list.is(':ui-sortable')) {
          return $list.sortable('destroy');
        }
      };

      IndexView.prototype.addDiscussionTopicToList = function(discussionTopic) {
        var view;

        if (this.modelMeetsFilterRequirements(discussionTopic)) {
          view = new DiscussionTopicSummaryView({
            model: discussionTopic,
            permissions: this.options.permissions
          });
          return this.$('.discussionTopicIndexList').append(view.render().el);
        }
      };

      IndexView.prototype.fetchedNextPage = function() {
        var $list;

        $list = this.$('.discussionTopicIndexList');
        if (this.collection.length && !$list.length) {
          return this.render();
        } else {
          return this.renderList();
        }
      };

      IndexView.prototype.fetchedLastPage = function() {
        this.lastPageFetched = true;
        if (!this.collection.length) {
          return this.render();
        }
      };

      IndexView.prototype.toggleActionsForSelectedDiscussions = function() {
        var $actions, atLeastOneSelected, checkLock, selectedTopics;

        selectedTopics = this.selectedTopics();
        atLeastOneSelected = selectedTopics.length > 0;
        $actions = this.$('#actionsForSelectedDiscussions').toggle(atLeastOneSelected);
        if (atLeastOneSelected) {
          checkLock = _.any(selectedTopics, function(model) {
            return model.get('locked');
          });
          $actions.find('#lock').prop('checked', checkLock).button({
            text: false,
            icons: {
              primary: 'ui-icon-locked'
            }
          });
          $actions.find('#delete').button({
            text: false,
            icons: {
              primary: 'ui-icon-trash'
            }
          });
          return $actions.buttonset();
        }
      };

      IndexView.prototype.toggleLockingSelectedTopics = function() {
        var lock;

        lock = this.$('#lock').is(':checked');
        return _.invoke(this.selectedTopics(), 'updateOneAttribute', 'locked', lock);
      };

      IndexView.prototype.destroySelectedTopics = function() {
        var message, selectedTopics;

        selectedTopics = this.selectedTopics();
        message = this.isShowingAnnouncements() ? I18n.t('confirm_delete_announcement', {
          one: 'Are you sure you want to delete this announcement?',
          other: 'Are you sure you want to delete these %{count} announcements?'
        }, {
          count: selectedTopics.length
        }) : I18n.t('confirm_delete_discussion_topic', {
          one: 'Are you sure you want to delete this discussion topic?',
          other: 'Are you sure you want to delete these %{count} discussion topics?'
        }, {
          count: selectedTopics.length
        });
        if (confirm(message)) {
          _(selectedTopics).invoke('destroy');
          return this.toggleActionsForSelectedDiscussions();
        }
      };

      IndexView.prototype.selectedTopics = function() {
        return this.collection.filter(function(model) {
          return model.selected;
        });
      };

      IndexView.prototype.modelMeetsFilterRequirements = function(model) {
        var _this = this;

        return _.all(this.activeFilters(), function(fn, key) {
          return fn.call(model, _this[key]);
        });
      };

      IndexView.prototype.handleSortUpdate = function(event, ui) {
        var id, otherId;

        id = ui.item.data('id');
        otherId = ui.item.next('.discussion-topic').data('id');
        return this.collection.get(id).positionAfter(otherId);
      };

      IndexView.prototype.activeFilters = function() {
        var fn, key, res, _ref1;

        res = {};
        _ref1 = this.filters;
        for (key in _ref1) {
          fn = _ref1[key];
          if (this[key]) {
            res[key] = fn;
          }
        }
        return res;
      };

      IndexView.prototype.handleFilterChange = function(event) {
        var input, val;

        input = event.target;
        val = input.type === "checkbox" ? input.checked : input.value;
        if (this[input.id] !== val) {
          this[input.id] = val;
          this.renderList();
          return this.collection.trigger('aBogusEventToCauseYouToFetchNextPageIfNeeded');
        }
      };

      IndexView.prototype.filters = {
        onlyGraded: function() {
          return this.get('assignment_id');
        },
        onlyUnread: function() {
          return (this.get('read_state') === 'unread') || this.get('unread_count');
        },
        searchTerm: function(term) {
          var pattern, regexp, words, _ref1, _ref2;

          words = term.match(/\w+/ig);
          pattern = "(" + (_.uniq(words).join('|')) + ")";
          regexp = new RegExp(pattern, "igm");
          return ((_ref1 = this.get('author')) != null ? (_ref2 = _ref1.display_name) != null ? _ref2.match(regexp) : void 0 : void 0) || this.get('title').match(regexp) || this.summary().match(regexp);
        }
      };

      IndexView.prototype.isShowingAnnouncements = function() {
        return this.collection.constructor === AnnouncementsCollection;
      };

      IndexView.prototype.toJSON = function() {
        var collectionProps, filterProps, new_topic_url;

        new_topic_url = this.collection.url().replace('/api/v1', '') + '/new';
        if (this.isShowingAnnouncements()) {
          new_topic_url = (new_topic_url + '?is_announcement=true').replace(this.collection._stringToAppendToURL, '');
        }
        filterProps = _.pick(this, _.keys(this.filters));
        collectionProps = _.pick(this.collection, ['atLeastOnePageFetched', 'length']);
        return _.extend({
          new_topic_url: new_topic_url,
          options: this.options,
          showingAnnouncements: this.isShowingAnnouncements(),
          lastPageFetched: this.lastPageFetched
        }, filterProps, collectionProps);
      };

      return IndexView;

    })(PaginatedView);
  });

}).call(this);
