define('jst/FindFlickrImageView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!find_flickr_image_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['FindFlickrImageView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<div class=\"input-append\">\n  <input class=\"input-xxlarge flickrSearchTerm\"\n         placeholder=\"";
  stack1 = "Find Creative Commons images on Flickr";
  stack2 = "find_cc_on_flickr";
  stack3 = {};
  stack4 = "find_flickr_image_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         type=\"search\"\n         style=\"position: relative; z-index: 1200\"\n         ><button class=\"btn flickrSearchButton\"\n                               title=\"";
  stack1 = "Search";
  stack2 = "search";
  stack3 = {};
  stack4 = "find_flickr_image_view";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                               type=\"submit\"><i class=\"icon-search\"></i></button>\n</div>\n<ul class=\"flickrResults thumbnails insertUpdateImageTabpane\" style=\"display: none;\"></ul>\n";
  return buffer;});
  
  
arguments[1]('FindFlickrImageView', ".FindFlickrImageView .flickrResults {\n  padding: 0;\n  max-height: 200px;\n  overflow: auto;\n  margin-left: 0px;\n  margin-top: 10px; }\n  .FindFlickrImageView .flickrResults li {\n    margin-bottom: 10px;\n    margin-left: 10px; }\n    .FindFlickrImageView .flickrResults li a.active {\n      background-color: #5fb5f3; }\n\n.WikiSidebarView .flickrResults {\n  max-height: 130px; }\n  .WikiSidebarView .flickrResults li {\n    margin-bottom: 10px;\n    margin-left: 10px; }\n  .WikiSidebarView .flickrResults img {\n    width: 40px;\n    height: 40px; }\n");

  return templates['FindFlickrImageView'];
});
