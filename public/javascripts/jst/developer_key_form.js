define('jst/developer_key_form', ["compiled/handlebars_helpers","i18n!developer_key_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['developer_key_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1);
  return buffer;}

function program3(depth0,data) {
  
  
  return "PUT";}

function program5(depth0,data) {
  
  
  return "POST";}

  buffer += "<form action='/api/v1/developer_keys";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' method='";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' class=\"key_form\">\n<table class='formtable'>\n    <tr>\n        <td><label for='key_name'>";
  stack1 = "Key Name:";
  stack2 = "key_name";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='key_name' name='developer_key[name]' value='";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    </tr>\n    <tr>\n        <td><label for='email'>";
  stack1 = "Owner Email:";
  stack2 = "owner_email";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='email' name='developer_key[email]' value='";
  foundHelper = helpers.email;
  stack1 = foundHelper || depth0.email;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "email", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    </tr>\n    <tr>\n        <td><label for='tool_id'>";
  stack1 = "Tool ID:";
  stack2 = "tool_id";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='tool_id' name='developer_key[tool_id]' value='";
  foundHelper = helpers.tool_id;
  stack1 = foundHelper || depth0.tool_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "tool_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    </tr>\n    <tr>\n        <td><label for='redirect_uri'>";
  stack1 = "Redirect URI:";
  stack2 = "redirect_uri";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='redirect_uri' name='developer_key[redirect_uri]' value='";
  foundHelper = helpers.redirect_uri;
  stack1 = foundHelper || depth0.redirect_uri;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "redirect_uri", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    </tr>\n    <tr>\n        <td><label for='icon_url'>";
  stack1 = "Icon URL:";
  stack2 = "icon_url";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></td>\n        <td><input type='text' id='icon_url' name='developer_key[icon_url]' value='";
  foundHelper = helpers.icon_url;
  stack1 = foundHelper || depth0.icon_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "icon_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "'/>\n    </tr>\n    <tr>\n        <td colspan='2'>\n            <div class='button-container'>\n              <button type='button' class='btn dialog_closer cancel'>";
  stack1 = "Cancel";
  stack2 = "cancel";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n              <button type='submit' class='btn btn-primary submit'>";
  stack1 = "Save Key";
  stack2 = "save_key";
  stack3 = {};
  stack4 = "developer_key_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            </div>\n        </td>\n    </tr>\n</table>\n</form>";
  return buffer;});
  
  
  return templates['developer_key_form'];
});
