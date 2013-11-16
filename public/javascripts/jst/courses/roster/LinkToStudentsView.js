define('jst/courses/roster/LinkToStudentsView', ["compiled/handlebars_helpers","i18n!courses.roster.link_to_students_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/LinkToStudentsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<p>";
  stack1 = "When an observer is linked to a student, they have access to that student's grades and course interactions.";
  stack2 = "link_student_desc";
  stack3 = {};
  stack4 = "courses.roster.link_to_students_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<p>";
  stack1 = "To link the course observer *%{name}* to a student, select the student's name from the list below.";
  stack2 = "link_student_action";
  stack3 = {};
  stack4 = "courses.roster.link_to_students_view";
  stack3['scope'] = stack4;
  stack4 = "<b>$1</b>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<input id=\"student_input\" name=\"students\" data-finder_url=\"";
  foundHelper = helpers.studentsUrl;
  stack1 = foundHelper || depth0.studentsUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "studentsUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" type=\"text\" style=\"display:none;\">\n";
  return buffer;});
  
  
  return templates['courses/roster/LinkToStudentsView'];
});
