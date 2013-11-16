define('jst/developer_key', ["compiled/handlebars_helpers","i18n!developer_key"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['developer_key'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<br/>( ";
  foundHelper = helpers.tool_id;
  stack1 = foundHelper || depth0.tool_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tool_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + " )";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"/users/";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n            ";
  return buffer;}

function program5(depth0,data) {
  
  
  return "\n            </a>\n            ";}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"/accounts/";
  foundHelper = helpers.account_id;
  stack1 = foundHelper || depth0.account_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "account_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n            ";
  return buffer;}

function program9(depth0,data) {
  
  
  return "\n            </a>\n            ";}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                    ";
  stack1 = "URI: %{redirect_uri}";
  stack2 = "redirect_uri";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;}

  buffer += "<tr class='key'>\n    <td class=\"name\">\n        <img class=\"icon\" src=\"";
  foundHelper = helpers.icon_url;
  stack1 = foundHelper || depth0.icon_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "icon_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n        ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + " \n        ";
  foundHelper = helpers.tool_id;
  stack1 = foundHelper || depth0.tool_id;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n    <td>\n        <div>\n            ";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  foundHelper = helpers.user_name;
  stack1 = foundHelper || depth0.user_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n            ";
  foundHelper = helpers.user_id;
  stack1 = foundHelper || depth0.user_id;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div>";
  foundHelper = helpers.email;
  stack1 = foundHelper || depth0.email;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "email", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        <div>\n            ";
  foundHelper = helpers.account_id;
  stack1 = foundHelper || depth0.account_id;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  foundHelper = helpers.account;
  stack1 = foundHelper || depth0.account;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "account", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n            ";
  foundHelper = helpers.account_id;
  stack1 = foundHelper || depth0.account_id;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </td>\n    <td>\n        <div class=\"details\">\n            <div>\n               ";
  stack1 = "ID: %{id}";
  stack2 = "identifier";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div>\n               ";
  stack1 = "Key: *%{api_key}*";
  stack2 = "api_key";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  stack4 = "<span class='api_key'>$1</span>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div>\n                ";
  foundHelper = helpers.redirect_uri;
  stack1 = foundHelper || depth0.redirect_uri;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </td>\n    <td>\n        <div>\n            ";
  stack1 = "Created:";
  stack2 = "created";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.created_at;
  stack1 = foundHelper || depth0.created_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n        </div>\n        <!-- TODO: Add some better stats here, like token count, last usage, etc. -->\n    </td>\n    <td class='links'>\n        <a href=\"#\" class=\"edit_link\" title=\"";
  stack1 = "Edit this key";
  stack2 = "edit_key";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-edit standalone-icon\"></i></a>\n        <a href=\"#\" class=\"delete_link\" title=\"";
  stack1 = "Delete this key";
  stack2 = "delete_key";
  stack3 = {};
  stack4 = "developer_key";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-trash standalone-icon\"></i></a>\n    </td>\n</tr>";
  return buffer;});
  
  
  return templates['developer_key'];
});
