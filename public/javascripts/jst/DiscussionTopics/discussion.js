define('jst/DiscussionTopics/discussion', ["compiled/handlebars_helpers","i18n!discussion_topics.discussion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/discussion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "<i class=\"icon-assignment\"></i>";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        ";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.due_at);
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          ";
  stack1 = "Due";
  stack2 = "due";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
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
  stack1 = "medium";
  foundHelper = helpers.assignment;
  stack2 = foundHelper || depth0.assignment;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.due_at);
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n        ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          ";
  stack1 = "No Due Date";
  stack2 = "no_due_date";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
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

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <i class=\"icon-discussion-check\"\n           data-tooltip\n           title=\"";
  stack1 = "You are subscribed to this topic";
  stack2 = "user_subscribed";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i>\n      ";
  return buffer;}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <i class=\"icon-discussion\"\n           data-tooltip\n           title=\"";
  stack1 = "You are not subscribed to this topic";
  stack2 = "user_unsubscribed";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i>\n      ";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"#\" class=\"al-trigger\">\n          <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        </a>\n\n        <ul class=\"al-options\">\n          <li>\n            <a href=\"#\" class=\"icon-lock\">\n              ";
  foundHelper = helpers.locked;
  stack1 = foundHelper || depth0.locked;
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"icon-trash\">";
  stack1 = "Delete";
  stack2 = "delete";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </li>\n          ";
  foundHelper = helpers.pinnable;
  stack1 = foundHelper || depth0.pinnable;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;}
function program13(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                ";
  stack1 = "Open to comments";
  stack2 = "open_to_comments";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                ";
  stack1 = "Close for comments";
  stack2 = "close_for_comments";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <li>\n              <a href=\"#\" class=\"icon-pin\">\n                ";
  foundHelper = helpers.pinned;
  stack1 = foundHelper || depth0.pinned;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(20, program20, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </a>\n            </li>\n          ";
  return buffer;}
function program18(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                  ";
  stack1 = "Unpin";
  stack2 = "unpin";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
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

function program20(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                  ";
  stack1 = "Pin";
  stack2 = "pin";
  stack3 = {};
  stack4 = "discussion_topics.discussion";
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

  buffer += "<div class=\"discussion-content\">\n  <div class=\"discussion-row\">\n    <div class=\"discussion-type\">\n      ";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"discussion-title\">\n      <a href=\"";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"title\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n      <small>Last post ";
  stack1 = "medium";
  foundHelper = helpers.last_reply_at;
  stack2 = foundHelper || depth0.last_reply_at;
  foundHelper = helpers.tDateToString;
  stack3 = foundHelper || depth0.tDateToString;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "tDateToString", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</small>\n    </div>\n\n    <div class=\"discussion-due-date\">\n      ";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"discussion-status\">\n      ";
  foundHelper = helpers.subscribed;
  stack1 = foundHelper || depth0.subscribed;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <!-- <i class=\"icon-unpublished\"></i> -->\n    </div>\n\n    <div class=\"discussion-unread-status\">\n      <div class=\"new-and-total-badge pull-right\">\n        <span class=\"new-items\"\n              title=\"";
  foundHelper = helpers.unread_count_tooltip;
  stack1 = foundHelper || depth0.unread_count_tooltip;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "unread_count_tooltip", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n              data-tooltip>\n          ";
  foundHelper = helpers.unread_count;
  stack1 = foundHelper || depth0.unread_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "unread_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n        </span>\n\n        <div class=\"total-items\"\n             title=\"";
  foundHelper = helpers.reply_count_tooltip;
  stack1 = foundHelper || depth0.reply_count_tooltip;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "reply_count_tooltip", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n             data-tooltip>\n          ";
  foundHelper = helpers.discussion_subentry_count;
  stack1 = foundHelper || depth0.discussion_subentry_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "discussion_subentry_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"discussion-actions\">\n      ";
  foundHelper = helpers.permissions;
  stack1 = foundHelper || depth0.permissions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['delete']);
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['DiscussionTopics/discussion'];
});
