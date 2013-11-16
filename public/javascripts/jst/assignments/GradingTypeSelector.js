define('jst/assignments/GradingTypeSelector', ["compiled/handlebars_helpers","i18n!assignments.grading_type_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/GradingTypeSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "assignment[grading_type]";}

function program3(depth0,data) {
  
  
  return "grading_type";}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <option value=\"not_graded\" ";
  foundHelper = helpers.isNotGraded;
  stack1 = foundHelper || depth0.isNotGraded;
  foundHelper = helpers.selectedIf;
  stack2 = foundHelper || depth0.selectedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + ">\n        ";
  stack1 = "Not Graded";
  stack2 = "grading_type_options.not_graded";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </option>\n    ";
  return buffer;}

function program7(depth0,data) {
  
  
  return "assignment[grading_standard_id]";}

function program9(depth0,data) {
  
  
  return "grading_standard_id";}

  buffer += "<label for=\"assignment_grading_type\" class=\"control-label\">\n  ";
  stack1 = "Grading Type";
  stack2 = "grading_type";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</label>\n<div class=\"controls\">\n  <select id=\"assignment_grading_type\"\n    name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    aria-controls=\"graded_assignment_fields view-grading-levels\"\n    ";
  stack1 = "grading_type";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n    <option value=\"percent\" ";
  stack1 = "percent";
  foundHelper = helpers.gradingType;
  stack2 = foundHelper || depth0.gradingType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n      ";
  stack1 = "Percentage";
  stack2 = "grading_type_options.percent";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"pass_fail\" ";
  stack1 = "pass_fail";
  foundHelper = helpers.gradingType;
  stack2 = foundHelper || depth0.gradingType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n      ";
  stack1 = "Complete/Incomplete";
  stack2 = "grading_type_options.pass_fail";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"points\" ";
  stack1 = "points";
  foundHelper = helpers.gradingType;
  stack2 = foundHelper || depth0.gradingType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n      ";
  stack1 = "Points";
  stack2 = "grading_type_options.points";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    <option value=\"letter_grade\" ";
  stack1 = "letter_grade";
  foundHelper = helpers.gradingType;
  stack2 = foundHelper || depth0.gradingType;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n      ";
  stack1 = "Letter Grade";
  stack2 = "grading_type_options.letter_grade";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </option>\n    ";
  foundHelper = helpers.preventNotGraded;
  stack1 = foundHelper || depth0.preventNotGraded;
  stack2 = helpers.unless;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n\n  <p id=view-grading-levels\n    class=\"help-block\"\n    style=\"";
  foundHelper = helpers.isLetterGraded;
  stack1 = foundHelper || depth0.isLetterGraded;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n    aria-expanded=";
  foundHelper = helpers.isLetterGraded;
  stack1 = foundHelper || depth0.isLetterGraded;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "isLetterGraded", { hash: {} }); }
  buffer += escapeExpression(stack1) + ">\n    <a href=\"#\" class=edit_letter_grades_link>\n      ";
  stack1 = "View Grading Levels";
  stack2 = "view_grading_levels";
  stack3 = {};
  stack4 = "assignments.grading_type_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </p>\n\n  <input name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(9, program9, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    class=grading_standard_id\n    value=\"";
  foundHelper = helpers.gradingStandardId;
  stack1 = foundHelper || depth0.gradingStandardId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "gradingStandardId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n    type=\"hidden\">\n</div>\n";
  return buffer;});
  
  
  return templates['assignments/GradingTypeSelector'];
});
