define('jst/DiscussionTopics/EditView', ["compiled/handlebars_helpers","i18n!discussion_topics.edit_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, stack5, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<fieldset>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"attachment_uploaded_data\">";
  stack1 = "Attachment";
  stack2 = "attachment";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers.each;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <input type=\"file\"\n             name=\"attachment\"\n             ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n             id=\"attachment_uploaded_data\" >\n    </div>\n  </div>\n\n</fieldset>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"attachmentRow\">\n          <a href=\"";
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
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n          <button type=\"button\" class=\"removeAttachment close\" style=\"float:none\">×</button>\n        </div>\n      ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "style=\"display:none\"";}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"control-group\">\n    <label class=\"control-label\">";
  stack1 = "Options";
  stack2 = "options";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      ";
  foundHelper = helpers.isTopic;
  stack1 = foundHelper || depth0.isTopic;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.contextIsCourse;
  stack1 = foundHelper || depth0.contextIsCourse;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.canModerate;
  stack1 = foundHelper || depth0.canModerate;
  stack2 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.showAssignment;
  stack1 = foundHelper || depth0.showAssignment;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <label class=\"checkbox\">\n          <input name=\"threaded\" type=\"hidden\" value=\"0\" />\n          <input type=\"checkbox\"\n                 ";
  stack1 = "threaded";
  foundHelper = helpers.discussion_type;
  stack2 = foundHelper || depth0.discussion_type;
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 name=\"threaded\">\n          ";
  stack1 = "Allow threaded replies";
  stack2 = "allow_threaded_replies";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;}
function program8(depth0,data) {
  
  
  return "checked";}

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        ";
  foundHelper = helpers.isAnnouncement;
  stack1 = foundHelper || depth0.isAnnouncement;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <label class=\"checkbox\">\n          ";
  stack1 = "require_initial_post";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "Users must post before seeing replies";
  stack2 = "users_must_post_before_seeing_replies";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <label class=\"checkbox\">\n            <input name=\"delay_posting\" type=\"hidden\" value=\"0\" />\n            <input type=\"checkbox\"\n                   ";
  foundHelper = helpers.delayed_post_at;
  stack1 = foundHelper || depth0.delayed_post_at;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   name=\"delay_posting\"\n                   class=\"element_toggler\"\n                   aria-controls=\"discussion_topic_delay_post_container\">\n            ";
  stack1 = "Delay posting";
  stack2 = "delay_posting";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <label id=\"discussion_topic_delay_post_container\"\n                 style=\"";
  foundHelper = helpers.delayed_post_at;
  stack1 = foundHelper || depth0.delayed_post_at;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n                 class=\"checkbox\">\n            ";
  stack1 = "Post At";
  stack2 = "post_at";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <input type=\"text\"\n                   class=\"datetime_field input-medium\"\n                   name=\"delayed_post_at\"\n                   ";
  buffer += "\n                   value=\"";
  foundHelper = helpers.delayed_post_at;
  stack1 = foundHelper || depth0.delayed_post_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n          </label>\n        ";
  return buffer;}
function program12(depth0,data) {
  
  
  return "checked";}

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <label class=\"checkbox\">\n          <input name=\"podcast_enabled\" type=\"hidden\" value=\"0\" />\n          <input type=\"checkbox\"\n                 ";
  foundHelper = helpers.podcast_url;
  stack1 = foundHelper || depth0.podcast_url;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 name=\"podcast_enabled\"\n                 class=\"element_toggler\"\n                 aria-controls=\"podcast_has_student_posts_container\">\n          ";
  stack1 = "Enable podcast feed";
  stack2 = "enable_podcast_feed";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n  \n        <label id=\"podcast_has_student_posts_container\"\n               style=\"";
  foundHelper = helpers.podcast_url;
  stack1 = foundHelper || depth0.podcast_url;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n               class=\"checkbox\">\n          ";
  stack1 = "podcast_has_student_posts";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n          ";
  stack1 = "Include Replies in podcast feed";
  stack2 = "include_replies_in_podcast_feed";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;}
function program15(depth0,data) {
  
  
  return "checked";}

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <label class=\"checkbox\">\n          <input name=\"assignment[set_assignment]\" type=\"hidden\" value=\"0\" />\n          <input type=\"checkbox\"\n                 id=\"use_for_grading\"\n                 class=\"element_toggler\"\n                 aria-controls=\"assignment_options\"\n                 name=\"assignment[set_assignment]\"\n                 ";
  foundHelper = helpers.set_assignment;
  stack1 = foundHelper || depth0.set_assignment;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                 value=\"1\">\n          ";
  stack1 = "Graded";
  stack2 = "use_for_grading";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      ";
  return buffer;}

