define('jst/DiscussionTopics/IndexView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!discussion_topics.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n  <div class=\"headerBar clearfix\">\n    <div class=\"headerBar-right form-inline\">\n      ";
  foundHelper = helpers.options;
  stack1 = foundHelper || depth0.options;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.atom_feed_url);
  stack2 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <span id=\"actionsForSelectedDiscussions\" style=\"display:none;\">\n        <input type=\"checkbox\" id=\"lock\" />\n        <label for=\"lock\" data-tooltip>";
  stack1 = "Lock for comments";
  stack2 = "lock_for_comments";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <button id=\"delete\" data-tooltip>";
  stack1 = "Delete";
  stack2 = "delete";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </span>\n\n      ";
  foundHelper = helpers.options;
  stack1 = foundHelper || depth0.options;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.permissions);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.create);
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <button\n        id=\"edit_discussions_settings\"\n        class=\"btn\"\n        data-tooltip=\"";
  foundHelper = helpers.options;
  stack1 = foundHelper || depth0.options;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.permissions);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.create);
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        title='";
  stack1 = "Edit Discussions Settings";
  stack2 = "edit_settings";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      ><i class=\"icon-settings\"></i></button>\n    </div>\n    <div class=\"headerBar-left form-inline index_view_filter_form\">\n      <label class=\"hidden-inline-text\" for=\"searchTerm\">";
  stack1 = "Search title, body, or author";
  stack2 = "search_title_body_or_author";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input id=\"searchTerm\"\n             placeholder=\"";
  stack1 = "Search title, body, or author";
  stack2 = "search_title_body_or_author";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             value=\"";
  foundHelper = helpers.searchTerm;
  stack1 = foundHelper || depth0.searchTerm;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "searchTerm", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n             type=\"search\">\n      <span id=\"discussionsFilter\">\n        <input type=\"checkbox\"\n               id=\"onlyUnread\"\n               ";
  foundHelper = helpers.onlyUnread;
  stack1 = foundHelper || depth0.onlyUnread;
  stack2 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " /><label for=\"onlyUnread\">";
  stack1 = "Unread";
  stack2 = "unread";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <input type=\"checkbox\"\n               id=\"onlyGraded\"\n               ";
  foundHelper = helpers.onlyGraded;
  stack1 = foundHelper || depth0.onlyGraded;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/><label for=\"onlyGraded\">";
  stack1 = "Assignments";
  stack2 = "assignments";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"nothingMatchedFilter\" style=\"display:none;\">\n    <p>\n      ";
  stack1 = "Your search did not match any discussion topics.";
  stack2 = "your_search_did_not_match_any_discussion_topics";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <p>\n    ";
  stack1 = "Suggestions:";
  stack2 = "suggestions";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <ul>\n      <li>";
  stack1 = "Make sure all search terms are spelled correctly.";
  stack2 = "make_sure_all_search_terms_are_spelled_correctly";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = "Try different, more general, or fewer keywords.";
  stack2 = "try_different_more_general_or_fewer_keywords";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = "Try disabling the \"Unread\" or \"Assignments\" filters.";
  stack2 = "try_disabling_the_unread_or_assignments_filters";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    </ul>\n  </div>\n\n  <div class=\"discussion-collections\">\n    <div class=\"pinned discussion-list item-group\"></div>\n    <div class=\"open discussion-list item-group\"></div>\n    <div class=\"locked discussion-list item-group\"></div>\n  </div>\n\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a class=\"btn\"\n           href=\"";
  foundHelper = helpers.options;
  stack1 = foundHelper || depth0.options;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.atom_feed_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "options.atom_feed_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n           data-tooltip\n           title=\"";
  stack1 = "RSS feed";
  stack2 = "rss_feed";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-rss\"></i></a>\n      ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"";
  foundHelper = helpers.new_topic_url;
  stack1 = foundHelper || depth0.new_topic_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "new_topic_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"\n           class=\"btn btn-primary icon-plus\"\n           id=\"new-discussion-btn\">\n          ";
  stack1 = "*Start a* Discussion";
  stack2 = "new_discussion";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  stack4 = "<span class=\"screenreader-only\">$1</span>";
  stack3['w0'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;}

function program6(depth0,data) {
  
  
  return "top";}

function program8(depth0,data) {
  
  
  return "left";}

function program10(depth0,data) {
  
  
  return "checked";}

function program12(depth0,data) {
  
  
  return "checked";}

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n  ";
  foundHelper = helpers.lastPageFetched;
  stack1 = foundHelper || depth0.lastPageFetched;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(18, program18, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;}
function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <div style=\"margin:auto; text-align: center; margin-top: 80px\">\n      <h1>\n        ";
  stack1 = "There are no discussion topics to show";
  stack2 = "there_are_no_discussion_topics_to_show";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h1>\n      ";
  foundHelper = helpers.options;
  stack1 = foundHelper || depth0.options;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.permissions);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.create);
  stack2 = helpers['if'];
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;}
function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n        <a href=\"";
  foundHelper = helpers.new_topic_url;
  stack1 = foundHelper || depth0.new_topic_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "new_topic_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"btn btn-large btn-primary\">\n          ";
  stack1 = "Start One Now";
  stack2 = "start_one_now";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n    <h2>";
  stack1 = "Loading...";
  stack2 = "loading";
  stack3 = {};
  stack4 = "discussion_topics.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n  ";
  return buffer;}

  foundHelper = helpers.length;
  stack1 = foundHelper || depth0.length;
  foundHelper = helpers.atLeastOnePageFetched;
  stack2 = foundHelper || depth0.atLeastOnePageFetched;
  foundHelper = helpers.ifAll;
  stack3 = foundHelper || depth0.ifAll;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
arguments[1]('DiscussionTopics/IndexView', ".headerBar {\n  margin-bottom: 15px; }\n  .headerBar.pinned {\n    position: fixed;\n    top: 0;\n    width: 1071px;\n    background-color: white;\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);\n    margin-left: -12px;\n    padding: 3px 14px;\n    z-index: 100; }\n  .headerBar .headerBar-right {\n    float: right; }\n\n#searchTerm {\n  width: 225px; }\n");

  return templates['DiscussionTopics/IndexView'];
});
