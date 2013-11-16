define('jst/accounts/admin_tools/commMessagesSearchOverview', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_search_overview"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesSearchOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <p>";
  stack1 = "Notifications sent to *%{user}* from *%{start_date}* to *%{end_date}*.";
  stack2 = "messages_viewed";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_overview";
  stack3['scope'] = stack4;
  stack4 = "<strong>$1</strong>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n";
  return buffer;}

  foundHelper = helpers.user;
  stack1 = foundHelper || depth0.user;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/commMessagesSearchOverview'];
});
