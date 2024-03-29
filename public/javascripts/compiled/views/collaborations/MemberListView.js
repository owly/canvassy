(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/models/Group', 'compiled/models/User', 'compiled/collections/CollaboratorCollection', 'jst/collaborations/collaborator'], function(_arg, _arg1, Group, User, CollaboratorCollection, collaboratorTemplate) {
    var MemberListView, View, extend, filter, map, _ref;

    extend = _arg.extend, filter = _arg.filter, map = _arg.map;
    View = _arg1.View;
    return MemberListView = (function(_super) {
      __extends(MemberListView, _super);

      function MemberListView() {
        this.onFetch = __bind(this.onFetch, this);
        this.publishCollection = __bind(this.publishCollection, this);
        this.deselectCollaborator = __bind(this.deselectCollaborator, this);
        this.render = __bind(this.render, this);        _ref = MemberListView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MemberListView.prototype.events = {
        'click li a': 'removeCollaborator',
        'click .remove-all': 'removeAll'
      };

      MemberListView.prototype.initialize = function() {
        this.collection = this.createCollection();
        this.cacheElements();
        return this.attachEvents();
      };

      MemberListView.prototype.createCollection = function() {
        return new CollaboratorCollection;
      };

      MemberListView.prototype.cacheElements = function() {
        this.$list = this.$el.find('ul');
        this.$removeBtn = this.$el.find('.remove-button');
        return this.$instructions = this.$el.find('.member-instructions');
      };

      MemberListView.prototype.attachEvents = function() {
        return this.collection.on('add remove reset', this.render).on('reset', this.onFetch).on('remove', this.deselectCollaborator);
      };

      MemberListView.prototype.render = function() {
        var collaborators,
          _this = this;

        if (this.options.currentUser) {
          this.removeCurrentUser();
        }
        this.updateElementVisibility();
        collaborators = this.collection.map(function(c) {
          return collaboratorTemplate(extend(c.toJSON(), {
            type: c.modelType || c.get('type'),
            id: c.get('collaborator_id') || c.get('id'),
            name: c.get('sortable_name') || c.get('name'),
            selected: true
          }));
        });
        this.$list.html(collaborators.join(''));
        if ((this.currentIndex != null) && this.hasFocus) {
          this.updateFocus();
        }
        return this.hasFocus = false;
      };

      MemberListView.prototype.updateFocus = function() {
        var $target;

        $target = $(this.$el.find('li').get(this.currentIndex)).find('a');
        if ($target.length === 0) {
          $target = $(this.$el.find('li').get(this.currentIndex - 1)).find('a');
        }
        if ($target.length === 0) {
          $target = this.$el.parents('.collaborator-picker').find('.list-wrapper:first ul:visible');
        }
        return $target.focus();
      };

      MemberListView.prototype.removeCollaborator = function(e) {
        var id;

        e.preventDefault();
        id = $(e.currentTarget).data('id');
        this.currentIndex = $(e.target).parent().index();
        this.hasFocus = true;
        return this.collection.remove(id);
      };

      MemberListView.prototype.removeAll = function(e) {
        e.preventDefault();
        return this.collection.remove(this.collection.models);
      };

      MemberListView.prototype.updateElementVisibility = function() {
        if (this.collection.length === 0) {
          this.$removeBtn.hide();
          return this.$instructions.show();
        } else {
          this.$removeBtn.show();
          return this.$instructions.hide();
        }
      };

      MemberListView.prototype.deselectCollaborator = function(model) {
        if (model.modelType == null) {
          model = this.typecastMember(model);
        }
        return this.trigger('collection:remove', model);
      };

      MemberListView.prototype.typecastMember = function(model) {
        var props;

        props = extend(model.toJSON(), {
          id: model.get('collaborator_id')
        });
        if (model.get('type') === 'user') {
          return new User(extend(props, {
            sortable_name: props.name
          }));
        } else {
          return new Group(props);
        }
      };

      MemberListView.prototype.publishCollection = function(collection) {
        var groups, users;

        users = collection.filter(function(m) {
          return m.get('type') === 'user';
        });
        groups = collection.filter(function(m) {
          return m.get('type') === 'group';
        });
        this.trigger('collection:reset', 'user', map(users, this.typecastMember));
        return this.trigger('collection:reset', 'group', map(groups, this.typecastMember));
      };

      MemberListView.prototype.onFetch = function() {
        var url;

        this.publishCollection(this.collection);
        url = this.getNextPage(this.currentXHR.getResponseHeader('Link'));
        if (url) {
          this.collection.url = url;
          this.currentXHR = this.collection.fetch({
            add: true
          });
          return $.when(this.currentXHR).then(this.onFetch);
        }
      };

      MemberListView.prototype.getNextPage = function(header) {
        var nextPage;

        nextPage = filter(header.split(','), function(l) {
          return l.match(/next/);
        })[0];
        if (nextPage) {
          return nextPage.match(/http[^>]+/)[0];
        } else {
          return false;
        }
      };

      MemberListView.prototype.removeCurrentUser = function() {
        return this.collection.remove(this.options.currentUser, {
          silent: true
        });
      };

      return MemberListView;

    })(View);
  });

}).call(this);
