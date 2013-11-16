define('jst/ExternalTools/AppThumbnailView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppThumbnailView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div id=\"app_";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <img class=\"banner_image\" src=\"";
  foundHelper = helpers.banner_url;
  stack1 = foundHelper || depth0.banner_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "banner_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></img>\n  <div class=\"details\">\n    <div class=\"content\">\n      <span class='name'>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n      <div class='desc'>";
  stack1 = 160;
  foundHelper = helpers.description;
  stack2 = foundHelper || depth0.description;
  foundHelper = helpers.truncate;
  stack3 = foundHelper || depth0.truncate;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "truncate", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['ExternalTools/AppThumbnailView'];
});
