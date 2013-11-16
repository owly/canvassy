define('jst/discussions/results_entry', ["compiled/handlebars_helpers","i18n!discussions.results_entry","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/results_entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-bypass";
  return buffer;}

function program3(depth0,data) {
  
  
  return "unknown";}

function program5(depth0,data) {
  
  var stack1, stack2;
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program8(depth0,data) {
  
  var stack1;
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.display_name", { hash: {} }); }
  return escapeExpression(stack1);}

function program10(depth0,data) {
  
  var stack1, stack2, stack3, stack4;
  stack1 = "Unknown Author";
  stack2 = "unknown_author";
  stack3 = {};
  stack4 = "discussions.results_entry";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"discussion-fyi\">This comment was edited by <a ";
  foundHelper = helpers.editor;
  stack1 = foundHelper || depth0.editor;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  foundHelper = helpers.editor;
  stack1 = foundHelper || depth0.editor;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "editor.display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></div>\n      ";
  return buffer;}
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\"";
  foundHelper = helpers.editor;
  stack1 = foundHelper || depth0.editor;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "editor.url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" ";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"comment_attachments\">\n          ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers.each;
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;}
function program16(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <div><a href=\"";
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
  buffer += escapeExpression(stack1) + "</a></div>\n          ";
  return buffer;}

  buffer += "<article class=\"discussion_entry\">\n  <a href=\"#\"\n     class=\"discussion-read-state-btn\"\n     role=\"button\"\n     title=\"\"\n     data-tooltip='{ \"position\": \"top\", \"collision\": \"none\" }'\n     data-event=\"toggleRead\">\n    <div class=\"discussion-read-state tooltip data-tooltip\"></div>\n  </a>\n  <div class=\"entry_content\">\n    <header class=\"entry-header discussion-section\">\n      ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = self.invokePartial(partials.avatar, 'avatar', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"discussion-header-content right-of-avatar\">\n        <div class=\"discussion-header-right\">\n          <div class=\"discussion-pubdate hide-if-collapsed\">";
  foundHelper = helpers.updated_at;
  stack1 = foundHelper || depth0.updated_at;
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
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"discussion-title\">\n          <a ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.id);
  stack2 = helpers.unless;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = "Author's name";
  stack2 = "authors_name";
  stack3 = {};
  stack4 = "discussions.results_entry";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author\">";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack2 = helpers['if'];
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        </div>\n      </div>\n    </header>\n    <div class=\"discussion-section message_wrapper\">\n      <div class=\"message user_content\">";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  foundHelper = helpers.convertApiUserContent;
  stack2 = foundHelper || depth0.convertApiUserContent;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "convertApiUserContent", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "</div>\n      ";
  foundHelper = helpers.editor;
  stack1 = foundHelper || depth0.editor;
  stack2 = helpers['if'];
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  foundHelper = helpers.attachments;
  stack1 = foundHelper || depth0.attachments;
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"entry-controls\">\n      <a href=\"#entry-";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"viewInDiscussion\">";
  stack1 = "View in discussion";
  stack2 = "view_in_discussion";
  stack3 = {};
  stack4 = "discussions.results_entry";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n  </div>\n</article>\n\n\n\n";
  return buffer;});
  
  
  return templates['discussions/results_entry'];
});
