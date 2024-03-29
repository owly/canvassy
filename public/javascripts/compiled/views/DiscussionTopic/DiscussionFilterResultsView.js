(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jst/discussions/noResults', 'underscore', 'compiled/views/DiscussionTopic/FilterEntryView', 'compiled/views/DiscussionTopic/EntryCollectionView', 'compiled/collections/EntryCollection', 'compiled/regexp/rEscape'], function(noResultsTemplate, _, FilterEntryView, EntryCollectionView, EntryCollection, rEscape) {
    var DiscussionFilterResultsView, _ref;

    return DiscussionFilterResultsView = (function(_super) {
      __extends(DiscussionFilterResultsView, _super);

      function DiscussionFilterResultsView() {
        this.queryFilter = __bind(this.queryFilter, this);
        this.unreadFilter = __bind(this.unreadFilter, this);
        this.renderOrTeardownResults = __bind(this.renderOrTeardownResults, this);
        this.render = __bind(this.render, this);
        this.clearModel = __bind(this.clearModel, this);
        this.add = __bind(this.add, this);
        this.resetCollection = __bind(this.resetCollection, this);        _ref = DiscussionFilterResultsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionFilterResultsView.prototype.defaults = _.extend({}, EntryCollectionView.prototype.defaults, {
        descendants: 0,
        displayShowMore: true,
        threaded: true
      });

      DiscussionFilterResultsView.prototype.initialize = function() {
        DiscussionFilterResultsView.__super__.initialize.apply(this, arguments);
        return this.allData = this.options.allData;
      };

      DiscussionFilterResultsView.prototype.attach = function() {
        return this.model.on('change', this.renderOrTeardownResults);
      };

      DiscussionFilterResultsView.prototype.setAllReadState = function(newReadState) {
        if (this.collection != null) {
          return this.collection.fullCollection.each(function(entry) {
            return entry.set('read_state', newReadState);
          });
        }
      };

      DiscussionFilterResultsView.prototype.resetCollection = function(models) {
        var collection,
          _this = this;

        collection = new EntryCollection(models, {
          perPage: 10
        });
        this.collection = collection.getPageAsCollection(0);
        this.collection.on('add', this.add);
        this.render();
        return this.collection.on('change:read_state', function(entry, read_state) {
          var $el;

          _this.trigger('readStateChanged', entry.id, read_state);
          $el = $("#entry-" + entry.id);
          if ($el.length) {
            entry = $el.data('view').model;
            if (entry) {
              return entry.set('read_state', read_state);
            }
          }
        });
      };

      DiscussionFilterResultsView.prototype.add = function(entry) {
        var view,
          _this = this;

        view = new FilterEntryView({
          model: entry
        });
        view.render();
        view.on('click', function() {
          _this.clearModel();
          return setTimeout(function() {
            return _this.trigger('clickEntry', view.model);
          }, 1);
        });
        return this.list.append(view.el);
      };

      DiscussionFilterResultsView.prototype.toggleRead = function(e) {
        e.preventDefault();
        if (this.model.get('read_state') === 'read') {
          return this.model.markAsUnread();
        } else {
          return this.model.markAsRead();
        }
      };

      DiscussionFilterResultsView.prototype.clearModel = function() {
        return this.model.reset();
      };

      DiscussionFilterResultsView.prototype.render = function() {
        if (this.collection != null) {
          DiscussionFilterResultsView.__super__.render.apply(this, arguments);
        }
        this.trigger('render');
        return this.$el.removeClass('hidden');
      };

      DiscussionFilterResultsView.prototype.renderOrTeardownResults = function() {
        var entry, filter, filterFn, id, results, value, _ref1;

        if (this.model.hasFilter()) {
          results = (function() {
            var _ref1, _results;

            _ref1 = this.allData.flattened;
            _results = [];
            for (id in _ref1) {
              entry = _ref1[id];
              _results.push(entry);
            }
            return _results;
          }).call(this);
          _ref1 = this.model.toJSON();
          for (filter in _ref1) {
            value = _ref1[filter];
            filterFn = this["" + filter + "Filter"];
            if (filterFn) {
              results = filterFn(value, results);
            }
          }
          if (results.length) {
            return this.resetCollection(results);
          } else {
            return this.renderNoResults();
          }
        } else if (!this.model.hasFilter()) {
          this.$el.addClass('hidden');
          return this.trigger('hide');
        }
      };

      DiscussionFilterResultsView.prototype.renderNoResults = function() {
        this.render();
        return this.$el.html(noResultsTemplate);
      };

      DiscussionFilterResultsView.prototype.unreadFilter = function(unread, results) {
        if (!unread) {
          return results;
        }
        unread = _.filter(results, function(entry) {
          return entry.read_state === 'unread';
        });
        return unread.sort(function(a, b) {
          return Date.parse(a.created_at) - Date.parse(b.created_at);
        });
      };

      DiscussionFilterResultsView.prototype.queryFilter = function(query, results) {
        var regexps, word;

        regexps = (function() {
          var _i, _len, _ref1, _results;

          _ref1 = (query != null ? query : '').trim().split(/\s+/g);
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            word = _ref1[_i];
            _results.push(new RegExp(rEscape(word), 'i'));
          }
          return _results;
        })();
        if (!regexps.length) {
          return results;
        }
        return _.filter(results, function(entry) {
          var concat, regexp, _i, _len;

          concat = "" + entry.message + "\n" + entry.author.display_name + " ";
          for (_i = 0, _len = regexps.length; _i < _len; _i++) {
            regexp = regexps[_i];
            if (!regexp.test(concat)) {
              return false;
            }
          }
          return true;
        });
      };

      return DiscussionFilterResultsView;

    })(EntryCollectionView);
  });

}).call(this);
