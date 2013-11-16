define('jst/conversations/MessageForm', ["compiled/handlebars_helpers","i18n!conversations.message_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/MessageForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<form method=\"post\" action=\"/conversations/";
  foundHelper = helpers.conversation;
  stack1 = foundHelper || depth0.conversation;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.id);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "conversation.id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/add_message\">\n";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n<form method=\"post\" action=\"/conversations\" class=\"new\">\n";}

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  foundHelper = helpers.audience;
  stack1 = foundHelper || depth0.audience;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "audience", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          ";
  stack1 = "New Message";
  stack2 = "headings.new_message";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "/add_recipients\" class=\"action_add_recipients\">";
  stack1 = "Add People";
  stack2 = "inbox_actions.add_people";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <tr class=\"recipient_info\">\n      <th><label>";
  stack1 = "To:";
  stack2 = "labels.to";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td><input type=\"text\" name=\"recipients\" data-finder_url=\"/conversations/find_recipients\" class=\"recipients\"></td>\n    </tr>\n    ";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <tr class=\"group_conversation_info\" style=\"display:none\">\n      <th></th>\n      <td>\n        <label>\n          <input type=\"checkbox\" name=\"group_conversation\" value=\"1\" class=\"group_conversation\">\n          ";
  stack1 = "This is a group conversation. Participants will see everyone's replies";
  stack2 = "labels.group_conversation";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </td>\n    </tr>\n    ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <div class=\"media_comment\" style=\"display: none;\" title=\"";
  stack1 = "Recorded media comment";
  stack2 = "titles.media_comment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img src=\"/images/messages/media-gray.png\">\n            ";
  stack1 = "Media Comment";
  stack2 = "media_comment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a href=\"#\" class=\"remove_link icon-end black\" style=\"float: right;\" title=\"";
  stack1 = "Remove media comment";
  stack2 = "titles.remove_media_comment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n            <div class=\"clear\"></div>\n          </div>\n          <input type=\"hidden\" name=\"media_comment_id\">\n          <input type=\"hidden\" name=\"media_comment_type\">\n        ";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <a class=\"action_media_comment icon-media\"\n             href=\"#\"\n             data-track-category=\"Compose Message\"\n             data-track-action=\"Edit\"\n             data-track-label=\"Audio Recording\"\n             title=\"";
  stack1 = "Record an audio or video comment";
  stack2 = "titles.record_media_comment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> ";
  stack1 = "Record";
  stack2 = "links.media_comment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;}

  foundHelper = helpers.conversation;
  stack1 = foundHelper || depth0.conversation;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <ul class=\"conversations\">\n    <li>\n      <span class=\"audience\">\n        ";
  foundHelper = helpers.conversation;
  stack1 = foundHelper || depth0.conversation;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n      ";
  foundHelper = helpers.addRecipientsEnabled;
  stack1 = foundHelper || depth0.addRecipientsEnabled;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n  </ul>\n  <table>\n    ";
  foundHelper = helpers.conversation;
  stack1 = foundHelper || depth0.conversation;
  stack2 = helpers.unless;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <tr>\n      <th><label>";
  stack1 = "Message:";
  stack2 = "labels.message";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label></th>\n      <td>\n        <textarea name=\"body\"\n                  data-track-category=\"Compose Message\"\n                  data-track-action=\"Edit\"\n                  data-track-label=\"Body\"\n                  class=\"conversation_body\">";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "message", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</textarea>\n      </td>\n    </tr>\n    ";
  foundHelper = helpers.conversation;
  stack1 = foundHelper || depth0.conversation;
  stack2 = helpers.unless;
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <tr class=\"user_note_info\" style=\"display:none\">\n      <th></th>\n      <td>\n        <label>\n          <input type=\"checkbox\"\n                 name=\"user_note\"\n                 value=\"1\"\n                  data-track-category=\"Compose Message\"\n                  data-track-action=\"Edit\"\n                  data-track-label=\"Faculty Journal\"\n                 class=\"user_note\" />\n          ";
  stack1 = "Add as a Faculty Journal entry";
  stack2 = "labels.add_to_faculty_journal";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <th>&nbsp;</th>\n      <td>\n        ";
  foundHelper = helpers.mediaCommentsEnabled;
  stack1 = foundHelper || depth0.mediaCommentsEnabled;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <ul class=\"attachment_list\"></ul>\n        <a class=\"icon-paperclip action_add_attachment\"\n           href=\"#\"\n           data-track-category=\"Compose Message\"\n           data-track-action=\"Edit\"\n           data-track-label=\"Attach File\"\n           title=\"";
  stack1 = "Add an attachment";
  stack2 = "titles.add_attachment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = "Attach";
  stack2 = "links.add_attachment";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  foundHelper = helpers.mediaCommentsEnabled;
  stack1 = foundHelper || depth0.mediaCommentsEnabled;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div style=\"float: right\">\n          <input type=\"hidden\" name=\"from_conversation_id\" value=\"";
  foundHelper = helpers.from_conversation_id;
  stack1 = foundHelper || depth0.from_conversation_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "from_conversation_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <input type=\"hidden\" name=\"mode\" value=\"async\">\n          <input type=\"hidden\" name=\"scope\" value=\"";
  foundHelper = helpers.scope;
  stack1 = foundHelper || depth0.scope;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "scope", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <input type=\"hidden\" name=\"filter\" value=\"";
  foundHelper = helpers.filter;
  stack1 = foundHelper || depth0.filter;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "filter", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <button type=\"submit\"\n                  data-track-category=\"Compose Message\"\n                  data-track-action=\"Edit\"\n                  data-track-label=\"Send\"\n                  class=\"btn btn-primary\">";
  stack1 = "Send";
  stack2 = "buttons.send_message";
  stack3 = {};
  stack4 = "conversations.message_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        </div>\n      </td>\n    </tr>\n  </table>\n</form>\n";
  return buffer;});
  
  
  return templates['conversations/MessageForm'];
});
