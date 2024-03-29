(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!editor', 'jquery', 'underscore', 'Backbone', 'jst/roles/roleHeader'], function(I18n, $, _, Backbone, template) {
    var RoleHeaderView, _ref;

    return RoleHeaderView = (function(_super) {
      __extends(RoleHeaderView, _super);

      function RoleHeaderView() {
        this.addLoadingHeader = __bind(this.addLoadingHeader, this);        _ref = RoleHeaderView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RoleHeaderView.prototype.template = template;

      RoleHeaderView.prototype.tagName = 'th';

      RoleHeaderView.prototype.className = 'roleHeader';

      RoleHeaderView.prototype.staticRoles = ['AccountAdmin', 'AccountMembership', 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment', 'DesignerEnrollment'];

      RoleHeaderView.prototype.events = {
        "click a": "removeRole"
      };

      RoleHeaderView.prototype.initialize = function() {
        return this.model.on('destroying', this.addLoadingHeader);
      };

      RoleHeaderView.prototype.addLoadingHeader = function() {
        return this.$el.find('a').replaceWith('<img class="loading-icon" src="/images/ajax-reload-animated.gif">');
      };

      RoleHeaderView.prototype.deletable = function() {
        return !_.contains(this.staticRoles, this.model.get('role'));
      };

      RoleHeaderView.prototype.toJSON = function() {
        var json;

        json = RoleHeaderView.__super__.toJSON.apply(this, arguments);
        json['deletable'] = this.deletable();
        if (this.showBaseRoleType()) {
          json['baseRoleTip'] = I18n.t('based_on_type', "Based on %{base_type}", {
            base_type: this.model.get("base_role_type_label")
          });
        }
        return json;
      };

      RoleHeaderView.prototype.removeRole = function(event) {
        var _this = this;

        event.preventDefault();
        if (confirm(I18n.t("role.remove_role_confirmation", "If there are any users with this role, they will keep the current permissions but you will not be able to create new users with this role. Click ok to continue deleting this role."))) {
          return this.model.destroy({
            error: function(model, response) {
              alert("" + model.role + " could not be remove, contact your site admin if this continues.");
              return _this.removeLoadingIcon();
            },
            wait: true
          });
        }
      };

      RoleHeaderView.prototype.showBaseRoleType = function() {
        return !_.contains(this.staticRoles, this.model.get('role'));
      };

      RoleHeaderView.prototype.afterRender = function() {
        return this.$el.attr('role', 'columnheader');
      };

      RoleHeaderView.prototype.removeLoadingIcon = function() {
        return this.$el.find(".loading-icon").remove();
      };

      return RoleHeaderView;

    })(Backbone.View);
  });

}).call(this);
