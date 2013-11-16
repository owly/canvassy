(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["jquery","underscore","i18n!calendar.edit","Backbone","jst/calendar/editCalendarEventFull","compiled/views/calendar/MissingDateDialogView","wikiSidebar","compiled/object/unflatten","tinymce.editor_box","compiled/tinymce"],function(b,d,e,f,g,h,i,j){var k,l;return k=function(f){function k(){return this.toggleUseSectionDates=a(this.toggleUseSectionDates,this),this.toggleUsingSectionClass=a(this.toggleUsingSectionClass,this),this.destroyModel=a(this.destroyModel,this),this.render=a(this.render,this),l=k.__super__.constructor.apply(this,arguments),l}return c(k,f),k.prototype.el=b("#content"),k.prototype.template=g,k.prototype.events={"submit form":"submit",'change [name="use_section_dates"]':"toggleUseSectionDates","click .delete_link":"destroyModel","click .switch_event_description_view":"toggleHtmlView"},k.prototype.initialize=function(){var a=this;return this.model.fetch().done(function(){var b,c;return ENV.NEW_CALENDAR_EVENT_ATTRIBUTES&&(b=a.model.parse(ENV.NEW_CALENDAR_EVENT_ATTRIBUTES),b.all_day=((c=b.start_at)!=null?!!c.equals(b.end_at):!!void 0)&&b.start_at.equals(b.start_at.clearTime()),a.model.set(b)),a.render()}),this.model.on("change:use_section_dates",this.toggleUsingSectionClass)},k.prototype.render=function(){var a;return this.$el.html(this.template(this.model.toJSON("forView"))),this.$(".date_field").date_field(),this.$(".time_field").time_field(),a=this.$("textarea").editorBox(),i.inited||i.init(),i.attachToEditor(a).show(),this},k.prototype.destroyModel=function(){var a,b=this;a=e.t("confirm_delete_calendar_event","Are you sure you want to delete this calendar event?");if(confirm(a))return this.$el.disableWhileLoading(this.model.destroy({success:function(){return b.redirectWithMessage(e.t("event_deleted","%{event_title} deleted successfully",{event_title:b.model.get("title")}))}}))},k.prototype.toggleUsingSectionClass=function(){return this.$("#editCalendarEventFull").toggleClass("use_section_dates",this.model.get("use_section_dates")),b(".show_if_using_sections input").prop("disabled",!this.model.get("use_section_dates"))},k.prototype.toggleUseSectionDates=function(a){return this.model.set("use_section_dates",!this.model.get("use_section_dates")),this.updateRemoveChildEvents(a)},k.prototype.toggleHtmlView=function(a){return a!=null&&a.preventDefault(),b("textarea[name=description]").editorBox("toggle")},k.prototype.updateRemoveChildEvents=function(a){var c;return c=b(a.target).prop("checked")?"":"1",b("input[name=remove_child_events]").val(c)},k.prototype.redirectWithMessage=function(a){b.flashMessage(a);if(this.model.get("return_to_url"))return window.location=this.model.get("return_to_url")},k.prototype.submit=function(a){var c,f,g=this;a!=null&&a.preventDefault(),f=j(this.$el.getFormData()),f.use_section_dates=!!f.use_section_dates,d.each([f].concat(f.child_event_data),this.setStartEnd),f.remove_child_events==="1"&&delete f.child_event_data;if(b("[name=use_section_dates]").prop("checked")){c=new h({validationFn:function(){var a;return a=b("[name*=start_date]:visible").filter(function(){return b(this).val()===""}),a.length>0?a:!0},labelFn:function(a){return b(a).parents("tr").prev().find("label").text()},success:function(a){return a.dialog("close"),g.$el.disableWhileLoading(g.model.save(f,{success:function(){return g.redirectWithMessage(e.t("event_saved","Event Saved Successfully"))}})),a.remove()}});if(c.render())return}return this.saveEvent(f)},k.prototype.saveEvent=function(a){var b=this;return this.$el.disableWhileLoading(this.model.save(a,{success:function(){return b.redirectWithMessage(e.t("event_saved","Event Saved Successfully"))}}))},k.prototype.setStartEnd=function(a){if(!a)return;return a.start_at=b.unfudgeDateForProfileTimezone(Date.parse(a.start_date+" "+a.start_time)),a.end_at=b.unfudgeDateForProfileTimezone(Date.parse(a.start_date+" "+a.end_time))},k.type="event",k.title=function(){return k.__super__.constructor.title.call(this,"event","Event")},k}(f.View)})}).call(this)