define('jst/SubmissionDetailsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!submission_details_dialog","jst/_submission_detail"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['SubmissionDetailsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <a class=\"more-details-link\" target=\"_blank\" href=\"";
  foundHelper = helpers.speedGraderUrl;
  stack1 = foundHelper || depth0.speedGraderUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "speedGraderUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = "More details in the SpeedGrader";
  stack2 = "more_details_in_the_speedgrader";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <label for=\"submission_to_view\">";
  stack1 = "Submitted multiple times, choose which to view:";
  stack2 = "this_was_submitted_multiple_times_choose_a_submission_to_view";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <select id=\"submission_to_view\">\n            ";
  foundHelper = helpers.submission_history;
  stack1 = foundHelper || depth0.submission_history;
  stack2 = helpers.each;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n              <option>";
  foundHelper = helpers.submitted_at;
  stack1 = foundHelper || depth0.submitted_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.submissionWasLate;
  stack1 = foundHelper || depth0.submissionWasLate;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n            ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += " ";
  stack1 = "LATE";
  stack2 = "late";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          ";
  foundHelper = helpers.submitted_at;
  stack1 = foundHelper || depth0.submitted_at;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;}
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n            <strong>";
  stack1 = "Submitted:";
  stack2 = "submitted";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.submitted_at;
  stack1 = foundHelper || depth0.submitted_at;
  foundHelper = helpers.datetimeFormatted;
  stack2 = foundHelper || depth0.datetimeFormatted;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "datetimeFormatted", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.submissionWasLate;
  stack1 = foundHelper || depth0.submissionWasLate;
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  return buffer;}
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += " ";
  stack1 = "LATE";
  stack2 = "late";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.submission_detail, 'submission_detail', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <div class=\"rubric-link\"><a class=\"rubric\" href=\"";
  foundHelper = helpers.speedGraderUrl;
  stack1 = foundHelper || depth0.speedGraderUrl;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "speedGraderUrl", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = "View Rubric Assessment in the SpeedGrader";
  stack2 = "view_rubric_assessment_in_the_speedgrader";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>\n      ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n      <h1>";
  stack1 = "Loading comments...";
  stack2 = "loading_comments";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n    ";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      ";
  foundHelper = helpers.submission_comments;
  stack1 = foundHelper || depth0.submission_comments;
  stack2 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program18(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <h1>";
  stack1 = "Comments";
  stack2 = "comments";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n        <div class=\"submission_details_comments\">\n          ";
  foundHelper = helpers.submission_comments;
  stack1 = foundHelper || depth0.submission_comments;
  stack2 = helpers.each;
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;}
function program19(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n            <article class=\"comment clearfix\">\n              ";
  foundHelper = helpers.created_at;
  stack1 = foundHelper || depth0.created_at;
  stack2 = {};
  stack3 = true;
  stack2['pubdate'] = stack3;
  foundHelper = helpers.friendlyDatetime;
  stack3 = foundHelper || depth0.friendlyDatetime;
  tmp1 = {};
  tmp1.hash = stack2;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack1, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "friendlyDatetime", stack1, tmp1); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n              <img class=\"photo\" src=\"";
  foundHelper = helpers.image_url;
  stack1 = foundHelper || depth0.image_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "image_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" />\n              <div class=\"middle\">\n                <address class=\"vcard\">\n                  <a class=\"fn url\" href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.author_name;
  stack1 = foundHelper || depth0.author_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n                </address>\n                <div>\n                  ";
  foundHelper = helpers.comment;
  stack1 = foundHelper || depth0.comment;
  foundHelper = helpers.newlinesToBreak;
  stack2 = foundHelper || depth0.newlinesToBreak;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "newlinesToBreak", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\n                </div>\n                ";
  foundHelper = helpers.media_comment;
  stack1 = foundHelper || depth0.media_comment;
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"comment_attachments\">\n                  ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers.each;
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n              </div>\n            </article>\n          ";
  return buffer;}
function program20(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n                  <a data-media_comment_id=\"";
  foundHelper = helpers.media_comment;
  stack1 = foundHelper || depth0.media_comment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.media_id);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "media_comment.media_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-media_comment_type=\"";
  foundHelper = helpers.media_comment;
  stack1 = foundHelper || depth0.media_comment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.media_type);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "media_comment.media_type", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" href=\"";
  foundHelper = helpers.media_comment;
  stack1 = foundHelper || depth0.media_comment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "media_comment.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"play_comment_link media-comment instructure_inline_media_comment\" >";
  stack1 = "click here to view";
  stack2 = "links.click_to_view";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                ";
  return buffer;}

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    <div><a href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"";
  foundHelper = helpers['content-type'];
  stack1 = foundHelper || depth0['content-type'];
  foundHelper = helpers.mimeClass;
  stack2 = foundHelper || depth0.mimeClass;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "mimeClass", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.filename;
  stack1 = foundHelper || depth0.filename;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "filename", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></div>\n                  ";
  return buffer;}

