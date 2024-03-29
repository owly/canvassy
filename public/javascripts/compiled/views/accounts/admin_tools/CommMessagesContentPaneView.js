(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'i18n!comm_messages', 'jst/accounts/admin_tools/commMessagesContentPane', 'jst/accounts/admin_tools/commMessagesSearchOverview', 'jquery.instructure_date_and_time'], function(Backbone, $, I18n, template, overviewTemplate) {
    var CommMessagesContentPaneView, _ref;

    return CommMessagesContentPaneView = (function(_super) {
      __extends(CommMessagesContentPaneView, _super);

      function CommMessagesContentPaneView() {
        this.getDisplayDateText = __bind(this.getDisplayDateText, this);
        this.renderOverviewDisplay = __bind(this.renderOverviewDisplay, this);
        this.buildOverviewText = __bind(this.buildOverviewText, this);
        this.onFail = __bind(this.onFail, this);
        this.fetchMessages = __bind(this.fetchMessages, this);        _ref = CommMessagesContentPaneView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommMessagesContentPaneView.child('searchForm', '#commMessagesSearchForm');

      CommMessagesContentPaneView.child('resultsView', '#commMessagesSearchResults');

      CommMessagesContentPaneView.prototype.template = template;

      CommMessagesContentPaneView.prototype.els = {
        '#commMessagesSearchOverview': '$overview'
      };

      CommMessagesContentPaneView.prototype.attach = function() {
        return this.collection.on('setParams', this.fetchMessages);
      };

      CommMessagesContentPaneView.prototype.fetchMessages = function() {
        this.buildOverviewText();
        return this.collection.fetch().fail(this.onFail);
      };

      CommMessagesContentPaneView.prototype.onFail = function() {
        this.collection.reset();
        return this.resultsView.detachScroll();
      };

      CommMessagesContentPaneView.prototype.buildOverviewText = function() {
        var dfd;

        dfd = $.ajax({
          url: "/users/" + ($('#userIdSearchField').val()) + ".json",
          type: 'GET',
          success: this.renderOverviewDisplay,
          error: this.$overview.hide()
        });
        return dfd.promise();
      };

      CommMessagesContentPaneView.prototype.renderOverviewDisplay = function(response) {
        var dates;

        dates = $(this.searchForm.el).toJSON();
        this.$overview.hide();
        this.$overview.html(overviewTemplate({
          user: response.name,
          start_date: this.getDisplayDateText(dates.start_time, I18n.t('from_beginning', "the beginning")),
          end_date: this.getDisplayDateText(dates.end_time, I18n.t('to_now', "now"))
        }));
        return this.$overview.show();
      };

      CommMessagesContentPaneView.prototype.getDisplayDateText = function(dateInfo, fallbackText) {
        if (dateInfo) {
          return $.parseFromISO($.dateToISO8601UTC($.unfudgeDateForProfileTimezone(dateInfo))).datetime_formatted;
        } else {
          return fallbackText;
        }
      };

      return CommMessagesContentPaneView;

    })(Backbone.View);
  });

}).call(this);
