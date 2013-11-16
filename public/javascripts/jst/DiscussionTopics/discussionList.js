define('jst/DiscussionTopics/discussionList', ["compiled/handlebars_helpers","i18n!discussion_topics.discussion_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/discussionList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <span class=\"pull-right title-help\">";
  foundHelper = helpers.titleHelp;
  stack1 = foundHelper || depth0.titleHelp;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "titleHelp", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <b>";
  stack1 = "You currently have no pinned discussions";
  stack2 = "no_pinned_discussions";
  stack3 = {};
  stack4 = "discussion_topics.discussion_list";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b>\n    <p>";
  stack1 = "Drag a discussion here to pin it to the top of students' discussion page.";
  stack2 = "pinned_instructions";
  stack3 = {};
  stack4 = "discussion_topics.discussion_list";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    ";
  stack1 = "There are no discussions to show.";
  stack2 = "there_are_no_discussions_show";
  stack3 = {};
  stack4 = "discussion_topics.discussion_list";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program7(depth0,data) {
  
  
  return "\n    <div class=\"loader\"></div>\n  ";}

  buffer += "<div class=\"ig-header\">\n    <span class=\"element_toggler\"\n          aria-controls=\"";
  foundHelper = helpers.listID;
  stack1 = foundHelper || depth0.listID;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "listID", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n          role=\"button\">\n      <i class=\"icon-mini-arrow-down\"></i>\n      ";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    </span>\n\n    ";
  foundHelper = helpers.titleHelp;
  stack1 = foundHelper || depth0.titleHelp;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div id=\"";
  foundHelper = helpers.listID;
  stack1 = foundHelper || depth0.listID;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "listID", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" aria-expanded=\"true\">\n  <ul class=\"collectionViewItems ig-list\">\n  </ul>\n\n<div class=\"no-content discussion\">\n  ";
  foundHelper = helpers.pinned;
  stack1 = foundHelper || depth0.pinned;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(5, program5, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n  ";
  foundHelper = helpers.showSpinner;
  stack1 = foundHelper || depth0.showSpinner;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;});
  
  
  return templates['DiscussionTopics/discussionList'];
});
