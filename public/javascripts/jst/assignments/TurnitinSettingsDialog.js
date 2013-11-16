define('jst/assignments/TurnitinSettingsDialog', ["compiled/handlebars_helpers","i18n!assignments.turnitin_settings_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/TurnitinSettingsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "\n<form id=\"assignment_turnitin_settings\">\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <label for=\"settings_originality_report_visibility\"\n      class=\"control-label\">\n        ";
  stack1 = "Students Can See the Originality Report";
  stack2 = "turnitin_settings.originality_report_visibility";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <br/>\n      <select id=\"settings_originality_report_visibility\"\n        name=\"originality_report_visibility\">\n        <option value=\"immediate\"\n        ";
  stack1 = "immediate";
  foundHelper = helpers.originalityReportVisibility;
  stack2 = foundHelper || depth0.originalityReportVisibility;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + " >\n          ";
  stack1 = "Immediately";
  stack2 = "turnitin_settings.originality_report_visible_immediately";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"after_grading\"\n        ";
  stack1 = "after_grading";
  foundHelper = helpers.originalityReportVisibility;
  stack2 = foundHelper || depth0.originalityReportVisibility;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + " >\n          ";
  stack1 = "After the assignment is graded";
  stack2 = "turnitin_settings.originality_report_visible_after_grading";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"after_due_date\"\n        ";
  stack1 = "after_due_date";
  foundHelper = helpers.originalityReportVisibility;
  stack2 = foundHelper || depth0.originalityReportVisibility;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + " >\n          ";
  stack1 = "After the Due Date";
  stack2 = "turnitin_settings.originality_report_visible_after_due_date";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <fieldset>\n    <h5>\n      ";
  stack1 = "Compare Against";
  stack2 = "turnitin_settings.labels.compare_against";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h5>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"s_paper_check\"\n            name=\"s_paper_check\"\n            ";
  foundHelper = helpers.sPaperCheck;
  stack1 = foundHelper || depth0.sPaperCheck;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            type=\"checkbox\"/>\n            ";
  stack1 = "Other Student Papers";
  stack2 = "turnitin_settings.labels.student_paper_check";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"internet_check\"\n          name=\"internet_check\"\n            ";
  foundHelper = helpers.internetCheck;
  stack1 = foundHelper || depth0.internetCheck;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            type=\"checkbox\"/>\n            ";
  stack1 = "Internet Database";
  stack2 = "turnitin_settings.labels.internet_check";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"journal_check\"\n            name=\"journal_check\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.journalCheck;
  stack1 = foundHelper || depth0.journalCheck;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "/>\n            ";
  stack1 = "Journals, Periodicals, and Publications";
  stack2 = "turnitin_settings.labels.journal_check";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <h5>\n      ";
  stack1 = "Do Not Consider";
  stack2 = "turnitin_settings.labels.do_not_consider";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h5>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"exclude_biblio\"\n            name=\"exclude_biblio\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.excludeBiblio;
  stack1 = foundHelper || depth0.excludeBiblio;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "/>\n            ";
  stack1 = "Bibliographic Material";
  stack2 = "turnitin_settings.labels.exclude_biblio";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"exclude_quoted\"\n            name=\"exclude_quoted\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.excludeQuoted;
  stack1 = foundHelper || depth0.excludeQuoted;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "/>\n            ";
  stack1 = "Quoted Material";
  stack2 = "turnitin_settings.labels.exclude_quoted";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input id=\"exclude_small_matches\"\n            name=\"exclude_small_matches\"\n            type=\"checkbox\"\n            ";
  foundHelper = helpers.excludesSmallMatches;
  stack1 = foundHelper || depth0.excludesSmallMatches;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "/>\n            ";
  stack1 = "Small Matches";
  stack2 = "assignments.turnitin_settings.labels.exclude_small_matches";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <div class=\"controls js-exclude-small-matches-options\"\n          style=\"";
  foundHelper = helpers.excludesSmallMatches;
  stack1 = foundHelper || depth0.excludesSmallMatches;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n          <label class=\"control-label radio\" style=\"display: block;\">\n            <input id=\"exclude_small_matches_type\"\n              name=\"exclude_small_matches_type\"\n              type=\"radio\"\n              ";
  stack1 = "words";
  foundHelper = helpers.excludeSmallMatchesType;
  stack2 = foundHelper || depth0.excludeSmallMatchesType;
  foundHelper = helpers.checkedIf;
  stack3 = foundHelper || depth0.checkedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n              value=\"words\"/>\n              ";
  stack1 = "Fewer than %h{wordsInput} words";
  stack2 = "turnitin_settings.settings_exclude_fewer_than_count";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n\n          <label class=\"control-label radio\">\n            <input id=\"exclude_small_matches_type\"\n              type=\"radio\"\n              name=\"exclude_small_matches_type\"\n              ";
  stack1 = "percent";
  foundHelper = helpers.excludeSmallMatchesType;
  stack2 = foundHelper || depth0.excludeSmallMatchesType;
  foundHelper = helpers.checkedIf;
  stack3 = foundHelper || depth0.checkedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n              value=\"percent\"/>\n              ";
  stack1 = "Less than %h{percentInput} of the document";
  stack2 = "turnitin_settings.settings_exclude_less_than_percent";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        </div>\n      </div>\n    </div>\n\n  </fieldset>\n\n  <div class=\"button-container\">\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  stack1 = "Update Settings";
  stack2 = "buttons.update_settings";
  stack3 = {};
  stack4 = "assignments.turnitin_settings_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n\n</form>\n";
  return buffer;});
  
  
  return templates['assignments/TurnitinSettingsDialog'];
});
