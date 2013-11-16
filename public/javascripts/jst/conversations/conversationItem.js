define('jst/conversations/conversationItem', ["compiled/handlebars_helpers","i18n!conversations.conversation_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/conversationItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=\"";
  foundHelper = helpers.avatar_url;
  stack1 = foundHelper || depth0.avatar_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "avatar_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"avatar\" />";
  return buffer;}

function program3(depth0,data) {
  
  
  return " style=\"display:none\"";}

  buffer += "<li data-id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"";
  foundHelper = helpers.classes;
  stack1 = foundHelper || depth0.classes;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "classes", { hash: {} }); }
  buffer += escapeExpression(stack1) + " admin-link-hover-area\">\n  ";
  foundHelper = helpers.avatar_url;
  stack1 = foundHelper || depth0.avatar_url;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=unread\"\n     class=\"action_mark_as_unread standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-category=\"Mark as Unread\"\n     role=\"button\"\n     title=\"";
  stack1 = "Mark as Unread";
  stack2 = "inbox_actions.mark_as_unread";
  stack3 = {};
  stack4 = "conversations.conversation_item";
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
  stack1 = "Mark as Unread";
  stack2 = "inbox_actions.mark_as_unread";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=read\"\n     class=\"action_mark_as_read standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-category=\"Mark as Read\"\n     role=\"button\"\n     title=\"";
  stack1 = "Mark as Read";
  stack2 = "inbox_actions.mark_as_read";
  stack3 = {};
  stack4 = "conversations.conversation_item";
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
  stack1 = "Mark as Read";
  stack2 = "inbox_actions.mark_as_read";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[starred]=true\"\n     class=\"action_star standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-category=\"Star\"\n     role=\"button\"\n     title=\"";
  stack1 = "Star";
  stack2 = "inbox_actions.action_star";
  stack3 = {};
  stack4 = "conversations.conversation_item";
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
  stack1 = "Star";
  stack2 = "inbox_actions.action_star";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[starred]=false\"\n     class=\"action_unstar standard_action\"\n     data-track-category=\"Thread Actions\"\n     data-track-action=\"Individual Left Side\"\n     data-track-category=\"Unstar\"\n     role=\"button\"\n     title=\"";
  stack1 = "Unstar";
  stack2 = "inbox_actions.action_unstar";
  stack3 = {};
  stack4 = "conversations.conversation_item";
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
  stack1 = "Unstar";
  stack2 = "inbox_actions.action_unstar";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n  <span class=\"date\">";
  foundHelper = helpers.lastMessageAt;
  stack1 = foundHelper || depth0.lastMessageAt;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "lastMessageAt", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n\n  <div class=\"conversation-summary\">\n    <img class=\"attachments\" src=\"/images/messages/attach-gray.png\" title=\"";
  stack1 = "This conversation has one or more attachments";
  stack2 = "has_attachments";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <img class=\"media_objects\" src=\"/images/messages/media-gray.png\" title=\"";
  stack1 = "This conversation has one or more media comments";
  stack2 = "has_media";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"audience\">";
  foundHelper = helpers.audienceHtml;
  stack1 = foundHelper || depth0.audienceHtml;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "audienceHtml", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n\n  <span class=\"count\"";
  foundHelper = helpers.hideCount;
  stack1 = foundHelper || depth0.hideCount;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.message_count;
  stack1 = foundHelper || depth0.message_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "message_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n\n  <p>";
  foundHelper = helpers.lastMessage;
  stack1 = foundHelper || depth0.lastMessage;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "lastMessage", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n\n  <div class=\"admin-links\">\n    <button class=\"al-trigger btn btn-mini\" data-kyle-menu-options='{\"appendMenuTo\": \"#menu-wrapper\", \"notifyMenuActiveOnParent\": \"li.admin-link-hover-area\"}'>\n      <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n      <div class=\"screenreader-only\">";
  stack1 = "Message Actions Menu";
  stack2 = "inbox_actions_description";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </button>\n    <ul class=\"al-options\" data-id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=unread\"\n             class=\"action_mark_as_unread standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Mark as Unread\">\n        ";
  stack1 = "Mark as Unread";
  stack2 = "inbox_actions.mark_as_unread";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=read\"\n             class=\"action_mark_as_read standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Mark as Read\">\n        ";
  stack1 = "Mark as Read";
  stack2 = "inbox_actions.mark_as_read";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[starred]=false\"\n             class=\"action_unstar standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unstar\">\n        ";
  stack1 = "Unstar";
  stack2 = "inbox_actions.action_unstar";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[starred]=true\"\n             class=\"action_star standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Star\">\n        ";
  stack1 = "Star";
  stack2 = "inbox_actions.unstar";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[subscribed]=0\"\n             class=\"action_unsubscribe standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unsubscribe\">\n        ";
  stack1 = "Unsubscribe";
  stack2 = "inbox_actions.unsubscribe";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[subscribed]=1\"\n             class=\"action_subscribe standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Subscribe\">\n        ";
  stack1 = "Subscribe";
  stack2 = "inbox_actions.subscribe";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=archived\"\n             class=\"action_archive standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Archive\">\n        ";
  stack1 = "Archive";
  stack2 = "inbox_actions.archive";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "?conversation[workflow_state]=read\"\n             class=\"action_unarchive standard_action\"\n             data-track-category=\"Thread Actions\"\n             data-track-action=\"Individual Gear\"\n             data-track-label=\"Unarchive\">\n        ";
  stack1 = "Unarchive";
  stack2 = "inbox_actions.unarchive";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n      <li><a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n             class=\"action_delete_all\">\n        ";
  stack1 = "Delete";
  stack2 = "inbox_actions.delete";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a></li>\n    </ul>\n  </div>\n  <a href=\"/conversations/";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"details_link\">";
  stack1 = "more...";
  stack2 = "read_more";
  stack3 = {};
  stack4 = "conversations.conversation_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n</li>\n";
  return buffer;});
  
  
  return templates['conversations/conversationItem'];
});
