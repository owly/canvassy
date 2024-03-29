(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/quickStartBar/models/Assignment', 'jst/quickStartBarTemplates/assignment', 'jquery.instructure_date_and_time'], function(_arg, Assignment, template) {
    var AssignmentView, View, _ref;

    View = _arg.View;
    return AssignmentView = (function(_super) {
      __extends(AssignmentView, _super);

      function AssignmentView() {
        _ref = AssignmentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentView.prototype.render = function() {
        var html;

        html = template(this.model.toJSON);
        this.$el.html(html);
        return this.filter();
      };

      AssignmentView.prototype.afterRender = function() {
        return this.$('.dateField').datetime_field();
      };

      return AssignmentView;

    })(View);
  });

}).call(this);
