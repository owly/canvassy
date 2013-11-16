define('jst/courses/roster/rosterUsers', ["compiled/handlebars_helpers","i18n!courses.roster.roster_users"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/rosterUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n\n<table class=\"roster table table-hover table-striped table-condensed table-vertically-center\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      ";
  foundHelper = helpers.canViewLoginIdColumn;
  stack1 = foundHelper || depth0.canViewLoginIdColumn;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <th>";
  stack1 = "Section";
  stack2 = "section";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th>";
  stack1 = "Role";
  stack2 = "role";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody class=\"collectionViewItems\"></tbody>\n</table>\n<div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <th>";
  stack1 = "Login / SIS ID";
  stack2 = "login_name_or_sis_id";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n  ";
  foundHelper = helpers.collection;
  stack1 = foundHelper || depth0.collection;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.atLeastOnePageFetched);
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"alert alert-info\">\n    <p class=\"lead\">";
  stack1 = "No people found";
  stack2 = "no_people_found";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <p>";
  stack1 = "You can search by:";
  stack2 = "you_can_search_by";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <ul>\n      <li>";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = "Login / SIS ID";
  stack2 = "login_name_or_sis_id";
  stack3 = {};
  stack4 = "courses.roster.roster_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    </ul>\n  </div>\n  ";
  return buffer;}

function program7(depth0,data) {
  
  
  return "\n  <div class=\"paginatedLoadingIndicator\"></div>\n  ";}

  foundHelper = helpers.collection;
  stack1 = foundHelper || depth0.collection;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;});
  
  
  return templates['courses/roster/rosterUsers'];
});
