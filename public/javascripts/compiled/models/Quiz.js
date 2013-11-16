(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/collections/AssignmentOverrideCollection'], function(_arg, AssignmentOverrideCollection) {
    var Model, Quiz, _ref;

    Model = _arg.Model;
    return Quiz = (function(_super) {
      __extends(Quiz, _super);

      function Quiz() {
        _ref = Quiz.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Quiz.prototype.initialize = function(_arg1) {
        var assignmentOverrides, assignment_overrides;

        assignment_overrides = _arg1.assignment_overrides;
        assignmentOverrides = new AssignmentOverrideCollection(assignment_overrides);
        return this.set('assignment_overrides', assignmentOverrides, {
          silent: true
        });
      };

      Quiz.prototype.defaults = {
        due_at: null,
        unlock_at: null,
        lock_at: null
      };

      return Quiz;

    })(Model);
  });

}).call(this);
