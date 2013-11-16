define('jst/accounts/admin_tools/commMessagesSearchResults', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_search_results"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesSearchResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  
  return "\n\n  <div class=\"paginatedLoadingIndicator\"></div>\n  <ul class=\"messages collectionViewItems\"></ul>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n\n  <div class=\"alert alert-info\">\n    <p class=\"lead\">";
  stack1 = "No messages found";
  stack2 = "no_messages_found";
  stack3 = {};
  stack4 = "accounts.admin_tools.comm_messages_search_results";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  </div>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;}

  foundHelper = helpers.collection;
  stack1 = foundHelper || depth0.collection;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;});
  
  
  return templates['accounts/admin_tools/commMessagesSearchResults'];
});
