define('jst/accounts/admin_tools/commMessageItem', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_message_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessageItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = "Reply to";
  stack2 = "reply_to";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_message_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">";
  foundHelper = helpers.reply_to;
  stack1 = foundHelper || depth0.reply_to;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "reply_to", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n      ";
  return buffer;}

  buffer += "<div class=\"list-view border border-trbl\" data-message-id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <header>\n    <span class=\"h6\" tabindex=\"0\">";
  foundHelper = helpers.subject;
  stack1 = foundHelper || depth0.subject;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "subject", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n\n    <span class=\"label label-";
  foundHelper = helpers.workflow_state;
  stack1 = foundHelper || depth0.workflow_state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "workflow_state", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" tabindex=\"0\">\n      ";
  foundHelper = helpers.workflow_state;
  stack1 = foundHelper || depth0.workflow_state;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "workflow_state", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    </span>\n  </header>\n\n  <table class=\"message-meta-data\">\n    <tbody>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = "To";
  stack2 = "to";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_message_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\" class=\"message-to\">";
  foundHelper = helpers.to;
  stack1 = foundHelper || depth0.to;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "to", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = "From";
  stack2 = "from_name";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_message_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\" class=\"message-from\">";
  foundHelper = helpers.from;
  stack1 = foundHelper || depth0.from;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "from", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n      ";
  foundHelper = helpers.reply_to;
  stack1 = foundHelper || depth0.reply_to;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = "Created at";
  stack2 = "created_at";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_message_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">";
  foundHelper = helpers.created_at;
  stack1 = foundHelper || depth0.created_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    <tr>\n      <td class='meta-data-label' tabindex=\"0\">";
  stack1 = "Sent at";
  stack2 = "sent_at";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_message_item";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td tabindex=\"0\">";
  foundHelper = helpers.sent_at;
  stack1 = foundHelper || depth0.sent_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <pre class=\"message-body well\" tabindex=\"0\">\n    ";
  foundHelper = helpers.body;
  stack1 = foundHelper || depth0.body;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "body", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  </pre>\n</div>\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/commMessageItem'];
});
