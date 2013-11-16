define('jst/ExternalTools/AppReviewView', ["compiled/handlebars_helpers","i18n!external_tools.app_review_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppReviewView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<table class=\"table review-item\">\n  <tr>\n    <td class=\"image-and-stars\" valign=\"top\">\n      <img class=\"avatar_image\" src=\"";
  foundHelper = helpers.user_avatar_url;
  stack1 = foundHelper || depth0.user_avatar_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "user_avatar_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n      <div class=\"star-sprite star-sprite-";
  foundHelper = helpers.rating;
  stack1 = foundHelper || depth0.rating;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "rating", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></div>\n    </td>\n    <td class=\"review-content\" valign=\"top\">\n      <div class=\"review-item-header\">\n        ";
  stack1 = "Posted by *%{user_name}* on *%{created}*";
  stack2 = "posted_by_on";
  stack3 = {};
  stack4 = "external_tools.app_review_view";
  stack3['scope'] = stack4;
  stack4 = "<span>$1</span>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <p>";
  foundHelper = helpers.comments;
  stack1 = foundHelper || depth0.comments;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "comments", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n    </td>\n  </tr>\n</table>\n";
  return buffer;});
  
  
  return templates['ExternalTools/AppReviewView'];
});
