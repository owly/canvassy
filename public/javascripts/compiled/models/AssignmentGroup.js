(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var AssignmentGroup, _ref;

    return AssignmentGroup = (function(_super) {
      __extends(AssignmentGroup, _super);

      function AssignmentGroup() {
        _ref = AssignmentGroup.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroup.prototype.resourceName = 'assignment_groups';

      return AssignmentGroup;

    })(Backbone.Model);
  });

}).call(this);
