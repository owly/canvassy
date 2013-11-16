define('jst/roles/newRole', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/newRole'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "disabled";}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option role=\"menuitem\" value=\"";
  foundHelper = helpers.value;
  stack1 = foundHelper || depth0.value;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.label;
  stack1 = foundHelper || depth0.label;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "label", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}

  buffer += "<div class=\"btn-group\">\n  <a class=\"btn btn-primary dropdown-toggle\" aria-role=\"link\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\">Add Role</a>\n  <div class=\"dropdown-menu bootstrap-form new-role\" aria-hidden=\"true\">\n    <form class=\"form-inline\">\n      <input type='text' aria-label=\"Role Name\" tabindex=1 placeholder=\"Role name\"></input>\n      <select aria-label=\"Role Basetype\" tabindex=2 ";
  foundHelper = helpers.adminRoles;
  stack1 = foundHelper || depth0.adminRoles;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  foundHelper = helpers.base_role_types;
  stack1 = foundHelper || depth0.base_role_types;
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n      <button type=\"submit\" class=\"btn btn-primary\" aria-label=\"Add Role\" tabindex=3><i class=\"icon-add\"></i> Add</button>\n    <form>\n  </div>\n</div>\n";
  return buffer;});
  
  
arguments[1]('roles/newRole', "div.dropdown-menu.new-role {\n  top: 0px !important;\n  padding: 20px; }\n  div.dropdown-menu.new-role select[disabled], div.dropdown-menu.new-role select:disabled {\n    display: none; }\n");

  return templates['roles/newRole'];
});
