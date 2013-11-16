define('jst/roles/accountRoles', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['roles/accountRoles'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"new-role\"></div>\n<table id=\"account_roles\" class='table table-striped table-hover table-condensed'></table>\n";});
  
  
  return templates['roles/accountRoles'];
});
