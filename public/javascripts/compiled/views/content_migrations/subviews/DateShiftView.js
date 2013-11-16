(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'compiled/views/content_migrations/subviews/DaySubstitutionView', 'compiled/models/DaySubstitution', 'jst/content_migrations/subviews/DateShift'], function($, Backbone, DaySubView, DaySubModel, template) {
    var DateShiftView, _ref;

    return DateShiftView = (function(_super) {
      __extends(DateShiftView, _super);

      function DateShiftView() {
        this.createDaySubView = __bind(this.createDaySubView, this);
        this.toggleContent = __bind(this.toggleContent, this);        _ref = DateShiftView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DateShiftView.prototype.template = template;

      DateShiftView.child('daySubstitution', '#daySubstitution');

      DateShiftView.prototype.els = {
        ".dateShiftContent": "$dateShiftContent",
        "#oldStartDate": "$oldStartDate",
        "#oldEndDate": "$oldEndDate",
        "#newStartDate": "$newStartDate",
        "#newEndDate": "$newEndDate",
        "#daySubstitution": "$daySubstitution"
      };

      DateShiftView.prototype.events = {
        'click #dateShiftCheckbox': 'toggleContent',
        'click #addDaySubstitution': 'createDaySubView'
      };

      DateShiftView.prototype.afterRender = function() {
        var _this = this;

        this.$el.find('input[type=text]').datetime_field();
        this.$oldStartDate.on('change', function(event) {
          return _this.model.setDateShiftOptions({
            property: 'old_start_date',
            value: event.target.value
          });
        });
        this.$oldEndDate.on('change', function(event) {
          return _this.model.setDateShiftOptions({
            property: 'old_end_date',
            value: event.target.value
          });
        });
        this.$newStartDate.on('change', function(event) {
          return _this.model.setDateShiftOptions({
            property: 'new_start_date',
            value: event.target.value
          });
        });
        return this.$newEndDate.on('change', function(event) {
          return _this.model.setDateShiftOptions({
            property: 'new_end_date',
            value: event.target.value
          });
        });
      };

      DateShiftView.prototype.toggleContent = function(event) {
        var dateShift;

        dateShift = $(event.target).is(':checked');
        this.model.setDateShiftOptions({
          property: 'shift_dates',
          value: dateShift
        });
        return this.$dateShiftContent.toggle();
      };

      DateShiftView.prototype.createDaySubView = function(event) {
        event.preventDefault();
        return this.collection.add(new DaySubModel);
      };

      return DateShiftView;

    })(Backbone.View);
  });

}).call(this);
