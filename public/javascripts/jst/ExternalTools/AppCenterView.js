define('jst/ExternalTools/AppCenterView', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppCenterView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"app_center\">\n  <div class=\"app_list\">\n    <div class=\"collectionViewItems clearfix\"></div>\n    <div class=\"paginatedLoadingIndicator\" style=\"display: none\"></div>\n  </div>\n</div>\n";});
  
  
  return templates['ExternalTools/AppCenterView'];
});
