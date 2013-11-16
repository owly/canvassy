define('jst/DiscussionTopics/SummaryView', ["compiled/handlebars_helpers","i18n!discussion_topics.summary_view","jst/_api_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/SummaryView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"discussion-column\">\n    <span class=\"discussion-drag-handle\"\n          tabindex=\"0\"\n          data-tooltip\n          title=\"";
  stack1 = "Drag up or down to reorder";
  stack2 = "drag_up_or_down_to_reorder";
  stack3 = {};
  stack4 = "discussion_topics.summary_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n  </div>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <label class=\"discussion-column\">\n    <input class=\"toggleSelected\" type=\"checkbox\" ";
  foundHelper = helpers.selected;
  stack1 = foundHelper || depth0.selected;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " >\n  </label>\n";
  return buffer;}
function program4(depth0,data) {
  
  
  return "checked";}

function program6(depth0,data) {
  
  var stack1;
  foundHelper = helpers.unread_count;
  stack1 = foundHelper || depth0.unread_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "unread_count", { hash: {} }); }
  return escapeExpression(stack1);}

function program8(depth0,data) {
  
  var stack1;
  foundHelper = helpers.discussion_subentry_count;
  stack1 = foundHelper || depth0.discussion_subentry_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "discussion_subentry_count", { hash: {} }); }
  return escapeExpression(stack1);}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <i data-tooltip\n           title=\"";
  stack1 = "This topic is closed for comments";
  stack2 = "locked";
  stack3 = {};
  stack4 = "discussion_topics.summary_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-lock\"></i>\n      ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"";
  foundHelper = helpers.podcast_url;
  stack1 = foundHelper || depth0.podcast_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "podcast_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n           data-tooltip\n           title=\"";
  stack1 = "Topic Podcast Feed";
  stack2 = "topic_podcast_feed";
  stack3 = {};
  stack4 = "discussion_topics.summary_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-rss\"></i></a>\n      ";
  return buffer;}

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n           data-tooltip\n           title=\"";
  stack1 = "Attached: %{display_name}";
  stack2 = "attached_file_name";
  stack3 = {};
  stack4 = "discussion_topics.summary_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-paperclip\"></i></a>\n      ";
  return buffer;}

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <i data-tooltip\n           title=\"";
  stack1 = "This topic is used for grading";
  stack2 = "this_topic_is_used_for_grading";
  stack3 = {};
  stack4 = "discussion_topics.summary_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           class=\"icon-assignment\"></i>\n      ";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <a class=\"discussion-author\" href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    ";
  return buffer;}

  foundHelper = helpers.permissions;
  stack1 = foundHelper || depth0.permissions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.moderate);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  foundHelper = helpers.permissions;
  stack1 = foundHelper || depth0.permissions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['delete']);
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"discussion-column image-block\">\n  <div class=\"image-block-image\">\n    ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = self.invokePartial(partials.api_avatar, 'api_avatar', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"image-block-content\">\n    <div class=\"discussion-unread-container\">\n      <div class=\"new-and-total-badge\">\n        <span class=\"new-items\"\n              data-tooltip\n              title=\"";
  foundHelper = helpers.unread_count_tooltip;
  stack1 = foundHelper || depth0.unread_count_tooltip;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "unread_count_tooltip", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.unread_count;
  stack1 = foundHelper || depth0.unread_count;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        <span class=\"total-items\"\n              data-tooltip\n              title=\"";
  foundHelper = helpers.reply_count_tooltip;
  stack1 = foundHelper || depth0.reply_count_tooltip;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "reply_count_tooltip", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.discussion_subentry_count;
  stack1 = foundHelper || depth0.discussion_subentry_count;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </div>\n    </div>\n    <div class=\"discussion-last-reply\">\n      ";
  foundHelper = helpers.last_reply_at;
  stack1 = foundHelper || depth0.last_reply_at;
  foundHelper = helpers.friendlyDatetime;
  stack2 = foundHelper || depth0.friendlyDatetime;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "friendlyDatetime", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    </div>\n    <div class=\"discussion-info-icons\">\n      ";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  foundHelper = helpers.podcast_url;
  stack1 = foundHelper || depth0.podcast_url;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers.each;
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.assignment_id;
  stack1 = foundHelper || depth0.assignment_id;
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <a href=\"";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"discussion-title\" >";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"discussion-summary ellipsis\">";
  foundHelper = helpers.summary;
  stack1 = foundHelper || depth0.summary;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "summary", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['DiscussionTopics/SummaryView'];
});
