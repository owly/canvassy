(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["i18n!appt_calendar_event_dialog","jst/calendar/editApptCalendarEvent"],function(b,c){var d;return d=function(){function d(d){var e,f=this;this.event=d,this.save=a(this.save,this),this.form=$("<div></div>").html(c(this.event)).appendTo("body"),e=this.form.find("[name=max_participants_option]"),this.$maxParticipants=this.form.find("[name=max_participants]"),e.change(function(){return f.$maxParticipants.prop("disabled",!e.prop("checked"))}),this.event.calendarEvent.participants_per_appointment&&(e.click(),this.$maxParticipants.val(this.event.calendarEvent.participants_per_appointment)),this.dialog=this.form.dialog({autoOpen:!1,width:"auto",resizable:!1,title:b.t("title","Edit %{name}",{name:this.event.title}),buttons:[{text:b.t("update","Update"),click:this.save}]})}return d.prototype.show=function(){return this.dialog.dialog("open")},d.prototype.save=function(){var a,c,d,e;return a=this.dialog.getFormData(),c=a.max_participants_option==="on",d=a.max_participants,c&&d<=0?(this.$maxParticipants.errorBox(b.t("invalid_participants","You must allow at least one user to attend")),!1):(this.event.calendarEvent.description=a.description,c?(this.event.calendarEvent.total_slots=d,this.event.calendarEvent.remaining_slots=d-this.event.calendarEvent.child_events.length):(this.event.calendarEvent.total_slots=void 0,this.event.calendarEvent.remaining_slots=void 0),e=c?d:"",this.event.save({"calendar_event[description]":a.description,"calendar_event[participants_per_appointment]":e}),this.dialog.dialog("destroy"),this.form.remove())},d}()})}).call(this)