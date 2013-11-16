define(["i18n!assignments","jquery","compiled/views/GoogleDocsTreeView","jst/assignments/homework_submission_tool","compiled/jquery.rails_flash_notifications","jquery.ajaxJSON","jquery.inst_tree","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_plugins","jquery.templateData","media_comments","compiled/tinymce","tinymce.editor_box","vendor/jquery.scrollTo","jqueryui/tabs"],function(a,b,c,d){function f(){if(!f.loading){f.loading=!0;var c=b("#external_tools_url").attr("href");b.ajaxJSON(c,"GET",{},function(c){if(!c.length)e.find("ul.tools li").text(a.t("no_tools_found","No tools found"));else{b(".submit_from_external_tool_option").parent().show(),e.find("ul.tools").empty();for(var f=0;f<c.length;f++){var g=c[f];g.display_text=g.homework_submission.label;var h=d(g),i=b(h).data("tool",g);e.find("ul.tools").append(i)}}},function(){e.find("ul.tools li.none").text(a.t("loading_tools_failed","Loading tools failed"))})}}function g(){function d(a,c,e){b.ajaxJSON(a,"GET",{},function(b){b.upload_status=="ready"?c(b.attachment):b.upload_status=="errored"?e(b.message):setTimeout(function(){d(a,c,e)},2500)},function(a){e(a.message)})}var c=b.Deferred(),f={url:b("#external_tool_url").val(),name:b("#external_tool_filename").val(),content_type:b("#external_tool_content_type").val()};b.ajaxJSON(b("#homework_file_url").attr("href"),"POST",f,function(f){d(f.status_url,function(a){b("#external_tool_submission_type").val("online_upload"),b("#external_tool_file_id").val(a.id),c.resolve(),e.submit()},function(d){c.resolve(),e.find(".submit").text(a.t("file_retrieval_error","Retrieving File Failed")),b.flashError(a.t("invalid_file_retrieval","There was a problem retrieving the file sent from this tool.")),console.log(d)})},function(b){c.resolve(),e.find(".submit").text(a.t("file_retrieval_error","Retrieving File Failed"))}),e.disableWhileLoading(c,{buttons:{".submit":a.t("getting_file","Retrieving File...")}})}window.submissionAttachmentIndex=-1,b(document).ready(function(){function h(){b("#submit_online_upload_form .remove_attachment_link").showIf(b("#submit_online_upload_form .submission_attachment:not(#submission_attachment_blank)").length>1)}function i(){b("#submit_online_upload_form button[type=submit]").attr("disabled",!!b(".bad_ext_msg:visible").length)}var d=!1,e=b(".submit_assignment_form");e.delegate("#submission_comment","focus",function(a){var c=b(this);c.val().trim()===""&&c.addClass("focus_or_content")}).delegate("#submission_comment","blur",function(a){var c=b(this);c.val().trim()===""&&c.removeClass("focus_or_content")}),e.submit(function(c){var f=b(this).find(".turnitin_pledge");if(b("#external_tool_submission_type").val()=="online_url_to_file"){c.preventDefault(),c.stopPropagation(),g();return}if(f.length>0&&!f.attr("checked"))return alert(a.t("messages.agree_to_pledge","You must agree to the submission pledge before you can submit this assignment.")),c.preventDefault(),c.stopPropagation(),!1;var h=!b(this).is("#submit_online_text_entry_form")||b(this).validateForm({object_name:"submission",required:["body"]});if(!h)return!1;b(this).find("button[type='submit']").text(a.t("messages.submitting","Submitting...")),b(this).find("button").attr("disabled",!0);if(b(this).attr("id")=="submit_online_upload_form"){c.preventDefault()&&c.stopPropagation();var i=b(this).find("input[type=file]:visible").filter(function(){return b(this).val()!==""}),j=b(this).find("#submission_attachment_ids").val();if(i.length===0&&j==="")return b.flashError(a.t("#errors.no_attached_file","You must attach at least one file to this assignment")),b(this).find("button[type=submit]").text(a.t("#button.submit_assignment","Submit Assignment")).prop("disabled",!1),!1;b.ajaxJSONPreparedFiles.call(this,{handle_files:function(a,b){var c=(b["submission[attachment_ids]"]||"").split(",");for(var d in a)c.push(a[d].attachment.id);return b["submission[attachment_ids]"]=c.join(","),b},context_code:b("#submit_assignment").data("context_code"),asset_string:b("#submit_assignment").data("asset_string"),intent:"submit",file_elements:i,formData:b(this).getFormData(),formDataTarget:"url",url:b(this).attr("action"),success:function(a){d=!0,window.location=window.location.href.replace(window.location.hash,"")},error:function(b){e.find("button[type='submit']").text(a.t("messages.submit_failed","Submit Failed, please try again")),e.find("button").attr("disabled",!1)}})}else d=!0}),window.onbeforeunload=function(){if(b("#submit_assignment:visible").length>0&&!d)return a.t("messages.not_submitted_yet",'You haven\'t finished submitting your assignment.  You still need to click "Submit" to finish turning it in.  Do you want to leave this page anyway?')},b(document).fragmentChange(function(a,c){c&&c.indexOf("#submit")==0&&(b(".submit_assignment_link").triggerHandler("click",!0),c=="#submit_google_doc"&&b("#submit_assignment_tabs").tabs("select","#submit_google_doc_form"))}),b(".submit_assignment_link").click(function(c,d){c.preventDefault();var e=b(this).hasClass("late"),g=new Date;if(e&&!d){var h;b(".resubmit_link").length>0?h=confirm(a.t("messages.now_overdue","This assignment is now overdue.  Any new submissions will be marked as late.  Continue anyway?")):h=confirm(a.t("messages.overdue","This assignment is overdue.  Do you still want to submit it?"));if(!h)return}b("#submit_assignment").show(),b(".submit_assignment_link").hide(),b("html,body").scrollTo(b("#submit_assignment")),b("#submit_online_text_entry_form textarea:first").editorBox(),f()}),b("#switch_text_entry_submission_views").click(function(a){a.preventDefault(),b("#submit_online_text_entry_form textarea:first").editorBox("toggle")}),b(".submit_assignment_form .cancel_button").click(function(){b("#submit_assignment").hide(),b(".submit_assignment_link").show()}),b("#submit_assignment_tabs").tabs(),b("#uploaded_files > ul").instTree({autoclose:!1,multi:!0,dragdrop:!1,onClick:function(a,c){b("#submission_attachment_ids").val("");var d=[];b("#uploaded_files .file.active-leaf").each(function(){var a=b(this).getTemplateData({textValues:["id"]}).id;d.push(a)}),b("#submission_attachment_ids").val(d.join(","))}}),b(".toggle_uploaded_files_link").click(function(a){a.preventDefault(),b("#uploaded_files").slideToggle()}),b(".add_another_file_link").click(function(a){a.preventDefault(),b("#submission_attachment_blank").clone(!0).removeAttr("id").show().insertBefore(this).find("input").attr("name","attachments["+ ++submissionAttachmentIndex+"][uploaded_data]"),h()}).click(),b(".remove_attachment_link").click(function(a){a.preventDefault(),b(this).parents(".submission_attachment").remove(),i(),h()}),b(".submit_online_url_option").click(function(a){if(b(this).attr("href")=="#submit_google_doc_form"){var d=window.location.pathname+"/list_google_docs";b.get(d,{},function(a,d){var e=new c({model:a});b("div#google_docs_container").html(e.el),e.render(),e.on("activate-file",function(a){b("#submit_google_doc_form").find("input[name='google_doc[document_id]']").val(a)})},"json")}}),b(".submission_attachment input[type=file]").live("change",function(){if(ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS.length<1||b(this).val()=="")return;var a=b(this).val().split(".").pop().toLowerCase();b(this).parent().find(".bad_ext_msg").showIf(b.inArray(a,ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS)<0),i()})}),b("#submit_google_doc_form").submit(function(){b("#uploading_google_doc_message").dialog({title:a.t("titles.uploading","Uploading Submission"),modal:!0,overlay:{backgroundColor:"#000",opacity:.7}})}),b(document).ready(function(){b("#submit_media_recording_form .submit_button").attr("disabled",!0).text(a.t("messages.record_before_submitting","Record Before Submitting")),b("#media_media_recording_submission_holder .record_media_comment_link").click(function(c){c.preventDefault(),b("#media_media_recording_submission").mediaComment("create","any",function(c,d){b("#submit_media_recording_form .submit_button").attr("disabled",!1).text(a.t("buttons.submit_assignment","Submit Assignment")),b("#submit_media_recording_form .media_comment_id").val(c),b("#submit_media_recording_form .media_comment_type").val(d),b("#media_media_recording_submission_holder").children().hide(),b("#media_media_recording_ready").show(),b("#media_comment_submit_button").attr("disabled",!1),b("#media_media_recording_thumbnail").attr("id","media_comment_"+c)})})});var e=b("#submit_from_external_tool_form");b("#submit_from_external_tool_form .tools li").live("click",function(c){function j(c){b.flashError(a.t("invalid_tool_return","The launched tool returned an invalid resource for this assignment")),console.log(c),i.dialog("close")}c.preventDefault();var d=b(this).data("tool"),e="/courses/"+b("#identity .course_id").text()+"/external_tools/"+d.id+"/resource_selection?homework=1&assignment_id="+ENV.SUBMIT_ASSIGNMENT.ID,f=d.homework_submission.selection_width||d.selection_width,g=d.homework_submission.selection_height||d.selection_height,h=d.display_text,i=b("<div/>",{id:"homework_selection_dialog"}).appendTo(b("body"));i.append(b("<iframe/>",{frameborder:0,src:e,id:"homework_selection_iframe"}).css({width:f,height:g})).bind("selection",function(a,c){var d=!0;if(c.return_type=="url"){if(!b("#submit_online_url_form").length){j("this assignment doesn't accept URL submissions");return}b("#external_tool_url").val(c.url),b("#external_tool_submission_type").val("online_url"),b("#submit_from_external_tool_form").addClass("has_submission");var e=b("<a/>",{href:c.url}).text(c.text||c.title);b("#external_tool_submission_details").empty().append(e).attr("class","url_submission")}else{if(c.return_type!="file"){j("return_type must be 'link' or 'file'");return}if(!b("#submit_online_upload_form").length){j("this assignment doesn't accept file submissions");return}var f=c.text.split(/\./).pop();ENV.SUBMIT_ASSIGNMENT&&ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS&&ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS.length>0&&(!c.text.match(/\./)||b.inArray(f,ENV.SUBMIT_ASSIGNMENT.ALLOWED_EXTENSIONS)<0)&&(d=!1),b("#external_tool_url").val(c.url),b("#external_tool_submission_type").val("online_url_to_file"),b("#external_tool_filename").val(c.text),b("#external_tool_content_type").val(c.content_type),b("#submit_from_external_tool_form").addClass("has_submission");var e=b("<a/>",{href:c.url}).text(c.text);b("#external_tool_submission_details").empty().append(e).attr("class","file_submission")}b("#submit_from_external_tool_form .bad_ext_msg").showIf(!d),b("#submit_from_external_tool_form button[type=submit]").attr("disabled",!d),i.dialog("close")}).dialog({width:"auto",height:"auto",title:h,close:function(){i.remove()}})})})