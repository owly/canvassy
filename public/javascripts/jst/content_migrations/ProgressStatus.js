define('jst/content_migrations/ProgressStatus', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressStatus'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<span class=\"label ";
  foundHelper = helpers.statusLabel;
  stack1 = foundHelper || depth0.statusLabel;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "statusLabel", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.status;
  stack1 = foundHelper || depth0.status;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "status", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n";
  return buffer;});
  
  
  return templates['content_migrations/ProgressStatus'];
});
