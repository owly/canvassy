define('jst/quickStartBar/QuickStartBarView', ["compiled/handlebars_helpers","i18n!quick_start_bar.quick_start_bar_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/QuickStartBarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a data-type=\"";
  foundHelper = helpers.type;
  stack1 = foundHelper || depth0.type;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "type", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" href=\"#\"><i class=\"icon-";
  foundHelper = helpers.type;
  stack1 = foundHelper || depth0.type;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "type", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></i>";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n      ";
  return buffer;}

  buffer += "<div class=\"row-fluid pick-an-item border border-b box-shadow\">\n  <div class=\"span1\">\n    <span class=\"new-text\">";
  stack1 = "New:";
  stack2 = "new";
  stack3 = {};
  stack4 = "quick_start_bar.quick_start_bar_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n  <div class=span11>\n    <ul class=\"nav nav-tabs\">\n      ";
  foundHelper = helpers.formViews;
  stack1 = foundHelper || depth0.formViews;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n\n<div class=\"container-fluid v-gutter\">\n\n  <div class=\"image-block control-group\">\n    <div class=\"image-block-image\">\n      <i class=\"item-type-image icon-large-\"></i>\n    </div>\n\n    <div class=\"image-block-content\">\n      <div class=\"newItemFormContainer triangle-box\"></div>\n    </div>\n  </div>\n</div>\n\n";
  return buffer;});
  
  
  return templates['quickStartBar/QuickStartBarView'];
});