function program19(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  ";
  foundHelper = helpers.contextIsCourse;
  stack1 = foundHelper || depth0.contextIsCourse;
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program20(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div id=\"availability_options\" style=\"";
  foundHelper = helpers.set_assignment;
  stack1 = foundHelper || depth0.set_assignment;
  foundHelper = helpers.hiddenIf;
  stack2 = foundHelper || depth0.hiddenIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n      <fieldset>\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"delayed_post_at\">";
  stack1 = "Available From";
  stack2 = "available_from";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <input type=\"text\"\n                   class=\"datetime_field input-medium\"\n                   name=\"delayed_post_at\"\n                   ";
  buffer += "\n                   value=\"";
  foundHelper = helpers.delayed_post_at;
  stack1 = foundHelper || depth0.delayed_post_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n          </div>\n        </div>\n      </fieldset>\n\n      ";
  foundHelper = helpers.isTopic;
  stack1 = foundHelper || depth0.isTopic;
  stack2 = helpers['if'];
  tmp1 = self.program(21, program21, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;}
function program21(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <fieldset>\n          <div class=\"control-group\">\n            <label class=\"control-label\" for=\"lock_at\">";
  stack1 = "Until";
  stack2 = "until";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            <div class=\"controls\">\n              <input type=\"text\"\n                     class=\"datetime_field input-medium\"\n                     name=\"lock_at\"\n                     ";
  buffer += "\n                     value=\"";
  foundHelper = helpers.lock_at;
  stack1 = foundHelper || depth0.lock_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n            </div>\n          </div>\n        </fieldset>\n      ";
  return buffer;}

function program23(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div id=\"assignment_options\" style=\"";
  foundHelper = helpers.set_assignment;
  stack1 = foundHelper || depth0.set_assignment;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n    <fieldset>\n      <div class=\"control-group\">\n        <label class=\"control-label\" for=\"discussion_topic_assignment_points_possible\">";
  stack1 = "Points Possible";
  stack2 = "points_possible";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <div class=\"controls\">\n          <input type=\"number\"\n                 id=\"discussion_topic_assignment_points_possible\"\n                 name=\"assignment[points_possible]\"\n                 class=\"input-small\"\n                 value=\"";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.pointsPossible);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "assignment.pointsPossible", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n        </div>\n      </div>\n\n      <div id=\"grading_type_options\" class=\"control-group\"></div>\n\n      <div id=\"assignment_group_options\" class=\"control-group\"></div>\n\n      ";
  foundHelper = helpers.isLargeRoster;
  stack1 = foundHelper || depth0.isLargeRoster;
  stack2 = helpers.unless;
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  foundHelper = helpers.isLargeRoster;
  stack1 = foundHelper || depth0.isLargeRoster;
  stack2 = helpers.unless;
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </fieldset>\n\n    <div class='js-assignment-overrides'></div>\n  </div>\n";
  return buffer;}
function program24(depth0,data) {
  
  
  return "\n        <div id=\"group_category_options\" class=\"control-group\"></div>\n      ";}

function program26(depth0,data) {
  
  
  return "\n        <div id=\"peer_review_options\" class=\"control-group\"></div>\n      ";}

  buffer += "<fieldset>\n  <div class=\"control-group\">\n    <label class=\"hidden-inline-text\" for=\"discussion-title\">";
  stack1 = "Topic Title";
  stack2 = "topic_title";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <input type=\"text\"\n           id=\"discussion-title\"\n           name=\"title\"\n           placeholder=\"";
  stack1 = "Topic Title";
  stack2 = "topic_title";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           value=\"";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n           maxlength=\"254\"\n           class=\"input-block-level\">\n  </div>\n  <div class=\"control-group\">\n      <div style=\"float: right;\">\n        <a href=\"#\" class=\"rte_switch_views_link\">";
  stack1 = "Switch Views";
  stack2 = "#editor.switch_views";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </div>\n      <div style=\"clear:both;\"></div>\n      <textarea name=\"message\"\n                class=\"input-block-level\"\n                style=\"width: 100%; min-height: 200px;\">";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  stack2 = {};
  stack3 = 1;
  stack2['forEditing'] = stack3;
  foundHelper = helpers.convertApiUserContent;
  stack3 = foundHelper || depth0.convertApiUserContent;
  tmp1 = {};
  tmp1.hash = stack2;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack1, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, tmp1); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</textarea>\n  </div>\n\n</fieldset>\n";
  foundHelper = helpers.canAttach;
  stack1 = foundHelper || depth0.canAttach;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<fieldset>\n\n  ";
  foundHelper = helpers.showAssignment;
  stack1 = foundHelper || depth0.showAssignment;
  foundHelper = helpers.canModerate;
  stack2 = foundHelper || depth0.canModerate;
  foundHelper = helpers.contextIsCourse;
  stack3 = foundHelper || depth0.contextIsCourse;
  foundHelper = helpers.isTopic;
  stack4 = foundHelper || depth0.isTopic;
  foundHelper = helpers.ifAny;
  stack5 = foundHelper || depth0.ifAny;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack3, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack5, stack4, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</fieldset>\n\n";
  foundHelper = helpers.isTopic;
  stack1 = foundHelper || depth0.isTopic;
  stack2 = helpers['if'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  foundHelper = helpers.showAssignment;
  stack1 = foundHelper || depth0.showAssignment;
  stack2 = helpers['if'];
  tmp1 = self.program(23, program23, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"form-actions flush\">\n  <button type=\"submit\"\n          data-text-while-loading=\"";
  stack1 = "Saving...";
  stack2 = "saving";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          class=\"btn btn-primary\">";
  stack1 = "Save";
  stack2 = "save";
  stack3 = {};
  stack4 = "discussion_topics.edit_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n\n";
  return buffer;});
  
  
  return templates['DiscussionTopics/EditView'];
});
