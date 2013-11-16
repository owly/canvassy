(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["Backbone","underscore","jquery","compiled/models/Section"],function(b,d,e,f){var g,h;return g=function(b){function e(){return this.representsDefaultDueDate=a(this.representsDefaultDueDate,this),this.getCourseSectionID=a(this.getCourseSectionID,this),this.isBlank=a(this.isBlank,this),h=e.__super__.constructor.apply(this,arguments),h}return c(e,b),e.prototype.defaults={due_at_overridden:!0,due_at:null,all_day:!1,all_day_date:null,unlock_at_overridden:!0,unlock_at:null,lock_at_overridden:!0,lock_at:null},e.prototype.initialize=function(){return e.__super__.initialize.apply(this,arguments),this.on("change:course_section_id",this.clearID,this)},e.prototype.clearID=function(){return this.set("id",void 0)},e.prototype.parse=function(a){var b;return b=a.assignment_override,b},e.prototype.toJSON=function(){return{assignment_override:e.__super__.toJSON.apply(this,arguments)}},e.defaultDueDate=function(a){var b;return a==null&&(a={}),b=d.extend(a,{course_section_id:f.defaultDueDateSectionID}),new e(b)},e.prototype.isBlank=function(){return this.get("due_at")==null},e.prototype.getCourseSectionID=function(){return this.get("course_section_id")},e.prototype.representsDefaultDueDate=function(){return this.getCourseSectionID()===f.defaultDueDateSectionID},e}(b.Model)})}).call(this)