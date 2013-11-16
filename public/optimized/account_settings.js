define(["i18n!account_settings","jquery","jquery.ajaxJSON","jquery.instructure_date_and_time","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.loadingImg","compiled/tinymce","tinymce.editor_box","vendor/date","vendor/jquery.scrollTo","jqueryui/tabs"],function(a,b){b(document).ready(function(){function e(){var c=b("#account_settings_outgoing_email_default_name").val();c==""&&(c=a.t("custom_text_blank","[Custom Text]")),b("#custom_default_name_display").text(c)}b("#account_settings").submit(function(){b(".ip_filter .value").each(function(){b(this).removeAttr("name")}).filter(":not(.blank)").each(function(){var a=b.trim(b(this).parents(".ip_filter").find(".name").val().replace(/\[|\]/g,"_"));a&&b(this).attr("name","account[ip_filters]["+a+"]")})}),b(".datetime_field").datetime_field(),b("#add_notification_form textarea").editorBox().width("100%"),b("#add_notification_form .datetime_field").bind("blur change",function(){var a=Date.parse(b(this).val());a&&(a=a.toString(b.datetime.defaultFormat)),b(this).val(a)}),b("#add_notification_form").submit(function(c){var d=b(this),e=d.find("#confirm_global_announcement:visible:not(:checked)");if(e.length>0)return e.errorBox(a.t("confirms.global_announcement","You must confirm the global announcement")),!1;var f={object_name:"account_notification",required:["start_at","end_at","subject","message"],date_fields:["start_at","end_at"],numbers:[]};b("#account_notification_months_in_display_cycle").length>0&&f.numbers.push("months_in_display_cycle");var g=d.validateForm(f);if(!g)return!1}),b("#account_notification_required_account_service").click(function(a){$this=b(this),b("#confirm_global_announcement_field").showIf(!$this.is(":checked")),b("#account_notification_months_in_display_cycle").prop("disabled",!$this.is(":checked"))}),b(".delete_notification_link").click(function(c){c.preventDefault();var d=b(this);d.parents("li").confirmDelete({url:d.attr("rel"),message:a.t("confirms.delete_announcement","Are you sure you want to delete this announcement?"),success:function(){b(this).slideUp(function(){b(this).remove()})}})}),b("#account_settings_tabs").tabs().show(),b(".add_ip_filter_link").click(function(a){a.preventDefault();var c=b(".ip_filter.blank:first").clone(!0).removeClass("blank");b("#ip_filters").append(c.show())}),b(".delete_filter_link").click(function(a){a.preventDefault(),b(this).parents(".ip_filter").remove()}),b(".ip_filter:not(.blank)").length==0&&b(".add_ip_filter_link").click(),b(".ip_help_link").click(function(c){c.preventDefault(),b("#ip_filters_dialog").dialog({title:a.t("titles.what_are_quiz_ip_filters","What are Quiz IP Filters?"),width:400})}),b("#account_settings_enable_scheduler").change(function(){var a=b("#account_settings_enable_scheduler"),c=b("#show_scheduler_checkbox");a.attr("checked")?c.show():c.hide()}),b("#account_settings_enable_scheduler").trigger("change"),b(".open_registration_delegated_warning_link").click(function(c){c.preventDefault(),b("#open_registration_delegated_warning_dialog").dialog({title:a.t("titles.open_registration_delegated_warning_dialog","An External Identity Provider is Enabled"),width:400})}),b("#account_settings_external_notification_warning_checkbox").on("change",function(a){b("#account_settings_external_notification_warning").val(b(this).prop("checked")?1:0)}),b(".custom_help_link .delete").click(function(a){a.preventDefault(),b(this).parents(".custom_help_link").find(".custom_help_link_state").val("deleted"),b(this).parents(".custom_help_link").hide()});var c=b(".custom_help_link.blank").detach().removeClass("blank"),d=1e3;b(".add_custom_help_link").click(function(a){a.preventDefault();var e=c.clone(!0).appendTo("#custom_help_links").show(),f=d++;b.each(["id","name","for"],function(a,b){e.find("["+b+"]").attr(b,function(a,b){return b.replace(/\d+/,f)})})}),b(".remove_account_user_link").click(function(c){c.preventDefault();var d=b(this).parent("li");d.confirmDelete({message:a.t("confirms.remove_account_admin","Are you sure you want to remove this account admin?"),url:b(this).attr("href"),success:function(){d.slideUp(function(){b(this).remove()})}})}),b("#turnitin, #account_settings_global_includes, #enable_equella").change(function(){var a=b("#"+b(this).attr("id")+"_settings"),c=b(this).attr("checked");a.showIf(c),c||a.find("input,textarea").val("")}).change(),b(".turnitin_account_settings").change(function(){b(".confirm_turnitin_settings_link").text(a.t("links.turnitin.confirm_settings","confirm Turnitin settings"))}),b(".confirm_turnitin_settings_link").click(function(c){c.preventDefault();var d=b(this),e=d.attr("href"),f=b("#account_settings").getFormData({object_name:"account"});e=b.replaceTags(b.replaceTags(e,"account_id",f.turnitin_account_id),"shared_secret",f.turnitin_shared_secret),d.text(a.t("notices.turnitin.checking_settings","checking Turnitin settings...")),b.ajaxJSON(e,"GET",{},function(b){b&&b.success?d.text(a.t("notices.turnitin.setings_confirmed","Turnitin settings confirmed!")):d.text(a.t("notices.turnitin.invalid_settings","invalid Turnitin settings, please check your account id and shared secret from Turnitin"))},function(b){d.text(a.t("notices.turnitin.invalid_settings","invalid Turnitin settings, please check your account id and shared secret from Turnitin"))})}),b(".add_users_link").click(function(a){var c=b("#enroll_users_form");b(this).hide(),a.preventDefault(),c.show(),b("html,body").scrollTo(c),c.find("textarea").focus().select()}),b(".open_report_description_link").click(function(a){a.preventDefault();var c=b(this).parents(".title").find("span.title").text();b(this).parent(".reports").find(".report_description").dialog({title:c,width:800})}),b(".run_report_link").click(function(a){a.preventDefault(),b(this).parent("form").submit()}),b(".run_report_form").formSubmit({resetForm:!0,beforeSubmit:function(a){return b(this).loadingImage(),!0},success:function(a){b(this).loadingImage("remove");var c=b(this).find('input[name="report_type"]').val();b("#"+c).find(".run_report_link").hide().end().find(".configure_report_link").hide().end().find(".running_report_message").show(),b(this).parent(".report_dialog").dialog("close")},error:function(a){b(this).loadingImage("remove"),b(this).parent(".report_dialog").dialog("close")}}),b(".configure_report_link").click(function(c){c.preventDefault();var d=b(this).data(),e=d.$report_dialog;e||(e=d.$report_dialog=b(this).parent("td").find(".report_dialog").dialog({autoOpen:!1,width:400,title:a.t("titles.configure_report","Configure Report")}),e.find(".datetime_field").datetime_field()),e.dialog("open")}),b(".service_help_dialog").each(function(a){var c=b(this),d=c.attr("id").replace("_help_dialog","");c.dialog({autoOpen:!1,width:560}),b('<a href="#"><i class="icon-question standalone-icon"></i></a>').click(function(a){a.preventDefault(),c.dialog("open")}).appendTo('label[for="account_services_'+d+'"]')}),b(".notification_from_name_option").on("change",function(){var a=b("#account_settings_outgoing_email_default_name_option_custom"),c=b("#account_settings_outgoing_email_default_name");a.attr("checked")?(c.removeAttr("disabled"),c.focus()):c.attr("disabled","disabled")}),b("#account_settings_outgoing_email_default_name").on("keyup",function(){e()}),e(),b(".notification_from_name_option").trigger("change")})})