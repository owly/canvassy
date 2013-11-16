define('jst/discussions/filterResults', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/filterResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>";
  foundHelper = helpers.entry;
  stack1 = foundHelper || depth0.entry;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.message);
  foundHelper = helpers.convertApiUserContent;
  stack2 = foundHelper || depth0.convertApiUserContent;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</li>\n  ";
  return buffer;}

  buffer += "<ul>\n  ";
  foundHelper = helpers.entries;
  stack1 = foundHelper || depth0.entries;
  foundHelper = helpers['in'];
  stack2 = foundHelper || depth0['in'];
  foundHelper = helpers.entry;
  stack3 = foundHelper || depth0.entry;
  stack4 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack4.call(depth0, stack3, stack2, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;});
  
  
  return templates['discussions/filterResults'];
});
