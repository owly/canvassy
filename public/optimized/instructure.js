define(["INST","i18n!instructure","jquery","underscore","compiled/userSettings","str/htmlEscape","wikiSidebar","instructure_helper","jqueryui/draggable","jquery.ajaxJSON","jquery.doc_previews","jquery.dropdownList","jquery.google-analytics","jquery.instructure_date_and_time","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.keycodes","jquery.loadingImg","compiled/jquery.rails_flash_notifications","jquery.templateData","compiled/jquery/fixDialogButtons","compiled/jquery/mediaCommentThumbnail","tinymce.editor_box","vendor/date","vendor/jquery.ba-tinypubsub","jqueryui/accordion","jqueryui/resizable","jqueryui/sortable","jqueryui/tabs","compiled/behaviors/trackEvent","compiled/badge_counts","vendor/scribd.view","vendor/jquery.placeholder"],function(a,b,c,d,e,f,g){c.trackEvent("Route",location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/");var h=function(a){ENV.AUTHENTICITY_TOKEN&&a.setRequestHeader("X-CSRF-Token",ENV.AUTHENTICITY_TOKEN)};c.ajaxPrefilter(function(a,b,d){a.crossDomain||h(d);var e=a.url,f=(new Date).getTime();d.done(function(a,b,d){var g=(new Date).getTime()-f;if(g>1e3){var h='{"requestingPage": "'+window.location+'," "status": "'+b+'", "X-Request-Context-Id" : "'+d.getResponseHeader("X-Request-Context-Id")+'", "X-Runtime": '+d.getResponseHeader("X-Runtime")+"}";c.trackEvent("XHRs",e,h,g)}})}),c(function(){function k(){window.clearTimeout(j),i.find(".menu-item").removeClass("hover hover-pending")}function l(){return h.filter(".hover-pending").removeClass("hover-pending"),j=window.setTimeout(k,400),!1}function m(a){var b=h.filter(".hover").length>0;k();var d=c(this);return d.addClass("hover-pending"),b&&d.addClass("hover"),setTimeout(function(){d.hasClass("hover-pending")&&d.addClass("hover")},300),c.publish("menu/hovered",d),!1}function q(){var a=500,b=n.find("li:visible:first").height()*1.5;o=o||n.find(".ellipsible"),o.css("maxWidth",""),o.ifExists(function(){for(var c=0;n.height()>b&&c<20;c++)p||(p=!0,o.addClass("ellipsis")),o.css("maxWidth",a-=20)})}function s(){var a=c("#content");c(".user_content:not(.enhanced):visible").addClass("unenhanced"),c(".user_content.unenhanced:visible").each(function(){var b=c(this);b.find("img").css("maxWidth",Math.min(a.width(),b.width())),b.data("unenhanced_content_html",b.html())}).find(".enhanceable_content").show().filter(".dialog").each(function(){var a=c(this);a.hide(),a.closest(".user_content").find("a[href='#"+a.attr("id")+"']").click(function(b){b.preventDefault(),a.dialog()})}).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".accordion").accordion().end().filter(".tabs").each(function(){c(this).tabs()}).end().end().find("a:not(.not_external, .external):external").each(function(){c(this).not(":has(img)").addClass("external").html("<span>"+c(this).html()+"</span>").attr("target","_blank").attr("aria-label",f(b.t("titles.external_link","Links to an external site."))).append('<span class="ui-icon ui-icon-extlink ui-icon-inline" title="'+f(b.t("titles.external_link","Links to an external site."))+'"/>')}).end().find("a.instructure_file_link").each(function(){var a=c(this),d=c("<span class='instructure_file_link_holder link_holder'/>");a.removeClass("instructure_file_link").before(d).appendTo(d),a.attr("target")!="_blank"&&d.append("<a href='"+a.attr("href")+"' target='_blank' title='"+f(b.t("titles.view_in_new_window","View in a new window"))+"' style='padding-left: 5px;'><img src='/images/popout.png'/></a>")}),c.filePreviewsEnabled()&&c("a.instructure_scribd_file").not(".inline_disabled").each(function(){var a=c(this);if(c.trim(a.text())){var d=c("<span class='instructure_scribd_file_holder link_holder'/>"),e=c("<a class='scribd_file_preview_link' href='"+a.attr("href")+"' title='"+f(b.t("titles.preview_document","Preview the document"))+"' style='padding-left: 5px;'><img src='/images/preview.png'/></a>");a.removeClass("instructure_scribd_file").before(d).appendTo(d),d.append(e),a.hasClass("auto_open")&&e.click()}}),c(".user_content.unenhanced a").find("img.media_comment_thumbnail").each(function(){c(this).closest("a").addClass("instructure_inline_media_comment")}).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",!0).end().not(".youtubed").each(function(){var a=c(this),d=a.attr("href"),e=c.youTubeID(d||"");if(!a.hasClass("inline_disabled")&&e){var g=c('<a href="'+d+'" class="youtubed"><img src="/images/play_overlay.png" class="media_comment_thumbnail" style="background-image: url(//img.youtube.com/vi/'+e+'/2.jpg)"/></a>').click(function(a){a.preventDefault();var d=c("<span class='youtube_holder' style='display: block;'><object width='425' height='344'><param name='wmode' value='opaque'></param><param name='movie' value='//www.youtube.com/v/"+e+"&autoplay=1&hl=en_US&fs=1&'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='//www.youtube.com/v/"+e+"&autoplay=1&hl=en_US&fs=1&' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='425' height='344' wmode='opaque'></embed></object><br/><a href='#' style='font-size: 0.8em;' class='hide_youtube_embed_link'>"+f(b.t("links.minimize_youtube_video","Minimize Video"))+"</a></span>");d.find(".hide_youtube_embed_link").click(function(a){a.preventDefault(),d.remove(),g.show(),c.trackEvent("hide_embedded_content","hide_you_tube")}),c(this).after(d).hide()});c.trackEvent("show_embedded_content","show_you_tube"),a.addClass("youtubed").after(g)}}),c(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced"),setTimeout(function(){c(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)}function w(){v=c(".time_ago_date:visible").toArray(),x()}function x(){var a=v.shift();if(a){var d=c(a),e=d.data("original_date")||"",f=d.data("parsed_date")||(e?Date.parse(e.replace(/ (at|by)/,"")):Date.parse((d.text()||"").replace(/ (at|by)/,"")));if(f){var g=new Date;g.setDate(g.getDate()+1);if(!e&&f>g&&f-g>36e5){var h=f.getUTCFullYear().toString();f>g&&f.getUTCFullYear()==g.getUTCFullYear()&&!d.text().match(h)&&f.setUTCFullYear(f.getUTCFullYear()-1)}var i=g.getTimezoneOffset()-u;isNaN(i)&&(i=0);var j=g-f+i*60*1e3;d.data("original_date",f.toString("MMM d, yyyy h:mmtt")),d.data("parsed_date",f);var k=f.toString("MMM d, yyyy")+f.toString(" h:mmtt").toLowerCase(),l=k;if(j<864e5)if(j<36e5)if(j<6e4)l=b.t("#time.less_than_a_minute_ago","less than a minute ago");else{var m=parseInt(j/6e4,10);l=b.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:m})}else{var n=parseInt(j/36e5,10);l=b.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:n})}d.text(l),d.attr("title",k)}setTimeout(x,1)}else setTimeout(w,6e4)}function A(a){c("#wizard_spacer_box").height(z.height()||0).showIf(a==="show")}window._earlyClick&&(document.removeEventListener?document.removeEventListener("click",_earlyClick,!1):document.detachEvent("onclick",_earlyClick),_earlyClick.clicks&&setTimeout(function(){c.each(d.uniq(_earlyClick.clicks),function(){var a=c.Event("click");a.preventDefault(),c(this).trigger(a)})},1)),c("#main:not(.already_sized)").css({minHeight:Math.max(c("#left_side").height(),parseInt((c("#main").css("minHeight")||"").replace("px",""),10))});var h=c(".menu-item"),i=c("#menu"),j;i.delegate(".menu-item","mouseenter focusin",m).delegate(".menu-item","mouseleave focusout",l),a.browser.ie7&&c(".menu-item-drop").width(function(){var a=c(this).find(".menu-item-drop-column");return a.length*a.css("width").replace("px","")}),h.live("touchstart",function(){if(!c(this).hasClass("hover"))return m.call(this,event)}),c(document).bind("touchstart",function(a){c(a.target).closest(".menu-item").length||l()});var n=c("#breadcrumbs"),o,p=!1;q(),c(window).resize(q),c("#ajax_authenticity_token").ifExists(function(){this.text()&&c("input[name='authenticity_token']").val(this.text())});var r;c(document).keypress(function(a){var d=a.which=="44"||a.which=="63";d&&!c(a.target).is(":input")&&(c("#keyboard_navigation").is(":visible")?(c("#keyboard_navigation").dialog("close"),r&&c(r).focus()):(r=document.activeElement,c("#keyboard_navigation").dialog({title:b.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",open:function(){c(".navigation_list:first").focus()},close:function(){c("li",this).attr("tabindex",""),r&&c(r).focus()}})))}),c("#switched_role_type").ifExists(function(){var a=c(this).attr("class"),d=c("<img/>"),e=null;switch(c(this).data("role")){case"TeacherEnrollment":e=b.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.");break;case"StudentEnrollment":e=b.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.");break;case"TaEnrollment":e=b.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.");break;case"ObserverEnrollment":e=b.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.");break;case"DesignerEnrollment":e=b.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.");break;default:e=b.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}d.attr("src","/images/warning.png").attr("title",e).css({paddingRight:2,width:12,height:12}),c("#crumb_"+a).find("a").prepend(d)}),c("a.show_quoted_text_link").live("click",function(a){var b=c(this).parents(".quoted_text_holder").children(".quoted_text");b.length>0&&(a.preventDefault(),b.show(),c(this).hide())}),c(".custom_search_results_link").click(function(a){a.preventDefault();var d=c("#custom_search_results_dialog");d.dialog({title:b.t("titles.search_for_open_resources","Search for Open Resources"),width:600,height:400});var e=d.data("searchControl");e&&e.execute(c("title").text())}),c("a.equella_content_link").live("click",function(a){a.preventDefault();var d=c("#equella_preview_dialog");if(!d.length){d=c("<div/>"),d.attr("id","equella_preview_dialog").hide(),d.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+f(b.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>"),d.find("h2").text(c(this).attr("title")||c(this).text()||b.t("titles.equella_content_preview","Equella Content Preview"));var e=d.find("iframe");setTimeout(function(){e.css("background","#fff")},2500),c("body").append(d),d.dialog({autoOpen:!1,width:"auto",resizable:!1,title:b.t("titles.equella_content_preview","Equella Content Preview"),close:function(){d.find("iframe").attr("src","about:blank")}})}d.find(".original_link").attr("href",c(this).attr("href")),d.dialog("close").dialog("open"),d.find("iframe").attr("src",c(this).attr("href"))}),c(".dialog_opener[aria-controls]:not(.user_content *)").live("click",function(a){var b=this;c("#"+c(this).attr("aria-controls")).ifExists(function(d){a.preventDefault(),d.data("dialog")||(d.dialog(c.extend({autoOpen:!1,modal:!0},c(b).data("dialogOpts"))),d.fixDialogButtons()),d.dialog("open")})}),c.filePreviewsEnabled()?c("a.scribd_file_preview_link").live("click",function(a){a.preventDefault();var d=c(this).loadingImage({image_size:"small"}).hide();c.ajaxJSON(d.attr("href").replace(/\/download.*/,""),"GET",{},function(a){var e=a&&a.attachment,g=e&&e.scribd_doc&&e.scribd_doc.attributes;d.loadingImage("remove");if(e&&(g||c.isPreviewable(e.content_type,"google"))){var h=c("<span><br /></span>").insertAfter(d.parents(".link_holder:last")).loadDocPreview({scribd_doc_id:g&&g.doc_id,scribd_access_key:g&&g.access_key,mimeType:e.content_type,public_url:e.authenticated_s3_url}).append(c('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+f(b.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(function(a){a.preventDefault(),d.show(),h.remove(),c.trackEvent("hide_embedded_content","hide_file_preview")}));c.trackEvent("show_embedded_content","show_file_preview")}},function(){d.loadingImage("remove").hide()})}):c("a.scribd_file_preview_link").live("click",function(a){a.preventDefault(),alert(b.t("alerts.file_previews_disabled","File previews have been disabled for this Canvas site"))});var t;c.subscribe("userContent/change",function(){clearTimeout(t),t=setTimeout(s,50)}),c(document).bind("user_content_change",s),setInterval(s,15e3),setTimeout(s,1e3),c(".zone_cached_datetime").each(function(){if(c(this).attr("title")){var a=c.parseFromISO(c(this).attr("title"));a.timestamp&&c(this).text(a.datetime_formatted)}}),c(".show_sub_messages_link").click(function(a){a.preventDefault(),c(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message"),c(this).parents(".communication_sub_message").remove()}),c(".show_comments_link").click(function(a){a.preventDefault(),c(this).closest("ul").find("li").show(),c(this).closest("li").remove()}),c(".communication_message .message_short .read_more_link").click(function(a){a.preventDefault(),c(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()}),c(".communication_message .close_notification_link").live("click",function(a){a.preventDefault();var b=c(this).parents(".communication_message");b.confirmDelete({url:c(this).attr("rel"),noMessage:!0,success:function(){c(this).slideUp(function(){c(this).remove()})}})}),c(".communication_message .add_entry_link").click(function(a){a.preventDefault();var b=c(this).parents(".communication_message"),e=b.find(".reply_message").hide(),f=b.find(".communication_sub_message.blank").clone(!0).removeClass("blank");e.before(f.show());var g=d.uniqueId("textarea_");f.find("textarea.rich_text").attr("id",g),c(document).triggerHandler("richTextStart",c("#"+g)),f.find("textarea:first").focus().select()}),c(document).bind("richTextStart",function(a,b){if(!b||b.length===0)return;b=c(b);if(!b||b.length===0)return;b.editorBox(),b.editorBox("focus",!0),g&&(g.attachToEditor(b),c("#sidebar_content").hide(),g.show())}).bind("richTextEnd",function(a,b){if(!b||b.length===0)return;b=c(b);if(!b||b.length===0)return;b.editorBox("destroy"),g&&(c("#sidebar_content").show(),g.hide())}),c(".cant_record_link").click(function(a){a.preventDefault(),c("#cant_record_dialog").dialog({modal:!0,title:b.t("titles.cant_create_recordings","Can't Create Recordings?"),width:400})}),c(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click(function(a){a.preventDefault(),c(this).parents(".communication_message").find(".content .users_list").slideToggle()}),c(".communication_message .delete_message_link").click(function(a){a.preventDefault(),c(this).parents(".communication_message").confirmDelete({noMessage:!0,url:c(this).attr("href"),success:function(){c(this).slideUp()}})}),c(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit:function(a){c(this).find("button").attr("disabled",!0),c(this).find(".submit_button").text(b.t("status.posting_message","Posting Message...")),c(this).loadingImage()},success:function(a){c(this).loadingImage("remove");var b=c(this).parents(".communication_sub_message"),d=b.parents(".communication_message");message_data=a.messages[0],b.fillTemplateData({data:{post_date:c.parseFromISO(message_data.created_at).datetime_formatted,message:message_data.body},htmlValues:["message"]}),b.find(".message").show(),c(this).remove(),d.find(".reply_message").show(),c.flashMessage("Message Sent!"),c(document).triggerHandler("user_content_change"),location.pathname==="/"&&c.trackEvent("dashboard_comment","create")},error:function(a){c(this).loadingImage("remove"),c(this).find("button").attr("disabled",!1),c(this).find(".submit_button").text("Post Failed, Try Again"),c(this).formErrors(a)}}),c(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit:function(a){c(this).find("button").attr("disabled",!0),c(this).find(".submit_button").text(b.t("status.posting_message","Posting Message...")),c(this).loadingImage()},success:function(a){c(this).loadingImage("remove");var b=c(this).parents(".communication_sub_message");if(c(this).hasClass("submission_comment_form")){var d=c(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id,e=null;for(var f in a){var g=a[f].submission;g.user_id==d&&(e=g)}if(e){var h=e.submission_comments[e.submission_comments.length-1].submission_comment;h.post_date=c.parseFromISO(h.created_at).datetime_formatted,h.message=h.formatted_body||h.comment,b.fillTemplateData({data:h,htmlValues:["message"]})}}else{var i=a.discussion_entry;i.post_date=c.parseFromISO(i.created_at).datetime_formatted,b.find(".content > .message_html").val(i.message),b.fillTemplateData({data:i,htmlValues:["message"]})}b.find(".message").show(),b.find(".user_content").removeClass("enhanced"),b.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show(),c(document).triggerHandler("richTextEnd",c(this).find("textarea.rich_text")),c(document).triggerHandler("user_content_change"),c(this).remove(),location.href.match(/dashboard/)&&c.trackEvent("dashboard_comment","create")},error:function(a){c(this).loadingImage("remove"),c(this).find("button").attr("disabled",!1),c(this).find(".submit_button").text(b.t("errors.posting_message_failed","Post Failed, Try Again")),c(this).formErrors(a)}}),c(".communication_sub_message form .cancel_button").click(function(){var a=c(this).parents(".communication_sub_message"),b=c(this).parents(".communication_message");c(document).triggerHandler("richTextEnd",a.find("textarea.rich_text")),a.remove(),b.find(".reply_message").show()}),c(".communication_message,.communication_sub_message").bind("focusin mouseenter",function(){c(this).addClass("communication_message_hover")}).bind("focusout mouseleave",function(){c(this).removeClass("communication_message_hover")}),c(".communication_sub_message .more_options_reply_link").click(function(a){a.preventDefault();var b=c(this).parents("form"),d=null;b.hasClass("submission_comment_form")?d={comment:b.find("textarea:visible:first").val()||""}:d={message:b.find("textarea:visible:first").val()||""},location.href=c(this).attr("href")+"?message="+encodeURIComponent(d.message)}),c(".communication_message.new_activity_message").ifExists(function(){this.find(".message_type img").click(function(){var a=c(this),b=c.trim(a.attr("class"));a.parents(".message_type").find("img").removeClass("selected"),a.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(a.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+b+"_form").show().find(".context_select").change()}),this.find(".context_select").change(function(){var a=c(this),b=a.val(),d=a.parents(".communication_message"),e=d.find("form");e.attr("action",d.find("."+b+"_form_url").attr("href")),e.data("context_name",this.options[this.selectedIndex].text),e.data("context_code",b),d.find(".roster_list").hide().find(":checkbox").each(function(){c(this).attr("checked",!1)}),d.find("."+b+"_roster_list").show()}).triggerHandler("change"),this.find(".cancel_button").click(function(a){c(this).parents(".communication_message").hide().prev(".new_activity_message").show()}),this.find(".new_activity_message_link").click(function(a){a.preventDefault(),c(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()}),this.find("form.message_form").formSubmit({beforeSubmit:function(a){c("button").attr("disabled",!0),c("button.submit_button").text(b.t("status.posting_message","Posting Message..."))},success:function(a){c("button").attr("disabled",!1),c("button.submit_button").text("Post Message");var b=c(this).data("context_code")||"",d=c(this).data("context_name")||"";if(c(this).hasClass("discussion_topic_form")){var e=a.discussion_topic;e.context_code=d,e.user_name=c("#identity .user_name").text(),e.post_date=c.parseFromISO(e.created_at).datetime_formatted,e.topic_id=e.id;var f=c(this).parents(".communication_message").find(".template"),g=f.find(".communication_message").clone(!0);g.find(".header .title,.behavior_content .less_important a").attr("href",f.find("."+b+"_topic_url").attr("href")),g.find(".add_entry_link").attr("href",f.find("."+b+"_topics_url").attr("href")),g.find(".user_name").attr("href",f.find("."+b+"_user_url").attr("href")),g.find(".topic_assignment_link,.topic_assignment_url").attr("href",f.find("."+b+"_assignment_url").attr("href")),g.find(".attachment_name,.topic_attachment_url").attr("href",f.find("."+b+"_attachment_url").attr("href"));var h={discussion_topic_id:e.id};g.fillTemplateData({data:e,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"}),g.find(".subcontent").fillTemplateData({data:h,hrefValues:["topic_id","user_id"]}),g.find(".subcontent form").attr("action",f.find("."+b+"_entries_url").attr("href")),g.fillFormData(h,{object_name:"discussion_entry"}),c(this).parents(".communication_message").after(g.hide()),g.slideDown(),c(this).parents(".communication_message").slideUp(),c(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else c(this).hasClass("announcement_form")||location.reload()},error:function(a){c("button").attr("disabled",!1),c("button.submit_button").text(b.t("errors.posting_message_failed","Post Failed, Try Again")),c(this).formErrors(a)}})}),c("#topic_list .show_all_messages_link").show().click(function(a){a.preventDefault(),c("#topic_list .topic_message").show(),c(this).hide()});var u=parseInt(c("#time_zone_offset").text(),10),v=[];setTimeout(w,100);var y=c("#sequence_footer .sequence_details_url").filter(":last").attr("href");y&&c.ajaxJSON(y,"GET",{},function(a){var d=c("#sequence_footer");a.current_item&&(c("#sequence_details .current").fillTemplateData({data:a.current_item.content_tag}),c.each({previous:".prev",next:".next"},function(e,f){var g=d.find(f);if(a[e+"_item"]||a[e+"_module"]){var h=a[e+"_item"]&&a[e+"_item"].content_tag||a[e+"_module"]&&a[e+"_module"].context_module;a[e+"_item"]||(h.title=h.title||h.name,h.workflow_state==="unpublished"&&(h.title+=" ("+b.t("draft","Draft")+")"),h.text=e=="previous"?b.t("buttons.previous_module","Previous Module"):b.t("buttons.next_module","Next Module"),g.addClass("module_button")),g.fillTemplateData({data:h}),a[e+"_item"]?g.attr("href",c.replaceTags(d.find(".module_item_url").attr("href"),"id",h.id)):g.attr("href",c.replaceTags(d.find(".module_url").attr("href"),"id",h.id)+"/items/"+(e==="previous"?"last":"first"))}else g.hide()}),d.show(),c(window).resize())});var z=c("#wizard_box"),B=window.location.pathname;c(".close_wizard_link").click(function(a){a.preventDefault(),e.set("hide_wizard_"+B,!0),z.slideUp("fast",function(){c(".wizard_popup_link").slideDown("fast"),c(".wizard_popup_link").focus(),A("hide")})}),c(".wizard_popup_link").click(function(a){a.preventDefault(),c(".wizard_popup_link").slideUp("fast"),z.slideDown("fast",function(){z.triggerHandler("wizard_opened"),z.focus(),c([document,window]).triggerHandler("scroll")})}),z.ifExists(function(a){a.bind("wizard_opened",function(){var b=a.find(".wizard_options"),c=b.height();b.height(c),a.find(".wizard_details").css({maxHeight:c-5,overflow:"auto"}),A("show")}),a.find(".wizard_options_list .option").click(function(b){var d=c(this),e=c(b.target).closest("a");if(e.length>0&&e.attr("href")!="#")return;b.preventDefault(),d.parents(".wizard_options_list").find(".option.selected").removeClass("selected"),d.addClass("selected");var f=a.find(".wizard_details"),g=d.getTemplateData({textValues:["header"]});g.link=g.header,f.fillTemplateData({data:g}),f.find(".details").remove(),f.find(".header").after(d.find(".details").clone(!0).show());var h=d.find(".header").attr("href");h!="#"?f.find(".link").show().attr("href",h):f.find(".link").hide(),f.hide().fadeIn("fast")}),setTimeout(function(){e.get("hide_wizard_"+B)||c(".wizard_popup_link.auto_open:first").click()},500)}),c("#right-side").delegate(".more_link","click",function(a){var b=c(this),d=b.parents("ul").children().show();return b.closest("li").remove(),a.screenX===0&&d.first().find(":tabbable:first").focus(),!1}),c("#right-side, #topic_list").delegate(".disable_item_link","click",function(a){function g(a){d.confirmDelete({url:a,noMessage:!0,success:function(){c(this).slideUp(function(){c(this).remove()})}})}a.preventDefault();var d=c(this).parents("li, div.topic_message"),e=c(this).data("api-href");c(this).hasClass("grading")?(options={},options['<span class="ui-icon ui-icon-trash">&nbsp;</span> '+f(b.t("ignore_forever","Ignore Forever"))]=function(){g(e+"?permanent=1")},options['<span class="ui-icon ui-icon-star">&nbsp;</span> '+f(b.t("ignore_until_new_submission","Ignore Until New Submission"))]=function(){g(e)},c(this).dropdownList({options:options})):g(e+"?permanent=1")}),setTimeout(function(){c("#content a:external,#content a.explicit_external_link").each(function(){c(this).not(":has(img)").not(".not_external").addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+c(this).html()+"</span>").attr("target","_blank").append('<span class="ui-icon ui-icon-extlink ui-icon-inline" title="'+f(b.t("titles.external_link","Links to an external site."))+'"/>')})},2e3)}),c("input[placeholder], textarea[placeholder]").placeholder()})