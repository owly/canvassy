define('jst/discussions/_reply_form', ["compiled/handlebars_helpers","i18n!discussions.reply_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_reply_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"discussion-entry-reply-area reply-box-container hide-if-collapsed hide-if-replying\">\n    <div class=\"notification\" data-bind=\"notification\"></div>\n    <a class=\"discussion-reply-action discussion-reply-box\" data-event=\"addReply\" href=\"#\">\n      ";
  stack1 = "Reply";
  stack2 = "write_a_reply";
  stack3 = {};
  stack4 = "discussions.reply_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </div>\n";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <a href=\"#\" class=\"discussion-reply-add-attachment discussion-reply-action icon-paperclip\"\n             data-event=\"addReplyAttachment\">";
  stack1 = "Attach";
  stack2 = "attach_file";
  stack3 = {};
  stack4 = "discussions.reply_form";
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

  foundHelper = helpers.showBoxReplyLink;
  stack1 = foundHelper || depth0.showBoxReplyLink;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class='discussion-entry-reply-area hide-if-collapsed show-if-replying'>\n  <form class=\"discussion-reply-form\">\n    <div class=\"toggle-wrapper\">\n      <a href=\"#\">";
  stack1 = "Switch Views";
  stack2 = "switch_views";
  stack3 = {};
  stack4 = "discussions.reply_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n\n    <textarea class=\"reply-textarea\" id=\"reply_message_for_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></textarea>\n\n    <div class=\"clearfix\">\n      <div class=\"discussion-reply-buttons\">\n        <a href=\"javascript:\" class=\"cancel_button btn btn-small\">";
  stack1 = "Cancel";
  stack2 = "cancel";
  stack3 = {};
  stack4 = "discussions.reply_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        <button class=\"btn btn-primary btn-small\" type=\"submit\">";
  stack1 = "Post Reply";
  stack2 = "post_reply";
  stack3 = {};
  stack4 = "discussions.reply_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n\n      <div class=\"discussion-reply-attachments-container\">\n        <ul class=\"discussion-reply-attachments\"></ul>\n        ";
  foundHelper = helpers.canAttach;
  stack1 = foundHelper || depth0.canAttach;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </form>\n</div>\n";
  return buffer;});
  
Handlebars.registerPartial('discussions/reply_form', templates['discussions/_reply_form']);

  
  return templates['discussions/_reply_form'];
});
