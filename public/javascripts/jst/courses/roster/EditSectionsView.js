define('jst/courses/roster/EditSectionsView', ["compiled/handlebars_helpers","i18n!courses.roster.edit_sections_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/EditSectionsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<p>";
  stack1 = "Sections are an additional way to organize users. This can allow you to teach multiple classes from the same course, so that you can have the course content all in one place. Below you can move a user to a different section, or add/remove section enrollments. Users must be in at least one section at all times.";
  stack2 = "edit_sections_desc";
  stack3 = {};
  stack4 = "courses.roster.edit_sections_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<input id=\"section_input\" name=\"sections\" data-finder_url=\"";
  foundHelper = helpers.sectionsUrl;
  stack1 = foundHelper || depth0.sectionsUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "sectionsUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" type=\"text\" style=\"display:none;\">\n\n<ul id=\"user_sections\"></ul>\n";
  return buffer;});
  
  
  return templates['courses/roster/EditSectionsView'];
});
