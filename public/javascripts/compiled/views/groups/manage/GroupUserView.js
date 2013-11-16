(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'jst/groups/manage/groupUser'], function(_, _arg, template) {
    var GroupUserView, View, _ref;

    View = _arg.View;
    return GroupUserView = (function(_super) {
      __extends(GroupUserView, _super);

      function GroupUserView() {
        _ref = GroupUserView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupUserView.optionProperty('canAssignToGroup');

      GroupUserView.prototype.tagName = 'li';

      GroupUserView.prototype.className = 'groupUser';

      GroupUserView.prototype.template = template;

      GroupUserView.prototype.attach = function() {
        return this.model.on('change', this.render, this);
      };

      GroupUserView.prototype.toJSON = function() {
        return _.extend({}, this, GroupUserView.__super__.toJSON.apply(this, arguments));
      };

      return GroupUserView;

    })(View);
  });

}).call(this);
