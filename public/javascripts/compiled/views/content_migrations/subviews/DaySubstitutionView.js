(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'jquery', 'Backbone', 'i18nObj', 'jst/content_migrations/subviews/DaySubstitution'], function(_, $, Backbone, I18n, template) {
    var DaySubstitutionView, _ref;

    return DaySubstitutionView = (function(_super) {
      __extends(DaySubstitutionView, _super);

      function DaySubstitutionView() {
        _ref = DaySubstitutionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DaySubstitutionView.prototype.template = template;

      DaySubstitutionView.prototype.els = {
        ".currentDay": "$currentDay",
        ".subDay": "$subDay"
      };

      DaySubstitutionView.prototype.events = {
        'click a': 'removeView',
        'change .currentDay': 'updateModelData',
        'change .subDay': 'updateModelData'
      };

      DaySubstitutionView.prototype.afterRender = function() {
        return this.updateModelData();
      };

      DaySubstitutionView.prototype.updateModelData = function() {
        var sub_data;

        sub_data = {};
        sub_data[this.$currentDay.val()] = this.$subDay.val();
        this.model.clear();
        return this.model.set(sub_data);
      };

      DaySubstitutionView.prototype.removeView = function(event) {
        event.preventDefault();
        return this.model.collection.remove(this.model);
      };

      DaySubstitutionView.prototype.toJSON = function() {
        var json;

        json = DaySubstitutionView.__super__.toJSON.apply(this, arguments);
        json.weekdays = this.weekdays();
        return json;
      };

      DaySubstitutionView.prototype.weekdays = function() {
        var dayArray,
          _this = this;

        dayArray = I18n.lookup('date.day_names');
        return _.map(dayArray, function(day) {
          return {
            index: _.indexOf(dayArray, day),
            name: day
          };
        });
      };

      return DaySubstitutionView;

    })(Backbone.View);
  });

}).call(this);
