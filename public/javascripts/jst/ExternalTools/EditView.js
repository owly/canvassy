define('jst/ExternalTools/EditView', ["compiled/handlebars_helpers","i18n!external_tools.edit_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <p class=\"help-block\">";
  stack1 = "Enter a new value to change";
  stack2 = "shared_secret_note";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "hide";}

function program5(depth0,data) {
  
  
  return "selected";}

function program7(depth0,data) {
  
  
  return "selected";}

function program9(depth0,data) {
  
  
  return "selected";}

function program11(depth0,data) {
  
  
  return "selected";}

  buffer += "<fieldset>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_name\">Name</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_name\" value=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"name\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_consumer_key\">Consumer Key</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_consumer_key\" value=\"";
  foundHelper = helpers.consumer_key;
  stack1 = foundHelper || depth0.consumer_key;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "consumer_key", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"consumer_key\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"external_tool_shared_secret\">Shared Secret</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_shared_secret\" value=\"";
  foundHelper = helpers.shared_secret;
  stack1 = foundHelper || depth0.shared_secret;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "shared_secret", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"shared_secret\">\n      ";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group ";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <label class=\"control-label\" for=\"external_tool_config_type\">Configuration Type</label>\n    <div class=\"controls\">\n      <select id=\"external_tool_config_type\" name=\"config_type\">\n        <option value=\"manual\">";
  stack1 = "Manual Entry";
  stack2 = "manual";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"by_url\" ";
  stack1 = "by_url";
  foundHelper = helpers.config_type;
  stack2 = foundHelper || depth0.config_type;
  foundHelper = helpers.selectedIf;
  stack3 = foundHelper || depth0.selectedIf;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "selectedIf", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + ">";
  stack1 = "By URL";
  stack2 = "by_url";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option value=\"by_xml\">";
  stack1 = "Paste XML";
  stack2 = "by_xml";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"control-group config_type by_url\">\n    <label class=\"control-label\" for=\"external_tool_config_url\">\n      ";
  stack1 = "Configuration URL";
  stack2 = "config_url";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_config_url\" value=\"";
  foundHelper = helpers.config_url;
  stack1 = foundHelper || depth0.config_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "config_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"config_url\">\n    </div>\n  </div>\n  <div class=\"control-group config_type by_xml\">\n    <label class=\"control-label\" for=\"external_tool_config_xml\">\n      ";
  stack1 = "Paste XML Here";
  stack2 = "paste_xml";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea id=\"external_tool_config_xml\" name=\"config_xml\"\n      ></textarea>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_url\">\n      ";
  stack1 = "URL";
  stack2 = "tool_url";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_url\" value=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"url\">\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_domain\">\n      ";
  stack1 = "Domain";
  stack2 = "tool_domain";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"external_tool_domain\" value=\"";
  foundHelper = helpers.domain;
  stack1 = foundHelper || depth0.domain;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "domain", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"domain\">\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_privacy_level\">\n      ";
  stack1 = "Privacy";
  stack2 = "privacy";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <select id=\"external_tool_privacy_level\" name=\"privacy_level\">\n        <option\n          value=\"anonymous\"\n          ";
  stack1 = "anonymous";
  foundHelper = helpers.privacy_level;
  stack2 = foundHelper || depth0.privacy_level;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = "Anonymous";
  stack2 = "anonymous";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option\n          value=\"email_only\"\n          ";
  stack1 = "email_only";
  foundHelper = helpers.privacy_level;
  stack2 = foundHelper || depth0.privacy_level;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = "E-Mail Only";
  stack2 = "email_only";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option \n          value=\"name_only\"\n          ";
  stack1 = "name_only";
  foundHelper = helpers.privacy_level;
  stack2 = foundHelper || depth0.privacy_level;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = "Name Only";
  stack2 = "name_only";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        <option\n          value=\"public\"\n          ";
  stack1 = "public";
  foundHelper = helpers.privacy_level;
  stack2 = foundHelper || depth0.privacy_level;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        >";
  stack1 = "Public";
  stack2 = "public";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_custom_fields_string\">\n      ";
  stack1 = "Custom Fields";
  stack2 = "custom_fields";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea\n        id=\"external_tool_custom_fields_string\"\n        name=\"custom_fields_string\"\n      >";
  foundHelper = helpers.custom_fields_string;
  stack1 = foundHelper || depth0.custom_fields_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "custom_fields_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n      <div class=\"help-block\"> ";
  stack1 = "One per line. Format: name=value";
  stack2 = "custom_feilds_explanation";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n  </div>\n  <div class=\"control-group config_type manual\">\n    <label class=\"control-label\" for=\"external_tool_description\">\n      ";
  stack1 = "Description";
  stack2 = "description";
  stack3 = {};
  stack4 = "external_tools.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <div class=\"controls\">\n      <textarea\n        id=\"external_tool_description\"\n        name=\"description\"\n      >";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n    </div>\n  </div>\n</fieldset>";
  return buffer;});
  
  
  return templates['ExternalTools/EditView'];
});