function program24(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <span id=\"group-comment-container\">\n      <input type=\"checkbox\" id=\"group_comment\" name=\"comment[group_comment]\" />\n      <label for=\"group_comment\">";
  stack1 = "Send Comment to the Whole Group";
  stack2 = "labels.group_comment";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    </span>\n    ";
  return buffer;}

  buffer += "<div class=\"submission_details_dialog\">\n  <h1 class=\"assignment-name\">";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "assignment.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h1>\n  <section class=\"submission-details\">\n    ";
  foundHelper = helpers.speedGraderUrl;
  stack1 = foundHelper || depth0.speedGraderUrl;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div>\n      <h2>\n        ";
  foundHelper = helpers.moreThanOneSubmission;
  stack1 = foundHelper || depth0.moreThanOneSubmission;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h2>\n      ";
  foundHelper = helpers.submission_history;
  stack1 = foundHelper || depth0.submission_history;
  stack2 = helpers.each;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.rubric_assessment;
  stack1 = foundHelper || depth0.rubric_assessment;
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </section>\n  <section>\n    ";
  foundHelper = helpers.loading;
  stack1 = foundHelper || depth0.loading;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(17, program17, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </section>\n  <form class=\"submission_details_add_comment_form clearfix\">\n    <label for=\"add_a_comment\">";
  stack1 = "Add a comment";
  stack2 = "add_a_comment";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <textarea id=\"add_a_comment\" name=\"comment[text_comment]\"></textarea>\n    ";
  foundHelper = helpers.assignment;
  stack1 = foundHelper || depth0.assignment;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.group_category_id);
  stack2 = helpers['if'];
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <button class=\"btn\" type=\"submit\">";
  stack1 = "Post Comment";
  stack2 = "post_comment";
  stack3 = {};
  stack4 = "submission_details_dialog";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </form>\n</div>\n";
  return buffer;});
  
  
arguments[1]('SubmissionDetailsDialog', ".submission_details_dialog .more-details-link {\n  float: right;\n  font-size: 1.2em;\n  line-height: 42px; }\n.submission_details_dialog h1, .submission_details_dialog .h1 {\n  margin: 20px 0 0;\n  padding: 0 12px;\n  font-size: 23px; }\n.submission_details_dialog .submission-details {\n  padding: 10px; }\n  .submission_details_dialog .submission-details h1, .submission_details_dialog .submission-details .h1 {\n    margin: 0 -10px 15px;\n    border-bottom: 1px solid #bbbbbb; }\n  .submission_details_dialog .submission-details h2, .submission_details_dialog .submission-details h2 select, .submission_details_dialog .submission-details .h2, .submission_details_dialog .submission-details .h2 select {\n    font-size: 15px; }\n.submission_details_dialog .submission_detail {\n  font-size: 1.1em;\n  margin: 3px 0 10px; }\n.submission_details_dialog .rubric-link {\n  font-weight: bold; }\n.submission_details_dialog .submisison-attachment {\n  padding: 3px 0; }\n  .submission_details_dialog .submisison-attachment a {\n    font-size: 11px; }\n  .submission_details_dialog .submisison-attachment a.turnitin_similarity_score {\n    font-size: 10px; }\n.submission_details_dialog .submission_details_comments {\n  overflow: auto;\n  max-height: 200px;\n  border-top: 1px solid #bbbbbb;\n  padding: 0 12px;\n  position: relative;\n  background: #a3a3a3 url(/images/messages/messages-background.png) 0 0 repeat; }\n.submission_details_dialog .comment {\n  background: white;\n  clear: both;\n  border-bottom: 1px solid #cccccc;\n  padding: 10px;\n  margin: 10px 0; }\n  .submission_details_dialog .comment:last-child {\n    border-bottom: none; }\n  .submission_details_dialog .comment .middle {\n    padding-left: 69px; }\n  .submission_details_dialog .comment .photo {\n    float: left;\n    width: 50px;\n    height: 50px; }\n  .submission_details_dialog .comment time {\n    float: right;\n    color: #777777;\n    font-size: 11px; }\n  .submission_details_dialog .comment address {\n    font-style: normal;\n    font-weight: bold;\n    margin: 0; }\n  .submission_details_dialog .comment .comment_attachments a {\n    padding-top: 4px; }\n\n.submission_details_add_comment_form {\n  position: relative;\n  border-top: 1px solid #bbbbbb;\n  background-color: #f2f2f2;\n  margin: 0px;\n  padding: 5px 10px; }\n  .submission_details_add_comment_form label {\n    font-weight: bold;\n    display: block; }\n  .submission_details_add_comment_form #add_a_comment {\n    width: 99%;\n    display: block; }\n  .submission_details_add_comment_form #group-comment-container {\n    float: left; }\n    .submission_details_add_comment_form #group-comment-container label {\n      display: inline;\n      font-weight: normal; }\n  .submission_details_add_comment_form .btn {\n    float: right; }\n");

  return templates['SubmissionDetailsDialog'];
});
