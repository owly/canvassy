(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/groups/manage/assignToGroupMenu'], function(_arg, template) {
    var AssignToGroupMenu, View, _ref;

    View = _arg.View;
    return AssignToGroupMenu = (function(_super) {
      __extends(AssignToGroupMenu, _super);

      function AssignToGroupMenu() {
        this.hide = __bind(this.hide, this);        _ref = AssignToGroupMenu.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignToGroupMenu.prototype.initialize = function() {
        var $body;

        AssignToGroupMenu.__super__.initialize.apply(this, arguments);
        this.render();
        $body = $(document.body);
        $body.on('click', this.hide);
        this.$el.appendTo($body);
        this.$el.hide();
        return this.collection.on('change add remove reset', this.render);
      };

      AssignToGroupMenu.prototype.events = {
        'click .set-group': 'setGroup'
      };

      AssignToGroupMenu.prototype.tagName = 'div';

      AssignToGroupMenu.prototype.className = 'assign-to-group-menu popover content-top horizontal';

      AssignToGroupMenu.prototype.template = template;

      AssignToGroupMenu.prototype.showBy = function($target) {
        this.render();
        this.$el.show();
        return this.$el.position({
          my: 'left+6 top-47',
          at: 'right center',
          of: $target
        });
      };

      AssignToGroupMenu.prototype.hide = function() {
        return this.$el.hide();
      };

      AssignToGroupMenu.prototype.setGroup = function(e) {
        e.preventDefault();
        this.model.set('groupId', $(e.target).data('group-id'));
        return this.hide();
      };

      AssignToGroupMenu.prototype.toJSON = function() {
        return {
          groups: this.collection.toJSON()
        };
      };

      return AssignToGroupMenu;

    })(View);
  });

}).call(this);
