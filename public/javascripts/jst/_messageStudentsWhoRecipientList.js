define('jst/_messageStudentsWhoRecipientList', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['_messageStudentsWhoRecipientList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <span class=\"label\">\n    ";
  foundHelper = helpers.short_name;
  stack1 = foundHelper || depth0.short_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "short_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  </span>\n";
  return buffer;}

  foundHelper = helpers.recipients;
  stack1 = foundHelper || depth0.recipients;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
Handlebars.registerPartial('messageStudentsWhoRecipientList', templates['_messageStudentsWhoRecipientList']);

  
  return templates['_messageStudentsWhoRecipientList'];
});
