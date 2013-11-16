define('jst/accounts/admin_tools/commMessagesSearchForm', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_search_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesSearchForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<style type=\"text/css\">\n  #userIdSearchField { width: 8em; }\n</style>\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"userIdSearchField\">";
  stack1 = "Canvas User ID";
  stack2 = "canvas_user_id";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <input name=\"user_id\" id=\"userIdSearchField\" type=\"text\" maxlength=\"85\" />\n  </div>\n</div>\n\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"dateStartSearchField\">";
  stack1 = "From Date";
  stack2 = "message_date_from";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <input type=\"text\" id=\"dateStartSearchField\" name=\"start_time\" placeholder=\"";
  stack1 = "From Date";
  stack2 = "message_date_from";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n  </div>\n</div>\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"dateEndSearchField\">";
  stack1 = "To Date";
  stack2 = "message_date_to";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <div class=\"controls\">\n    <input type=\"text\" id=\"dateEndSearchField\" name=\"end_time\" placeholder=\"";
  stack1 = "To Date";
  stack2 = "message_date_to";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" />\n  </div>\n</div>\n\n<div class=\"control-group\">\n  <div class=\"controls\">\n    <button type=\"submit\" class=\"btn btn-primary\" id=\"notificationsSearchBtn\">\n      ";
  stack1 = "Find";
  stack2 = "find";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_form";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/commMessagesSearchForm'];
});
