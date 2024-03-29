(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/roles/manageRoles', 'compiled/views/roles/PermissionButtonView', 'compiled/views/roles/RoleHeaderView'], function($, _, Backbone, template, PermissionButtonView, RoleHeaderView) {
    var ManageRolesView, _ref;

    return ManageRolesView = (function(_super) {
      __extends(ManageRolesView, _super);

      function ManageRolesView() {
        this.renderTable = __bind(this.renderTable, this);        _ref = ManageRolesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ManageRolesView.prototype.template = template;

      ManageRolesView.prototype.className = 'manage-roles-table';

      ManageRolesView.prototype.initialize = function() {
        ManageRolesView.__super__.initialize.apply(this, arguments);
        if (this.options.permission_groups) {
          this.permission_groups = this.options.permission_groups;
        }
        this.collection.on('add', this.renderTable);
        return this.collection.on('remove', this.renderTable);
      };

      ManageRolesView.prototype.afterRender = function() {
        return this.renderTable();
      };

      ManageRolesView.prototype.renderHeader = function() {
        var _this = this;

        this.$el.find('thead tr').html("<th>Permissions</th>");
        return this.collection.each(function(role) {
          var roleHeaderView;

          roleHeaderView = new RoleHeaderView({
            model: role
          });
          return _this.$el.find('thead tr').append(roleHeaderView.render().el);
        });
      };

      ManageRolesView.prototype.renderTable = function() {
        var _this = this;

        this.renderHeader();
        this.$el.find('tbody').html('');
        return _.each(this.permission_groups, function(permission_group) {
          var permission_group_header;

          permission_group_header = "<tr class=\"toolbar\">\n  <th colspan=\"" + (_this.collection.length + 1) + "\">" + (permission_group.group_name.toUpperCase()) + "</th>\n</tr>";
          _this.$el.find('tbody').append(permission_group_header);
          return _.each(permission_group.group_permissions, function(permission_row) {
            var permission_row_html;

            permission_row_html = "<tr>\n  <th role=\"rowheader\">" + permission_row.label + "</th>\n</tr>";
            _this.$el.find('tbody').append(permission_row_html);
            return _this.collection.each(function(role) {
              var permissionButtonView;

              permissionButtonView = new PermissionButtonView({
                model: role,
                permission_name: permission_row.permission_name
              });
              return _this.$el.find("tr").last().append(permissionButtonView.render().el);
            });
          });
        });
      };

      return ManageRolesView;

    })(Backbone.View);
  });

}).call(this);
