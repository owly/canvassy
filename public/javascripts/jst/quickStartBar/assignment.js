define('jst/quickStartBar/assignment', ["compiled/handlebars_helpers","i18n!quick_start_bar.assignment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/assignment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n    <div class=\"row-fluid\">\n      <input placeholder=\"Assignment title\" class=\"span12 expander\" name=\"name\" type=\"text\" id=\"assignmentTitle\">\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <textarea placeholder=\"Assignment description\" class=\"span12\" rows=\"3\" name=\"description\" id=\"assignmentDescription\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span2\">\n        <input placeholder=\"Points\" class=\"span1\" name=\"points_possible\" type=\"text\" id=\"assignmentPoints\">\n      </div>\n\n      <div class=\"span10 expandee\">\n        <div class=\"dateFieldContainer\">\n          <input placeholder=\"Due date\" name=\"due_at\" type=\"text\" class=\"dateField\" id=\"assignmentDueDate\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10\">\n        <input\n          name=\"course_ids\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"http://localhost:3000/conversations/find_recipients\"\n        >\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = "Saving...";
  stack2 = "assigning";
  stack3 = {};
  stack4 = "quick_start_bar.assignment";
  stack3['scope'] = stack4;
  foundHelper = helpers['t'];
  stack4 = foundHelper || depth0['t'];
  tmp1 = {};
  tmp1.hash = stack3;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, stack1, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "t", stack2, stack1, tmp1); }
  else { stack1 = stack4; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Assign</button>\n      </div>\n    </div>\n  </div>\n</form>\n\n";
  return buffer;});
  
  
  return templates['quickStartBar/assignment'];
});
