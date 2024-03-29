(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!collaborations', 'Backbone', 'compiled/views/collaborations/ListView', 'compiled/views/collaborations/MemberListView', 'jst/collaborations/CollaboratorPicker'], function(I18n, _arg, ListView, MemberListView, widgetTemplate) {
    var CollaboratorPickerView, View, _ref;

    View = _arg.View;
    return CollaboratorPickerView = (function(_super) {
      __extends(CollaboratorPickerView, _super);

      function CollaboratorPickerView() {
        this.updateListFilters = __bind(this.updateListFilters, this);
        this.deselectCollaborator = __bind(this.deselectCollaborator, this);        _ref = CollaboratorPickerView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CollaboratorPickerView.prototype.template = widgetTemplate;

      CollaboratorPickerView.prototype.events = {
        'change .filters input': 'filterList'
      };

      CollaboratorPickerView.prototype.fetchOptions = {
        data: {
          per_page: 50
        }
      };

      CollaboratorPickerView.prototype.initialize = function() {
        this.cacheElements();
        this.createLists();
        this.attachEvents();
        return this.includeGroups = !window.location.pathname.match(/groups/);
      };

      CollaboratorPickerView.prototype.cacheElements = function() {
        this.$template = $(this.template({
          id: this.options.id || 'new'
        }));
        this.$userList = this.$template.find('.available-users');
        this.$groupList = this.$template.find('.available-groups');
        this.$memberList = this.$template.find('.members-list-wrapper');
        return this.$listFilter = this.$template.find('.filters');
      };

      CollaboratorPickerView.prototype.attachEvents = function() {
        this.groupList.on('collection:remove', this.memberList.collection.add.bind(this.memberList.collection));
        this.userList.on('collection:remove', this.memberList.collection.add.bind(this.memberList.collection));
        this.memberList.on('collection:remove', this.deselectCollaborator);
        return this.memberList.on('collection:reset', this.updateListFilters);
      };

      CollaboratorPickerView.prototype.createLists = function() {
        this.userList = new ListView({
          currentUser: ENV.current_user_id,
          el: this.$userList,
          fetchOptions: this.fetchOptions,
          type: 'user'
        });
        this.groupList = new ListView({
          el: this.$groupList,
          fetchOptions: this.fetchOptions,
          type: 'group'
        });
        return this.memberList = new MemberListView({
          currentUser: ENV.current_user_id,
          el: this.$memberList
        });
      };

      CollaboratorPickerView.prototype.fetchCollaborators = function() {
        this.userList.collection.fetch(this.fetchOptions);
        if (this.includeGroups) {
          this.groupList.collection.fetch(this.fetchOptions);
        }
        if (this.options.edit) {
          this.memberList.collection.url = "/api/v1/collaborations/" + this.options.id + "/members";
          return this.memberList.currentXHR = this.memberList.collection.fetch(this.fetchOptions);
        }
      };

      CollaboratorPickerView.prototype.render = function() {
        this.$el.append(this.$template);
        this.fetchCollaborators();
        if (this.includeGroups) {
          this.$listFilter.buttonset();
        } else {
          this.$listFilter.hide();
        }
        return this;
      };

      CollaboratorPickerView.prototype.filterList = function(e) {
        var el;

        el = $(e.currentTarget).val();
        this.$el.find('.available-lists ul').hide();
        return this.$el.find("." + el).show();
      };

      CollaboratorPickerView.prototype.deselectCollaborator = function(collaborator) {
        var list;

        list = collaborator.modelType === 'user' ? this.userList : this.groupList;
        list.removeFromFilter(collaborator);
        return list.collection.add(collaborator);
      };

      CollaboratorPickerView.prototype.updateListFilters = function(type, models) {
        var list;

        list = type === 'user' ? this.userList : this.groupList;
        return list.updateFilter(models);
      };

      return CollaboratorPickerView;

    })(View);
  });

}).call(this);
