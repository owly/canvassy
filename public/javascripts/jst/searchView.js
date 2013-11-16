define('jst/searchView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['searchView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<input type=\"text\" name=\"inputFilter\" class=\"inputFilterView\" />\n\n<div class=\"collectionView\"></div>\n\n";});
  
  
  return templates['searchView'];
});
