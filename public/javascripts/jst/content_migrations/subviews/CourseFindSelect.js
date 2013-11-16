define('jst/content_migrations/subviews/CourseFindSelect', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.course_find_select"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/CourseFindSelect'] = template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<label class=\"control-label\" for=\"courseSearchField\"><strong>";
  stack1 = "Search for a course";
  stack2 = "search_label";
  stack3 = {};
  stack4 = "content_migrations.subviews.course_find_select";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <select id=\"courseSelect\" class=\"span3\">\n    <option value=\"default\">";
  stack1 = "Select a course";
  stack2 = "select_default";
  stack3 = {};
  stack4 = "content_migrations.subviews.course_find_select";
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
  buffer += "\n  </select>\n  ";
  stack1 = "or";
  stack2 = "or";
  stack3 = {};
  stack4 = "content_migrations.subviews.course_find_select";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <input id=\"courseSearchField\" type=\"text\" placeholder=\"Course name\" name=\"courseSearchField\" class='span3'/>\n</div>\n\n\n";
  return buffer;});
  
  
  return templates['content_migrations/subviews/CourseFindSelect'];
});
