(function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};define(["i18n!help_dialog","jst/helpDialog","jquery","underscore","INST","str/htmlEscape","compiled/fn/preventDefault","jquery.instructure_misc_helpers","jqueryui/dialog","jquery.disableWhileLoading"],function(b,c,d,e,f,g,h){var i,j;return j=!ENV.current_user_id,i={defaultTitle:b.t("Help","Help"),initDialog:function(){var b=this;return this.$dialog=d('<div style="padding:0; overflow: visible;" />').dialog({resizable:!1,width:400,title:this.defaultTitle,close:function(){return b.switchTo("#help-dialog-options")}}),this.$dialog.dialog("widget").delegate('a[href="#teacher_feedback"],                                          a[href="#create_ticket"],                                          a[href="#help-dialog-options"]',"click",h(function(a){var c;return c=a.currentTarget,b.switchTo(d(c).attr("href"))})),this.helpLinksDfd=d.getJSON("/help_links").done(function(f){var g;return f=d.grep(f,function(b){return e.detect(b.available_to,function(b){return b==="user"||ENV.current_user_roles&&a.call(ENV.current_user_roles,b)>=0})}),g={showEmail:j,helpLinks:f,url:window.location},b.$dialog.html(c(g)),b.initTicketForm(),d(b).trigger("ready")}),this.$dialog.disableWhileLoading(this.helpLinksDfd),this.dialogInited=!0},initTicketForm:function(){var a,b=this;return a=this.$dialog.find("#create_ticket").formSubmit({disableWhileLoading:!0,required:function(){var a;return a=["error[subject]","error[comments]","error[user_perceived_severity]"],j&&a.push("error[email]"),a},success:function(){return b.$dialog.dialog("close"),a.find(":input").val("")}})},switchTo:function(a){var c,e,f,g=this;return f="#teacher_feedback, #create_ticket",this.$dialog.find(f).hide(),c=this.$dialog.find(a).show().outerHeight(),this.$dialog.animate({left:f.match(a)?-400:0,height:c},{step:function(){return g.$dialog.dialog("option","position","center")},duration:100}),(e=this.$dialog.find("a[href='"+a+"'] .text").text())?e=d("          <a class='ui-dialog-header-backlink' href='#help-dialog-options'>            "+b.t("Back","Back")+"          </a>          <span>"+e+"</span>        "):e=this.defaultTitle,this.$dialog.dialog("option","title",e)},open:function(){return i.dialogInited||i.initDialog(),i.$dialog.dialog("open"),i.initTeacherFeedback()},initTeacherFeedback:function(){var b,c,e,f=this;e=ENV.current_user_roles&&a.call(ENV.current_user_roles,"student")>=0;if(!this.teacherFeedbackInited&&e)return this.teacherFeedbackInited=!0,c=d.getJSON("/api/v1/courses.json"),b=null,this.helpLinksDfd.done(function(){return b=f.$dialog.find("#teacher_feedback").disableWhileLoading(c).formSubmit({disableWhileLoading:!0,required:["recipients[]","body"],success:function(){return f.$dialog.dialog("close")}})}),d.when(c,this.helpLinksDfd).done(function(a){var c,e;return c=a[0],e=d.map(c,function(a){return"<option value='course_"+a.id+"_admins' "+(ENV.context_id===a.id?"selected":"")+">              "+g(a.name)+"            </option>"}),b.find('[name="recipients[]"]').html(e.join(""))})},initTriggers:function(){return d(".help_dialog_trigger").click(h(this.open))}}})}).call(this)