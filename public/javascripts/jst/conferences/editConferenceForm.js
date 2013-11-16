define('jst/conferences/editConferenceForm', ["compiled/handlebars_helpers","i18n!conferences.edit_conference_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conferences/editConferenceForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "disabled='disabled'";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <option value=\"";
  foundHelper = helpers.type;
  stack1 = foundHelper || depth0.type;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "type", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}
function program4(depth0,data) {
  
  
  return "selected=\"selected\"";}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        ";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.has_advanced_settings);
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <a href=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/settings\" target=\"_blank\" class=\"advanced_settings\">\n            ";
  stack1 = "Manage Advanced Settings...";
  stack2 = "advanced_settings";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        ";
  return buffer;}

function program9(depth0,data) {
  
  
  return "disabled='disabled'";}

function program11(depth0,data) {
  
  
  return "checked";}

function program13(depth0,data) {
  
  
  return "disabled='disabled'";}

function program15(depth0,data) {
  
  
  return "checked";}

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"member user_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <label class=\"checkbox\" for=\"user_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n            <input name=\"user[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "]\" type=\"hidden\" value=\"0\">\n            <input id=\"user_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" name=\"user[";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "]\" type=\"checkbox\" value=\"1\">\n            ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n          </label>\n        </li>\n      ";
  return buffer;}

function program19(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <button type=\"submit\" class=\"btn btn-primary save-button\">";
  stack1 = "Create Conference";
  stack2 = "buttons.create_conference";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  return buffer;}

function program21(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <button type=\"submit\" class=\"btn btn-primary save-button\">";
  stack1 = "Update Conference";
  stack2 = "buttons.update_condference";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  return buffer;}

  buffer += "<form action=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"form-dialog form-horizontal\" method=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.http_method);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.http_method", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <input type=\"hidden\" name=\"_method\" value=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.http_method);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.http_method", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <div style=\"margin:0;padding:0;display:inline\">\n    <input name=\"authenticity_token\" type=\"hidden\" value=\"";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.auth_token);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "settings.auth_token", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  </div>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_title\">";
  stack1 = "Name";
  stack2 = "name";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input id=\"web_conference_title\" name=\"web_conference[title]\" type=\"text\" value=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.title);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_conference_type\">";
  stack1 = "Type";
  stack2 = "conference_type";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <select id=\"web_conference_conference_type\" name=\"web_conference[conference_type]\" ";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.is_editing);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  foundHelper = helpers.conferenceTypes;
  stack1 = foundHelper || depth0.conferenceTypes;
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n\n      ";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.is_editing);
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_duration\">";
  stack1 = "Duration";
  stack2 = "duration";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls form-inline\">\n      <input id=\"web_conference_duration\" name=\"web_conference[duration]\" type=\"text\"\n             data-restore-value=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.restore_duration);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.restore_duration", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n             value=\"";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.duration);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.duration", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n             ";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.disable_duration_changes);
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  stack1 = "minutes";
  stack2 = "duration_in_minutes";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_options\">";
  stack1 = "Options";
  stack2 = "options";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"web_conference_user_settings\"></div>\n      <label class=\"checkbox\" for=\"web_conference_long_running\">\n        <input name=\"web_conference[long_running]\" type=\"hidden\" value=\"0\">\n        <input id=\"web_conference_long_running\" name=\"web_conference[long_running]\" type=\"checkbox\"\n               value=\"1\" ";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.long_running);
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n               ";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.disable_duration_changes);
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  stack1 = "No time limit (for long-running conferences)";
  stack2 = "long_running";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_description\">";
  stack1 = "Description";
  stack2 = "description";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <textarea cols=\"40\" id=\"web_conference_description\" name=\"web_conference[description]\" rows=\"6\">";
  foundHelper = helpers.conferenceData;
  stack1 = foundHelper || depth0.conferenceData;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.description);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conferenceData.description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n    </div>\n  </div>\n  <legend>";
  stack1 = "Members";
  stack2 = "members";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <label class=\"checkbox\" for=\"user_all\">\n    <input name=\"user[all]\" type=\"hidden\" value=\"0\">\n    <input class=\"all_users_checkbox\" id=\"user_all\" name=\"user[all]\" type=\"checkbox\" value=\"1\" ";
  foundHelper = helpers.inviteAll;
  stack1 = foundHelper || depth0.inviteAll;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    ";
  stack1 = "Invite All Course Members";
  stack2 = "invite_all";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div>\n    <ul id=\"members_list\" style=\"border: 1px solid #333; padding: 10px; overflow-y: auto; max-height: 150px;\">\n      ";
  foundHelper = helpers.users;
  stack1 = foundHelper || depth0.users;
  stack2 = helpers.each;
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n\n  <div class=\"form-controls\">\n    <button type=\"button\" class=\"cancel_button btn\">";
  stack1 = "Cancel";
  stack2 = "buttons.cancel";
  stack3 = {};
  stack4 = "conferences.edit_conference_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    ";
  foundHelper = helpers.settings;
  stack1 = foundHelper || depth0.settings;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.is_adding);
  stack2 = helpers['if'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(21, program21, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['conferences/editConferenceForm'];
});
