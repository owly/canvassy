define('jst/paginatedCollection', ["compiled/handlebars_helpers","i18n!paginated_collection"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['paginatedCollection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  
  return "\n<ul class=\"collectionViewItems\"></ul>\n";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n<p>\n  ";
  stack1 = "No items.";
  stack2 = "no_items";
  stack3 = {};
  stack4 = "paginated_collection";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n";
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
  buffer += "\n\n<div class=\"paginatedLoadingIndicator\">Loading</div>\n\n";
  return buffer;});
  
  
  return templates['paginatedCollection'];
});
