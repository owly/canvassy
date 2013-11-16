define('jst/conferences/userSettingOptions', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conferences/userSettingOptions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  ";
  foundHelper = helpers.isBoolean;
  stack1 = foundHelper || depth0.isBoolean;
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <label class=\"checkbox\" for=\"web_conference_user_settings_";
  foundHelper = helpers.field;
  stack1 = foundHelper || depth0.field;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "field", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n      <input name=\"web_conference[user_settings][";
  foundHelper = helpers.field;
  stack1 = foundHelper || depth0.field;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "field", { hash: {} }); }
  buffer += escapeExpression(stack1) + "]\" type=\"hidden\" value=\"0\">\n      <input id=\"web_conference_user_settings_";
  foundHelper = helpers.field;
  stack1 = foundHelper || depth0.field;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "field", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"web_conference[user_settings][";
  foundHelper = helpers.field;
  stack1 = foundHelper || depth0.field;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "field", { hash: {} }); }
  buffer += escapeExpression(stack1) + "]\" type=\"checkbox\" value=\"1\" ";
  foundHelper = helpers.checked;
  stack1 = foundHelper || depth0.checked;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      ";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    </label>\n  ";
  return buffer;}
function program3(depth0,data) {
  
  
  return "checked";}

  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
  
  
  return templates['conferences/userSettingOptions'];
});
