define("translations/group_settings",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{group_settings:{invitation_sent:"تم إرسال الدعوة"}},es:{group_settings:{invitation_sent:"Invitación enviada"}},fr:{group_settings:{invitation_sent:"Invitation envoyée"}},ja:{group_settings:{invitation_sent:"招待が送信されました"}},ko:{group_settings:{invitation_sent:"초대 보냄"}},nl:{group_settings:{invitation_sent:"Uitnodiging verstuurd"}},pt:{group_settings:{invitation_sent:"Convite enviado"}},ru:{group_settings:{invitation_sent:"Приглашение отправлено"}},zh:{group_settings:{invitation_sent:"邀请已发送"}}}})}),function(){require(["jquery","i18n!group_settings","compiled/fn/preventDefault","jquery.instructure_forms"],function(a,b,c){var d,e,f;return e=a(".group_avatar_form"),d=a(".change_group_pic"),f=function(){return e.toggle(),d.toggle()},e.formSubmit({success:function(b){return a(".avatar").attr("src",b.avatar_url),f()},fileUpload:!0,preparedFileUpload:!0,singleFile:!0,handle_files:function(a,b){return b.avatar_id=a.attachment.id,b},context_code:"group_"+ENV.GROUP_ID,folder_id:ENV.FOLDER_ID,formDataTarget:"url",method:"PUT",disableWhileLoading:!0}),d.click(c(function(){return f()})),a(".cancel_avatar").click(c(function(){return f()})),a(".invite_form").formSubmit({required:["email"],processData:function(a){return a["invitees[]"]=a.email,delete a.email,a},success:function(){return a.flashMessage(b.t("invitation_sent","Invitation sent"))}})})}.call(this),define("compiled/bundles/group_settings",function(){})