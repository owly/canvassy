define('jst/quickStartBar/message', ["compiled/handlebars_helpers","i18n!quick_start_bar.message"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/message'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<form class=\"newItemForm message\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid expander\">\n      <textarea placeholder=\"Message\" class=\"span12\" rows=\"5\" name=\"body\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10 recipient_finder\">\n        <input\n          name=\"recipients\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"http://localhost:3000/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = "Sending...";
  stack2 = "Sending";
  stack3 = {};
  stack4 = "quick_start_bar.message";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Send</button>\n      </div>\n    </div>\n  </div>\n</form>\n\n";
  return buffer;});
  
  
  return templates['quickStartBar/message'];
});
