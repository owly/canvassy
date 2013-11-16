define('jst/wiki/WikiPageIndex', ["compiled/handlebars_helpers","jst/wiki/_wiki_page_buttons"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageIndex'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        ";
  foundHelper = helpers.collection;
  stack1 = foundHelper || depth0.collection;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers.unless;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "\n        <tr><td colspan=\"4\">No pages created yet. <a class=\"new_page\" href=\"#\">Add one!</a></td></tr>\n        ";}

  stack1 = depth0;
  stack1 = self.invokePartial(partials['wiki/wiki_page_buttons'], 'wiki/wiki_page_buttons', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"wiki_page_index_content\">\n  <table id=\"wiki_page_index\" class=\"table\">\n    <thead><tr>\n      <th>PAGE TITLE</th>\n      <th>CREATION DATE</th>\n      <th>LAST EDIT</th>\n      <th></th>\n    </tr></thead>\n    <tbody class=\"collectionViewItems\">\n      ";
  foundHelper = helpers.fetched;
  stack1 = foundHelper || depth0.fetched;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>";
  return buffer;});
  
  
  return templates['wiki/WikiPageIndex'];
});
