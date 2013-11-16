define('jst/ExternalTools/ExternalContentReturnView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/ExternalContentReturnView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<iframe class=\"tool_launch\" src=\"";
  foundHelper = helpers.launch_url;
  stack1 = foundHelper || depth0.launch_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "launch_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" frameborder=\"0\"></iframe>";
  return buffer;});
  
  
  return templates['ExternalTools/ExternalContentReturnView'];
});
