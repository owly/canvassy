define('jst/assignments/EditView', ["compiled/handlebars_helpers","i18n!assignments.edit_view","jst/assignments/_submission_types_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"alert alert-info\">\n    <i class=\"icon-warning\"></i> ";
  stack1 = "Some settings have been administratively locked.";
  stack2 = "warnings.assignment_is_frozen";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"frozen-description user_content\">\n      ";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  foundHelper = helpers.convertApiUserContent;
  stack2 = foundHelper || depth0.convertApiUserContent;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    </div>\n  ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div style=\"float: right;\">\n      <a href=\"#\" class=\"rte_switch_views_link\">\n        ";
  stack1 = "Switch Views";
  stack2 = "#editor.switch_views";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n    <div style=\"clear:both;\"></div>\n    <textarea id=\"assignment_description\"\n      name=\"description\"\n      aria-label=\"";
  stack1 = "Description";
  stack2 = "description";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      style=\"width: 100%; min-height: 300px;\"\n      ";
  stack1 = "description";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n      ";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  stack2 = {};
  stack3 = 1;
  stack2['forEditing'] = stack3;
  foundHelper = helpers.convertApiUserContent;
  stack3 = foundHelper || depth0.convertApiUserContent;
  tmp1 = {};
  tmp1.hash = stack2;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack1, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, tmp1); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n    </textarea>\n  ";
  return buffer;}

function program7(depth0,data) {
  
  
  return "\n        class=\"date_field datetime_field hasDatePicker\"\n      ";}

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<div class=\"form-controls\">\n  <div class=\"controls\">\n    <a href=\"#\"\n      id=\"assignment_toggle_advanced_options\"\n      aria-controls=\"advanced_assignment_options\">\n      ";
  stack1 = "Show Advanced Options";
  stack2 = "show_advanced_options";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ▼\n    </a>\n  </div>\n</div>\n";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <fieldset id=\"group_category_selector\"\n        class=\"control-group\"\n        style=\"";
  foundHelper = helpers.isExternalTool;
  stack1 = foundHelper || depth0.isExternalTool;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n      </fieldset>\n    ";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <fieldset id=\"assignment_peer_reviews_fields\"\n        class=\"control-group\"\n        style=\"";
  foundHelper = helpers.isExternalTool;
  stack1 = foundHelper || depth0.isExternalTool;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n      </fieldset>\n    ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <fieldset>\n      <div class=\"control-group controls\">\n        <label class=\"checkbox\">\n          <input id=\"assignment_freeze_on_copy\"\n            name=\"freeze_on_copy\"\n            ";
  foundHelper = helpers.freezeOnCopy;
  stack1 = foundHelper || depth0.freezeOnCopy;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n            type=\"checkbox\"/>\n          ";
  stack1 = "Lock assignment properties when copied";
  stack2 = "freeze_properties";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </fieldset>\n  ";
  return buffer;}

  foundHelper = helpers.frozen;
  stack1 = foundHelper || depth0.frozen;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"control-group\">\n  <div>\n    <input id=\"assignment_name\"\n      name=\"name\"\n      placeholder=\"";
  stack1 = "Assignment Name";
  stack2 = "assignment_name";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      aria-label=\"";
  stack1 = "Assignment Name";
  stack2 = "assignment_name";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      value=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n      type=\"text\"\n      maxlength=\"254\"\n      class=\"input-block-level\"\n      ";
  stack1 = "title";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n  </div>\n</div>\n\n<div class=\"control-group\">\n  ";
  stack1 = "description";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.ifIncludes;
  stack3 = foundHelper || depth0.ifIncludes;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n\n<div class=\"control-group\">\n  <label for=\"assignments_points_possible\" class=\"control-label\">\n    ";
  stack1 = "Points";
  stack2 = "points_possible";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div class=\"controls\">\n    <input id=\"assignments_points_possible\"\n      name=\"points_possible\"\n      value=\"";
  foundHelper = helpers.pointsPossible;
  stack1 = foundHelper || depth0.pointsPossible;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "pointsPossible", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n      type=\"text\"\n      ";
  stack1 = "points_possible";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n  </div>\n</div>\n\n<div id=\"assignment_due_date_controls\" \n  class=\"control-group\"\n  style=\"";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n  <label for=\"assignment_due_date\" class=\"control-label\">\n    ";
  stack1 = "Due Date";
  stack2 = "due_date";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div class=\"controls\">\n    <input id=\"assignment_due_date\"\n      name=\"due_at\"\n      value=\"";
  foundHelper = helpers.dueAt;
  stack1 = foundHelper || depth0.dueAt;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n      type=\"text\"\n      ";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = "due_at";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n  </div>\n</div>\n\n<fieldset id=\"assignment_group_selector\" class=\"control-group\">\n</fieldset>\n\n";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div id=\"advanced_assignment_options\"\n  aria-expanded=\"";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  foundHelper = helpers.not;
  stack2 = foundHelper || depth0.not;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "not", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n  class=\"advanced-togglable-";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "isSimple", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n  style=\"";
  foundHelper = helpers.isSimple;
  stack1 = foundHelper || depth0.isSimple;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n  <div id=\"grading_type_selector\" class=\"control-group\"></div>\n\n  <div id=\"graded_assignment_fields\"\n    aria-expanded=\"";
  foundHelper = helpers.isNotGraded;
  stack1 = foundHelper || depth0.isNotGraded;
  foundHelper = helpers.not;
  stack2 = foundHelper || depth0.not;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "not", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n    style=\"";
  foundHelper = helpers.isNotGraded;
  stack1 = foundHelper || depth0.isNotGraded;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['assignments/submission_types_form'], 'assignments/submission_types_form', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  foundHelper = helpers.isLargeRoster;
  stack1 = foundHelper || depth0.isLargeRoster;
  stack2 = helpers.unless;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  foundHelper = helpers.isLargeRoster;
  stack1 = foundHelper || depth0.isLargeRoster;
  stack2 = helpers.unless;
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  </div>\n\n  ";
  foundHelper = helpers.canFreeze;
  stack1 = foundHelper || depth0.canFreeze;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class='js-assignment-overrides'></div>\n\n</div>\n\n<div class=\"form-actions flush\" style=\"padding-left: 10px;\">\n\n  <div style=\"float: left; min-width: 300px;\">\n    <label class=\"checkbox\" style=\"text-align:left;\">\n      <input id=\"assignment_notify_of_update\"\n        name=\"notify_of_update\"\n        ";
  foundHelper = helpers.notifyOfUpdate;
  stack1 = foundHelper || depth0.notifyOfUpdate;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n        type=\"checkbox\"/>\n      ";
  stack1 = "Notify users that this content has changed";
  stack2 = "notify_content_change";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n\n  <button type=\"button\" class=\"btn cancel_button\">\n    ";
  stack1 = "Cancel";
  stack2 = "#buttons.cancel";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button type=\"submit\" class=\"btn btn-primary\">\n    ";
  stack1 = "Update Assignment";
  stack2 = "buttons.update";
  stack3 = {};
  stack4 = "assignments.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n\n</div>\n";
  return buffer;});
  
  
  return templates['assignments/EditView'];
});
