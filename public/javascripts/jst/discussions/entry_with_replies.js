define('jst/discussions/entry_with_replies', ["compiled/handlebars_helpers","jst/discussions/_deleted_entry","jst/discussions/_entry_content","jst/discussions/_reply_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/entry_with_replies'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "deleted-discussion-entry";}

function program3(depth0,data) {
  
  
  return "can-reply";}

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['discussions/deleted_entry'], 'discussions/deleted_entry', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['discussions/entry_content'], 'discussions/entry_content', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['discussions/reply_form'], 'discussions/reply_form', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"bottom-reply-with-box\">\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials['discussions/reply_form'], 'discussions/reply_form', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;}

  buffer += "<article class=\"discussion_entry can_be_marked_as_read ";
  foundHelper = helpers.read_state;
  stack1 = foundHelper || depth0.read_state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "read_state", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-onload ";
  foundHelper = helpers.read_state;
  stack1 = foundHelper || depth0.read_state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "read_state", { hash: {} }); }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.deleted;
  stack1 = foundHelper || depth0.deleted;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.canReply;
  stack1 = foundHelper || depth0.canReply;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         data-mark-read-url=\"";
  foundHelper = helpers.mark_read_url;
  stack1 = foundHelper || depth0.mark_read_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "mark_read_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <a href=\"#\"\n     class=\"discussion-read-state-btn\"\n     role=\"button\"\n     title=\"\"\n     data-tooltip='{ \"position\": \"top\", \"collision\": \"none\" }'\n     data-event=\"toggleRead\">\n    <div class=\"discussion-read-state tooltip data-tooltip\"></div>\n  </a>\n  <div class=\"entry_content\" data-should-position>\n    ";
  foundHelper = helpers.deleted;
  stack1 = foundHelper || depth0.deleted;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  foundHelper = helpers.allowsThreadedReplies;
  stack1 = foundHelper || depth0.allowsThreadedReplies;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>\n<div class=\"replies hide-if-collapsed\"></div>\n";
  foundHelper = helpers.allowsSideComments;
  stack1 = foundHelper || depth0.allowsSideComments;
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;});
  
  
  return templates['discussions/entry_with_replies'];
});
