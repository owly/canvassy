(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var Group, Model, _ref;

    Model = _arg.Model;
    return Group = (function(_super) {
      __extends(Group, _super);

      function Group() {
        _ref = Group.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Group.prototype.modelType = 'group';

      Group.prototype.resourceName = 'groups';

      return Group;

    })(Model);
  });

}).call(this);
