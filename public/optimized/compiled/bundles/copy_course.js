(function(){var a={}.hasOwnProperty;define("compiled/util/processItemSelections",[],function(){var b;return b=function(b){var c,d,e,f,g,h;f={items_to_copy:[]},g=/copy\[([^\]]*)\]$/;for(d in b){if(!a.call(b,d))continue;h=b[d],e=d.match(g),e?(c=e[1],h==="1"?f.items_to_copy.push(c):h!=="0"&&(f[d]=h)):f[d]=h}return f}})}).call(this),define("translations/content_imports",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{content_imports:{buttons:{"import":"استيراد المساق"},errors:{failed:"فشل استيراد المساق نتيجة للخطأ التالي:",import_failed:'حدث خطأ أثناء استيراد الترحيل الخاص بك.  الرجاء إخطار مسؤول النظام لديك وإعطاؤه الكود التالي: "%{code}"',upload_failed:"فشل التحميل، الرجاء المحاولة مرة أخرى"},messages:{copying:"النسخ... قد يستغرق الأمر بضع دقائق",import_complete:"اكتمل الاستيراد!  يجري الرجوع إلى صفحة المساق...",importing_button:"يجري الاستيراد...قد يستغرق هذا لحظات",uploading:"جارٍ تحميل تصدير المساق..."},titles:{home_page:"الصفحة الرئيسية"}}},es:{content_imports:{buttons:{"import":"Importar el Curso"},errors:{failed:"La importación del curso falló  con los siguientes errores:",import_failed:'Se ha producido un error durante la importación.  Informe al administrador de su sistema y facilítele el siguiente código: "%{code}"',upload_failed:"La carga falló , intente de nuevo"},messages:{copying:"Copiando esto tomará unos cuantos minutos",import_complete:"Importación Completa. Volviendo a la página del curso...",importing_button:"Importando... Esta acción podría tardar varios minutos",uploading:"Cargando la Exportación del Curso..."},titles:{home_page:"Página de Inicio"}}},fr:{content_imports:{buttons:{"import":"Importer un cours"},errors:{failed:"L’importation du cours a échoué avec l’erreur suivante :",import_failed:"Une erreur est survenue lors de l’importation pour la migration.  Veuillez en informer votre administrateur système et lui fournir le code suivant : « %{code} »",upload_failed:"Échec du téléchargement, veuillez réessayer"},messages:{copying:"Copie en cours... cette opération prendra quelques minutes.",import_complete:"Importation terminée !  Retour à la page du cours...",importing_button:"Importation en cours... Cette opération peut prendre du temps.",uploading:"Téléchargement de l’exportation du cours..."},titles:{home_page:"Page d’accueil"}}},ja:{content_imports:{buttons:{"import":"コースのインポート"},errors:{failed:"次のエラーによりコースのインポートに失敗しました:",import_failed:'移行のためのインポート中にエラーが発生しました。システム管理者に連絡の上、次のコードを知らせてください: "%{code}"',upload_failed:"アップロードに失敗しました。もう一度やり直してください"},messages:{copying:"コピーしています...これには数分かかります。",import_complete:"インポートが完了しました。コースのページに戻ります...",importing_button:"インポートしています...  しばらくお待ちください",uploading:"コースのエクスポートをアップロードしています..."},titles:{home_page:"ホーム ページ"}}},ko:{content_imports:{buttons:{"import":"과목 가져오기"},errors:{failed:"다음 오류로 인해 과목 가져오기 실패:",import_failed:'마이그레이션 가져오기 중 오류가 발생했습니다.  시스템 관리자에게 알리고 다음 코드를 제공하십시오: "%{code}"',upload_failed:"업로드 실패"},messages:{copying:"복사 중… 이 작업은 수 분이 걸릴 수 있음",import_complete:"가져오기 완료! 과목 페이지로 돌아가는 중...",importing_button:"가져오는 중… 이 작업은 시간이 걸릴 수 있음",uploading:"과목 내보내기 업로드 중..."},titles:{home_page:"홈 페이지"}}},nl:{content_imports:{buttons:{"import":"Importeer cursus"},errors:{failed:"Het importeren van de cursus is mislukt om de volgende reden:",import_failed:'Er is een fout opgetreden tijdens de migratie import.  Neem contact po met je systeembeheerder en geef de volgende foutmelding door: "%{code}"',upload_failed:"Uploaden mislukt, probeer nogmaals"},messages:{copying:"Overschrijven... dit zal een aantal minuten duren",import_complete:"Importeren gelukt! Terug naar de cursuspagina...",importing_button:"Importeren... dit kan even duren",uploading:"Bezig met uploaden van cursus export..."},titles:{home_page:"Startpagina"}}},pt:{content_imports:{buttons:{"import":"Importar disciplina"},errors:{failed:"Falha na importação da disciplina com o seguinte erro:",import_failed:'Ocorreu um erro durante a sua importação/migração. Notifique o administrador do sistema e dê-lhe o seguinte código: "%{code}"',upload_failed:"Falha no upload, tente novamente"},messages:{copying:"Copiando... isso levará alguns minutos",import_complete:"Importação concluída!  A voltar para a página da disciplina...",importing_button:"A importar... este processo pode demorar algum tempo",uploading:"A carregar a exportação da disciplina..."},titles:{home_page:"Página inicial"}}},ru:{content_imports:{buttons:{"import":"Импорт курса"},errors:{failed:"Ошибка импорта курса, получена следующая ошибка:",import_failed:'Произошла ошибка в ходе переноса импорта. Пожалуйста, сообщите вашему системному администратору и предоставьте ему следующий код: "%{code}"',upload_failed:"Сбой загрузки, повторите попытку"},messages:{copying:"Копирование... может занять несколько минут",import_complete:"Импорт завершен! Возвращение к странице курса...",importing_button:"Импортирование... Это может занять некоторое время",uploading:"Загрузка экспорта курса..."},titles:{home_page:"Домашняя страница"}}},zh:{content_imports:{buttons:{"import":"导入课程"},errors:{failed:"课程导入失败，错误如下:",import_failed:'在导入过程中发生错误。请通知系统管理员，并向其提供如下代码: "%{code}"',upload_failed:"上传失败，请重试"},messages:{copying:"正在复制... 可能需要几分钟",import_complete:"导入完成! 正在返回到课程页面...",importing_button:"导入中... 这可能需要一些时间",uploading:"正在上传课程导出..."},titles:{home_page:"主页"}}}}})}),function(){var a={}.hasOwnProperty;define("compiled/util/processMigrationItemSelections",[],function(){var b,c,d;return d=/copy\[([^\]]*)\]\[([^\]]*)\]/,c=/copy\[all_([^\]]*)\]/,b=function(b){var e,f,g,h,i,j,k,l,m,n,o,p;l={items_to_copy:{}},f=[],i=b["copy[everything]"]==="1";for(j in b){if(!a.call(b,j))continue;m=b[j];if(k=j.match(d)){h=k[1],g=k[2];if(h==="day_substitutions"){l[j]=m;continue}if(i)continue;m==="1"&&((n=l.items_to_copy)[h]||(n[h]=[]),l.items_to_copy[h].push(g))}else{if(k=j.match(c)){if(i)continue;m==="1"&&f.push(k[1])}l[j]=m}}for(o=0,p=f.length;o<p;o++)e=f[o],delete l.items_to_copy[e];return l}})}.call(this),function(){var a=[].slice;define("compiled/class/cache",["underscore"],function(b){return{cache:{prefix:"",store:{},use:function(a){return this.store=function(){switch(a){case"memory":return{};case"sessionStorage":return sessionStorage;case"localStorage":return localStorage}}()},toKey:function(){var c,d;return d=1<=arguments.length?a.call(arguments,0):[],this.prefix+function(){var a,e,f,g;f=b.flatten(d),g=[];for(a=0,e=f.length;a<e;a++)c=f[a],g.push(JSON.stringify(c));return g}().join("|")},get:function(){var b,c;return b=1<=arguments.length?a.call(arguments,0):[],(c=this.store[this.toKey(b)])?JSON.parse(c):null},set:function(){var b,c,d;return b=2<=arguments.length?a.call(arguments,0,d=arguments.length-1):(d=0,[]),c=arguments[d++],this.store[this.toKey(b)]=JSON.stringify(c),this},remove:function(){var b;return b=1<=arguments.length?a.call(arguments,0):[],delete this.store[this.toKey(b)]}}}})}.call(this),define("choose_content",["jquery","i18n!content_imports","compiled/util/processMigrationItemSelections","jquery.ajaxJSON","jquery.instructure_date_and_time","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_plugins","compiled/jquery.rails_flash_notifications","jqueryui/autocomplete","jqueryui/progressbar"],function(a,b,c){a(function(){var d=a("<iframe id='copy_course_target' name='copy_course_target' src='about:blank'/>");a("body").append(d.hide()),a("#copy_context_form").attr("target","copy_course_target"),a(".copy_progress").progressbar();var e=function(c){a.ajaxJSON(c,"GET",{},function(d){d&&d.workflow_state&&a(".copy_progress").progressbar("option","value",d.progress);if(!d||d.workflow_state!="completed"&&d.workflow_state!="imported")if(d&&d.workflow_state=="failed"){var f=b.t("errors.failed","Course Import failed with the following error:")+' "import_'+d.id+'"';a.flashError(f),a(".progress_bar_holder").after("<b>"+f+"</b>")}else setTimeout(function(){e(c)},1500);else window.location=ENV.COPY_COURSE_FINISH_URL+"?content_migration_id="+d.id},function(){setTimeout(function(){e(c)},3e3)})};a("#copy_context_form").formSubmit({processData:c,beforeSubmit:function(c){a("#copy_context_form .submit_button").text(b.t("messages.copying","Copying... this will take a few minutes")).attr("disabled",!0),a(".progress_bar_holder").show()},success:function(a){setTimeout(function(){e(a.status_url)},5e3)}}),a("#copy_entries_dialog button").click(function(){var b=a("#copy_all_discussion_topics"),c=a(this).hasClass("include");c?b.parent().next("ul").find(":checkbox:not(.secondary_checkbox)").prop("checked",b.prop("checked")).each(function(){a(this).triggerHandler("change",!0)}):b.parent().next("ul").find(":checkbox:not(.secondary_checkbox)").prop("checked",b.prop("checked")),a("#copy_entries_dialog").dialog("close")});var f=function(b){a("#copy_context_form :checkbox:not(.secondary_checkbox):not(.copy_everything):not(.skip_on_everything):not(.shift_dates_checkbox)").prop("checked",b).filter(":not(.copy_all)").each(function(){a(this).triggerHandler("change")})},g,h=a("#item_selections");a("#copy_context_form").delegate(":checkbox","change",function(b,c){a(this).attr("checked")||(c=!0);if(a(this).hasClass("copy_all"))a(this).parent().next("ul").find(":checkbox:not(.secondary_checkbox)").prop("checked",a(this).prop("checked")).each(function(){a(this).triggerHandler("change")}),a("#copy_everything").attr("checked",!1),a(this).hasClass("select_parents")&&a(this).attr("checked")&&a(this).parents("ul").each(function(){a(this).prev("h4").find(":checkbox").attr("checked",!0)});else if(a(this).hasClass("copy_everything"))if(a(this).prop("checked"))h.hide();else{var d=ENV.CONTENT_SELECT_URL;g=g||a.ajaxJSON(d,"GET",{},function(a){a&&(h.find(".content_list").html(a.selection_list),f(!1))}),h.show().disableWhileLoading(g)}else a(this).parent().find(":checkbox.secondary_checkbox"+(c?"":":not(.skip)")).attr("checked",a(this).attr("checked")),a(this).hasClass("secondary_checkbox")&&a(this).attr("checked")&&a(this).parents("li").children(":checkbox").attr("checked",!0),a(this).hasClass("select_parents")&&a(this).attr("checked")&&a(this).parents("ul").each(function(){a(this).prev("h4").find(":checkbox").attr("checked",!0)}),a(this).attr("checked")||(a(this).parents("ul").each(function(){a(this).prev("h2,h3,h4").find(":checkbox").attr("checked",!1)}),a(this).is("#copy_shift_dates")||a("#copy_everything").attr("checked",!1))}),a("#check_everything").click(function(a){a.preventDefault(),f(!0)}),a("#uncheck_everything").click(function(a){a.preventDefault(),f(!1)}),a(".shift_dates_checkbox").change(function(){a(".shift_dates_settings").showIf(a(this).attr("checked"))}).change(),a(".add_substitution_link").click(function(b){b.preventDefault();var c=a(".substitution_blank").clone(!0).removeClass("substitution_blank");a(".substitutions").append(c.hide());var d=a(".weekday_select_blank").clone(!0).removeClass("weekday_select_blank");c.find(".old_select").empty().append(d.clone(!0)),c.find(".new_select").empty().append(d),c.find(".old_select").children("select").change(),c.slideDown()}),a(".weekday_select").change(function(){if(a(this).parents(".old_select").length>0){var b=a(this).parents(".substitution").find(".new_select").children("select");b.attr("name","copy[day_substitutions]["+a(this).val()+"]")}}),a(".delete_substitution_link").click(function(b){b.preventDefault(),a(this).parents(".substitution").slideUp(function(){a(this).remove()})}),a("#copy_context_form .copy_all").each(function(){a(this).triggerHandler("change")}),a(".date_field").date_field()})}),define("jst/util/select/optgroups",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["util/select/optgroups"]=b(function(a,b,c,d,e){function q(a,b){var d="",e,f;d+='\n  <optgroup label="',i=c.property,e=i||a.property,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"property",{hash:{}})),d+=o(e)+'">\n    ',i=c.value,e=i||a.value,f=c.each,j=k.program(2,r,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;return d+="\n  </optgroup>\n",d}function r(a,b){var d="",e;return d+='\n      <option value="',i=c.value,e=i||a.value,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"value",{hash:{}})),d+=o(e)+'">',i=c.label,e=i||a.label,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"label",{hash:{}})),d+=o(e)+"</option>\n    ",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression,p=c.blockHelperMissing;g=b,i=c.eachProp,h=i||b.eachProp,j=k.program(1,q,e),j.hash={},j.fn=j,j.inverse=k.noop,i&&typeof h===l?g=h.call(b,g,j):g=p.call(b,h,g,j);if(g||g===0)f+=g;return f+="\n",f}),c["util/select/optgroups"]}),define("jst/util/select/options",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["util/select/options"]=b(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='\n  <option value="',i=c.value,e=i||a.value,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"value",{hash:{}})),d+=o(e)+'">',i=c.label,e=i||a.label,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"label",{hash:{}})),d+=o(e)+"</option>\n",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;g=b,h=c.each,j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),c["util/select/options"]}),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=[].slice;define("compiled/xhr/RemoteSelect",["underscore","compiled/class/cache","vendor/spin","jst/util/select/optgroups","jst/util/select/options"],function(c,d,e,f,g){var h;return h=function(){function h(b,e){this.el=b,this.options=e,this.stopSpinner=a(this.stopSpinner,this),this.startSpinner=a(this.startSpinner,this),this.currentKey=a(this.currentKey,this),this.onResponse=a(this.onResponse,this),this.options=c.extend({},this.defaultOptions,this.options),this.options.cache&&$.extend(!0,this,d),this.body=$("body"),this.options.placeholder=this.el.html(),this.options.start===!0&&this.makeRequest()}return h.prototype.defaultOptions={cache:!0,formatter:function(a){return a},requestParams:{},start:!0,url:window.location.href},h.prototype.spinnerOptions={lines:10,length:3,radius:3,speed:1,trail:60,width:2},h.prototype.makeRequest=function(a){var b,d=this;a==null&&(a={}),a=c.extend({},this.options.requestParams,a),this.el.prop("disabled",!0);if(this.options.cache)if(b=this.cache.get([this.options.url,a]))return this.onResponse(b);return this.startSpinner(),this.currentRequest=$.getJSON(this.options.url,a,this.onResponse),c.tap(this.currentRequest,function(b){return b.url=d.options.url,b.params=a,b.error(d.stopSpinner)})},h.prototype.onResponse=function(a){var b,c;return b=this.options.formatter(a),c=this.getTemplate(b),this.shouldCache(this.currentKey())&&this.cache.set(this.currentKey(),a),this.el.empty().append(this.options.placeholder).append(c(b)),this.stopSpinner(),this.el.prop("disabled",!1)},h.prototype.currentKey=function(){return[this.options.url,this.currentRequest.params]},h.prototype.shouldCache=function(){var a;return a=1<=arguments.length?b.call(arguments,0):[],this.options.cache&&!this.cache.get(a)},h.prototype.getTemplate=function(a){return c.isArray(a)?g:f},h.prototype.startSpinner=function(){return this.spinner=$((new e(this.spinnerOptions)).spin().el),this.spinner.css(this.toTheRightOf(this.el)),this.body.append(this.spinner)},h.prototype.stopSpinner=function(){return this.spinner.remove()},h.prototype.toTheRightOf=function(a){return this.spinnerCss||(this.spinnerCss={left:a.offset().left+a.width()+10,position:"absolute",top:a.offset().top+a.height()/2,zIndex:9999})},h}()})}.call(this),define("choose_course",["jquery","i18n!content_imports","underscore","compiled/xhr/RemoteSelect","jqueryui/autocomplete"],function(a,b,c,d){var e=a("<iframe id='copy_course_target' name='copy_course_target' src='about:blank'/>"),f=a("#copy_from_course"),g,h=parseInt(window.location.pathname.split("/")[2]);f.length&&(g=new d(a("#copy_from_course"),{formatter:c.bind(function(a){a=a.sort(function(a,b){return(new Date(b.enrollment_start)).getTime()-(new Date(a.enrollment_start)).getTime()});var b,d=c.groupBy(a,function(a){return a.term+" ("+a.account_name+")"}),e=c.chain(d).keys().reduce(function(a,b){var c=b.replace(/\([^\)]+\)$/,"").trim();return a[c]=a[c]||{count:0,termNames:[]},a[c].count=a[c].count+1,a[c].termNames.push(b),a},{}).value();return b=c.reduce(d,function(a,b,d){return a[d]=c.chain(b).reject(function(a){return a.id==h}).map(function(a){return{label:a.label,value:a.id}}).sortBy(function(a){return a.label}).value(),a},{}),c.reduce(b,function(a,b,c){var d=c.replace(/\([^\)]+\)$/,"").trim(),f=e[d].count===1?d:c;return a[f]=b,a},{})},this),url:"/users/"+ENV.current_user_id+"/manageable_courses"}),g.currentRequest.success(function(b){b.length>=500&&a("#select-course-row").hide()})),a("#include_concluded_courses").change(function(b){var c=a(b.currentTarget);c.prop("checked")?g.makeRequest({"include[]":"concluded"}):g.makeRequest()}),a("#copy_from_course").change(function(){var b=a("#copy_from_course")[0],c=b.selectedIndex,d=b.options[c].innerHTML,e=b.options[c].value;e!="none"&&(a("#course_autocomplete_name_holder").show(),a("#course_autocomplete_name").text(d),a("#course_autocomplete_id").val(e),a("#course_autocomplete_id_lookup").val(""))}).change();if(a("#course_autocomplete_id_lookup:visible").length>0){var i={},j;a("#course_autocomplete_id_lookup").autocomplete({source:function(b,c){var d="/users/"+ENV.current_user_id+"/manageable_courses",e={term:b.term},f=a("#include_concluded_courses").prop("checked"),g=b.term;f&&(e["include[]"]="concluded",g+="|concluded");if(g in i){c(i[g]);return}j=a.getJSON(d,e,function(a,b,d){i[g]=a,j===d&&c(a)})},select:function(b,c){a("#course_autocomplete_name_holder").show(),a("#course_autocomplete_name").text(c.item.label),a("#course_autocomplete_id").val(c.item.id),a("#copy_from_course").val("none")}})}}),function(){require(["compiled/util/processItemSelections","choose_content","choose_course"])}.call(this),define("compiled/bundles/copy_course",function(){})