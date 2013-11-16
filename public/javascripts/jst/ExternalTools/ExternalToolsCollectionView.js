define('jst/ExternalTools/ExternalToolsCollectionView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/ExternalToolsCollectionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Extensions</th>\n      <th>&nbsp;</th>\n    </tr>\n  </thead>\n  <tbody class=\"collectionViewItems\"></tbody>\n</table>\n<div class=\"paginatedLoadingIndicator\" style=\"display: none\"></div>\n";});
  
  
  return templates['ExternalTools/ExternalToolsCollectionView'];
});
