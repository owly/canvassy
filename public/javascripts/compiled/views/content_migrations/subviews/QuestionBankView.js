(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/QuestionBank', 'jquery'], function(Backbone, template, $) {
    var QuestionBankView, _ref;

    return QuestionBankView = (function(_super) {
      __extends(QuestionBankView, _super);

      function QuestionBankView() {
        this.updateNewQuestionName = __bind(this.updateNewQuestionName, this);        _ref = QuestionBankView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuestionBankView.prototype.template = template;

      QuestionBankView.optionProperty('questionBanks');

      QuestionBankView.prototype.els = {
        "#createQuestionInput": "$createQuestionInput"
      };

      QuestionBankView.prototype.events = {
        'change .questionBank': 'setQuestionBankValues',
        'keyup #createQuestionInput': 'updateNewQuestionName'
      };

      QuestionBankView.prototype.updateNewQuestionName = function(event) {
        return this.model.set('settings', {
          question_bank_name: event.target.value
        });
      };

      QuestionBankView.prototype.setQuestionBankValues = function(event) {
        if (event.target.value === 'new_question_bank') {
          this.$createQuestionInput.show();
          return this.model.set('settings', {
            question_bank_id: null
          });
        } else {
          this.$createQuestionInput.hide();
          this.model.set('settings', {
            question_bank_id: event.target.value
          });
          return this.model.set('settings', {
            question_bank_name: null
          });
        }
      };

      QuestionBankView.prototype.toJSON = function() {
        return this.options;
      };

      return QuestionBankView;

    })(Backbone.View);
  });

}).call(this);
