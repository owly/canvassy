define('jst/DiscussionTopics/DiscussionsSettingsView', ["compiled/handlebars_helpers","i18n!discussion_topics.discussions_settings_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/DiscussionsSettingsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  <p><b>";
  stack1 = "My Settings";
  stack2 = "my_settings";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></p>\n\n  <label class=\"checkbox\">\n    ";
  stack1 = "manual_mark_as_read";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    ";
  stack1 = "Manually mark posts as read";
  stack2 = "manually_mark_as_read";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</fieldset>\n\n<hr />\n\n<p><b>";
  stack1 = "Student Settings";
  stack2 = "student_settings";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b></p>\n\n<fieldset>\n  <label class=\"checkbox\">\n    ";
  stack1 = "allow_student_discussion_topics";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    ";
  stack1 = "Create discussion topics";
  stack2 = "allow_student_topics";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <label class=\"checkbox\">\n    ";
  stack1 = "allow_student_discussion_editing";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    ";
  stack1 = "Edit and delete their own posts";
  stack2 = "allow_student_discussion_editing";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <label class=\"checkbox\">\n    ";
  stack1 = "allow_student_forum_attachments";
  foundHelper = helpers.checkbox;
  stack2 = foundHelper || depth0.checkbox;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkbox", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n    ";
  stack1 = "Attach files to discussions";
  stack2 = "attach_files";
  stack3 = {};
  stack4 = "discussion_topics.discussions_settings_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</fieldset>\n";
  return buffer;});
  
  
  return templates['DiscussionTopics/DiscussionsSettingsView'];
});
