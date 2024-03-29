(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!course_statistics', 'jquery', 'underscore', 'Backbone', 'jst/recentStudent'], function(I18n, $, _, Backbone, RecentStudentTemplate) {
    var RecentStudentView, _ref;

    return RecentStudentView = (function(_super) {
      __extends(RecentStudentView, _super);

      function RecentStudentView() {
        _ref = RecentStudentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RecentStudentView.prototype.tagName = 'li';

      RecentStudentView.prototype.template = RecentStudentTemplate;

      RecentStudentView.prototype.toJSON = function() {
        var data, date;

        data = this.model.toJSON();
        if (data.last_login != null) {
          date = $.fudgeDateForProfileTimezone(new Date(data.last_login), false);
          data.last_login = I18n.t('#time.event', '%{date} at %{time}', {
            date: I18n.l('#date.formats.short', date),
            time: I18n.l('#time.formats.tiny', date)
          });
        } else {
          data.last_login = I18n.t('unknown', 'unknown');
        }
        return data;
      };

      return RecentStudentView;

    })(Backbone.View);
  });

}).call(this);
