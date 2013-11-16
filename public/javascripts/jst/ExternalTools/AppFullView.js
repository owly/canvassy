define('jst/ExternalTools/AppFullView', ["compiled/handlebars_helpers","i18n!external_tools.app_full_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppFullView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                  <li>";
  stack1 = depth0;
  foundHelper = helpers.titleize;
  stack2 = foundHelper || depth0.titleize;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "titleize", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</li>\n                ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                  <li>";
  stack1 = depth0;
  foundHelper = helpers.titleize;
  stack2 = foundHelper || depth0.titleize;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "titleize", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</li>\n                ";
  return buffer;}

  buffer += "<table class=\"individual-app\">\n  <tbody>\n    <tr>\n      <td class=\"individual-app-left\" valign=\"top\">\n        <img class=\"img-polaroid\" src=\"";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.banner_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "model.attributes.banner_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n        <a class=\"btn btn-primary btn-block add_app icon-add\">\n          ";
  stack1 = "Add Tool";
  stack2 = "add_tool";
  stack3 = {};
  stack4 = "external_tools.app_full_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n        <a href=\"#\" class=\"app_cancel\">&laquo; ";
  stack1 = "Back to App Center";
  stack2 = "back_to_app_center";
  stack3 = {};
  stack4 = "external_tools.app_full_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </td>\n      <td class=\"individual-app-right\" valign=\"top\">\n        <h2>";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "model.attributes.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n        <table class=\"star-table\">\n          <tbody>\n            <td><div class=\"app-star\"></div></td>\n            <td><small>(";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.ratings_count);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "model.attributes.ratings_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</small></td>\n          </tbody>\n        </table>\n        <p>";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.description);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "model.attributes.description", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        <table>\n          <tbody>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">Extensions:</td>\n              <td valign=\"top\" class=\"data-value\">\n                <ul>\n                ";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.extensions);
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n              </td>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">Average Rating:</td>\n              <td valign=\"top\" class=\"data-value\">";
  stack1 = 2;
  foundHelper = helpers.model;
  stack2 = foundHelper || depth0.model;
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.attributes);
  stack2 = (stack2 === null || stack2 === undefined || stack2 === false ? stack2 : stack2.avg_rating);
  foundHelper = helpers.toPrecision;
  stack3 = foundHelper || depth0.toPrecision;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "toPrecision", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "</td>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">Privacy Level:</td>\n              <td valign=\"top\" class=\"data-value\">";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.privacy_level);
  foundHelper = helpers.titleize;
  stack2 = foundHelper || depth0.titleize;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "titleize", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</td>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">Education Level(s):</td>\n              <td valign=\"top\" class=\"data-value\">\n                <ul>\n                ";
  foundHelper = helpers.model;
  stack1 = foundHelper || depth0.model;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.attributes);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.levels);
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"add-review\">\n  <a href=\"#\" class=\"rate_app\" title=\"";
  stack1 = "Rate this tool";
  stack2 = "rate_tool";
  stack3 = {};
  stack4 = "external_tools.app_full_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = "Rate this tool";
  stack2 = "rate_tool";
  stack3 = {};
  stack4 = "external_tools.app_full_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <img src=\"/images/ajax-loader-linear.gif\" style=\"display: none;\" id=\"rate_app_loader\" />\n</div>\n\n<div class=\"reviews collectionViewItems clearfix\"></div>\n<div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;});
  
  
  return templates['ExternalTools/AppFullView'];
});
