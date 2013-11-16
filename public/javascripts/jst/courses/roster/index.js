define('jst/courses/roster/index', ["compiled/handlebars_helpers","i18n!courses.roster.index"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  foundHelper = helpers.course;
  stack1 = foundHelper || depth0.course;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.concluded);
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n     <a class=\"btn pull-right icon-add\" title='";
  stack1 = "New users can not be added because this course is concluded";
  stack2 = "cannot_add_users";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' disabled data-tooltip>\n       ";
  stack1 = "Add People";
  stack2 = "add_people";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n     </a>\n    ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <a\n      class=\"btn btn-primary pull-right icon-add\"\n      id=\"addUsers\"\n      title='";
  stack1 = "Add People";
  stack2 = "add_people";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    >";
  stack1 = "Add People";
  stack2 = "add_people";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;}

  buffer += "<div class=\"form-inline clearfix\">\n  <input\n    type=\"text\"\n    name=\"search_term\"\n    data-view=\"inputFilter\"\n    placeholder='";
  stack1 = "Search people";
  stack2 = "search_people";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    aria-label='";
  stack1 = "Search";
  stack2 = "search";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n  >\n\n  <select\n    name=\"enrollment_role\"\n    data-view=\"roleSelect\"\n    aria-label='";
  stack1 = "Limit search to role";
  stack2 = "role_to_search";
  stack3 = {};
  stack4 = "courses.roster.index";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n  ></select>\n\n  ";
  foundHelper = helpers.permissions;
  stack1 = foundHelper || depth0.permissions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.add_users);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<form data-view=\"createUsers\" class=\"form-dialog\"></form>\n\n<div class=\"v-gutter\">\n  <div data-view=\"resendInvitations\"></div>\n  <div data-view=\"users\"></div>\n</div>\n\n";
  return buffer;});
  
  
  return templates['courses/roster/index'];
});
