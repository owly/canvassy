define("translations/user_notes",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{user_notes:{confirms:{delete_journal_entry:"هل ترغب بالتأكيد في حذف إدخال الدفتر هذا؟"}}},es:{user_notes:{confirms:{delete_journal_entry:"¿Seguro que quiere borrar esta contribución a la revista?"}}},fr:{user_notes:{confirms:{delete_journal_entry:"Voulez-vous vraiment supprimer cette entrée du journal ?"}}},ja:{user_notes:{confirms:{delete_journal_entry:"この日誌エントリを削除してもよろしいですか?"}}},ko:{user_notes:{confirms:{delete_journal_entry:"이 일지 항목을 삭제하시겠습니까?"}}},nl:{user_notes:{confirms:{delete_journal_entry:"Weet je zeker dat je dit nieuwsbericht wil verwijderen?"}}},pt:{user_notes:{confirms:{delete_journal_entry:"Tem certeza de que deseja excluir esta entrada do diário?"}}},ru:{user_notes:{confirms:{delete_journal_entry:"Действительно хотите удалить эту запись журнала?"}}},zh:{user_notes:{confirms:{delete_journal_entry:"是否确定要删除此日志条目?"}}}}})}),define("user_notes",["i18n!user_notes","jquery","jquery.instructure_forms","jquery.loadingImg","jquery.instructure_date_and_time","jquery.instructure_misc_plugins"],function(a,b){b(".cancel_button").click(function(){b("#create_entry").slideUp()}).end().find(":text").keycodes("esc",function(){b(".cancel_button").click()}),b("#new_user_note_button").click(function(a){a.preventDefault(),b("#create_entry").slideDown(),b("#add_entry_form").find(":text:first").focus().select()}),b("#add_entry_form").formSubmit({resetForm:!0,beforeSubmit:function(a){return b("#create_entry").slideUp(),b("#proccessing").loadingImage(),!0},success:function(a){b("#no_user_notes_message").hide(),b(this).find(".title").val(""),b(this).find(".note").val(""),user_note=a.user_note,user_note.created_at=b.parseFromISO(user_note.updated_at).datetime_formatted;var c=b("#add_entry_form").attr("action")+"/"+user_note.id;b("#proccessing").loadingImage("remove"),b("#user_note_blank").clone(!0).prependTo(b("#user_note_list")).attr("id","user_note_"+user_note.id).fillTemplateData({data:user_note}).find(".delete_user_note_link").attr("href",c).end().find(".formatted_note").html(user_note.formatted_note).end().slideDown()},error:function(a){b("#proccessing").loadingImage("remove"),b("#create_entry").slideDown()}}),b(".delete_user_note_link").click(function(c){c.preventDefault();var d=b("form:first").getFormData().authenticity_token,e=b(this).parents(".user_note");e.confirmDelete({message:a.t("confirms.delete_journal_entry","Are you sure you want to delete this journal entry?"),token:d,url:b(this).attr("href"),success:function(){b(this).fadeOut("slow",function(){b(this).remove(),b("#user_note_list > .user_note").length||b("#no_user_notes_message").show()})},error:function(a){b(this).formErrors(a)}})})}),function(){require(["user_notes"])}.call(this),define("compiled/bundles/user_notes",function(){})