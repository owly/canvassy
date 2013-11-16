define(["i18n!user_logins","jquery","compiled/models/Pseudonym","jquery.instructure_forms","jqueryui/dialog","compiled/jquery/fixDialogButtons","jquery.instructure_misc_plugins","jquery.templateData"],function(a,b,c){b(document).ready(function(){var d=b("#edit_pseudonym_form");d.formSubmit({disableWhileLoading:!0,formErrors:!1,processData:function(a){if(!b(this).hasClass("passwordable")||!a["pseudonym[password]"]&&!a["pseudonym[password_confirmation]"])delete a["pseudonym[password]"],delete a["pseudonym[password_confirmation]"]},beforeSubmit:function(a){var c=b(this).find(".account_id select")[0],d=c&&c.selectedIndex;b(this).data("account_name",null),b(this).data("account_name",c&&c.options[d]&&c.options[d].innerHTML)},success:function(c){b(this).dialog("close");if(b(this).data("unique_id_text"))var d=b(this).data("unique_id_text").parents(".login");else{var d=b("#login_information .login.blank").clone(!0);b("#login_information .add_holder").before(d),d.removeClass("blank"),d.show(),c.account_name=b(this).data("account_name")}d.fillTemplateData({data:c,hrefValues:["id","account_id"]}),d.find(".links").addClass("passwordable"),b("#login_information .login .delete_pseudonym_link").show(),b.flashMessage(a.t("save_succeeded","Save successful"))},error:function(a){var d=b(this).find(".account_id select").val();a=c.prototype.normalizeErrors(a,ENV.PASSWORD_POLICIES[d]||ENV.PASSWORD_POLICY),b(this).formErrors(a)}}),b("#edit_pseudonym_form .cancel_button").click(function(){d.dialog("close")}),b("#login_information").delegate(".login_details_link","click",function(a){a.preventDefault(),b(this).parents("tr").find(".login_details").show(),b(this).hide()}).delegate(".edit_pseudonym_link","click",function(c){c.preventDefault();var d=b("#edit_pseudonym_form"),e=d.find(".sis_user_id");e.hide(),d.attr("action",b(this).attr("rel")).attr("method","PUT");var f=b(this).parents(".login").getTemplateData({textValues:["unique_id","sis_user_id","can_edit_sis_user_id"]});f.password="",f.password_confirmation="",d.fillFormData(f,{object_name:"pseudonym"}),f.can_edit_sis_user_id=="true"&&e.show();var g=b(this).parents(".links").hasClass("passwordable");d.toggleClass("passwordable",g),d.find("tr.password").showIf(g),d.find(".account_id").hide(),d.dialog({width:"auto",close:function(){d.data("unique_id_text")&&d.data("unique_id_text").parents(".login").hasClass("blank")&&d.data("unique_id_text").parents(".login").remove()}}).fixDialogButtons(),d.dialog("option","title",a.t("titles.update_login","Update Login")).find(".submit_button").text(a.t("buttons.update_login","Update Login")),d.dialog("option","beforeClose",function(){b(".error_box:visible").click()});var h=b(this).parents(".login").find(".unique_id");d.data("unique_id_text",h),d.find(":input:visible:first").focus().select()}).delegate(".delete_pseudonym_link","click",function(c){c.preventDefault();if(b("#login_information .login:visible").length<2){alert(a.t("notices.cant_delete_last_login","You can't delete the last login for a user"));return}var d=b(this).parents(".login").find(".unique_id").text();b(this).parents(".login").confirmDelete({message:a.t("confirms.delete_login",'Are you sure you want to delete the login, "%{login}"?',{login:d}),url:b(this).attr("rel"),success:function(){b(this).fadeOut(),b("#login_information .login:visible").length<2&&b("#login_information .login .delete_pseudonym_link").hide()}})}).delegate(".add_pseudonym_link","click",function(c){c.preventDefault(),b("#login_information .login.blank .edit_pseudonym_link").click(),d.attr("action",b(this).attr("rel")).attr("method","POST"),d.fillFormData({"pseudonym[unique_id]":""}),d.dialog("option","title",a.t("titles.add_login","Add Login")).find(".submit_button").text(a.t("buttons.add_login","Add Login")),d.addClass("passwordable"),d.find("tr.password").show(),d.find(".account_id").show(),d.find(".account_id_select").change(),d.data("unique_id_text",null)}),b(".reset_mfa_link").click(function(c){var d=b(this);b.ajaxJSON(d.attr("href"),"DELETE",null,function(){b.flashMessage(a.t("notices.mfa_reset","Multi-factor authentication reset")),d.parent().remove()}),c.preventDefault()})})})