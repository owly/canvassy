define('jst/assignments/AssignmentGroupSelector', ["compiled/handlebars_helpers","i18n!assignments.assignment_group_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentGroupSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "assignment[assignment_group_id]";}

function program3(depth0,data) {
  
  
  return "assignment_group_id";}

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n      <option value=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  stack1 = depth0.id;
  foundHelper = helpers.assignmentGroupId;
  stack2 = foundHelper || depth1.assignmentGroupId;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n        ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n      </option>\n    ";
  return buffer;}

  buffer += "<label for=\"assignment_group_id\" class=\"control-label\">\n  ";
  stack1 = "Assignment Group";
  stack2 = "assignment_group";
  stack3 = {};
  stack4 = "assignments.assignment_group_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</label>\n<div class=\"controls\">\n  <select id=\"assignment_group_id\"\n    name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    ";
  stack1 = "assignment_group_id";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">\n    ";
  foundHelper = helpers.assignmentGroups;
  stack1 = foundHelper || depth0.assignmentGroups;
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program5, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <option value=\"new\">\n      [ ";
  stack1 = "New Group";
  stack2 = "assignment_group_options.new_group";
  stack3 = {};
  stack4 = "assignments.assignment_group_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ]\n    </option>\n  </select>\n</div>\n";
  return buffer;});
  
  
  return templates['assignments/AssignmentGroupSelector'];
});
