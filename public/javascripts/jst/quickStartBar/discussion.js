define('jst/quickStartBar/discussion', ["compiled/handlebars_helpers","i18n!quick_start_bar.discussion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/discussion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid\">\n      <input placeholder=\"Discussion topic\" class=\"span12 expander\" name=\"title\" type=\"text\">\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <textarea placeholder=\"Discussion message\" class=\"span12\" rows=\"3\" name=\"message\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span2\">\n        <label class=\"checkbox checkbox-inline\"><input type=\"checkbox\" name=\"graded\"> Graded?</label>\n      </div>\n\n      <div class=\"span2\">\n        <input placeholder=\"Points\" class=\"span1\" name=\"assignment[points_possible]\" type=\"text\" disabled>\n      </div>\n\n      <div class=\"span8 expandee\">\n        <div class=\"dateFieldContainer\">\n          <input placeholder=\"Due date\" name=\"assignment[due_at]\" type=\"text\" class=\"dateField\" disabled>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"course_finder span10\">\n        <input\n          name=\"context_ids\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = "Saving...";
  stack2 = "saving";
  stack3 = {};
  stack4 = "quick_start_bar.discussion";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Create</button>\n      </div>\n    </div>\n\n  </div>\n</form>\n";
  return buffer;});
  
  
  return templates['quickStartBar/discussion'];
});
