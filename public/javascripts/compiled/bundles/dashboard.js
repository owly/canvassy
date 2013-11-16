(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['underscore', 'Backbone', 'jquery', 'i18n!dashboard', 'compiled/util/newCourseForm', 'jquery.disableWhileLoading'], function(_, _arg, $, I18n, newCourseForm) {
    var DashboardView, View, rightSide, _ref;

    View = _arg.View;
    if (ENV.DASHBOARD_SIDEBAR_URL) {
      rightSide = $('#right-side');
      rightSide.disableWhileLoading($.get(ENV.DASHBOARD_SIDEBAR_URL, function(data) {
        rightSide.html(data);
        return newCourseForm();
      }));
    }
    DashboardView = (function(_super) {
      __extends(DashboardView, _super);

      function DashboardView() {
        _ref = DashboardView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DashboardView.prototype.el = document.body;

      DashboardView.prototype.events = {
        'click .stream_header': 'expandDetails',
        'click .stream_header .links a': 'stopPropagation',
        'click .stream-details': 'handleDetailsClick',
        'beforeremove': 'updateCategoryCounts'
      };

      DashboardView.prototype.expandDetails = function(event) {
        var details, expanded, header, text;

        header = $(event.currentTarget);
        details = header.next('.details_container');
        expanded = details.attr('aria-expanded') === 'true';
        details.attr('aria-expanded', !expanded);
        details.toggle(!expanded);
        text = expanded ? I18n.t('show_more', 'Show More') + ' ▼' : I18n.t('show_less', 'Show Less') + ' ▲';
        return header.find('.toggle-details').text(text);
      };

      DashboardView.prototype.handleDetailsClick = function(event) {
        var link, row;

        row = $(event.target).closest('tr');
        return link = row.find('a');
      };

      DashboardView.prototype.updateCategoryCounts = function(event) {
        var items, parent;

        parent = $(event.target).closest('li[class^=stream-]');
        items = parent.find('tbody tr').filter(':visible');
        if (items.length) {
          return parent.find('.count').text(items.length);
        } else {
          return parent.remove();
        }
      };

      return DashboardView;

    })(View);
    return new DashboardView;
  });

}).call(this);
