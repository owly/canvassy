(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/PaginatedCollectionView', 'compiled/views/groups/manage/GroupUserView', 'jst/groups/manage/groupUsers'], function(_, PaginatedCollectionView, GroupUserView, template) {
    var GroupUsersView, _ref;

    return GroupUsersView = (function(_super) {
      __extends(GroupUsersView, _super);

      function GroupUsersView() {
        this.toggleGroupClass = __bind(this.toggleGroupClass, this);
        this.hideAssignToGroup = __bind(this.hideAssignToGroup, this);
        this.showAssignToGroup = __bind(this.showAssignToGroup, this);        _ref = GroupUsersView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUsersView.optionProperty('assignToGroupMenu');

      GroupUsersView.optionProperty('groupsCollection');

      GroupUsersView.prototype.initialize = function(options) {
        GroupUsersView.__super__.initialize.call(this, _.extend({}, options, {
          itemView: GroupUserView,
          itemViewOptions: {
            canAssignToGroup: options.canAssignToGroup
          }
        }));
        if (this.options.canAssignToGroup && this.assignToGroupMenu) {
          return this.groupsCollection.on("add remove", this.toggleGroupClass);
        }
      };

      GroupUsersView.prototype.template = template;

      GroupUsersView.prototype.events = {
        'click .assign-to-group': 'showAssignToGroup',
        'focus .assign-to-group': 'showAssignToGroup',
        'blur .assign-to-group': 'hideAssignToGroup'
      };

      GroupUsersView.prototype.showAssignToGroup = function(e) {
        var $target;

        e.preventDefault();
        e.stopPropagation();
        $target = $(e.target);
        this.assignToGroupMenu.model = this.collection.get(parseInt($target.data('user-id'), 10));
        return this.assignToGroupMenu.showBy($target);
      };

      GroupUsersView.prototype.hideAssignToGroup = function() {
        return this.assignToGroupMenu.hide();
      };

      GroupUsersView.prototype.canAssignToGroup = function() {
        return this.options.canAssignToGroup && this.groupsCollection.length;
      };

      GroupUsersView.prototype.toggleGroupClass = function() {
        return this.$el.toggleClass('group-category-empty', this.groupsCollection.length === 0);
      };

      return GroupUsersView;

    })(PaginatedCollectionView);
  });

}).call(this);
