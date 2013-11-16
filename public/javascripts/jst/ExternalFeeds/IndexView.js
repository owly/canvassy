define('jst/ExternalFeeds/IndexView', ["compiled/handlebars_helpers","i18n!external_feeds.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalFeeds/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n  <h2>External Feeds</h2>\n";}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <li class=\"external_feed\">\n      <a class=\"close\" data-delete-feed-id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" href=\"#\">×</a>\n      <a href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n        <b>\n          ";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n        </b>\n        ";
  foundHelper = helpers.header_match;
  stack1 = foundHelper || depth0.header_match;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  foundHelper = helpers.external_feed_entries_count;
  stack1 = foundHelper || depth0.external_feed_entries_count;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </li>\n  ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <em>";
  stack1 = "Keyword:";
  stack2 = "keyword";
  stack3 = {};
  stack4 = "external_feeds.index_view";
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
  foundHelper = helpers.header_match;
  stack1 = foundHelper || depth0.header_match;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "header_match", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</em>\n        ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3, stack4;
  buffer += "\n          <em>";
  foundHelper = helpers.external_feed_entries_count;
  stack1 = foundHelper || depth0.external_feed_entries_count;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "external_feed_entries_count", { hash: {} }); }
  buffer += escapeExpression(stack1) + " ";
  stack1 = "Posts Added";
  stack2 = "posts_added";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</em>\n        ";
  return buffer;}

  stack1 = depth0.length;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<ul class=\"right-side-list\">\n  ";
  stack1 = depth0;
  stack2 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <li>\n    <a href=\"#\" class=\"element_toggler add_external_feed_link\" aria-controls=\"add_external_feed_form\">\n      <i class=\"icon-rss-add\"></i>\n      ";
  stack1 = "Add External Feed";
  stack2 = "links.add_external_feed";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n</ul>\n\n<form class=\"bootstrap-form\" id=\"add_external_feed_form\" style=\"display: none\">\n  <h2>";
  stack1 = "Add a New Feed";
  stack2 = "add_a_new_feed";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n  <label for=\"external_feed_url\">\n    ";
  stack1 = "You can automatically add posts from an RSS or Atom feed as announcements for this course. Just paste the feed URL below and any new entries will be added.";
  stack2 = "descriptions.add_new_feed";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <input type=\"text\"\n         id=\"external_feed_url\"\n         name=\"url\"\n         class=\"input-block-level\"\n         placeholder=\"Feed URL\">\n  <div>\n    <select name=\"verbosity\" class=\"input-block-level\">\n      <option>";
  stack1 = "--Content to post--";
  stack2 = "options.content_to_post";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"full\">";
  stack1 = "Full article";
  stack2 = "options.full_article";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"truncate\">";
  stack1 = "Truncated";
  stack2 = "options.truncated";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"link_only\">";
  stack1 = "Link only";
  stack2 = "options.link_only";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    </select>\n  </div>\n  <label class=\"checkbox\">\n    <input id=\"external_feed_enable_header_match\"\n           class=\"element_toggler\"\n           aria-controls=\"header_match_container\"\n           type=\"checkbox\"> ";
  stack1 = "Only add posts with a specific phrase in the title";
  stack2 = "labels.match_phrase_checkbox";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div id=\"header_match_container\" style=\"display:none\">\n    <input id=\"external_feed_header_match\"\n           type=\"text\"\n           name=\"header_match\"\n           class=\"input-block-level\"\n           placeholder=\"";
  stack1 = "Phrase to look for";
  stack2 = "phrase_to_look_for";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  </div>\n  <div>\n    <button type=\"submit\"\n            data-text-while-loading=\"";
  stack1 = "Adding feed...";
  stack2 = "buttons.adding_feed";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            class=\"btn\">";
  stack1 = "Add Feed";
  stack2 = "buttons.add_feed";
  stack3 = {};
  stack4 = "external_feeds.index_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['ExternalFeeds/IndexView'];
});
