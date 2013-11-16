define('jst/PaginatedView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!paginated_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['PaginatedView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"paginatedView-loading\" role=\"status\" aria-live=\"polite\">\n  ";
  stack1 = "Loading more results";
  stack2 = "loading_more_results";
  stack3 = {};
  stack4 = "paginated_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
  
  
arguments[1]('PaginatedView', ".paginatedView-loading {\n  text-align: center;\n  color: #e9e9e9;\n  font-size: 26px;\n  background: url(\"/images/load.gif\") no-repeat 50% 80%;\n  padding-bottom: 56px; }\n");

  return templates['PaginatedView'];
});
