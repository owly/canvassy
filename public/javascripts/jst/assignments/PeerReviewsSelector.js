define('jst/assignments/PeerReviewsSelector', ["compiled/handlebars_helpers","i18n!assignments.peer_reviews_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/PeerReviewsSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "assignment[peer_reviews]";}

function program3(depth0,data) {
  
  
  return "peer_reviews";}

function program5(depth0,data) {
  
  
  return "assignment[automatic_peer_reviews]";}

function program7(depth0,data) {
  
  
  return "automatic_peer_reviews";}

function program9(depth0,data) {
  
  
  return "assignment[automatic_peer_reviews]";}

function program11(depth0,data) {
  
  
  return "automatic_peer_reviews";}

function program13(depth0,data) {
  
  
  return "assignment[peer_review_count]";}

function program15(depth0,data) {
  
  
  return "peer_review_count";}

function program17(depth0,data) {
  
  
  return "assignment[peer_reviews_assign_at]";}

function program19(depth0,data) {
  
  
  return "peer_reviews_assign_at";}

  buffer += "<div class=\"controls\">\n  <label class=\"checkbox\" for=\"assignment_peer_reviews\">\n    <input id=\"assignment_peer_reviews\"\n    name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      type=\"checkbox\"\n      aria-controls=\"peer_reviews_details\"\n      ";
  foundHelper = helpers.peerReviews;
  stack1 = foundHelper || depth0.peerReviews;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n      ";
  stack1 = "peer_reviews";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n    ";
  stack1 = "Require Peer Reviews";
  stack2 = "labels.require_peer_reviews";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div id=\"peer_reviews_details\"\n  aria-expanded=\"";
  foundHelper = helpers.peerReviews;
  stack1 = foundHelper || depth0.peerReviews;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "peerReviews", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n  style=\"";
  foundHelper = helpers.peerReviews;
  stack1 = foundHelper || depth0.peerReviews;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n  <div class=\"controls\">\n    <label class=\"radio\" for=\"assignment_manual_peer_reviews\">\n      <input name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        id=\"assignment_manual_peer_reviews\"\n        type=\"radio\"\n        value=\"0\"\n        aria-controls=\"automatic_peer_reviews_options\"\n        ";
  foundHelper = helpers.automaticPeerReviews;
  stack1 = foundHelper || depth0.automaticPeerReviews;
  foundHelper = helpers.checkedUnless;
  stack2 = foundHelper || depth0.checkedUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n        ";
  stack1 = "peer_reviews";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n      ";
  stack1 = "Manually Assign Peer Reviews";
  stack2 = "labels.manually_assign_peer_reviews";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <label class=\"radio\" for=\"assignment_automatic_peer_reviews\">\n      <input name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        id=\"assignment_automatic_peer_reviews\"\n        type=\"radio\"\n        value=\"1\"\n        aria-controls=\"automatic_peer_reviews_options\"\n        ";
  foundHelper = helpers.automaticPeerReviews;
  stack1 = foundHelper || depth0.automaticPeerReviews;
  foundHelper = helpers.checkedIf;
  stack2 = foundHelper || depth0.checkedIf;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "checkedIf", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n        ";
  stack1 = "peer_reviews";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n      ";
  stack1 = "Automatically Assign Peer Reviews";
  stack2 = "labels.automatically_assign_peer_reviews";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n\n  <div id=\"automatic_peer_reviews_options\"\n    aria-enabled=\"";
  foundHelper = helpers.automaticPeerReviews;
  stack1 = foundHelper || depth0.automaticPeerReviews;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "automaticPeerReviews", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n    style=\"";
  foundHelper = helpers.automaticPeerReviews;
  stack1 = foundHelper || depth0.automaticPeerReviews;
  foundHelper = helpers.hiddenUnless;
  stack2 = foundHelper || depth0.hiddenUnless;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "hiddenUnless", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">\n\n    <div class=\"control-group\">\n      <label for=\"assignment_peer_review_count\" class=\"control-label\">\n        ";
  stack1 = "Reviews Per User";
  stack2 = "reviews_per_user";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input id=\"assignment_peer_review_count\"\n          name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          value=\"";
  foundHelper = helpers.peerReviewCount;
  stack1 = foundHelper || depth0.peerReviewCount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "peerReviewCount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n          type=\"text\"\n          ";
  stack1 = "peer_reviews";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label for=\"assignment_peer_reviews_assign_at\" class=\"control-label\">\n        ";
  stack1 = "Assign Reviews";
  stack2 = "locked_until";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input id=\"assignment_peer_reviews_assign_at\"\n          name=\"";
  foundHelper = helpers.nested;
  stack1 = foundHelper || depth0.nested;
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(19, program19, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n          class=\"date_field datetime_field hasDatePicker\"\n          value=\"";
  foundHelper = helpers.peerReviewsAssignAt;
  stack1 = foundHelper || depth0.peerReviewsAssignAt;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\"\n          type=\"text\"\n          ";
  stack1 = "peer_reviews";
  foundHelper = helpers.frozenAttributes;
  stack2 = foundHelper || depth0.frozenAttributes;
  foundHelper = helpers.disabledIfIncludes;
  stack3 = foundHelper || depth0.disabledIfIncludes;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "disabledIfIncludes", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "/>\n        <div class=\"explanation\">\n          ";
  stack1 = "Must come after due date. If blank, uses due date.";
  stack2 = "peer_reviews_assign_at_explanation";
  stack3 = {};
  stack4 = "assignments.peer_reviews_selector";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n";
  return buffer;});
  
  
  return templates['assignments/PeerReviewsSelector'];
});
