define('jst/discussions/_entry_content', ["compiled/handlebars_helpers","i18n!discussions.entry_content","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_entry_content'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "collapsable";}

function program3(depth0,data) {
  
  
  return "data-event=\"toggleCollapsed\"";}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <li><a data-pushstate href=\"#entry-";
  foundHelper = helpers.parent_id;
  stack1 = foundHelper || depth0.parent_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "parent_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-replied\"></i> ";
  stack1 = "Go To Parent";
  stack2 = "go_to_parent";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <li><a href=\"#content\"><i class=\"icon-discussion\"></i> ";
  stack1 = "Go To Topic";
  stack2 = "go_to_topic";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <li><a data-event=\"edit\" href=\"#\"><i class=\"icon-edit\"></i> ";
  stack1 = "Edit";
  stack2 = "edit";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n          <li><a data-event=\"remove\" href=\"#\"><i class=\"icon-trash\"></i> ";
  stack1 = "Delete";
  stack2 = "delete";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <li><a href=\"";
  foundHelper = helpers.speedgraderUrl;
  stack1 = foundHelper || depth0.speedgraderUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "speedgraderUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-check\"></i> ";
  stack1 = "Open in SpeedGrader";
  stack2 = "open_in_speedgrader";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-bypass";
  return buffer;}

function program15(depth0,data) {
  
  
  return "unknown";}

function program17(depth0,data) {
  
  var stack1, stack2;
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program20(depth0,data) {
  
  var stack1;
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.display_name", { hash: {} }); }
  return escapeExpression(stack1);}

function program22(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = "Unknown Author";
  stack2 = "unknown_author";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}

function program24(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div class=\"discussion-fyi\">";
  stack1 = "Edited by *%{editor.display_name}* on %{edited_at}";
  stack2 = "edited_comment";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  stack4 = "<a %{editor_href}>$1</a>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  ";
  return buffer;}

function program26(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"comment_attachments\">\n      ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers.each;
  tmp1 = self.program(27, program27, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;}
function program27(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div><a href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"";
  foundHelper = helpers['content-type'];
  stack1 = foundHelper || depth0['content-type'];
  foundHelper = helpers.mimeClass;
  stack2 = foundHelper || depth0.mimeClass;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "mimeClass", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.filename;
  stack1 = foundHelper || depth0.filename;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "filename", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></div>\n      ";
  return buffer;}

function program29(depth0,data) {
  
  
  return "\n<div class=\"entry-controls hide-if-collapsed hide-if-replying\">\n  <div class=\"notification\" data-bind=\"notification\"></div>\n  <a class='discussion-reply-action entry-control dim-till-hover' data-event=\"addReply\" href='#'><i class='icon-replied standalone-icon'></i></a>\n</div>\n";}

  buffer += "<header class=\"entry-header discussion-section admin-link-hover-area clearfix ";
  foundHelper = helpers.collapsable;
  stack1 = foundHelper || depth0.collapsable;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  foundHelper = helpers.collapsable;
  stack1 = foundHelper || depth0.collapsable;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = self.invokePartial(partials.avatar, 'avatar', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"discussion-header-content right-of-avatar\">\n    <div class=\"admin-links hide-if-collapsed\">\n      <a class=\"al-trigger dim-till-hover\" data-kyle-menu-options='{\"appendMenuTo\": \"body\"}'><i\n          class=\"icon-settings standalone-icon\"></i><i class=\"icon-mini-arrow-down standalone-icon\"></i><span\n          class=\"screenreader-only\">";
  stack1 = "Manage Discussion Entry";
  stack2 = "manage_discussion_entry";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></a>\n      <ul class=\"al-options\">\n        ";
  foundHelper = helpers.parent_id;
  stack1 = foundHelper || depth0.parent_id;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  foundHelper = helpers.canModerate;
  stack1 = foundHelper || depth0.canModerate;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  foundHelper = helpers.speedgraderUrl;
  stack1 = foundHelper || depth0.speedgraderUrl;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n    <div class=\"discussion-header-right\">\n      <div class=\"discussion-pubdate hide-if-collapsed\">";
  foundHelper = helpers.updated_at;
  stack1 = foundHelper || depth0.updated_at;
  stack2 = {};
  stack3 = true;
  stack2['pubdate'] = stack3;
  foundHelper = helpers.friendlyDatetime;
  stack3 = foundHelper || depth0.friendlyDatetime;
  tmp1 = {};
  tmp1.hash = stack2;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack1, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "friendlyDatetime", stack1, tmp1); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</div>\n      <div class=\"headerBadges show-if-collapsed\"></div>\n    </div>\n    <div class=\"discussion-title\">\n      <a ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.id);
  stack2 = helpers.unless;
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = "Author's name";
  stack2 = "authors_name";
  stack3 = {};
  stack4 = "discussions.entry_content";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author\">";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(22, program22, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n    <div class=\"show-if-collapsed discussion-subtitle summary ellipsis\">";
  foundHelper = helpers.summary;
  stack1 = foundHelper || depth0.summary;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "summary", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div> \n  </div>\n</header>\n<div class=\"discussion-section message_wrapper hide-if-collapsed\">\n  <span class=\"message-notification\" data-bind=\"messageNotification\"></span>\n  <div data-bind=\"message\" class=\"message user_content\">";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  foundHelper = helpers.convertApiUserContent;
  stack2 = foundHelper || depth0.convertApiUserContent;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</div>\n  ";
  foundHelper = helpers.editor;
  stack1 = foundHelper || depth0.editor;
  stack2 = helpers['if'];
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers['if'];
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  foundHelper = helpers.inlineReplyLink;
  stack1 = foundHelper || depth0.inlineReplyLink;
  stack2 = helpers['if'];
  tmp1 = self.program(29, program29, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
Handlebars.registerPartial('discussions/entry_content', templates['discussions/_entry_content']);

  
  return templates['discussions/_entry_content'];
});
