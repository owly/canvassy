(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/QuickStartBar/BaseItemView', 'underscore', 'compiled/models/DiscussionTopic', 'jst/quickStartBar/discussion', 'jquery.instructure_date_and_time', 'vendor/jquery.placeholder'], function(BaseItemView, _, Discussion, template) {
    var DiscussionView, _ref;

    return DiscussionView = (function(_super) {
      __extends(DiscussionView, _super);

      function DiscussionView() {
        _ref = DiscussionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionView.prototype.events = _.extend({
        'change [name=graded]': 'onGradedClick'
      }, BaseItemView.prototype.events);

      DiscussionView.prototype.template = template;

      DiscussionView.prototype.contextSearchOptions = {
        fakeInputWidth: '100%',
        contexts: ENV.CONTEXTS,
        placeholder: "Type the name of a class to send this too...",
        selector: {
          baseData: {
            type: 'course'
          },
          noExpand: true,
          browser: false
        }
      };

      DiscussionView.prototype.onGradedClick = function(event) {
        var graded;

        graded = event.target.checked;
        this.$('[name="assignment[points_possible]"], [name="assignment[due_at]"]').prop('disabled', !graded);
        return this.$('.ui-datepicker-trigger').toggleClass('disabled', !graded);
      };

      DiscussionView.prototype.save = function(json) {
        var dfds, _ref1,
          _this = this;

        if (((_ref1 = json.assignment) != null ? _ref1.due_at : void 0) != null) {
          json.assignment.due_at = this.$('.datetime_suggest').text();
        }
        dfds = _.map(json.context_ids, function(id) {
          var model;

          model = new Discussion(json);
          model.contextCode = id;
          return model.save();
        });
        return $.when.apply($, dfds);
      };

      DiscussionView.prototype.afterRender = function() {
        DiscussionView.__super__.afterRender.apply(this, arguments);
        return this.$('.ui-datepicker-trigger').addClass('disabled');
      };

      DiscussionView.type = 'discussion';

      DiscussionView.title = function() {
        return DiscussionView.__super__.constructor.title.call(this, 'discussion', 'Discussion');
      };

      return DiscussionView;

    })(BaseItemView);
  });

}).call(this);
