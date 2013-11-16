define('jst/CommentsView', ["compiled/handlebars_helpers","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['CommentsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  foundHelper = helpers.entries;
  stack1 = foundHelper || depth0.entries;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "entries.length", { hash: {} }); }
  buffer += escapeExpression(stack1) + " Comments\n    ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n      No Comments\n    ";}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div class=\"image-block comment\">\n      <div class=\"image-block-image\">\n        ";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = self.invokePartial(partials.avatar, 'avatar', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"image-block-content\">\n        ";
  foundHelper = helpers.canDelete;
  stack1 = foundHelper || depth0.canDelete;
  stack2 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <h5><a href=\"";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.html_url);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.author;
  stack1 = foundHelper || depth0.author;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.display_name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "author.display_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a> said:</h4>\n        <div class=\"not-important\">";
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
  buffer += escapeExpression(stack1) + "</div>\n        <p>";
  foundHelper = helpers.message;
  stack1 = foundHelper || depth0.message;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "message", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      </div>\n    </div>\n  ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"#\" data-delete-comment=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"close\">&times;</a>";
  return buffer;}

  buffer += "<div class=\"CommentsView\">\n  <h3>\n    ";
  foundHelper = helpers.entries;
  stack1 = foundHelper || depth0.entries;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h3>\n  <hr>\n  ";
  foundHelper = helpers.entries;
  stack1 = foundHelper || depth0.entries;
  stack2 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"image-block\">\n    <div class=\"image-block-image\">\n      ";
  foundHelper = helpers.currentUser;
  stack1 = foundHelper || depth0.currentUser;
  stack1 = self.invokePartial(partials.avatar, 'avatar', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"image-block-content\">\n      <form>\n        <textarea name=\"message\" placeholder=\"Add a comment...\"></textarea>\n        <div>\n          <button class=\"btn btn-small\" type=\"submit\">Post</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
  return buffer;});
  
  
  return templates['CommentsView'];
});
