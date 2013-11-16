define('jst/courses/roster/createUsers', ["compiled/handlebars_helpers","i18n!courses.roster.create_users"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/createUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-1\">\n  <p>\n    ";
  stack1 = "Type or paste a list of email addresses below:";
  stack2 = "form_instructions";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n  </p>\n  <div class=\"row-fluid content-box\">\n    <textarea id=\"user_list_textarea\" name=\"user_list\" class=\"span12\" rows=7 placeholder='\"Example Student\" &lt;student@example.com&gt;, \"Lastname, Firstname\" &lt;firstlast@example.com&gt;, justAnEmailAddress@example.com'>";
  foundHelper = helpers.user_list;
  stack1 = foundHelper || depth0.user_list;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_list", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n  </div>\n  <div class=\"form-horizontal\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"enrollment_type\">";
  stack1 = "Role:";
  stack2 = "user_role";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <select name=\"enrollment_type\" id=\"enrollment_type\">\n          ";
  foundHelper = helpers.roles;
  stack1 = foundHelper || depth0.roles;
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program2, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"course_section_id\">";
  stack1 = "Section";
  stack2 = "section";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <select name=\"course_section_id\" id=\"course_section_id\">\n          ";
  foundHelper = helpers.sections;
  stack1 = foundHelper || depth0.sections;
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program6, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    </div>\n    <div class=\"control-group\" id=\"privileges\">\n      <div class=\"controls\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" id=\"limit_privileges_to_course_section\" name=\"limit_privileges_to_course_section\" value=\"1\" ";
  foundHelper = helpers.limit_privileges_to_course_section;
  stack1 = foundHelper || depth0.limit_privileges_to_course_section;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n          ";
  stack1 = "Can grade students in their section only";
  stack2 = "can_only_grade_students_in_section";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    id=\"next-step\"\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = "Validating...";
  stack2 = "validating";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = "Next";
  stack2 = "next";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;}
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          ";
  foundHelper = helpers.manageable_by_user;
  stack1 = foundHelper || depth0.manageable_by_user;
  stack2 = helpers['if'];
  tmp1 = self.programWithDepth(program3, data, depth1);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;}
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n          <option value=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  foundHelper = helpers.enrollment_type;
  stack1 = foundHelper || depth2.enrollment_type;
  foundHelper = helpers.name;
  stack2 = foundHelper || depth0.name;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.label;
  stack1 = foundHelper || depth0.label;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "label", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n          ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "selected";}

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n          <option value=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  foundHelper = helpers.course_section_id;
  stack1 = foundHelper || depth1.course_section_id;
  foundHelper = helpers.id;
  stack2 = foundHelper || depth0.id;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n          ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "selected";}

function program9(depth0,data) {
  
  
  return "checked";}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-2\">\n  ";
  foundHelper = helpers.errored_users;
  stack1 = foundHelper || depth0.errored_users;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"form-controls\">\n  <button\n    type=\"button\"\n    class=\"btn createUsersStartOver ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers.unless;
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  >";
  stack1 = "Start Over";
  stack2 = "go_back";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;}
function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div class=\"alert alert-error content-box\">\n      <p>\n        ";
  stack1 = "These users had errors and will not be added. Please ensure they are formatted correctly.";
  stack2 = "will_not_be_added";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n        <small>";
  stack1 = "Examples: user@example.com, \"First Last\" &lt;user@example.com&gt;, \"Last, First\" &lt;user@example.com&gt;";
  stack2 = "example_formats";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n      </p>\n      <ul class=\"createUsersErroredUsers\">\n        ";
  foundHelper = helpers.errored_users;
  stack1 = foundHelper || depth0.errored_users;
  stack2 = helpers.each;
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  ";
  return buffer;}
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.address;
  stack1 = foundHelper || depth0.address;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "address", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</li>\n        ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div class=\"alert alert-notify content-box\">\n      ";
  stack1 = "Validated and ready to add %{users.length} users:";
  stack2 = "adding_n_users";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.duplicates;
  stack1 = foundHelper || depth0.duplicates;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <table class=\"table table-bordered table-striped table-condensed\" id=\"create-users-verified\">\n      <thead>\n        <tr>\n          <th>";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <th>";
  stack1 = "Email";
  stack2 = "email";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        </tr>\n      </thead>\n      <tbody>\n        ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack2 = helpers.each;
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tbody>\n    </table>\n  ";
  return buffer;}
function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  stack1 = "Some duplicates were removed.";
  stack2 = "duplicates_removed";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <tr>\n          <td>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n          <td>";
  foundHelper = helpers.address;
  stack1 = foundHelper || depth0.address;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "address", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n        </tr>\n        ";
  return buffer;}

function program20(depth0,data) {
  
  
  return "btn-primary";}

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <button\n    id=\"createUsersAddButton\"\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = "Adding...";
  stack2 = "adding";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = "Add Users";
  stack2 = "add_these_users";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  return buffer;}

function program24(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-3\">\n  <p class=\"content-box alert alert-success\">";
  stack1 = "The following users have been enrolled";
  stack2 = "have_been_enrolled";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  <table class=\"table table-bordered table-striped table-condensed\" id=\"create-users-results\">\n    <thead>\n      <tr>\n        <th>";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = "Email";
  stack2 = "email";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = "Section";
  stack2 = "section";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  foundHelper = helpers.enrolledUsers;
  stack1 = foundHelper || depth0.enrolledUsers;
  stack2 = helpers.each;
  tmp1 = self.program(25, program25, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"btn show-if-step-3 createUsersStartOverFrd\"\n  >";
  stack1 = "Add More Users";
  stack2 = "add_more_users";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    type=\"button\"\n    class=\"btn btn-primary show-if-step-3 dialog_closer\"\n  >";
  stack1 = "Done";
  stack2 = "close";
  stack3 = {};
  stack4 = "courses.roster.create_users";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;}
function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <tr>\n        <td>";
  foundHelper = helpers.enrollment;
  stack1 = foundHelper || depth0.enrollment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "enrollment.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n        <td>";
  foundHelper = helpers.enrollment;
  stack1 = foundHelper || depth0.enrollment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.email);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "enrollment.email", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n        <td>";
  foundHelper = helpers.enrollment;
  stack1 = foundHelper || depth0.enrollment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.section);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "enrollment.section", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n      </tr>\n      ";
  return buffer;}

  stack1 = 1;
  foundHelper = helpers.step;
  stack2 = foundHelper || depth0.step;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = 2;
  foundHelper = helpers.step;
  stack2 = foundHelper || depth0.step;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = 3;
  foundHelper = helpers.step;
  stack2 = foundHelper || depth0.step;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['courses/roster/createUsers'];
});
