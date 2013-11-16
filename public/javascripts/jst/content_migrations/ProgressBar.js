define('jst/content_migrations/ProgressBar', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"progress progress-striped active\">\n  <div class=\"bar\" style=\"width: ";
  foundHelper = helpers.completion;
  stack1 = foundHelper || depth0.completion;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "completion", { hash: {} }); }
  buffer += escapeExpression(stack1) + "%;\"></div>\n</div>\n";
  return buffer;});
  
  
  return templates['content_migrations/ProgressBar'];
});
