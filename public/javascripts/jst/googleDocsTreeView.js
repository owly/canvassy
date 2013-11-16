define('jst/googleDocsTreeView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['googleDocsTreeView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<li class=\"folder\">\n  ";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  <ul>\n    ";
  foundHelper = helpers.files;
  stack1 = foundHelper || depth0.files;
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program2, data, depth1);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</li>\n";
  return buffer;}
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"file ";
  foundHelper = helpers.extension;
  stack1 = foundHelper || depth0.extension;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "extension", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" id=\"document_";
  foundHelper = helpers.document_id;
  stack1 = foundHelper || depth0.document_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "document_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n      <span class=\"filename\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n      <a class=\"popout no-hover\" href=\"";
  foundHelper = helpers.alternate_url;
  stack1 = foundHelper || depth0.alternate_url;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.href);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "alternate_url.href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.title_text;
  stack1 = foundHelper || depth2.title_text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "......title_text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">\n        <img src=\"/images/popout.png\"/>\n      </a>\n      <div class=\"clear\"></div>\n    </li>\n    ";
  return buffer;}

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n<li class=\"file ";
  foundHelper = helpers.extension;
  stack1 = foundHelper || depth0.extension;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "extension", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" id=\"document_";
  foundHelper = helpers.document_id;
  stack1 = foundHelper || depth0.document_id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "document_id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n  <span class=\"filename\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n  <a class=\"popout no-hover\" href=\"";
  foundHelper = helpers.alternate_url;
  stack1 = foundHelper || depth0.alternate_url;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.href);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "alternate_url.href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.title_text;
  stack1 = foundHelper || depth1.title_text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "...title_text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">\n    <img src='/images/popout.png'/>\n  </a>\n  <div class=\"clear\"></div>\n</li>\n";
  return buffer;}

  foundHelper = helpers.tree;
  stack1 = foundHelper || depth0.tree;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.folders);
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program1, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  foundHelper = helpers.tree;
  stack1 = foundHelper || depth0.tree;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.files);
  stack2 = helpers.each;
  tmp1 = self.programWithDepth(program4, data, depth0);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
  
  
  return templates['googleDocsTreeView'];
});
