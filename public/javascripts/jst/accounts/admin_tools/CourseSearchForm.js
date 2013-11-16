define('jst/accounts/admin_tools/CourseSearchForm', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_search_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/CourseSearchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=";
  foundHelper = helpers.course;
  stack1 = foundHelper || depth0.course;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.id);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "course.id", { hash: {} }); }
  buffer += escapeExpression(stack1) + ">";
  foundHelper = helpers.course;
  stack1 = foundHelper || depth0.course;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "course.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n    ";
  return buffer;}

  buffer += "<div>\n  <label for=\"courseSearchField\">";
  stack1 = "Find a deleted course";
  stack2 = "labels.find_deleted_course";
  stack3 = {};
  stack4 = "accounts.admin_tools.course_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n</div>\n<div class=\"form-inline\">\n  <input type=\"text\" id=\"courseSearchField\" class=\"span4\" placeholder=\"Course ID\">\n  <input type=\"submit\" class=\"btn btn-primary span2\" id=\"courseSearchBtn\" value=\"Find\">\n</div>\n\n<div>or</div>\n\n<label class=\"control-label\" for=\"courseSelect\">";
  stack1 = "Select a course";
  stack2 = "select_label";
  stack3 = {};
  stack4 = "accounts.admin_tools.course_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n<div class=\"controls\">\n  <select id=\"courseSelect\">\n    <option value=\"default\">";
  stack1 = "Select a course";
  stack2 = "select_default";
  stack3 = {};
  stack4 = "accounts.admin_tools.course_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    ";
  foundHelper = helpers.courses;
  stack1 = foundHelper || depth0.courses;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n</div>\n\n\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/CourseSearchForm'];
});
