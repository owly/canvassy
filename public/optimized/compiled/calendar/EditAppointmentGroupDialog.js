(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","i18n!calendar","compiled/calendar/EditAppointmentGroupDetails","jst/calendar/editAppointmentGroup","jqueryui/dialog"],function(b,c,d,e){var f,g;return g=b('<div id="edit_event"><div class="wrapper"></div>').appendTo("body").dialog({autoOpen:!1,width:"auto",resizable:!1,title:c.t("titles.edit_appointment_group","Edit Appointment Group")}),g.dialog("widget").find("#edit_event").css("overflow","visible"),f=function(){function b(b,c,d){this.apptGroup=b,this.contexts=c,this.parentCloseCB=d,this.show=a(this.show,this),this.closeCB=a(this.closeCB,this),this.currentContextInfo=null}return b.prototype.closeCB=function(a){return g.dialog("close"),this.parentCloseCB(a)},b.prototype.show=function(){var a;return this.appointmentGroupsForm=new d(g.find(".wrapper"),this.apptGroup,this.contexts,this.closeCB),a=this.apptGroup.workflow_state==="active"?[{text:c.t("save_changes","Save Changes"),"class":"btn-primary",click:this.appointmentGroupsForm.saveClick}]:[{text:c.t("save","Save"),click:this.appointmentGroupsForm.saveWithoutPublishingClick},{text:c.t("save_and_publish","Save & Publish"),"class":"btn-primary",click:this.appointmentGroupsForm.saveClick}],g.dialog("option","buttons",a).dialog("open")},b}()})}).call(this)