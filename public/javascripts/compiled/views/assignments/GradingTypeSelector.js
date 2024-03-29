(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignment', 'Backbone', 'underscore', 'jquery', 'jst/assignments/GradingTypeSelector', 'compiled/jquery/toggleAccessibly', 'compiled/jquery/fixDialogButtons'], function(I18n, Backbone, _, $, template) {
    var GradingTypeSelector, _ref;

    return GradingTypeSelector = (function(_super) {
      var GRADING_TYPE, VIEW_GRADING_LEVELS;

      __extends(GradingTypeSelector, _super);

      function GradingTypeSelector() {
        this.toJSON = __bind(this.toJSON, this);
        this.showGradingSchemeDialog = __bind(this.showGradingSchemeDialog, this);
        this.handleGradingTypeChange = __bind(this.handleGradingTypeChange, this);        _ref = GradingTypeSelector.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GradingTypeSelector.prototype.template = template;

      GRADING_TYPE = '#assignment_grading_type';

      VIEW_GRADING_LEVELS = '#view-grading-levels';

      GradingTypeSelector.prototype.els = (function() {
        var els;

        els = {};
        els["" + GRADING_TYPE] = "$gradingType";
        els["" + VIEW_GRADING_LEVELS] = "$viewGradingLevels";
        return els;
      })();

      GradingTypeSelector.prototype.events = (function() {
        var events;

        events = {};
        events["change " + GRADING_TYPE] = 'handleGradingTypeChange';
        events["click .edit_letter_grades_link"] = 'showGradingSchemeDialog';
        return events;
      })();

      GradingTypeSelector.optionProperty('parentModel');

      GradingTypeSelector.optionProperty('nested');

      GradingTypeSelector.optionProperty('preventNotGraded');

      GradingTypeSelector.prototype.handleGradingTypeChange = function(ev) {
        var gradingType;

        gradingType = this.$gradingType.val();
        this.$viewGradingLevels.toggleAccessibly(gradingType === 'letter_grade');
        return this.trigger('change:gradingType', gradingType);
      };

      GradingTypeSelector.prototype.showGradingSchemeDialog = function(ev) {
        ev.preventDefault();
        return $("#edit_letter_grades_form").dialog({
          title: I18n.t('titles.grading_scheme_info', "View/Edit Grading Scheme"),
          width: 600,
          height: 310,
          close: function() {
            return $(ev.target).focus();
          }
        }).fixDialogButtons();
      };

      GradingTypeSelector.prototype.toJSON = function() {
        return {
          gradingType: this.parentModel.gradingType(),
          isNotGraded: this.parentModel.isNotGraded(),
          isLetterGraded: this.parentModel.isLetterGraded(),
          gradingStandardId: this.parentModel.gradingStandardId(),
          frozenAttributes: this.parentModel.frozenAttributes(),
          nested: this.nested,
          preventNotGraded: this.preventNotGraded
        };
      };

      return GradingTypeSelector;

    })(Backbone.View);
  });

}).call(this);
