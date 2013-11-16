define('jst/calendar/contextList', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/contextList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li data-context=\"";
  foundHelper = helpers.asset_string;
  stack1 = foundHelper || depth0.asset_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "asset_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n        class=\"context_list_context hover-container\">\n      <span class=\"context-list-toggle-box group_";
  foundHelper = helpers.asset_string;
  stack1 = foundHelper || depth0.asset_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "asset_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n            aria-labelledby=\"group_";
  foundHelper = helpers.asset_string;
  stack1 = foundHelper || depth0.asset_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "asset_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_checkbox_label\"\n            tabindex=\"0\"\n            role=\"checkbox\"></span>\n      <label id=\"group_";
  foundHelper = helpers.asset_string;
  stack1 = foundHelper || depth0.asset_string;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "asset_string", { hash: {} }); }
  buffer += escapeExpression(stack1) + "_checkbox_label\">\n        ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n      </label>\n    </li>\n  ";
  return buffer;}

  buffer += "<ul id=\"context-list\">\n  ";
  foundHelper = helpers.contexts;
  stack1 = foundHelper || depth0.contexts;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;});
  
  
  return templates['calendar/contextList'];
});
