define("translations/wiki_pages",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{wiki_pages:{buttons:{add_comment:"إضافة التعليق"},delete_comment_confirmation:"هل ترغب بالتأكيد في حذف هذا التعليق؟",notices:{add_comment_failed:"فشل إضافة تعليق، الرجاء المحاولة مرة أخرى",adding_comment:"جارٍ إضافة التعليق..."}}},es:{wiki_pages:{buttons:{add_comment:"Agregar Comentario"},delete_comment_confirmation:"¿Seguro que quiere borrar este comentario?",notices:{add_comment_failed:"No se pudo agregar el comentario, intente de nuevo",adding_comment:"Agregando Comentario..."}}},fr:{wiki_pages:{buttons:{add_comment:"Ajouter un commentaire"},delete_comment_confirmation:"Voulez-vous vraiment supprimer ce commentaire ?",notices:{add_comment_failed:"Échec de l’ajout du commentaire, veuillez réessayer",adding_comment:"Ajout du commentaire..."}}},ja:{wiki_pages:{buttons:{add_comment:"コメントの追加"},delete_comment_confirmation:"このコメントを削除してもよろしいですか?",notices:{add_comment_failed:"コメントの追加に失敗しました。もう一度やり直してください",adding_comment:"コメントを追加しています..."}}},ko:{wiki_pages:{buttons:{add_comment:"의견 추가"},delete_comment_confirmation:"이 의견을 삭제하시겠습니까?",notices:{add_comment_failed:"의견 추가에 실패했습니다. 다시 시도하시기 바랍니다.",adding_comment:"의견 추가 중..."}}},nl:{wiki_pages:{buttons:{add_comment:"Reactie toevoegen"},delete_comment_confirmation:"Weet je zeker dat je deze reactie wil verwijderen?",notices:{add_comment_failed:"Het toevoegen van de reactie is mislukt, probeer het opnieuw.",adding_comment:"Reactie toevoegen..."}}},pt:{wiki_pages:{buttons:{add_comment:"Adicionar comentário"},delete_comment_confirmation:"Tem certeza de que deseja excluir este comentário?",notices:{add_comment_failed:"Falha ao adicionar comentário, tente novamente",adding_comment:"Adicionando comentário..."}}},ru:{wiki_pages:{buttons:{add_comment:"Добавить комментарий"},delete_comment_confirmation:"Удалить данный комментарий?",notices:{add_comment_failed:"Ошибка добавления комментария, повторите попытку",adding_comment:"Добавление комментария..."}}},zh:{wiki_pages:{buttons:{add_comment:"添加评论"},delete_comment_confirmation:"是否确定要删除此评论?",notices:{add_comment_failed:"添加评论失败，请重试",adding_comment:"正在添加评论..."}}}}})}),define("wiki",["i18n!wiki_pages","jquery","wikiSidebar","jquery.ajaxJSON","jquery.instructure_date_and_time","jquery.instructure_forms","jquery.instructure_misc_plugins","jquery.templateData","compiled/tinymce"],function(a,b,c){function d(){c.init(),c.attachToEditor(b("#wiki_page_body"))}function e(){b("#wiki_show_view_secondary a.edit_link").click(function(a){a.preventDefault(),g()})}function f(){b("#wiki_edit_view_main").show(),b("#wiki_page_body").editorBox({fullHeight:!0,elementToLeaveInViewport:b("#below_editor")}),b("#wiki_edit_view_main").hide(),b("#wiki_edit_view_main #cancel_editing").click(function(a){a.preventDefault(),g()}),b("#wiki_edit_view_main .wiki_switch_views_link").click(function(a){a.preventDefault(),b("#wiki_page_body").editorBox("toggle")}),b("a#page_doesnt_exist_so_start_editing_it_now").length&&(b("a#page_doesnt_exist_so_start_editing_it_now").click(function(a){a.preventDefault(),g()}),b(function(){b("a#page_doesnt_exist_so_start_editing_it_now:not(.dont_click)").triggerHandler("click")}))}function g(){b("#wiki_edit_view_main, #wiki_show_view_main, #wiki_show_view_secondary, #wiki_edit_view_secondary").toggle(),b("#wiki_edit_view_page_tools").showIf(b("#wiki_edit_view_page_tools li").length>0),c.toggle(),b(window).triggerHandler("resize")}var h={init:function(){f(),b(function(){d(),e()})},updateComment:function(a,c,d){if(!a||a.length==0)a=b("#wiki_page_comment_blank").clone(!0).removeAttr("id"),d?b("#add_wiki_page_comment_form").after(a):b("#wiki_page_comments .wiki_page_comment:last").after(a),a.show();c.created_at_formatted=b.parseFromISO(c.created_at).datetime_formatted,a.fillTemplateData({data:c,id:"wiki_page_commment_"+c.id,hrefValues:["id"],htmlValues:["formatted_body"]}),a.toggleClass("current",c.workflow_state=="current"),a.toggleClass("deletable_comment",!!c.permissions&&!!c.permissions["delete"])}};return b(document).ready(function(){b(document).fragmentChange(function(a,c){c==="#edit"&&b("#wiki_show_view_secondary a.edit_link:visible").click()});var c=!1;b(document).bind("mousemove focus keypress",function(){c=!0});var d=function(){if(!c){setTimeout(d,12e4);return}c=!1,b.ajaxJSON(b("#latest_page_version").attr("href"),"GET",{},function(a){var c=parseInt(b("#wiki_page_version_number").text(),10),e=a&&a&&a.wiki_page&&a.wiki_page.version_number,f=c&&e&&e>c;f?(b(".someone_else_edited").slideDown(),setTimeout(d,24e4)):setTimeout(d,12e4)},function(a){setTimeout(d,6e4)})};setTimeout(d,5e3),b(".more_pages_link").click(function(a){a.preventDefault(),b(this).parents("ul").find("li").show(),b(this).parent("li").remove()}),b(".add_comment_link,.wiki_page_comment .cancel_button").click(function(a){a.preventDefault(),b(this).parents(".wiki_page_comment").toggleClass("commenting").find("textarea:visible").val("").focus().select()}),b(".delete_comment_link").click(function(c){c.preventDefault(),b(this).parents(".wiki_page_comment").confirmDelete({url:b(this).attr("href"),message:a.t("delete_comment_confirmation","Are you sure you want to delete this comment?"),success:function(){b(this).slideUp(function(){b(this).remove()})}})}),b("#add_wiki_page_comment_form").formSubmit({beforeSubmit:function(c){b(this).find("button").attr("disabled",!0).filter(".submit_button").text(a.t("notices.adding_comment","Adding Comment..."))},success:function(c){b(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.t("buttons.add_comment","Add Comment")),h.updateComment(null,c.wiki_page_comment,!0),b(this).removeClass("commenting")},error:function(c){b(this).formErrors(c),b(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.t("notices.add_comment_failed","Add comment failed, please try again"))}}),b("#add_wiki_page_form,#rename_wiki_page_form").formSubmit({success:function(a){location.href=a.success_url},error:function(a){b(this).formErrors(a)}})}),h}),function(){require(["wiki"])}.call(this),define("compiled/bundles/wiki",function(){})