(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/QuickStartBar/BaseItemView', 'underscore', 'compiled/models/QuickStartAssignment', 'jst/quickStartBar/assignment', 'compiled/widget/ContextSearch', 'jquery.instructure_date_and_time', 'jquery.disableWhileLoading'], function(BaseItemView, _, QuickStartAssignment, template, ContextSearch) {
    var AssignmentView, _ref;

    return AssignmentView = (function(_super) {
      __extends(AssignmentView, _super);

      function AssignmentView() {
        _ref = AssignmentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentView.prototype.template = template;

      AssignmentView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of a class to assign this to...",
        selector: {
          baseData: {
            type: 'course'
          },
          noExpand: true,
          browser: false
        }
      };

      AssignmentView.prototype.save = function(json) {
        var dfds,
          _this = this;

        json.date = this.$('.datetime_suggest').text();
        dfds = _.map(json.course_ids, function(id) {
          var model;

          model = new QuickStartAssignment(json);
          model.set('course_id', id.replace(/^course_/, ''));
          return model.save();
        });
        return $.when.apply($, dfds);
      };

      AssignmentView.type = 'assignment';

      AssignmentView.title = function() {
        return AssignmentView.__super__.constructor.title.call(this, 'assignment', 'Assignment');
      };

      return AssignmentView;

    })(BaseItemView);
  });

}).call(this);
