define('jst/messageStudentsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!message_students_dialog","jst/_messageStudentsWhoRecipientList"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['messageStudentsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  foundHelper = helpers.recipientGroups;
  stack1 = foundHelper || depth0.recipientGroups;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[0]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "recipientGroups.0.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n      <input type=\"hidden\" name=\"recipientGroupName\" value=\"";
  foundHelper = helpers.recipientGroups;
  stack1 = foundHelper || depth0.recipientGroups;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[0]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "recipientGroups.0.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <select name=\"recipientGroupName\" id=\"message-recipients-group\">\n        ";
  foundHelper = helpers.recipientGroups;
  stack1 = foundHelper || depth0.recipientGroups;
  stack2 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n    ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <option value=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</option>\n        ";
  return buffer;}

  buffer += "<div class=\"message-students-dialog form-dialog-content\">\n  <div class=\"message-recipients-group-container\">\n    <label for=\"message-recipients-group\">\n     ";
  stack1 = "Recipients:";
  stack2 = "recipients";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    ";
  stack1 = 1;
  foundHelper = helpers.recipientGroups;
  stack2 = foundHelper || depth0.recipientGroups;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.length);
  foundHelper = helpers.ifEqual;
  stack3 = foundHelper || depth0.ifEqual;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div id=\"message-recipients\">\n    ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.messageStudentsWhoRecipientList, 'messageStudentsWhoRecipientList', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <textarea name=body></textarea>\n\n</div>\n<div class=\"form-controls\">\n  <button class=\"btn dialog_closer btn-secondary\" type=\"button\"\n    data-text-while-loading='";
  stack1 = "Sending...";
  stack2 = "#buttons.sending";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n    ";
  stack1 = "Cancel";
  stack2 = "#buttons.cancel";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = "Sending...";
  stack2 = "#buttons.sending";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    data-text-when-loaded='";
  stack1 = "Sent!";
  stack2 = "#buttons.sent";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n    ";
  stack1 = "Send Message";
  stack2 = "#buttons.send_message";
  stack3 = {};
  stack4 = "message_students_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n\n</div>\n";
  return buffer;});
  
  
arguments[1]('messageStudentsDialog', ".message-students-dialog textarea {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  height: 200px; }\n\n#message-recipients {\n  margin-bottom: 10px;\n  max-height: 100px;\n  overflow: auto; }\n\n.message-recipients-group-container {\n  line-height: 30px;\n  margin-bottom: 10px; }\n  .message-recipients-group-container label {\n    font-weight: bold;\n    margin-bottom: 0; }\n\n#message-recipients-group {\n  width: auto;\n  margin-bottom: 0; }\n");

  return templates['messageStudentsDialog'];
});
