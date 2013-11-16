define('jst/accounts/admin_tools/commMessagesContentPane', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_content_pane"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesContentPane'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<h3>";
  stack1 = "View Notifications";
  stack2 = "view_notifications";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_content_pane";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n<p>\n  ";
  stack1 = "To view all notifications sent to a Canvas user, enter their Canvas user ID and date range for your search.";
  stack2 = "search_info";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_content_pane";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n\n<form id=\"commMessagesSearchForm\" class='form-horizontal'></form>\n<hr />\n<div id=\"commMessagesSearchOverview\"></div>\n\n<div id=\"commMessagesSearchResults\"></div>\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/commMessagesContentPane'];
});
