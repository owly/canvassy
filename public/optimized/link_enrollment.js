define(["i18n!link_enrollment","jquery","jquery.ajaxJSON","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_plugins","jquery.templateData"],function(a,b){window.link_enrollment=function(){return{choose:function(c,d,e,f){var g=b(this).parents(".user"),h=b("#link_student_dialog"),i={};i.short_name=c,h.fillTemplateData({data:i}),h.data("callback",f);if(!h.data("loaded")){h.find(".loading_message").text(a.t("messages.loading_students","Loading Students...")),h.find(".student_options option:not(.blank)").remove();var j=h.find(".student_url").attr("href");b.ajaxJSON(j,"GET",{},function(c){for(var f in c){var g=c[f],i=b("<option/>");g.id&&g.name&&(i.val(g.id).text(g.name),h.find(".student_options").append(i))}var i=b("<option/>");i.val("none").text(a.t("options.no_link","[ No Link ]")),h.find(".student_options").append(i),h.find(".loading_message").hide().end().find(".students_link").show(),link_enrollment.updateDialog(h,d,e),h.data("loaded",!0)},function(){h.find(".loading_message").text(a.t("errors.load_failed","Loading Students Failed, please try again"))})}else link_enrollment.updateDialog(h,d,e);h.find(".existing_user").showIf(e),h.dialog({title:a.t("titles.link_to_student","Link to Student"),width:400})},updateDialog:function(a,b,c){a.find(".enrollment_id").val(b),a.find(".existing_user").showIf(c),a.find(".student_options").val("none").val(c);var d={};d.existing_user_name=a.find(".student_options option[value='"+c+"']").first().text(),a.fillTemplateData({data:d})}}}(),b(document).ready(function(){b(document).bind("enrollment_added",function(){b("#link_student_dialog").data("loaded",!1)}),b("#link_student_dialog .cancel_button").click(function(){b("#link_student_dialog").dialog("close")}),b("#link_student_dialog_form").formSubmit({beforeSubmit:function(c){b(this).find("button").attr("disabled",!0).end().find(".save_button").text(a.t("messages.linking_to_student","Linking to Student..."))},success:function(c){b(this).find("button").attr("disabled",!1).end().find(".save_button").text(a.t("buttons.link","Link to Student"));var d=c.enrollment,e=b("#link_student_dialog").data("callback");b("#link_student_dialog").dialog("close"),b.isFunction(e)&&d&&e(d)},error:function(c){b(this).find("button").attr("disabled",!1).find(".save_button").text(a.t("errors.link_failed","Linking Failed, please try again"))}})})})