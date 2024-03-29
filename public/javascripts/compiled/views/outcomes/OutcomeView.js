(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'jquery', 'underscore', 'compiled/views/outcomes/OutcomeContentBase', 'jst/outcomes/outcome', 'jst/outcomes/outcomeForm', 'jst/outcomes/_criterion', 'jqueryui/dialog'], function(I18n, $, _, OutcomeContentBase, outcomeTemplate, outcomeFormTemplate, criterionTemplate) {
    var OutcomeView;

    return OutcomeView = (function(_super) {
      __extends(OutcomeView, _super);

      OutcomeView.prototype.events = _.extend({
        'click .outcome_information_link': 'showRatingDialog',
        'click .edit_rating': 'editRating',
        'click .delete_rating_link': 'deleteRating',
        'click .save_rating_link': 'saveRating',
        'click .insert_rating': 'insertRating'
      }, OutcomeContentBase.prototype.events);

      OutcomeView.prototype.validations = _.extend({
        mastery_points: function(data) {
          if (_.isEmpty(data.mastery_points) || parseFloat(data.mastery_points) < 0) {
            return I18n.t('mastery_error', 'Must be greater than or equal to 0');
          }
        }
      }, OutcomeContentBase.prototype.validations);

      function OutcomeView(_arg) {
        this.setQuizMastery = _arg.setQuizMastery, this.useForScoring = _arg.useForScoring;
        this.showRatingDialog = __bind(this.showRatingDialog, this);
        this.insertRating = __bind(this.insertRating, this);
        this.deleteRating = __bind(this.deleteRating, this);
        this.editRating = __bind(this.editRating, this);
        this.submit = __bind(this.submit, this);
        OutcomeView.__super__.constructor.apply(this, arguments);
      }

      OutcomeView.prototype.submit = function(e) {
        var points_possible;

        points_possible = _.max(_.map(_.pluck(this.getFormData().ratings, 'points'), function(n) {
          return parseFloat(n);
        }));
        this.model.set({
          points_possible: points_possible
        }, {
          silent: true
        });
        return OutcomeView.__super__.submit.call(this, e);
      };

      OutcomeView.prototype.editRating = function(e) {
        e.preventDefault();
        return $(e.currentTarget).parent().hide();
      };

      OutcomeView.prototype.deleteRating = function(e) {
        var deleteBtn, focusTarget;

        e.preventDefault();
        if (this.$('.rating').length > 1) {
          deleteBtn = $(e.currentTarget);
          focusTarget = deleteBtn.closest('.rating').prev().find('.insert_rating');
          if (focusTarget.length === 0) {
            focusTarget = deleteBtn.closest('.rating').next().find('.edit_rating');
          }
          deleteBtn.closest('td').remove();
          focusTarget.focus();
          return this.updateRatings();
        }
      };

      OutcomeView.prototype.saveRating = function(e) {
        var $editWrapper, $showWrapper;

        e.preventDefault();
        $editWrapper = $(e.currentTarget).parents('.edit:first');
        $showWrapper = $editWrapper.prev();
        $showWrapper.find('h5').text($editWrapper.find('input.outcome_rating_description').val());
        $showWrapper.find('.points').text($editWrapper.find('input.outcome_rating_points').val() || 0);
        $editWrapper.attr('aria-expanded', false).hide();
        $showWrapper.show();
        $showWrapper.find('.edit_rating').focus();
        return this.updateRatings();
      };

      OutcomeView.prototype.insertRating = function(e) {
        var rating;

        e.preventDefault();
        rating = $(criterionTemplate({
          description: '',
          points: '',
          _index: 99
        }));
        $(e.currentTarget).closest('.rating').after(rating);
        rating.find('.show').hide().next().show(200);
        rating.find('.edit input:first').focus();
        return this.updateRatings();
      };

      OutcomeView.prototype.updateRatings = function() {
        var i, index, points, r, rating, total, _i, _j, _len, _len1, _ref, _ref1;

        total = 0;
        _ref = this.$('.rating');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          r = _ref[_i];
          rating = $(r).find('.outcome_rating_points').val() || 0;
          total = _.max([total, parseFloat(rating)]);
          index = _i;
          _ref1 = $(r).find('input');
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            i = _ref1[_j];
            $(i).attr('name', i.name.replace(/\[[0-9]+\]/, "[" + index + "]"));
          }
        }
        points = this.$('.points_possible');
        return points.html(points.html().replace(/[0-9/.]+/, total));
      };

      OutcomeView.prototype.showRatingDialog = function(e) {
        e.preventDefault();
        return $("#outcome_criterion_dialog").dialog({
          autoOpen: false,
          title: I18n.t("outcome_criterion", "Learning Outcome Criterion"),
          width: 400,
          close: function() {
            return $(e.target).focus();
          }
        }).dialog('open');
      };

      OutcomeView.prototype.render = function() {
        var data;

        data = this.model.toJSON();
        switch (this.state) {
          case 'edit':
            this.$el.html(outcomeFormTemplate(data));
            this.readyForm();
            break;
          case 'add':
            this.$el.html(outcomeFormTemplate(_.extend(data, {
              points_possible: 5,
              mastery_points: 3,
              ratings: [
                {
                  description: I18n.t("criteria.exceeds_expectations", "Exceeds Expectations"),
                  points: 5
                }, {
                  description: I18n.t("criteria.meets_expectations", "Meets Expectations"),
                  points: 3
                }, {
                  description: I18n.t("criteria.does_not_meet_expectations", "Does Not Meet Expectations"),
                  points: 0
                }
              ]
            })));
            this.readyForm();
            break;
          case 'loading':
            this.$el.empty();
            break;
          default:
            data['points_possible'] || (data['points_possible'] = 0);
            data['mastery_points'] || (data['mastery_points'] = 0);
            this.$el.html(outcomeTemplate(_.extend(data, {
              readOnly: this.readOnly(),
              "native": this.model.outcomeLink.outcome.context_id === this.model.outcomeLink.context_id && this.model.outcomeLink.outcome.context_type === this.model.outcomeLink.context_type,
              setQuizMastery: this.setQuizMastery,
              useForScoring: this.useForScoring,
              isLargeRoster: ENV.IS_LARGE_ROSTER
            })));
        }
        this.$('input:first').focus();
        return this;
      };

      return OutcomeView;

    })(OutcomeContentBase);
  });

}).call(this);
