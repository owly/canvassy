(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["Backbone","underscore","jst/assignments/DueDateOverride","compiled/models/AssignmentOverride","i18n!overrides"],function(b,d,e,f,g){var h,i;return h=function(b){function d(){return this.validateBeforeSave=a(this.validateBeforeSave,this),this.hideAddDueDateButton=a(this.hideAddDueDateButton,this),this.showAddDueDateButton=a(this.showAddDueDateButton,this),this.getAllDates=a(this.getAllDates,this),this.getOverrides=a(this.getOverrides,this),this.sectionsWithoutOverrides=a(this.sectionsWithoutOverrides,this),this.containsSectionsWithoutOverrides=a(this.containsSectionsWithoutOverrides,this),this.getDefaultDueDate=a(this.getDefaultDueDate,this),this.updateOverrides=a(this.updateOverrides,this),this.toJSON=a(this.toJSON,this),this.shouldHideDueDate=a(this.shouldHideDueDate,this),i=d.__super__.constructor.apply(this,arguments),i}return c(d,b),d.prototype.template=e,d.prototype.events={"click #add_due_date":"addDueDate"},d.prototype.className="due-date-container",d.prototype.initialize=function(){return d.__super__.initialize.apply(this,arguments),this.model.overrides.on("remove",this.showAddDueDateButton)},d.prototype.addDueDate=function(a){var b,c,d;a.preventDefault(),c=this.model.availableSections(),b=this.model.containsSectionsWithoutOverrides()?f.defaultDueDate():new f({course_section_id:(d=c[0])!=null?d.id:void 0}),this.model.addOverride(b);if(this.shouldHideDueDate())return this.hideAddDueDateButton()},d.prototype.shouldHideDueDate=function(){return this.model.availableSections().length<=1},d.prototype.toJSON=function(){var a;return a=d.__super__.toJSON.apply(this,arguments),a.shouldHideDueDate=this.shouldHideDueDate(),a},d.prototype.updateOverrides=function(){return this.options.views["due-date-overrides"].updateOverrides()},d.prototype.getDefaultDueDate=function(){return this.model.getDefaultDueDate()},d.prototype.containsSectionsWithoutOverrides=function(){return this.model.containsSectionsWithoutOverrides()},d.prototype.sectionsWithoutOverrides=function(){return this.model.sectionsWithoutOverrides()},d.prototype.getOverrides=function(){return this.model.overrides.toJSON()},d.prototype.getAllDates=function(a){return a||(a={}),this.getOverrides().concat(a)},d.prototype.showAddDueDateButton=function(){return this.$el.find("#add_due_date").show()},d.prototype.hideAddDueDateButton=function(){return this.$el.find("#add_due_date").hide()},d.prototype.validateBeforeSave=function(a,b){return this.options.views["due-date-overrides"].validateBeforeSave(a,b),b},d}(b.View)})}).call(this)