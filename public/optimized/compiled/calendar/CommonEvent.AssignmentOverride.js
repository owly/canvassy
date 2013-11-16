(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!calendar","compiled/calendar/CommonEvent","jquery.instructure_date_and_time","jquery.instructure_misc_helpers"],function(b,d){var e,f;return f=b.t("prompts.delete_override","Are you sure you want to delete this assignment override?"),e=function(b){function d(b,c){this.saveDates=a(this.saveDates,this),this.copyDataFromObject=a(this.copyDataFromObject,this),d.__super__.constructor.apply(this,arguments),this.eventType="assignment_override",this.deleteConfirmation=f,this.deleteUrl=c.assignment_url,this.addClass("assignment_override")}return c(d,b),d.prototype.copyDataFromObject=function(a){return a.assignment!=null?(this.copyDataFromAssignment(a.assignment),this.copyDataFromOverride(a.assignment_override)):this.copyDataFromOverride(a),this.title=""+this.assignment.name+" ("+this.override.title+")",this.object=this.override,this.addClass("group_"+this.contextCode()),d.__super__.copyDataFromObject.apply(this,arguments)},d.prototype.copyDataFromAssignment=function(a){this.assignment=a,this.lock_explanation=this.assignment.lock_explanation,this.description=this.assignment.description,this.start=this.parseStartDate();if(this.start)return this.originalStartDate=new Date(this.start)},d.prototype.copyDataFromOverride=function(a){return this.override=a,this.id="override_"+this.override.id,this.assignment.due_at=this.override.due_at},d.prototype.fullDetailsURL=function(){return this.assignment.html_url},d.prototype.startDate=function(){return this.originalStartDate},d.prototype.parseStartDate=function(){return this.assignment.due_at?$.parseFromISO(this.assignment.due_at,"due_date").time:null},d.prototype.displayTimeString=function(){var a,b;return this.start?(a=this.start,b=""+$.dateString(a)+" at "+$.timeString(a),"Due: <time datetime='"+a.toISOString()+"'>"+b+"</time>"):"No Date"},d.prototype.updateAssignmentTitle=function(a){var b;return this.assignment.title=a,b=this.title.match(/\(.+\)$/)[0],this.title=""+a+" "+b},d.prototype.saveDates=function(a,b){return this.save({"assignment_override[due_at]":$.dateToISO8601UTC($.unfudgeDateForProfileTimezone(this.start))},a,b)},d.prototype.methodAndURLForSave=function(){var a;return a=$.replaceTags(this.contextInfo.assignment_override_url,{assignment_id:this.assignment.id,id:this.override.id}),["PUT",a]},d}(d)})}).call(this)