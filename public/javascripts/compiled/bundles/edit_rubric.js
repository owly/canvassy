(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  require(['i18n!outcomes', 'compiled/models/OutcomeGroup', 'compiled/views/outcomes/FindDialog', 'compiled/views/outcomes/FindDirectoryView', 'edit_rubric'], function(I18n, OutcomeGroup, FindDialog, FindDirectoryView, rubricEditing) {
    var EditRubricPage;

    EditRubricPage = (function() {
      EditRubricPage.prototype.$els = {};

      EditRubricPage.prototype.translations = {
        findOutcome: I18n.t('titles.find_outcomes', 'Find Outcomes')
      };

      function EditRubricPage() {
        this.onFindOutcome = __bind(this.onFindOutcome, this);        this.rootOutcomeGroup = new OutcomeGroup(ENV.ROOT_OUTCOME_GROUP);
        this.cacheElements();
        this.attachEvents();
      }

      EditRubricPage.prototype.cacheElements = function() {
        this.$els.rubricWrapper = $('#rubrics');
        return this.$els.dialog = new FindDialog({
          title: this.translations.findOutcome,
          selectedGroup: this.rootOutcomeGroup,
          useForScoring: true,
          shouldImport: false,
          disableGroupImport: true,
          rootOutcomeGroup: this.rootOutcomeGroup
        });
      };

      EditRubricPage.prototype.attachEvents = function() {
        this.$els.rubricWrapper.on('click', 'a.find_outcome_link', this.onFindOutcome);
        return this.$els.dialog.on('import', this.onOutcomeImport);
      };

      EditRubricPage.prototype.onFindOutcome = function(e) {
        e.preventDefault();
        return this.$els.dialog.show();
      };

      EditRubricPage.prototype.onOutcomeImport = function(model) {
        return rubricEditing.onFindOutcome(model);
      };

      return EditRubricPage;

    })();
    return $(document).ready(function() {
      new EditRubricPage;
      return rubricEditing.init();
    });
  });

}).call(this);
