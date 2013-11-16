define('jst/assignments/AssignmentGroupCreateDialog', ["compiled/handlebars_helpers","i18n!assignments.assignment_group_create_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/AssignmentGroupCreateDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"row-fluid\">\n  <div class=\"span12\">\n    <form title='";
  stack1 = "Add Assignment Group\"";
  stack2 = "links.add_assignment_group";
  stack3 = {};
  stack4 = "assignments.assignment_group_create_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      class=\"form-inline bootstrap-form\">\n\n      <div class=\"control-group\">\n        <label class=\"control-label\">\n          <div class=\"controls\">\n            <input name=\"assignment_group[name]\"\n            type=\"text\"\n            placeholder=\"New Group Name\"\n            />\n            ";
  stack1 = "Name";
  stack2 = "assignment_group.labels.name";
  stack3 = {};
  stack4 = "assignments.assignment_group_create_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        </label>\n      </div>\n\n      <div class=\"button-container\">\n        <button type=\"submit\" class=\"btn btn-primary\">\n          ";
  stack1 = "Add Group";
  stack2 = "buttons.add_group";
  stack3 = {};
  stack4 = "assignments.assignment_group_create_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary cancel-button\">\n          ";
  stack1 = "Cancel";
  stack2 = "buttons.cancel";
  stack3 = {};
  stack4 = "assignments.assignment_group_create_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </button>\n      </div>\n\n    </form>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['assignments/AssignmentGroupCreateDialog'];
});
