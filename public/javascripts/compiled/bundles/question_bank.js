(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  require(['i18n!outcomes', 'underscore', 'compiled/models/OutcomeGroup', 'compiled/views/outcomes/FindDialog', 'compiled/views/outcomes/FindDirectoryView', 'question_bank', 'jst/quiz/move_question'], function(I18n, _arg, OutcomeGroup, FindDialog, FindDirectoryView, _arg1) {
    var QuestionBankPage, attachPageEvents, map, updateAlignments;

    map = _arg.map;
    updateAlignments = _arg1.updateAlignments, attachPageEvents = _arg1.attachPageEvents;
    QuestionBankPage = (function() {
      QuestionBankPage.prototype.$els = {};

      QuestionBankPage.prototype.translations = {
        findOutcome: I18n.t('titles.find_outcomes', 'Find Outcomes')
      };

      function QuestionBankPage() {
        this.onAddOutcome = __bind(this.onAddOutcome, this);        this.rootOutcomeGroup = new OutcomeGroup(ENV.ROOT_OUTCOME_GROUP);
        this.cacheElements();
        this.attachEvents();
      }

      QuestionBankPage.prototype.cacheElements = function() {
        this.$els.addOutcome = $('.add_outcome_link');
        return this.$els.dialog = new FindDialog({
          title: this.translations.findOutcome,
          selectedGroup: this.rootOutcomeGroup,
          setQuizMastery: true,
          shouldImport: false,
          disableGroupImport: true,
          rootOutcomeGroup: this.rootOutcomeGroup
        });
      };

      QuestionBankPage.prototype.attachEvents = function() {
        this.$els.addOutcome.on('click', this.onAddOutcome);
        return this.$els.dialog.on('import', this.onOutcomeImport);
      };

      QuestionBankPage.prototype.onAddOutcome = function(e) {
        e.preventDefault();
        return this.$els.dialog.show();
      };

      QuestionBankPage.prototype.onOutcomeImport = function(outcome) {
        var alignments, mastery;

        mastery = (outcome.quizMasteryLevel / 100.0) || 1.0;
        alignments = map($('#aligned_outcomes_list .outcome:not(.blank)'), function(o) {
          var $outcome, id, percent, _ref;

          $outcome = $(o);
          _ref = [
            $outcome.data('id'), ($outcome.getTemplateData({
              textValues: ['mastery_threshold']
            }).mastery_threshold) / 100.0
          ], id = _ref[0], percent = _ref[1];
          if (id !== outcome.get('id')) {
            return [id, percent];
          } else {
            return null;
          }
        });
        alignments.push([outcome.get('id'), mastery]);
        return updateAlignments(alignments);
      };

      return QuestionBankPage;

    })();
    return $(document).ready(function() {
      new QuestionBankPage;
      return attachPageEvents();
    });
  });

}).call(this);
