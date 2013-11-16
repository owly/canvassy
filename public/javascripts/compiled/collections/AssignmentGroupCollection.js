(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/AssignmentGroup'], function(Backbone, AssignmentGroup) {
    var AssignmentGroupCollection, _ref;

    return AssignmentGroupCollection = (function(_super) {
      __extends(AssignmentGroupCollection, _super);

      function AssignmentGroupCollection() {
        _ref = AssignmentGroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupCollection.prototype.model = AssignmentGroup;

      return AssignmentGroupCollection;

    })(Backbone.Collection);
  });

}).call(this);
