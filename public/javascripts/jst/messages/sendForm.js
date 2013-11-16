define('jst/messages/sendForm', ["compiled/handlebars_helpers","i18n!messages.send_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['messages/sendForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<form action=\"";
  foundHelper = helpers.location;
  stack1 = foundHelper || depth0.location;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "location", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" method=\"post\" class=\"bootstrap-form message-send-form\">\n  <div class=\"fields\">\n    <label for=\"message-send-body\">";
  stack1 = "Message";
  stack2 = "labels.message_body";
  stack3 = {};
  stack4 = "messages.send_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <textarea name=\"message\" class=\"input-xlarge\" id=\"message-send-body\"></textarea>\n\n    <input type=\"hidden\" name=\"from\" value=\"";
  foundHelper = helpers.from;
  stack1 = foundHelper || depth0.from;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "from", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n    <input type=\"hidden\" name=\"subject\" value=\"";
  foundHelper = helpers.subject;
  stack1 = foundHelper || depth0.subject;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "subject", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n    <input type=\"hidden\" name=\"secure_id\" value=\"";
  foundHelper = helpers.secureId;
  stack1 = foundHelper || depth0.secureId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "secureId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n    <input type=\"hidden\" name=\"message_id\" value=\"";
  foundHelper = helpers.messageId;
  stack1 = foundHelper || depth0.messageId;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "messageId", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n  </div>\n\n  <div class=\"actions\">\n    <button type=\"submit\" class=\"btn btn-primary\">";
  stack1 = "Send";
  stack2 = "labels.send_button";
  stack3 = {};
  stack4 = "messages.send_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n\n";
  return buffer;});
  
  
  return templates['messages/sendForm'];
});
