(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/PaginatedView', 'compiled/collections/UserCollection', 'compiled/collections/GroupCollection', 'jst/collaborations/collaborator'], function(_arg, PaginatedView, UserCollection, GroupCollection, collaboratorTemplate) {
    var ListView, each, extend, flatten, reject, _ref;

    each = _arg.each, extend = _arg.extend, flatten = _arg.flatten, reject = _arg.reject;
    return ListView = (function(_super) {
      __extends(ListView, _super);

      function ListView() {
        this.renderCollaborator = __bind(this.renderCollaborator, this);
        this.render = __bind(this.render, this);        _ref = ListView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ListView.prototype.filteredMembers = [];

      ListView.prototype.events = {
        'click a': 'selectCollaborator'
      };

      ListView.prototype.initialize = function() {
        this.collection = this.createCollection(this.options.type);
        this.paginationScrollContainer = this.$el.parents('.list-wrapper');
        this.attachEvents();
        return ListView.__super__.initialize.call(this, {
          fetchOptions: this.options.fetchOptions
        });
      };

      ListView.prototype.createCollection = function(type) {
        if (type == null) {
          type = 'user';
        }
        if (type === 'user') {
          return new UserCollection({
            comparator: function(user) {
              return user.get('sortable_name');
            }
          });
        } else {
          return new GroupCollection;
        }
      };

      ListView.prototype.attachEvents = function() {
        var _this = this;

        return this.collection.on('add remove reset', this.render).on('remove', function(model) {
          return _this.trigger('collection:remove', model);
        });
      };

      ListView.prototype.render = function() {
        var collaborators;

        this.updateFilter([]);
        collaborators = this.collection.map(this.renderCollaborator);
        this.$el.html(collaborators.join(''));
        if ((this.currentIndex != null) && this.hasFocus) {
          this.updateFocus();
        }
        this.hasFocus = false;
        return ListView.__super__.render.apply(this, arguments);
      };

      ListView.prototype.renderCollaborator = function(collaborator) {
        var binding;

        if (collaborator.get('id') === this.options.currentUser) {
          return '';
        } else {
          binding = extend(collaborator.toJSON(), {
            name: collaborator.get('sortable_name') || collaborator.get('name'),
            type: collaborator.modelType
          });
          return collaboratorTemplate(binding);
        }
      };

      ListView.prototype.updateFocus = function() {
        var $target;

        $target = $(this.$el.find('li').get(this.currentIndex)).find('a');
        if ($target.length === 0) {
          $target = $(this.$el.find('li').get(this.currentIndex - 1)).find('a');
        }
        if ($target.length === 0) {
          $target = this.$el.parents('.collaborator-picker').find('.members-list');
        }
        return $target.focus();
      };

      ListView.prototype.selectCollaborator = function(e) {
        var id;

        e.preventDefault();
        id = $(e.currentTarget).data('id');
        this.currentIndex = $(e.currentTarget).parent().index();
        this.hasFocus = true;
        return this.collection.remove(id);
      };

      ListView.prototype.updateFilter = function(models) {
        var _this = this;

        return setTimeout(function() {
          _this.filteredMembers = flatten([_this.filteredMembers, models]);
          return each(_this.filteredMembers, function(m) {
            return _this.collection.remove(m, {
              silent: true
            });
          });
        }, 0);
      };

      ListView.prototype.removeFromFilter = function(model) {
        return this.filteredMembers = reject(this.filteredMembers, function(m) {
          return m.get('id') === model.get('id');
        });
      };

      return ListView;

    })(PaginatedView);
  });

}).call(this);
