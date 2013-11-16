define('jst/conversations/addAttachment', ["compiled/handlebars_helpers","i18n!conversations.add_attachment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/addAttachment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<li class=\"attachment clearfix\"\n    title=\"";
  stack1 = "File to attach";
  stack2 = "titles.attachment";
  stack3 = {};
  stack4 = "conversations.add_attachment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <div class=\"row-fluid\">\n    <div class=\"span8\">\n      <i class=\"icon-paperclip\"></i>\n\n      <input type=\"file\"\n             class=\"file_input\"\n             name=\"attachments[]\">\n    </div>\n\n    <div class=\"span1 offset3\">\n      <a href=\"#\"\n         class=\"remove_link icon-end black pull-right\"\n         title=\"";
  stack1 = "Remove attachment";
  stack2 = "titles.remove_attachment";
  stack3 = {};
  stack4 = "conversations.add_attachment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n    </div>\n  </div>\n</li>\n";
  return buffer;});
  
  
  return templates['conversations/addAttachment'];
});
