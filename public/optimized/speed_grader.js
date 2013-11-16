define(["INST","i18n!gradebook","jquery","compiled/userSettings","str/htmlEscape","rubric_assessment","jst/_turnitinInfo","jst/_turnitinScore","ajax_errors","jqueryui/draggable","jquery.ajaxJSON","jquery.instructure_forms","jquery.doc_previews","jquery.instructure_date_and_time","jqueryui/dialog","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.keycodes","jquery.loadingImg","jquery.templateData","media_comments","compiled/jquery/mediaCommentThumbnail","vendor/jquery.ba-hashchange","vendor/jquery.elastic","vendor/jquery.getScrollbarWidth","vendor/jquery.scrollTo","vendor/jquery.spin","vendor/scribd.view","vendor/spin","vendor/ui.selectmenu"],function(a,b,c,d,e,f,g,h){function tb(){jsonData.studentsWithSubmissions=jsonData.context.students,jsonData.studentMap={},c.each(jsonData.studentsWithSubmissions,function(a,b){this.section_ids=c.map(c.grep(jsonData.context.enrollments,function(a,c){return a.user_id===b.id}),function(a){return a.course_section_id}),this.submission=c.grep(jsonData.submissions,function(a,c){return a.user_id===b.id})[0],this.rubric_assessments=c.grep(visibleRubricAssessments,function(a,c){return a.user_id===b.id}),jsonData.studentMap[b.id]=b}),qb=d.contextGet("grading_show_only_section");if(qb){var a=c.grep(jsonData.studentsWithSubmissions,function(a,b){return c.inArray(qb,a.section_ids)!=-1});a.length?jsonData.studentsWithSubmissions=a:(alert(b.t("alerts.no_students_in_section","Could not find any students in that section, falling back to showing all sections.")),d.contextRemove("grading_show_only_section"),window.location.reload())}var e=sb.shouldHideStudentNames();e?jsonData.studentsWithSubmissions.sort(function(a,b){return(a&&a.submission&&a.submission.id||Number.MAX_VALUE)-(b&&b.submission&&b.submission.id||Number.MAX_VALUE)}):d.get("eg_sort_by")=="submitted_at"?jsonData.studentsWithSubmissions.sort(function(a,b){return(a&&a.submission&&a.submission.submitted_at&&c.parseFromISO(a.submission.submitted_at).timestamp||Number.MAX_VALUE)-(b&&b.submission&&b.submission.submitted_at&&c.parseFromISO(b.submission.submitted_at).timestamp||Number.MAX_VALUE)}):d.get("eg_sort_by")=="submission_status"&&jsonData.studentsWithSubmissions.sort(function(a,b){var c={not_graded:1,resubmitted:2,not_submitted:3,graded:4},d=ub(a.submission),e=ub(b.submission);return c[d]-c[e]})}function ub(a){return a&&a.workflow_state!="unsubmitted"&&(a.submitted_at||typeof a.grade!="undefined")?typeof a.grade=="undefined"||a.grade===null||a.workflow_state=="pending_review"?"not_graded":a.grade_matches_current_submission?"graded":"resubmitted":"not_submitted"}function vb(a){var d=ub(a.submission),e=d.replace("_"," ");return d==="resubmitted"&&(e=b.t("graded_then_resubmitted","graded, then resubmitted (%{when})",{when:c.parseFromISO(a.submission.submitted_at).datetime_formatted})),{raw:d,formatted:e}}function wb(){var a=sb.shouldHideStudentNames();c("#hide_student_names").attr("checked",a);var f=c.map(jsonData.studentsWithSubmissions,function(c,d){var f=e(c.name),g=vb(c);return a&&(f=b.t("nth_student","Student %{n}",{n:d+1})),'<option value="'+c.id+'" class="'+g.raw+'">'+f+" ---- "+g.formatted+"</option>"}).join("");kb=c("<select id='students_selectmenu'>"+f+"</select>").appendTo("#combo_box_container").selectmenu({style:"dropdown",format:function(a){var b=a.split(" ---- ");return'<span class="ui-selectmenu-item-header">'+e(b[0])+'</span><span class="ui-selectmenu-item-footer">'+b[1]+"</span>"},icons:[{find:".graded"},{find:".not_graded"},{find:".not_submitted"},{find:".resubmitted"}]}).change(function(a){Eb.handleStudentChanged()});if(jsonData.context.active_course_sections.length&&jsonData.context.active_course_sections.length>1){var g=kb.data("selectmenu").list,h=c("#section-menu");h.find("ul").append(c.map(jsonData.context.active_course_sections,function(a,b){return'<li><a class="section_'+a.id+'" data-section-id="'+a.id+'" href="#">'+a.name+"</a></li>"}).join("")),h.insertBefore(g).bind("mouseenter mouseleave",function(a){c(this).toggleClass("ui-selectmenu-item-selected ui-selectmenu-item-focus ui-state-hover",a.type=="mouseenter").find("ul").toggle(a.type=="mouseenter")}).find("ul").hide().menu().delegate("a","click mousedown",function(){d[c(this).data("section-id")=="all"?"contextRemove":"contextSet"]("grading_show_only_section",c(this).data("section-id")),window.location.reload()});if(qb){var i=c.map(jsonData.context.active_course_sections,function(a){if(a.id==qb)return a.name}).join(", ");c("#section_currently_showing").text(i),h.find("ul li a").removeClass("selected").filter("[data-section-id="+qb+"]").addClass("selected")}kb.selectmenu("option","open",function(){g.find("li:first").css("margin-top",g.find("li").height()+"px"),h.show().css({left:g.css("left"),top:g.css("top"),width:g.width()-(g.hasScrollbar()&&c.getScrollbarWidth()),"z-index":Number(g.css("z-index"))+1})}).selectmenu("option","close",function(){h.hide()})}}function xb(){function a(){var a=document.createElement("input"),b=("onwebkitspeechchange"in a||"speech"in a)&&!navigator.appVersion.match(/Chrome\/10/);return b}c("#add_a_comment textarea").elastic({callback:Eb.resizeFullHeight}),c(".media_comment_link").click(function(a){a.preventDefault(),c("#media_media_recording").show().find(".media_recording").mediaComment("create","any",function(a,b){c("#media_media_recording").data("comment_id",a).data("comment_type",b),Eb.handleCommentFormSubmit()},function(){Eb.revertFromFormSubmit()},!0),Eb.resizeFullHeight()}),c("#media_recorder_container a").live("click",yb),a()&&c(".speech_recognition_link").click(function(){return c('<input style="font-size: 30px;" speech x-webkit-speech />').dialog({title:b.t("titles.click_to_record","Click the mic to record your comments"),open:function(){c(this).width(100)}}).bind("webkitspeechchange",function(){A.val(c(this).val()),c(this).dialog("close").remove()}),!1}).closest("li").show()}function yb(){c("#media_media_recording").hide().removeData("comment_id").removeData("comment_type"),Eb.resizeFullHeight()}function zb(a){return!a||a.assessor_id===ENV.RUBRIC_ASSESSMENT.assessor_id||ENV.RUBRIC_ASSESSMENT.assessment_type=="grading"&&a.assessment_type=="grading"?!0:!1}function Ab(){return c.grep(Eb.currentStudent.rubric_assessments,function(a,b){return a.id==O.val()})[0]}function Bb(){c("#rubric_summary_container .button-container").appendTo("#rubric_assessments_list_and_edit_button_holder").find(".edit").text(b.t("edit_view_rubric","View Rubric")),c(".toggle_full_rubric, .hide_rubric_link").click(function(a){a.preventDefault(),Eb.toggleFullRubric()}),O.change(function(){var a=Ab();f.populateRubricSummary(c("#rubric_summary_holder .rubric_summary"),a,zb(a)),Eb.resizeFullHeight()}),hb.draggable({axis:"x",cursor:"crosshair",scroll:!1,containment:"#left_side",snap:"#full_width_container",appendTo:"#full_width_container",start:function(){hb.draggable("option","minWidth",n.width())},helper:function(){return hb.clone().addClass("clone")},drag:function(a,b){var c=b.offset,d=i.width();gb.width(d-c.left),hb.css("left","0"),Eb.resizeFullHeight()},stop:function(a,b){a.stopImmediatePropagation()}}),c(".save_rubric_button").click(function(){var a=c(this).parents("#rubric_holder").find(".rubric"),b=f.assessmentData(a),d=c(".update_rubric_assessment_url").attr("href"),e="POST";Eb.toggleFullRubric(),c(".rubric_summary").loadingImage(),c.ajaxJSON(d,e,b,function(b){var d=!1;b&&b.rubric_association&&(f.updateRubricAssociation(a,b.rubric_association),delete b.rubric_association);for(var e in Eb.currentStudent.rubric_assessments)if(b.id===Eb.currentStudent.rubric_assessments[e].id){c.extend(!0,Eb.currentStudent.rubric_assessments[e],b),d=!0;continue}d||Eb.currentStudent.rubric_assessments.push(b),Eb.setOrUpdateSubmission(b.artifact),c.each(b.related_group_submissions_and_assessments,function(a,d){var e=Eb.setOrUpdateSubmission(b.artifact);e.rubric_assessments=c.map(d.rubric_assessments,function(a){return a.rubric_assessment})}),c(".rubric_summary").loadingImage("remove"),Eb.showGrade(),Eb.showDiscussion(),Eb.showRubric(),Eb.updateStatsInHeader()})})}function Cb(){i.keycodes({keyCodes:"j k p n c r g",ignore:"input, textarea, embed, object"},function(a){a.preventDefault(),a.stopPropagation(),a.keyString=="j"||a.keyString=="p"?Eb.prev():a.keyString=="k"||a.keyString=="n"?Eb.next():a.keyString=="f"||a.keyString=="c"?A.focus():a.keyString=="g"?S.focus():a.keyString=="r"&&Eb.toggleFullRubric()})}function Db(){var b=i.height(),d,e,f=n.offset().top,g=p.height(),h=Math.max(F,b)-f-g,j=[{element:ab,data:{newHeight:0}},{element:P,data:{newHeight:0}},{element:u,data:{newHeight:0}}],k=c.grep(j,function(a,b){return a&&a.element.is(":visible")});gb.css({maxHeight:h-50,overflow:"auto"}),c.each(k,function(){this.data.autoHeight=this.element.height("auto").height(),this.element.height(0)});var l=h-t.height("auto").height()-y.outerHeight();s.height(h),d=e=l;var m=1,o;if(d>0)while(e>0){o=!0;var q=1e7,r=null;c.each(k,function(){this.data.newHeight<q&&this.data.newHeight<this.data.autoHeight&&(r=this,q=this.data.newHeight)}),r&&(r.data.newHeight=q+m,e-=m,o=!1);if(o)break}else{var v,w;while(e<0){o=!0,v=0,w=null,c.each(k,function(){this.data.newHeight>30>v&&this.data.newHeight>=this.data.autoHeight&&(w=this,v=this.data.newHeight)}),w&&(w.data.newHeight=v-m,e+=m,o=!1);if(o)break}}c.each(k,function(){this.element.height(this.data.newHeight)}),e>0&&u.height(b-Math.floor(u.offset().top)-y.outerHeight()),!a.browser.ff&&u.height()>100&&u.scrollTop(1e6)}window.jsonData={},c.ajaxJSON(window.location.pathname+".json"+window.location.search,"GET",{},function(a){jsonData=a,c(Eb.jsonReady)});var i=c(window),j=c("body"),k=c("#full_width_container"),l=c("#left_side"),m=c("#resize_overlay"),n=c("#right_side"),o=c("#width_resizer"),p=c("#fixed_bottom"),q=c("#gradebook_header"),r=c("#assignment_url").attr("href"),s=c(".full_height"),t=c("#rightside_inner"),u=c("#comments"),v=c("#comment_blank").removeAttr("id").detach(),w=c("#comment_attachment_blank").removeAttr("id").detach(),x=c("#comment_media_blank").removeAttr("id").detach(),y=c("#add_a_comment"),z=y.find("button"),A=y.find("textarea"),B=c("#group_comment_wrapper"),C=c("#comment_attachment_input_blank").detach(),D=1,E=c("#add_attachment"),F=500,G=c("#submissions_container"),H=c("#iframe_holder"),I=c("#avatar_image"),J=c("#x_of_x_students span"),K=c("#x_of_x_graded span:first"),L=c("#average_score"),M=c("#this_student_does_not_have_a_submission").hide(),N=c("#this_student_has_a_submission").hide(),O=c("#rubric_assessments_select"),P=c("#rubric_summary_container"),Q=c("#rubric_holder"),R=c("#grade_container"),S=R.find("input, select"),T=R.find(".score"),U=c("#average_score_wrapper"),V=c("#submission_details"),W=c("#single_submission"),X=c("#single_submission_submitted_at"),Y=c("#multiple_submissions"),Z=c("#submission_late_notice"),$=c("#submission_not_newest_notice"),_=c("#submission_files_container"),ab=c("#submission_files_list"),bb=c("#submission_file_hidden").removeAttr("id").detach(),cb=c("#submission_to_view"),db=c("#assignment_submission_url"),eb=c("#assignment_submission_turnitin_report_url"),fb=c("#assignment_submission_resubmit_to_turnitin_url"),gb=c("#rubric_full"),hb=c("#rubric_full_resizer_handle"),ib=c("#mute_link"),jb=c("#no_annotation_warning"),kb=null,lb=/^(image|html|code)$/,mb=null,nb=null,ob={},pb={},qb,rb,sb;sb={getParam:function(a){var b=new RegExp(a+"/([^/]+)"),c=new RegExp(a+"=([^&]+)"),d;return d=window.location.pathname.match(b)||window.location.search.match(c),d?d[1]:!1},shouldHideStudentNames:function(){var a=d.get("eg_hide_student_names");return a===!0||a==="true"||window.anonymousAssignment}},rb={elements:{mute:{icon:c("#mute_link .ui-icon"),label:c("#mute_link .label"),link:c("#mute_link"),modal:c("#mute_dialog")},nav:q.find(".prev, .next"),spinner:new Spinner({length:2,radius:3,trail:25,width:1}),settings:{form:c("#settings_form"),link:c("#settings_link")}},courseId:sb.getParam("courses"),assignmentId:sb.getParam("assignment_id"),init:function(){return this.muted=this.elements.mute.link.data("muted"),this.addEvents(),this.createModals(),this.addSpinner(),this},addEvents:function(){this.elements.nav.click(c.proxy(this.toAssignment,this)),this.elements.mute.link.click(c.proxy(this.onMuteClick,this)),this.elements.settings.form.submit(c.proxy(this.submitForm,this)),this.elements.settings.link.click(c.proxy(this.showSettingsModal,this))},addSpinner:function(){this.elements.mute.link.append(this.elements.spinner.el)},createModals:function(){this.elements.settings.form.dialog({autoOpen:!1,modal:!0,resizable:!1,width:400}).fixDialogButtons(),this.elements.settings.form.find(".submit_button").removeAttr("disabled"),this.elements.mute.modal.dialog({autoOpen:!1,buttons:[{text:b.t("cancel_button","Cancel"),click:c.proxy(function(){this.elements.mute.modal.dialog("close")},this)},{text:b.t("mute_assignment","Mute Assignment"),"class":"btn-primary",click:c.proxy(function(){this.toggleMute(),this.elements.mute.modal.dialog("close")},this)}],modal:!0,resizable:!1,title:this.elements.mute.modal.data("title"),width:400})},toAssignment:function(a){a.preventDefault(),Eb[a.target.getAttribute("class")]()},submitForm:function(a){return d.set("eg_sort_by",c("#eg_sort_by").val()),d.set("eg_hide_student_names",c("#hide_student_names").prop("checked")),c(a.target).find(".submit_button").attr("disabled",!0).text(b.t("buttons.saving_settings","Saving Settings...")),window.location.reload(),!1},showSettingsModal:function(a){this.elements.settings.form.dialog("open")},onMuteClick:function(a){a.preventDefault(),this.muted?this.toggleMute():this.elements.mute.modal.dialog("open")},muteUrl:function(){return"/courses/"+this.courseId+"/assignments/"+this.assignmentId+"/mute"},spinMute:function(){this.elements.spinner.spin(),c(this.elements.spinner.el).css({left:9,top:6}).appendTo(this.elements.mute.link)},toggleMute:function(){this.muted=!this.muted;var a=this.muted?b.t("unmute_assignment","Unmute Assignment"):b.t("mute_assignment","Mute Assignment");action=this.muted?"mute":"unmute",actions={mute:function(){this.elements.mute.icon.css("visibility","hidden"),this.spinMute(),c.ajaxJSON(this.muteUrl(),"put",{status:!0},c.proxy(function(b){this.elements.spinner.stop(),this.elements.mute.label.html(a),this.elements.mute.icon.removeClass("ui-icon-volume-off").addClass("ui-icon-volume-on").css("visibility","visible")},this))},unmute:function(){this.elements.mute.icon.css("visibility","hidden"),this.spinMute(),c.ajaxJSON(this.muteUrl(),"put",{status:!1},c.proxy(function(b){this.elements.spinner.stop(),this.elements.mute.label.html(a),this.elements.mute.icon.removeClass("ui-icon-volume-on").addClass("ui-icon-volume-off").css("visibility","visible")},this))}},actions[action].apply(this)}},c.extend(a,{refreshGrades:function(){var a=unescape(db.attr("href")).replace("{{submission_id}}",Eb.currentStudent.submission.user_id)+".json";c.getJSON(a,function(a){Eb.currentStudent.submission=a.submission,Eb.showGrade()})},refreshQuizSubmissionSnapshot:function(b){pb[b.user_id+"_"+b.version_number]=b,b.last_question_touched&&(a.lastQuestionTouched=b.last_question_touched)},clearQuizSubmissionSnapshot:function(a){pb[a.user_id+"_"+a.version_number]=null},getQuizSubmissionSnapshot:function(a,b){return pb[a+"_"+b]}}),window.onbeforeunload=function(){window.opener&&window.opener.updateGrades&&c.isFunction(window.opener.updateGrades)&&window.opener.updateGrades();var a=c.map(pb,function(a){return a&&c.map(jsonData.context.students,function(b){return a==b&&b.name})[0]});hasPendingQuizSubmissions=function(){var b=!1;if(a.length)for(var c=0,d=a.length;c<d;c++)a[c]!==!1&&(b=!0);return b}();if(hasPendingQuizSubmissions)return b.t("confirms.unsaved_changes","The following students have unsaved changes to their quiz submissions: \n\n %{users}\nContinue anyway?",{users:a.join("\n ")})};var Eb={options:{},publicVariable:[],scribdDoc:null,currentStudent:null,domReady:function(){function a(){k.addClass("full_width"),l.css("width",""),n.css("width","")}i.bind("resize orientationchange",Eb.resizeFullHeight).resize(),c(document).mouseup(function(a){m.hide()}),m.click(function(a){c(this).hide()}),o.mousedown(function(a){m.show()}).draggable({axis:"x",cursor:"crosshair",scroll:!1,containment:"#full_width_container",snap:"#full_width_container",appendTo:"#full_width_container",helper:function(){return o.clone().addClass("clone")},snapTolerance:200,drag:function(b,d){var e=d.offset,f=i.width();l.width(e.left/f*100+"%"),n.width(100-e.left/f*100+"%"),o.css("left","0"),f-e.left<c(this).draggable("option","snapTolerance")?a():k.removeClass("full_width"),e.left<c(this).draggable("option","snapTolerance")&&(l.width("0%"),n.width("100%")),Eb.resizeFullHeight()},stop:function(a,b){a.stopImmediatePropagation(),m.hide()}}).click(function(b){b.preventDefault(),k.hasClass("full_width")?k.removeClass("full_width"):(a(),c(this).addClass("highlight",100,function(){c(this).removeClass("highlight",4e3)}))}),S.change(Eb.handleGradeSubmit),cb.change(function(){typeof Eb.currentStudent.submission=="undefined"&&(Eb.currentStudent.submission={}),Eb.currentStudent.submission.currentSelectedIndex=parseInt(c(this).val(),10),Eb.handleSubmissionSelectionChange()}),Bb(),xb(),Eb.initComments(),rb.init(),Cb(),c("#hide_no_annotation_warning").click(function(a){a.preventDefault(),jb.hide()}),i.bind("hashchange",Eb.handleFragmentChange),c("#eg_sort_by").val(d.get("eg_sort_by")),c("#submit_same_score").click(function(a){Eb.handleGradeSubmit(),a.preventDefault()})},jsonReady:function(){tb(),jsonData.studentsWithSubmissions.length?(c("#speed_grader_loading").hide(),c("#gradebook_header, #full_width_container").show(),wb(),Eb.handleFragmentChange()):(alert(b.t("alerts.no_active_students","Sorry, there are either no active students in the course or none are gradable by you.")),window.history.back())},skipRelativeToCurrentIndex:function(a){var b=(this.currentIndex()+a+jsonData.studentsWithSubmissions.length)%jsonData.studentsWithSubmissions.length;this.goToStudent(jsonData.studentsWithSubmissions[b].id)},next:function(){this.skipRelativeToCurrentIndex(1)},prev:function(){this.skipRelativeToCurrentIndex(-1)},resizeFullHeight:function(){nb&&clearTimeout(nb),nb=setTimeout(Db,0)},toggleFullRubric:function(a){if(!jsonData.rubric_association)return!1;gb.filter(":visible").length||a==="close"?(c("#grading").height("auto").children().show(),gb.fadeOut(),this.resizeFullHeight()):(gb.fadeIn(),c("#grading").children().hide(),this.refreshFullRubric())},refreshFullRubric:function(){if(!jsonData.rubric_association)return;if(!gb.filter(":visible").length)return;f.populateRubric(gb.find(".rubric"),Ab()),c("#grading").height(gb.height()),this.resizeFullHeight()},handleFragmentChange:function(){var a;try{a=JSON.parse(decodeURIComponent(document.location.hash.substr(1)))}catch(b){}a||(a={});if(typeof a.student_id!="number"||!jsonData.studentMap[a.student_id]){a.student_id=jsonData.studentsWithSubmissions[0].id;for(var c=0,d=jsonData.studentsWithSubmissions.length;c<d;c++)if(typeof jsonData.studentsWithSubmissions[c].submission!="undefined"&&jsonData.studentsWithSubmissions[c].submission.workflow_state!=="graded"){a.student_id=jsonData.studentsWithSubmissions[c].id;break}}Eb.goToStudent(a.student_id)},goToStudent:function(a){var b=sb.shouldHideStudentNames(),c=jsonData.studentMap[a];c&&(kb.selectmenu("value",c.id),(!this.currentStudent||this.currentStudent.id!=c.id)&&kb.change(),c.avatar_path&&!b?($new_image=I.clone().show(),I.after($new_image.attr("src",c.avatar_path)).remove(),I=$new_image):I.hide())},currentIndex:function(){return c.inArray(this.currentStudent,jsonData.studentsWithSubmissions)},handleStudentChanged:function(){var a=parseInt(kb.val(),10);this.currentStudent=jsonData.studentMap[a],document.location.hash="#"+encodeURIComponent(JSON.stringify({student_id:this.currentStudent.id})),this.showGrade(),this.showDiscussion(),this.showRubric(),this.updateStatsInHeader(),this.showSubmissionDetails(),this.refreshFullRubric()},populateTurnitin:function(a,d,e,f,i,j){var k=null;if(e.status=="scored"||e.status==null&&e.similarity_score!=null)f.html(h({state:(e.state||"no")+"_score",reportUrl:c.replaceTags(eb.attr("href"),{user_id:a.user_id,asset_string:d}),tooltip:b.t("turnitin.tooltip.score","Turnitin Similarity Score - See detailed report"),score:e.similarity_score+"%"}));else if(e.status){var l=b.t("turnitin.tooltip.pending","Turnitin Similarity Score - Submission pending"),m=b.t("turnitin.tooltip.error","Turnitin Similarity Score - See submission error details");k=c(h({state:"submission_"+e.status,reportUrl:"#",tooltip:e.status=="error"?m:l,icon:"/images/turnitin_submission_"+e.status+".png"})),f.append(k),k.click(function(a){a.preventDefault(),i.find(".turnitin_"+d).slideToggle()});var n=b.t("turnitin.info_message","This file is still being processed by turnitin. Please check back later to see the score"),o=b.t("turnitin.error_message","There was an error submitting to turnitin. Please try resubmitting the file before contacting support"),p=c(g({assetString:d,message:e.status=="error"?e.public_error_message||o:n,showResubmit:e.status=="error"&&j}));i.append(p);if(e.status=="error"&&j){var q=c.replaceTags(fb.attr("href"),{user_id:a.user_id});p.find(".turnitin_resubmit_button").click(function(a){a.preventDefault(),c(this).attr("disabled",!0).text(b.t("turnitin.resubmitting","Resubmitting...")),c.ajaxJSON(q,"POST",{},function(){window.location.reload()})})}}},handleSubmissionSelectionChange:function(){try{var b=cb.filter(":visible").val(),d=Number(b)||this.currentStudent&&this.currentStudent.submission&&this.currentStudent.submission.currentSelectedIndex||0,e=this.currentStudent&&this.currentStudent.submission&&this.currentStudent.submission.submission_history&&this.currentStudent.submission.submission_history.length-1===d,f=this.currentStudent&&this.currentStudent.submission&&this.currentStudent.submission.submission_history&&this.currentStudent.submission.submission_history[d]&&this.currentStudent.submission.submission_history[d].submission||{},g=f.submitted_at&&c.parseFromISO(f.submitted_at),h=f.graded_at&&c.parseFromISO(f.graded_at),i=[],j=[];X.html(g&&g.datetime_formatted);var k=R.find(".turnitin_score_container").empty(),l=R.find(".turnitin_info_container").empty(),m="submission_"+f.id,n=f.turnitin_data&&f.turnitin_data[m];n&&f.submission_type=="online_text_entry"&&Eb.populateTurnitin(f,m,n,k,l,e),ab.empty(),l=c("#submission_files_container .turnitin_info_container").empty(),c.each(f.versioned_attachments||[],function(a,b){var d=b.attachment;(d["crocodoc_available?"]||d.scribd_doc&&d.scribd_doc.created||c.isPreviewable(d.content_type,"google"))&&i.push(d),lb.test(d.mime_class)&&j.push(d),$submission_file=bb.clone(!0).fillTemplateData({data:{submissionId:f.user_id,attachmentId:d.id,display_name:d.display_name},hrefValues:["submissionId","attachmentId"]}).appendTo(ab).find("a.display_name").addClass(d.mime_class).data("attachment",d).click(function(a){a.preventDefault(),Eb.loadAttachmentInline(c(this).data("attachment"))}).end().find("a.submission-file-download").bind("dragstart",function(a){a.originalEvent.dataTransfer&&a.originalEvent.dataTransfer.setData("DownloadURL",d.content_type+":"+d.filename+":"+this.href)}).end().show(),k=$submission_file.find(".turnitin_score_container"),m="attachment_"+d.id,n=f.turnitin_data&&f.turnitin_data[m],n&&Eb.populateTurnitin(f,m,n,k,l,e)}),_.showIf(f.versioned_attachments&&f.versioned_attachments.length),this.loadAttachmentInline(i[0]||j[0]),$.showIf(cb.filter(":visible").find(":selected").nextAll().length),this.resizeFullHeight(),Z.showIf(f.late)}catch(o){throw a.log_error({message:"SG_submissions_"+(o.message||o.description||""),line:o.lineNumber||""}),o}},refreshSubmissionsToView:function(){var a="";this.currentStudent.submission.submission_history.length>0&&(submissionToSelect=this.currentStudent.submission.submission_history[this.currentStudent.submission.submission_history.length-1].submission,c.each(this.currentStudent.submission.submission_history,function(d,e){e=e.submission;var f=e.submitted_at&&c.parseFromISO(e.submitted_at),g=e.late;a+="<option "+(g?"class='late'":"")+" value='"+d+"' "+(e==submissionToSelect?"selected='selected'":"")+">"+(f?f.datetime_formatted:b.t("no_submission_time","no submission time"))+(g?" "+b.t("loud_late","LATE"):"")+(e.grade&&e.grade_matches_current_submission?" ("+b.t("grade","grade: %{grade}",{grade:e.grade})+")":"")+"</option>"})),cb.html(a),this.currentStudent&&this.currentStudent.submission&&this.currentStudent.submission.submission_history&&this.currentStudent.submission.submission_history.length>1?(Y.show(),W.hide()):(Y.hide(),W.show())},showSubmissionDetails:function(){this.currentStudent.submission&&this.currentStudent.submission.submitted_at?(this.refreshSubmissionsToView(),V.show()):V.hide(),this.handleSubmissionSelectionChange()},updateStatsInHeader:function(){J.html(Eb.currentIndex()+1);var a=c.grep(jsonData.studentsWithSubmissions,function(a){return a.submission&&a.submission.workflow_state==="graded"}),b=c.map(a,function(a){return a.submission.score});if(b.length){U.show();function d(a){var b=0;for(var c=0,d=a.length;c<d;c++)b+=a[c];return b/a.length}function e(a,b){b=Math.abs(parseInt(b,10))||0;var c=Math.pow(10,b);return Math.round(a*c)/c}var f=jsonData.points_possible?[" / ",jsonData.points_possible," (",Math.round(100*(d(b)/jsonData.points_possible)),"%)"].join(""):"";L.html([e(d(b),2)+f].join(""))}else U.hide();K.html(b.length)},loadAttachmentInline:function(b){G.children().hide(),jb.hide();if(!this.currentStudent.submission||!this.currentStudent.submission.submission_type||this.currentStudent.submission.workflow_state=="unsubmitted")M.show();else if(this.currentStudent.submission&&this.currentStudent.submission.submitted_at&&jsonData.context.quiz&&jsonData.context.quiz.anonymous_submissions)N.show();else{H.empty();if(b)var d=b["crocodoc_available?"],e=b.scribd_doc&&b.scribd_doc.created&&b.workflow_state!="errored"&&b.scribd_doc.attributes.doc_id,f={height:"100%",mimeType:b.content_type,attachment_id:b.id,submission_id:this.currentStudent.submission.id,attachment_view_inline_ping_url:b.view_inline_ping_url,ready:function(){Eb.resizeFullHeight()}};if(d)H.show(),H.disableWhileLoading(c.ajaxJSON("/submissions/"+this.currentStudent.submission.id+"/attachments/"+b.id+"/crocodoc_sessions/","POST",{version:this.currentStudent.submission.currentSelectedIndex},function(a){H.loadDocPreview(c.extend(f,{crocodoc_session_url:a.session_url}))},function(){b["crocodoc_available?"]=!1,Eb.handleSubmissionSelectionChange()}));else if(b&&(e||c.isPreviewable(b.content_type,"google")))a.disableCrocodocPreviews||jb.show(),e&&(f=c.extend(f,{scribd_doc_id:b.scribd_doc.attributes.doc_id,scribd_access_key:b.scribd_doc.attributes.access_key})),H.show().loadDocPreview(f);else if(b&&lb.test(b.mime_class)){var g=unescape(bb.find(".display_name").attr("href")).replace("{{submissionId}}",this.currentStudent.submission.user_id).replace("{{attachmentId}}",b.id);H.html('<iframe src="'+g+'" frameborder="0" id="speedgrader_iframe"></iframe>').show()}else H.html('<iframe id="speedgrader_iframe" src="/courses/'+jsonData.context_id+"/assignments/"+this.currentStudent.submission.assignment_id+"/submissions/"+this.currentStudent.submission.user_id+"?preview=true"+(this.currentStudent.submission&&!isNaN(this.currentStudent.submission.currentSelectedIndex)&&this.currentStudent.submission.currentSelectedIndex!=null?"&version="+this.currentStudent.submission.currentSelectedIndex:"")+(sb.shouldHideStudentNames()?"&hide_student_name=1":"")+'" frameborder="0"></iframe>').show()}},showRubric:function(){if(jsonData.rubric_association){ENV.RUBRIC_ASSESSMENT.assessment_user_id=this.currentStudent.id;var a=c.grep(Eb.currentStudent.rubric_assessments,function(a,b){return a.assessor_id===ENV.RUBRIC_ASSESSMENT.assessor_id}),d=c.grep(Eb.currentStudent.rubric_assessments,function(a,b){return a.assessment_type=="grading"});O.find("option").remove(),c.each(this.currentStudent.rubric_assessments,function(){O.append('<option value="'+this.id+'">'+this.assessor_name+"</option>")}),(!a.length||ENV.RUBRIC_ASSESSMENT.assessment_type=="grading"&&!d.length)&&O.append('<option value="new">'+b.t("new_assessment","[New Assessment]")+"</option>");var e=null;d.length&&(e=d[0].id),a.length&&(e=a[0].id),e&&O.val(e),c("#rubric_assessments_list").showIf(O.find("option").length>1),O.change()}},showDiscussion:function(){var a=sb.shouldHideStudentNames();u.html(""),this.currentStudent.submission&&this.currentStudent.submission.submission_comments&&c.each(this.currentStudent.submission.submission_comments,function(d,f){f.submission_comment&&(f=f.submission_comment),f.posted_at=c.parseFromISO(f.created_at).datetime_formatted;var g=a&&jsonData.studentMap[f.author_id];g&&(f.author_name=b.t("student","Student"));var h=v.clone(!0).fillTemplateData({data:f});h.find("span.comment").html(e(f.comment).replace(/\n/g,"<br />")),f.avatar_path&&!g&&h.find(".avatar").attr("src",f.avatar_path).show();var i=ENV.RUBRIC_ASSESSMENT.assessment_type==="grading"||ENV.RUBRIC_ASSESSMENT.assessor_id===f.author_id;h.find(".delete_comment_link").click(function(a){c(this).parents(".comment").confirmDelete({url:"/submission_comments/"+f.id,message:b.t("confirms.delete_comment","Are you sure you want to delete this comment?"),success:function(a){c(this).slideUp(function(){c(this).remove()})}})}).showIf(i),f.media_comment_type&&f.media_comment_id&&h.find(".play_comment_link").data(f).show(),c.each(f.cached_attachments||f.attachments,function(){var a=this.attachment||this;a.comment_id=f.id,a.submitter_id=Eb.currentStudent.id,h.find(".comment_attachments").append(w.clone(!0).fillTemplateData({data:a,hrefValues:["comment_id","id","submitter_id"]}).show().find("a").addClass(a.mime_class))}),u.append(h.show()),u.find(".play_comment_link").mediaCommentThumbnail("normal")}),u.scrollTop(9999999)},revertFromFormSubmit:function(){Eb.showDiscussion(),Eb.resizeFullHeight(),A.val(""),setTimeout(function(){A.trigger("keyup")},0),y.find(":input").attr("disabled",!1),z.text(b.t("buttons.submit_comment","Submit Comment"))},handleCommentFormSubmit:function(){function f(a){c.each(a,function(){Eb.setOrUpdateSubmission(this.submission)}),Eb.revertFromFormSubmit()}if(!c.trim(A.val()).length&&!c("#media_media_recording").data("comment_id")&&!y.find("input[type='file']:visible").length)return!1;var a=r+"/submissions/"+Eb.currentStudent.id,d="PUT",e={"submission[assignment_id]":jsonData.id,"submission[user_id]":Eb.currentStudent.id,"submission[group_comment]":c("#submission_group_comment").attr("checked")?"1":"0","submission[comment]":A.val()};c("#media_media_recording").data("comment_id")&&c.extend(e,{"submission[media_comment_type]":c("#media_media_recording").data("comment_type"),"submission[media_comment_id]":c("#media_media_recording").data("comment_id")}),y.find("input[type='file']:visible").length?c.ajaxJSONFiles(a+".text",d,e,y.find("input[type='file']:visible"),f):c.ajaxJSON(a,d,e,f),c("#comment_attachments").empty(),y.find(":input").attr("disabled",!0),z.text(b.t("buttons.submitting","Submitting...")),yb()},setOrUpdateSubmission:function(a){var b=jsonData.studentMap[a.user_id];return b.submission=b.submission||{},typeof a.submission_history=="undefined"&&(a.submission_history=[{submission:c.extend(!0,{},a)}]),c.extend(!0,b.submission,a),b},handleGradeSubmit:function(){var a=c(".update_submission_grade_url").attr("href"),b=c(".update_submission_grade_url").attr("title"),d={"submission[assignment_id]":jsonData.id,"submission[user_id]":Eb.currentStudent.id,"submission[grade]":S.val()};c.ajaxJSON(a,b,d,function(a){c.each(a,function(){Eb.setOrUpdateSubmission(this.submission)}),Eb.refreshSubmissionsToView(),cb.change(),Eb.showGrade()})},showGrade:function(){S.val(typeof Eb.currentStudent.submission!="undefined"&&Eb.currentStudent.submission.grade!==null?Eb.currentStudent.submission.grade:"").attr("disabled",typeof Eb.currentStudent.submission!="undefined"&&Eb.currentStudent.submission.submission_type==="online_quiz"),c("#submit_same_score").hide(),typeof Eb.currentStudent.submission!="undefined"&&Eb.currentStudent.submission.score!==null?(T.text(Eb.currentStudent.submission.score),Eb.currentStudent.submission.grade_matches_current_submission||c("#submit_same_score").show()):T.text(""),Eb.updateStatsInHeader(),c.each(jsonData.studentsWithSubmissions,function(a,b){var d=kb.data("selectmenu").list.find("li:eq("+a+")"),e=vb(this),f="not_graded not_submitted graded resubmitted";this==Eb.currentStudent&&(d=d.add(kb.data("selectmenu").newelement)),d.removeClass(f).addClass(e.raw).find(".ui-selectmenu-item-footer").text(e.formatted),c.each(f.split(" "),function(){d.data("optionClasses",d.data("optionClasses").replace(this,""))})})},initComments:function(){z.click(function(a){a.preventDefault(),Eb.handleCommentFormSubmit()}),E.click(function(a){a.preventDefault();var b=C.clone(!0);b.find("input").attr("name","attachments["+D+"][uploaded_data]"),D++,c("#comment_attachments").append(b.show()),Eb.resizeFullHeight()}),C.find("a").click(function(a){a.preventDefault(),c(this).parents(".comment_attachment_input").remove(),Eb.resizeFullHeight()}),n.delegate(".play_comment_link","click",function(){return c(this).data("media_comment_id")&&c(this).parents(".comment").find(".media_comment_content").show().mediaComment("show",c(this).data("media_comment_id"),c(this).data("media_comment_type")),!1})}};c(document).ready(function(){Eb.domReady()})})