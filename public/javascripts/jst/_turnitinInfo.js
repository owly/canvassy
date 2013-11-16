define('jst/_turnitinInfo', ["compiled/handlebars_helpers","i18n!turnitin_info"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['_turnitinInfo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"turnitin_resubmit_container\">\n    <a href=\"#\" class=\"btn btn-small turnitin_resubmit_button\">";
  stack1 = "Resubmit to Turnitin";
  stack2 = "buttons.resubmit_to_turnitin";
  stack3 = {};
  stack4 = "turnitin_info";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  </div>\n  ";
  return buffer;}

  buffer += "<div class=\"turnitin_info turnitin_";
  foundHelper = helpers.assetString;
  stack1 = foundHelper || depth0.assetString;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "assetString", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" style=\"display: none;\">\n  <div>";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "message", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n  ";
  foundHelper = helpers.showResubmit;
  stack1 = foundHelper || depth0.showResubmit;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;});
  
Handlebars.registerPartial('turnitinInfo', templates['_turnitinInfo']);

  
  return templates['_turnitinInfo'];
});
