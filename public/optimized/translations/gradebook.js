define(["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{gradebook:{alerts:{no_active_students:"عذرًا، لا يوجد طلاب نشطون في المساق أو لا يوجد شخص قابل للتقييم من قِبلك.",no_students_in_section:"تعذر العثور على أي طالب في هذا القسم، يتم التراجع وإظهار كل الأقسام.",none_to_update:"لا يوجد شيء لتحديثه",scores_updated:{one:"تم تحديث نتيجة طالب واحد",other:"تم تحديث نتيجة %{count} من الطلاب"},students_updated:{one:"تم تحديث طالب واحد",other:"تم تحديث %{count} من الطلاب"}},assignment_details:"تفاصيل المهمة",buttons:{change_section:"تغيير قسم",saving_settings:"جارٍ حفظ الإعدادات...",submit_comment:"إرسال تعليق",submitting:"جارٍ الإرسال...",upload_data:"تحميل البيانات"},cancel_button:"إلغاء",click_to_change:"انقر لاختبار درجة مختلفة",click_to_expand:"انقر للتوسيع",computing_grades:"جارٍ حساب الدرجات...",confirms:{delete_comment:"هل ترغب بالتأكيد في حذف هذا التعليق؟",unsaved_changes:"قام الطلاب التالون بإلغاء حفظ التغييرات على إرسالات الاختبار الخاص بهم: \n\n %{users}\nContinue anyway?"},curve_grade_for_course:"منحنى الدرجات الخاص بـ %{assignment}",curve_grades:"منحنى الدرجات",default_grade_for_course:"الدرجة الافتراضية الخاصة بـ %{assignment}",download_scores:"تنزيل الدرجات (%{format})",download_submissions:"تنزيل الإرسالات",edit_view_rubric:"عرض العنوان",errors:{failed_to_load:"فشل تحميل دفتر الدرجات، الرجاء محاولة تحديث الصفحة",none_to_update:"لا يوجد شيء لتحديثه",select_an_option:"الرجاء تحديد خيار",upload_as_zip:"الرجاء تحميل الملفات كملف zip. مضغوط"},grade:"درجة: %{grade}",graded_by_me:"%{graded_time} بواسطتي",graded_then_resubmitted:"تم تقييم الدرجات، ثم تمت إعادة الإرسال (%{when})",hide_all_things:"إخفاء الكل %{things}",hide_column:"إخفاء الأعمدة",hide_student_name:"إخفاء أسماء الطلاب",ignore_ungraded:"تجاهل المهام التي لم يتم تقييم درجاتها",include_ungraded:"تضمين المهام التي لم يتم تقييم درجاتها",labels:{details:"التفاصيل"},links:{download_attachment:"تنزيل %{attachment}",finish_scoring:"إنهاء حساب درجات هذا الاختبار",go_to_submission:"الانتقال إلى عنوان URL للإرسال",submission_details:"تفاصيل الإرسال",view_quiz:"عرض هذا الاختبار",view_submission:"عرض الإرسال"},loud_late:"متأخر",message_students_who:"رسائل الطلاب الذين...",mute_assignment:"إخفاء المهمة",new_assessment:"[المهمة الجديدة]",no_submission_time:"لا يوجد وقت للإرسال",nth_student:"طالب %{n}",publish_to_sis:"نشر الدرجات على SIS",reupload_submission_files:"إعادة تحميل ملفات الإرسال",reupload_submissions:"إعادة تحميل الإرسالات",set_default_grade:"ضبط الدرجة الافتراضية",set_group_weights:"ضبط تقييمات المجموعة",show_student_name:"إظهار أسماء الطلاب",showing_all_sections:"إظهار كل الأقسام",showing_section:"إظهار قسم: %{section}",sort_columns_by:"فرز الأعمدة حسب...",sort_rows_by:"فرز الصفوف حسب...",speed_grader:"SpeedGrader",student:"الطالب",student_mute_notification:"يعمل المعلم في الدرجات",student_name:"اسم الطالب",students_who:{havent_been_graded:"لم يتم تصحيحها",havent_submitted_yet:"لم يتم الإرسال بعد",not_submitted_yet:"لم يتم الإرسال بعد",scored_less_than:"تم إحراز نقاط أقل من",scored_more_than:"تم إحراز نقاط أكثر من"},submission_information:"معلومات الإرسال",teacher_muted_title:"تم حجب المهمة",titles:{assignment_groups:"مجموعات المهام",click_to_record:"انقر فوق الميكروفون لتسجيل التعليقات",dropped_assignment_no_total:"لن يتم اعتبار هذه المهمة ضمن الحساب الإجمالي",hypothetical_score:"هذا مجموع نقاط ماذا لو",loading:"جارٍ التحميل...",turnitin_score:"رصد التشابه حسب Turnitin - مزيد من المعلومات"},tooltips:{submission_dropped:"يتم إسقاط هذا الإرسال لأغراض التقييم",submitted_late:"تم إرسال هذا الإرسال متأخرًا"},turnitin:{error_message:"حدث خطأ أثناء الإرسال إلى turnitin. الرجاء محاولة إعادة إرسال الملف قبل الاتصال بالدعم",info_message:"لا يزال هذا الملف تجري معالجته بواسطة Turnitin. الرجاء معاودة الفحص لاحقًا لترى النتيجة",resubmitting:"تجري إعادة الإرسال...",tooltip:{error:"رصد التشابه حسب Turnitin - انظر تفاصيل خطأ الإرسال",pending:"رصد التشابه حسب Turnitin - الإرسال معلق",score:"رصد التشابه حسب Turnitin - انظر التقرير المفصل"}},unmute_assignment:"إلغاء حجب المهمة",unmute_button:"إلغاء حجب المهمة",upload_scores:"تحميل الدرجات (من %{format})",view_grading_history:"عرض محفوظات التقييم"},not_applicable:"لا يوجد"},es:{gradebook:{alerts:{no_active_students:"Perdón, no hay estudiantes activos en este curso o no pueden ser calificados por usted.",no_students_in_section:"No se pudieron encontrar estudiantes en esa sección, regresando para mostrar todas las secciones.",none_to_update:"Nada que Actualizar",scores_updated:{one:"1 calificación de estudiante actualizada",other:"%{count} calificaciones de estudiantes actualizados"},students_updated:{one:"1 Estudiante Actualizado",other:"%{count} estudiantes actualizados"}},assignment_details:"Detalles de la Tarea",buttons:{change_section:"Cambiar Sección",saving_settings:"Guardar Configuraciones...",submit_comment:"Enviar Comentario",submitting:"Enviando...",upload_data:"Cargar Información"},cancel_button:"Cancelar",click_to_change:"Haga click para probar una calificación diferente",click_to_expand:"Haga click para expandir",computing_grades:"Computando Calificaciones...",confirms:{delete_comment:"¿Seguro que quiere borrar este comentario?",unsaved_changes:"Los siguientes estudiantes tienen cambios no guardados en los envíos de sus evaluaciones: \n%{users}\n¿Continuar?"},curve_grade_for_course:"Aplicar Curva a %{assignment}",curve_grades:"Aplicar Curva a los Grados",default_grade_for_course:"Calificación Predeterminada para %{assignment}",download_scores:"Descargar Calificaciones (%{format})",download_submissions:"Descargar los Envíos",edit_view_rubric:"Ver Rúbrica",errors:{failed_to_load:"El libro de calificaciones no se pudo cargar, intente recargar la página",none_to_update:"Nada que Actualizar",select_an_option:"Por favor seleccione una opción",upload_as_zip:"Por favor cargue los archivos como un .zip"},grade:"grado: %{grade}",graded_by_me:"%{graded_time} por mí",graded_then_resubmitted:"calificado, luego reenviado (%{when})",hide_all_things:"Esconder %{things}",hide_column:"Esconder Columna",hide_student_name:"Esconder los Nombres de los Estudiantes",ignore_ungraded:"Ignorar Tareas No Calificadas",include_ungraded:"Incluír Tareas Actualizadas",labels:{details:"Detalles"},links:{download_attachment:"Descargando %{attachment}",finish_scoring:"Terminar la Calificación de esta Evaluación",go_to_submission:"Ir al URL de Envío",submission_details:"Detalles de Envío",view_quiz:"Ver esta Evaluación",view_submission:"Ver Envío"},loud_late:"TARDE",message_students_who:"Enviar Mensaje a Estudiante Que...",mute_assignment:"Obviar Tarea",new_assessment:"[Tarea Nueva]",no_submission_time:"ningun tiempo de envío",nth_student:"Estudiante %{n}",publish_to_sis:"Publicar calificaciones a SIS",reupload_submission_files:"Recargar los Archivos de Envío",reupload_submissions:"Recargar los Envíos",set_default_grade:"Establecer Calificación Predeterminada",set_group_weights:"Establecer Peso por Grupo",show_student_name:"Mostrar los Nombres de Estudiantes",showing_all_sections:"Mostrando Todas las Secciones",showing_section:"Mostrando la Sección: %{section}",sort_columns_by:"Ordenar Columnas Por...",sort_rows_by:"Ordenar Filas Por...",speed_grader:"Calificador Rápido",student:"Estudiante",student_mute_notification:"El instructor está trabajando en las calificaciones",student_name:"Nombre del Estudiante",students_who:{havent_been_graded:"No ha sido calificado",havent_submitted_yet:"Aún no ha enviado",not_submitted_yet:"No ha sido enviado",scored_less_than:"Obtuvo menos de",scored_more_than:"Obtuvo más de"},submission_information:"Información del Envío",teacher_muted_title:"Tarea ha sido obviada",titles:{assignment_groups:"Grupos de Trabajo",click_to_record:"Haga click en el micrófono para grabar sus comentarios",dropped_assignment_no_total:"Esta tarea no será considerada en el cálculo total",hypothetical_score:'Esta es una calificación "que pasa si"',loading:"Cargando...",turnitin_score:"Calificación de Similaridad de Turnitin -- más información"},tooltips:{submission_dropped:"Este envío se eliminó para la calificación",submitted_late:"Este envío se envió tarde"},turnitin:{error_message:"Ocurrió un error al enviar a turnitin. Intente enviar el archivo de nuevo antes de contactar a el servicio de asistencia técnica",info_message:"Este archivo todavía está siendo procesado por turnitin. Vuelva más tarde para comprobar la calificación.",resubmitting:"Renviando...",tooltip:{error:"Calificación de similitud en Turnitin - Ver detalles de envío",pending:"Calificación de similitud en Turnitin - Envío pendiente",score:"Calificación de similitud en Turnitin - Ver informe detallado"}},unmute_assignment:"Activar Tarea",unmute_button:"Activar la Tarea",upload_scores:"Cargar Calificaciones (desde %{format})",view_grading_history:"Ver el Historial de Calificación"},not_applicable:"N/A"},fr:{gradebook:{alerts:{no_active_students:"Il n’y a aucun étudiant actif dans ce cours ou aucun d’entre eux ne peut être noté par vous.",no_students_in_section:"Impossible de trouver des étudiants dans cette section ; retour à l’affichage de toutes les sections.",none_to_update:"Aucune mise à jour nécessaire",scores_updated:{one:"1 note d’étudiant mise à jour",other:"%{count} notes d’étudiant mises à jour"},students_updated:{one:"1 étudiant mis à jour",other:"%{count} étudiants mis à jour"}},assignment_details:"Informations sur la tâche",buttons:{change_section:"Modifier la section",saving_settings:"Enregistrement des paramètres...",submit_comment:"Envoyer un commentaire",submitting:"Envoi en cours…",upload_data:"Télécharger les données"},cancel_button:"Annuler",click_to_change:"Cliquer pour tester une note différente",click_to_expand:"Cliquer pour développer",computing_grades:"Calcul des notes...",confirms:{delete_comment:"Voulez-vous vraiment supprimer ce commentaire ?",unsaved_changes:"Les étudiants suivants ont des modifications non enregistrées pour leurs envois de questionnaire : \n\n %{users}\nContinue anyway?"},curve_grade_for_course:"Courbe des notes pour %{assignment}",curve_grades:"Courbe des notes",default_grade_for_course:"Note par défaut pour %{assignment}",download_scores:"Télécharger les notes (%{format})",download_submissions:"Télécharger les tâches",edit_view_rubric:"Afficher un barème",errors:{failed_to_load:"Échec du téléchargement du relevé de notes. Essayez d’actualiser la page.",none_to_update:"Aucune mise à jour nécessaire",select_an_option:"Sélectionnez une option",upload_as_zip:"Veuillez télécharger les fichiers sous forme de fichier zip."},grade:"note : %{grade}",graded_by_me:"%{graded_time} par moi",graded_then_resubmitted:"noté, puis renvoyé (%{when})",hide_all_things:"Tout masquer %{things}",hide_column:"Masquer une colonne",hide_student_name:"Masquer les noms des étudiants",ignore_ungraded:"Ignorer les tâches non notées",include_ungraded:"Inclure les tâches non notées",labels:{details:"Informations"},links:{download_attachment:"Télécharger %{attachment}",finish_scoring:"Terminer de noter ce questionnaire",go_to_submission:"Atteindre l’URL de l’envoi",submission_details:"Informations de l’envoi",view_quiz:"Afficher ce questionnaire",view_submission:"Afficher l’envoi"},loud_late:"EN RETARD",message_students_who:"Envoyer un message aux étudiants qui...",mute_assignment:"Tâche silencieuse",new_assessment:"[Nouvelle évaluation]",no_submission_time:"aucune heure d’envoi",nth_student:"Étudiant %{n}",publish_to_sis:"Publier les notes sur SIS",reupload_submission_files:"Retélécharger les fichiers d’envoi",reupload_submissions:"Retélécharger les envois",set_default_grade:"Définir la note par défaut",set_group_weights:"Définir les pondérations de groupe",show_student_name:"Afficher les noms des étudiants",showing_all_sections:"Affichage de toutes les sections",showing_section:"Affichage de la section : %{section}",sort_columns_by:"Trier les colonnes par...",sort_rows_by:"Trier les lignes par...",speed_grader:"SpeedGrader™",student:"Étudiant",student_mute_notification:"Le formateur travaille sur les notes",student_name:"Nom de l’étudiant",students_who:{havent_been_graded:"N’a pas été noté",havent_submitted_yet:"Pas encore envoyé",not_submitted_yet:"Pas encore envoyé",scored_less_than:"Note inférieure à",scored_more_than:"Note supérieure à"},submission_information:"Informations de l’envoi",teacher_muted_title:"La tâche est silencieuse",titles:{assignment_groups:"Groupes de tâches",click_to_record:"Cliquez sur le micro pour enregistrer vos commentaires",dropped_assignment_no_total:"Cette tâche ne sera pas prise en compte dans le calcul du total",hypothetical_score:"Ceci est une note hypothétique",loading:"Chargement en cours...",turnitin_score:"Note de similitude Turnitin -- informations complémentaires"},tooltips:{submission_dropped:"Cet envoi est abandonné pour des raisons de notation",submitted_late:"Cet envoi a été envoyé en retard"},turnitin:{error_message:"Erreur lors de l’envoi à turnitin. Essayez de renvoyer le fichier avant de contacter l’assistance technique.",info_message:"Ce fichier est toujours en cours de traitement par turnitin. Réessayez ultérieurement pour connaître la note.",resubmitting:"Renvoi en cours...",tooltip:{error:"Cote de similitude de Turnitin - Voir le détail des erreurs d’envoi",pending:"Cote de similitude de Turnitin - Envoi en attente",score:"Cote de similitude de Turnitin - Voir le rapport détaillé"}},unmute_assignment:"Annuler une tâche silencieuse",unmute_button:"Annuler une tâche silencieuse",upload_scores:"Télécharger les notes (de %{format})",view_grading_history:"Afficher l’historique de notation"},not_applicable:"NA"},ja:{gradebook:{alerts:{no_active_students:"申し訳ありません。このコースには、アクティブな受講生がいないか、採点済みの受講生がいません。",no_students_in_section:"そのセクションには受講生が見つかりませんでした。全セクション表示に戻ります。",none_to_update:"更新するものがありません",scores_updated:{one:"%{count} 人の受講生のスコアを更新しました",other:"%{count} 人の受講生のスコアを更新しました"},students_updated:{one:"%{count} 人の受講生を更新しました",other:"%{count} 人の受講生を更新しました"}},assignment_details:"課題の詳細",buttons:{change_section:"セクションの変更",saving_settings:"設定を変更しています...",submit_comment:"コメントの提出",submitting:"提出しています...",upload_data:"データのアップロード"},cancel_button:"キャンセル",click_to_change:"クリックして、別のスコアをテスト",click_to_expand:"クリックして展開",computing_grades:"成績を計算しています...",confirms:{delete_comment:"このコメントを削除してもよろしいですか?",unsaved_changes:"次の受講生は、クイズへの提出物に対する変更内容が未保存となっています: \n%{users}\n続行しますか?"},curve_grade_for_course:"%{assignment} についての分布曲線評価",curve_grades:"分布曲線に基づいた評価",default_grade_for_course:"%{assignment} の既定の成績",download_scores:"スコアのダウンロード (%{format})",download_submissions:"提出物のダウンロード",edit_view_rubric:"注釈の表示",errors:{failed_to_load:"成績表の読み込みに失敗しました。ページを最新の状態に更新してみてください",none_to_update:"更新するものがありません",select_an_option:"オプションを選択してください",upload_as_zip:"ファイルは .zip 形式でアップロードしてください"},grade:"成績: %{grade}",graded_by_me:"%{graded_time} 私が採点",graded_then_resubmitted:"採点後、(%{when}) に再提出",hide_all_things:"すべての %{things} を非表示",hide_column:"列を非表示",hide_student_name:"受講生の名前を非表示",ignore_ungraded:"未採点の課題を無視",include_ungraded:"未採点の課題を含める",labels:{details:"詳細"},links:{download_attachment:"%{attachment} のダウンロード",finish_scoring:"このクイズの採点を完了",go_to_submission:"提出用 URL に進む",submission_details:"提出物の詳細",view_quiz:"このクイズの表示",view_submission:"提出物の表示"},loud_late:"遅延",message_students_who:"次の状態の受講生にメッセージを送る...",mute_assignment:"課題をミュートにする",new_assessment:"[新しいアセスメント]",no_submission_time:"提出の時間がない",nth_student:"受講生 %{n}",publish_to_sis:"成績表を SIS に公開",reupload_submission_files:"提出ファイルの再アップロード",reupload_submissions:"提出物の再アップロード",set_default_grade:"既定の成績の設定",set_group_weights:"グループの重み付けの設定",show_student_name:"受講生の名前を表示",showing_all_sections:"すべてのセクションを表示しています",showing_section:"次のセクションを表示しています: %{section}",sort_columns_by:"列の並べ替え...",sort_rows_by:"行の並べ替え...",speed_grader:"SpeedGrader",student:"受講生",student_mute_notification:"インストラクタが採点中です",student_name:"受講生名",students_who:{havent_been_graded:"採点されていません",havent_submitted_yet:"まだ提出していない",not_submitted_yet:"まだ提出していない",scored_less_than:"次のスコアに満たない: ",scored_more_than:"次のスコアを上回る: "},submission_information:"提出情報",teacher_muted_title:"課題はミュートになっています",titles:{assignment_groups:"課題グループ",click_to_record:"マイクをクリックしてコメントを記録",dropped_assignment_no_total:"この課題は、合計の計算で考慮されません",hypothetical_score:"これは what-if (仮の事態を想定した) スコアです",loading:"読み込んでいます...",turnitin_score:"Turnitin の類似性スコア -- 詳細情報"},tooltips:{submission_dropped:"この提出物は採点のためドロップされています",submitted_late:"この提出物は提出が遅れました"},turnitin:{error_message:"turnitin への提出の際にエラーが発生しました。サポートに問い合わせる前に、ファイルの再提出を試してください",info_message:"このファイルはまだ turnitin による処理中です。しばらくしてからスコアを確認してください",resubmitting:"再提出しています...",tooltip:{error:"turnitin 類似性スコア - 提出エラーの詳細を参照してください",pending:"turnitin 類似性スコア - 提出保留中",score:"turnitin 類似性スコア - 詳細レポートを参照してください"}},unmute_assignment:"課題のミュート解除",unmute_button:"課題のミュート解除",upload_scores:"スコアのアップロード (%{format} から)",view_grading_history:"採点履歴の表示"},not_applicable:"N/A"},ko:{gradebook:{alerts:{no_active_students:"죄송합니다. 과목에 활동 중인 학생이 없거나 평가할 수 있는 학생이 없습니다.",no_students_in_section:"해당 섹션에 학생이 없어서 모든 섹션 보기로 돌아갑니다.",none_to_update:"업데이트할 내용 없음",scores_updated:{one:"학생 %{count}명의 점수가 업데이트됨",other:"학생 %{count}명의 점수가 업데이트됨"},students_updated:{one:"학생 %{count}명 업데이트됨",other:"학생 %{count}명 업데이트됨"}},assignment_details:"과제 세부 정보",buttons:{change_section:"섹션 바꾸기",saving_settings:"설정 저장 중...",submit_comment:"의견 제출",submitting:"제출 중...",upload_data:"데이터 업로드"},cancel_button:"취소",click_to_change:"다른 점수를 테스트하려면 클릭",click_to_expand:"확장하려면 클릭",computing_grades:"평점 계산 중...",confirms:{delete_comment:"이 의견을 삭제하시겠습니까?",unsaved_changes:"다음 학생의 퀴즈 제출물에 저장되지 않은 변경 내용이 있습니다: \n\n %{users}\n계속 진행하시겠습니까?"},curve_grade_for_course:"%{assignment}에 대한 상대 평가",curve_grades:"상대 평가",default_grade_for_course:"%{assignment}의 기본 평점",download_scores:"점수 다운로드 (%{format})",download_submissions:"제출물 다운로드",edit_view_rubric:"루브릭 보기",errors:{failed_to_load:"평가 기록부를 로드하지 못했습니다. 페이지를 새로 고쳐 보시기 바랍니다.",none_to_update:"업데이트할 내용 없음",select_an_option:"옵션을 선택하시기 바랍니다.",upload_as_zip:"zip 파일로 올려주시기 바랍니다."},grade:"평점: %{grade}",graded_by_me:"%{graded_time}에 내가 평가",graded_then_resubmitted:"평가된 후 다시 제출됨 (%{when})",hide_all_things:"%{things} 모두 숨기기",hide_column:"열 숨기기",hide_student_name:"학생 이름 숨기기",ignore_ungraded:"평가되지 않은 과제를 무시",include_ungraded:"평가되지 않은 과제를 포함",labels:{details:"세부 정보"},links:{download_attachment:"%{attachment} 다운로드",finish_scoring:"이 퀴즈 점수 매기기 마침",go_to_submission:"제출물 URL로 가기",submission_details:"제출물 세부 정보",view_quiz:"이 퀴즈 보기",view_submission:"제출물 보기"},loud_late:"늦음",message_students_who:"다음 학생에게 메시지 보내기",mute_assignment:"과제 평점 비공개",new_assessment:"[새 과제]",no_submission_time:"제출 시간 없음",nth_student:"%{n}번째 학생",publish_to_sis:"SIS에 평점 게시",reupload_submission_files:"제출물 파일 다시 업로드",reupload_submissions:"제출물 다시 업로드",set_default_grade:"기본 평점 설정",set_group_weights:"그룹 가중치 설정",show_student_name:"학생 이름 표시",showing_all_sections:"모든 섹션 표시하기",showing_section:"다음 섹션 표시하기: %{section}",sort_columns_by:"열 정렬 기준...",sort_rows_by:"행 정렬 기준...",speed_grader:"SpeedGrader",student:"학생",student_mute_notification:"교사가 평가 작업 중",student_name:"학생 이름",students_who:{havent_been_graded:"평가되지 않음",havent_submitted_yet:"제출되지 않음",not_submitted_yet:"제출되지 않음",scored_less_than:"다음 이하 점수",scored_more_than:"다음 이상 점수"},submission_information:"제출물 정보",teacher_muted_title:"과제 평가 비공개 처리됨",titles:{assignment_groups:"과제 그룹",click_to_record:"의견을 녹음하려면 마이크를 클릭",dropped_assignment_no_total:"이 과제는 합계 계산에 고려하지 않음",hypothetical_score:"이는 What-If 점수임",loading:"로드 중...",turnitin_score:"Turnitin 유사성 점수 -- 자세한 정보"},tooltips:{submission_dropped:"이 제출물은 평가 목적에서 탈락함",submitted_late:"이 제출물은 늦게 제출됨"},turnitin:{error_message:"Turnitin에 제출하는 중에 오류가 발생했습니다. 지원팀에 문의하기 전에 다시 제출해 보시기 바랍니다.",info_message:"이 파일은 아직 Turnitin에서 처리 중입니다. 점수를 보려면 나중에 다시 확인하시기 바랍니다.",resubmitting:"다시 제출 중...",tooltip:{error:"Turnitin 유사성 점수 - 제출물 오류 세부 정보 보기",pending:"Turnitin 유사성 점수 - 제출물 대기",score:"Turnitin 유사성 점수 - 자세한 보고서 보기"}},unmute_assignment:"과제 평점 공개",unmute_button:"과제 평점 공개",upload_scores:"점수 업로드 (%{format})",view_grading_history:"평가 기록 보기"},not_applicable:"해당 사항 없음"},nl:{gradebook:{alerts:{no_active_students:"Op dit moment kan er geen leerling beoordeeld worden. Wellicht zijn er geen leerlingen actief of is er geen leerling aan je toegewezen.",no_students_in_section:"Kon geen leerlingen vinden in deze sectie. Een weergave van alle secties wordt getoond.",none_to_update:"Niets te wijzigen",scores_updated:{one:"1 score gewijzigd",other:"%{count} scores gewijzigd"},students_updated:{one:"1 leerling gewijzigd",other:"%{count} leerlingen gewijzigd"}},assignment_details:"Opdrachtdetails",buttons:{change_section:"Wijzig sectie",saving_settings:"Instellingen worden opgeslagen...",submit_comment:"Verstuur reactie",submitting:"Versturen...",upload_data:"Upload gegevens"},cancel_button:"Annuleren",click_to_change:"Klik om een andere score te testen",click_to_expand:"Klik om uit te vouwen",computing_grades:"Cijfers worden berekend...",confirms:{delete_comment:"Weet je zeker dat je deze reactie wil verwijderen?",unsaved_changes:"De volgende leerlingen hebben niet-opgeslagen veranderingen in hun inzendingen:\n\n%{users}\nToch doorgaan?"},curve_grade_for_course:"Cijfer aanpassen voor %{assignment}",curve_grades:"Pas norm aan",default_grade_for_course:"Standaard cijfer voor %{assignment}",download_scores:"Download scores (%{format})",download_submissions:"Download inzendingen",edit_view_rubric:"Bekijk criteria",errors:{failed_to_load:"Kon cijfers niet laden, probeer de pagina opnieuw te laden",none_to_update:"Niets om te wijzigen",select_an_option:"Selecteer een optie",upload_as_zip:"Upload bestanden als een .zip bestaand"},grade:"cijfer: %{grade}",graded_by_me:"%{graded_time} door mezelf",graded_then_resubmitted:"beoordeeld, daarna opnieuw ingeleverd (%{when})",hide_all_things:"Verberg alles %{things}",hide_column:"Verberg kolom",hide_student_name:"Verberg leerlingnamen",ignore_ungraded:"Negeer niet-beoordeelde opdrachten",include_ungraded:"Inclusief niet-beoordeelde opdrachten",labels:{details:"Details"},links:{download_attachment:"Download %{attachment}",finish_scoring:"Beoordeling van deze test afsluiten",go_to_submission:"Ga naar de link om in te leveren",submission_details:"Inzending details",view_quiz:"Bekijk deze test",view_submission:"Bekijk inzending"},loud_late:"TE LAAT",message_students_who:"Verstuur een bericht naar leerlingen die...",mute_assignment:"Verberg opdracht",new_assessment:"[Nieuwe opdracht]",no_submission_time:"geen inlevertijd",nth_student:"Leerling %{n}",publish_to_sis:"Publiceer cijfers naar administratiesysteem",reupload_submission_files:"Ingestuurde bestanden opnieuw uploaden",reupload_submissions:"Opnieuw inleveren",set_default_grade:"Standaardcijfer instelle",set_group_weights:"Groepsgewichten instellen",show_student_name:"Toon leerlingnamen",showing_all_sections:"Alle secties worden getoond",showing_section:"Sectie: %{section}",sort_columns_by:"Sorteer kolommen op...",sort_rows_by:"Sorteer rijen op...",speed_grader:"Snel beoordelen",student:"Leerling",student_mute_notification:"Docent is bezig met nakijken",student_name:"Leerling",students_who:{havent_been_graded:"Is nog niet beoordeeld",havent_submitted_yet:"Nog niet ingeleverd",not_submitted_yet:"Nog niet ingeleverd",scored_less_than:"Heeft minder gehaald dan",scored_more_than:"Heeft meer gehaald dan"},submission_information:"Informatie bij inzending",teacher_muted_title:"Opdracht is onzichtbaar",titles:{assignment_groups:"Opdrachtgroepen",click_to_record:"Klik op de microfoon om opmerkingen op te nemen",dropped_assignment_no_total:"Deze opdracht telt niet mee voor het totale cijfer",hypothetical_score:"Dit is een wat-als score",loading:"Laden...",turnitin_score:"Turnitin gelijkheidsscore -- meer informatie"},tooltips:{submission_dropped:"Deze inzending wordt niet beoordeeld",submitted_late:"Deze inzending is te laat ingezonden"},turnitin:{error_message:"Er is een fout opgetreden tijdens het inzenden. Probeer het bestand opnieuw in te leveren.",info_message:"Het bestand wordt nog steeds verwerkt. Kom later terug om het cijfer te bekijken.",resubmitting:"Opnieuw inleveren...",tooltip:{error:"Turnitin gelijkheidsscore - Bekijk de gedetailleerde foutmelding",pending:"Turnitin gelijkheidscore - Wordt gecontroleerd",score:"Turnitin gelijkheidsscore - Bekijk gedetailleerd rapport"}},unmute_assignment:"Opheffen verbergen opdracht",unmute_button:"Opheffen verbergen opdracht",upload_scores:"Upload cijfers (van %{format})",view_grading_history:"Bekijk cijfergeschiedenis"},not_applicable:"Niet beschikbaar"},pt:{gradebook:{alerts:{no_active_students:"Não há alunos ativos na disciplina ou nenhum deles pode ser avaliado por si.",no_students_in_section:"Não foi possível encontrar alunos nesta seção, retornando para a exibição de todas as seções.",none_to_update:"Nada a atualizar",scores_updated:{one:"1 pontuação de aluno atualizada",other:"%{count} pontuações de aluno atualizadas"},students_updated:{one:"1 aluno atualizado",other:"%{count} alunos atualizados"}},assignment_details:"Detalhes da tarefa",buttons:{change_section:"Alterar seção",saving_settings:"A guardar as definições...",submit_comment:"Enviar comentário",submitting:"Enviando...",upload_data:"Atualizar dados"},cancel_button:"Cancelar",click_to_change:"Clique para testar uma pontuação diferente",click_to_expand:"Clique para expandir",computing_grades:"Calculando as notas...",confirms:{delete_comment:"Tem certeza de que deseja excluir este comentário?",unsaved_changes:"Os seguintes alunos têm alterações não guardadas nos testes enviados: \n\n %{users}\nContinuar à mesma?"},curve_grade_for_course:"Relativizar as notas de acordo com a curva para %{assignment}",curve_grades:"Relativizar as notas de acordo com a curva",default_grade_for_course:"Nota padrão para %{assignment}",download_scores:"Baixar pontuação (%{format})",download_submissions:"Baixar envios",edit_view_rubric:"Exibir protocolo",errors:{failed_to_load:"Falha ao carregar o livro de notas, tente atualizar a página",none_to_update:"Nada a atualizar",select_an_option:"Selecione uma opção",upload_as_zip:"Faça upload dos arquivos como um .zip"},grade:"nota: %{grade}",graded_by_me:"%{graded_time} por mim",graded_then_resubmitted:"avaliado, depois reenviado (%{when})",hide_all_things:"Ocultar tudo %{things}",hide_column:"Ocultar coluna",hide_student_name:"Ocultar nomes dos alunos",ignore_ungraded:"Ignorar tarefas sem nota",include_ungraded:"Incluir tarefas sem nota",labels:{details:"Detalhes"},links:{download_attachment:"Download %{attachment}",finish_scoring:"Concluir a pontuação deste teste",go_to_submission:"Ir para o URL de envio",submission_details:"Detalhes do envio",view_quiz:"Exibir este teste",view_submission:"Exibir o envio"},loud_late:"ATRASADA",message_students_who:"Enviar mensagem aos alunos que...",mute_assignment:"Silenciar tarefa",new_assessment:"[Nova avaliação]",no_submission_time:"Sem hora de envio",nth_student:"Aluno %{n}",publish_to_sis:"Publicar notas no SIS",reupload_submission_files:"Fazer novamente o upload dos arquivos do envio",reupload_submissions:"Fazer novamente o upload dos envios",set_default_grade:"Definir nota padrão",set_group_weights:"Definir ponderação de grupo",show_student_name:"Exibir nomes de alunos",showing_all_sections:"Exibir todas as seções",showing_section:"Exibindo a seção: %{section}",sort_columns_by:"Ordenar colunas por:",sort_rows_by:"Ordenar linhas por:",speed_grader:"SpeedGrader",student:"Aluno",student_mute_notification:"O instrutor está trabalhando na avaliação",student_name:"Nome do aluno",students_who:{havent_been_graded:"Não foram avaliados",havent_submitted_yet:"Ainda não enviou",not_submitted_yet:"Ainda não enviou",scored_less_than:"Pontuou menos que",scored_more_than:"Pontuou mais que"},submission_information:"Informações de envio",teacher_muted_title:"A tarefa está silenciada",titles:{assignment_groups:"Grupos de tarefa",click_to_record:"Clique no microfone para gravar seus comentários",dropped_assignment_no_total:"Esta tarefa não será considerada no cálculo total",hypothetical_score:'Esta é uma pontuação "e se"',loading:"Carregando...",turnitin_score:"Pontos de similaridade do Turnitin -- mais informações"},tooltips:{submission_dropped:"Este envio está sendo ignorado para propósito de avaliação",submitted_late:"Este envio foi atrasado"},turnitin:{error_message:"Ocorreu um erro durante o envio para Turnitin. Tente reenviar o ficheiro antes de contactar o suporte. ",info_message:"Este ficheiro ainda está a ser processado pelo Turnitin. Verifique novamente mais tarde para ver a pontuação.",resubmitting:"A reenviar...",tooltip:{error:"Pontuação de semelhança do Turnitin - Ver detalhes do erro de envio",pending:"Pontuação de semelhança do Turnitin - Envio pendente",score:"Pontuação de semelhança do Turnitin - Ver relatório detalhado"}},unmute_assignment:"Dessilenciar tarefa",unmute_button:"Dessilenciar tarefa",upload_scores:"Atualizar pontuações (de %{format})",view_grading_history:"Exibir histórico de avaliação"},not_applicable:"ND"},ru:{gradebook:{alerts:{no_active_students:"В курсе нет активных студентов, или нет студентов для оценки.",no_students_in_section:"Невозможно найти студентов в этом разделе, возврат к отображению всех разделов.",none_to_update:"Нет объектов для обновления",scores_updated:{one:"Оценка 1 студента обновлена",other:"Оценка %{count} студентов обновлена"},students_updated:{one:"1 студент обновлен",other:"%{count} студентов обновлено"}},assignment_details:"Сведения о задании",buttons:{change_section:"Изменить раздел",saving_settings:"Сохранение настроек...",submit_comment:"Отправить комментарий",submitting:"Идет отправка...",upload_data:"Загрузка данных"},cancel_button:"Отменить",click_to_change:"Щелкните для проверки другой оценки",click_to_expand:"Щелкните, чтобы развернуть",computing_grades:"Вычисление оценок...",confirms:{delete_comment:"Удалить данный комментарий?",unsaved_changes:"Следующие студенты имеют несохраненные изменения в отправленных контрольных работах: \n\n %{users}\nВсе равно продолжить?"},curve_grade_for_course:"Кривая оценок для %{assignment}",curve_grades:"Создание кривой оценок",default_grade_for_course:"Оценка по умолчанию для %{assignment}",download_scores:"Загрузить оценки (%{format})",download_submissions:"Загрузить отправки",edit_view_rubric:"Просмотр рубрики",errors:{failed_to_load:"Ошибка загрузки табеля успеваемости, попробуйте обновить страницу",none_to_update:"Нет объектов для обновления",select_an_option:"Выберите опцию",upload_as_zip:"Загрузите файлы как ZIP-файл"},grade:"оценка: %{grade}",graded_by_me:"%{graded_time} мной",graded_then_resubmitted:"оценено, затем отправлено повторно (%{when})",hide_all_things:"Скрыть все %{things}",hide_column:"Скрыть столбец",hide_student_name:"Скрыть имена студентов",ignore_ungraded:"Игнорировать задания без оценок",include_ungraded:"Включить задания без оценки",labels:{details:"Сведения"},links:{download_attachment:"Загрузить %{attachment}",finish_scoring:"Завершить оценку этой контрольной работы",go_to_submission:"Перейти к URL-адресу отправки",submission_details:"Сведения об отправке",view_quiz:"Просмотреть эту контрольную работу",view_submission:"Просмотреть отправку"},loud_late:"ПОЗДНО",message_students_who:"Отправить сообщения студентов, которые...",mute_assignment:"Отключить звук задания",new_assessment:"[Новая проверка знаний]",no_submission_time:"нет времени передачи",nth_student:"Студент %{n}",publish_to_sis:"Публикация оценок в SIS",reupload_submission_files:"Повторно загрузить файлы отправки",reupload_submissions:"Повторно загрузить отправки",set_default_grade:"Установить оценку по умолчанию",set_group_weights:"Установить весовые критерии для группы",show_student_name:"Показать имена студентов",showing_all_sections:"Отображение всех разделов",showing_section:"Отображение раздела: %{section}",sort_columns_by:"Сортировка столбцов по...",sort_rows_by:"Сортировка строк по...",speed_grader:"SpeedGrader",student:"Студент",student_mute_notification:"Инструктор выполняет оценку",student_name:"Имя студента",students_who:{havent_been_graded:"Не были оценены",havent_submitted_yet:"Еще не отправлено",not_submitted_yet:"Еще не отправлено",scored_less_than:"Оценено меньше",scored_more_than:"Оценено больше"},submission_information:"Информация об отправке",teacher_muted_title:"Звук задания отключен",titles:{assignment_groups:"Группы заданий",click_to_record:"Щелкните микрофон для записи комментариев",dropped_assignment_no_total:"Это задание не будет учитываться в итоговом подсчете",hypothetical_score:'Это оценка "Что если"',loading:"Загрузка...",turnitin_score:"Оценка сходства Turnitin -- дополнительные сведения"},tooltips:{submission_dropped:"Эта отправка удалены в целях оценки",submitted_late:"Эта отправка передана слишком поздно"},turnitin:{error_message:"Произошла ошибка при отправке задания на Turnitin. Попробуйте отправить файл еще раз, прежде чем связаться со службой поддержки",info_message:"Этот файл все еще обрабатывается Turnitin. Пожалуйста, проверьте позже, чтобы узнать оценку",resubmitting:"Повторная отправка...",tooltip:{error:"Оценка соответствия Turnitin – См. сведения об ошибке отправки",pending:"Оценка соответствия Turnitin – Ожидание отправки",score:"Оценка соответствия Turnitin – См. подробный отчет"}},unmute_assignment:"Включить звук задания",unmute_button:"Включить звук задания",upload_scores:"Загрузка оценок (из %{format})",view_grading_history:"Просмотр истории оценок"},not_applicable:"Недоступно"},zh:{gradebook:{alerts:{no_active_students:"对不起，课程中没有活动学生或可评分的学生。",no_students_in_section:"在该节中找不到任何学生，请返回以显示所有章节。",none_to_update:"无更新",scores_updated:{one:"%{count} 个学生成绩已更新",other:"%{count} 个学生成绩已更新"},students_updated:{one:"已更新 %{count} 名学生",other:"已更新 %{count} 名学生"}},assignment_details:"作业详细信息",buttons:{change_section:"更改章节",saving_settings:"正在保存设置...",submit_comment:"提交评论",submitting:"正在提交...",upload_data:"上传数据"},cancel_button:"取消",click_to_change:"单击以测试不同分数",click_to_expand:"单击以展开",computing_grades:"正在计算评分...",confirms:{delete_comment:"是否确定要删除此评论?",unsaved_changes:"以下学生的测验提交文件中有未保存的更改: \n\n%{users}\n是否仍要继续?"},curve_grade_for_course:"%{assignment} 的曲线评分",curve_grades:"曲线评分",default_grade_for_course:"%{assignment} 的默认评分",download_scores:"下载分数 (%{format})",download_submissions:"下载提交文件",edit_view_rubric:"查看题目",errors:{failed_to_load:"评分册加载失败，请尝试刷新页面",none_to_update:"无更新",select_an_option:"请选择选项",upload_as_zip:"请以 .zip 形式上传文件"},grade:"评分: %{grade}",graded_by_me:"我评分的时间 %{graded_time}",graded_then_resubmitted:"评分后重新提交的时间 (%{when})",hide_all_things:"隐藏所有 %{things}",hide_column:"隐藏列",hide_student_name:"隐藏学生姓名",ignore_ungraded:"忽略未评分的作业",include_ungraded:"包括未评分的作业",labels:{details:"详细信息"},links:{download_attachment:"下载 %{attachment}",finish_scoring:"完成此测验的评分",go_to_submission:"转至提交 URL",submission_details:"提交详细信息",view_quiz:"查看此测验",view_submission:"查看提交"},loud_late:"延迟",message_students_who:"发送消息到学生...",mute_assignment:"屏蔽作业",new_assessment:"[新评估]",no_submission_time:"无提交时间",nth_student:"学生 %{n}",publish_to_sis:"发布评分到 SIS",reupload_submission_files:"重新上传提交文件",reupload_submissions:"重新上传提交文件",set_default_grade:"设置默认评分",set_group_weights:"设置组权重",show_student_name:"显示学生姓名",showing_all_sections:"正在显示所有章节",showing_section:"正在显示章节: %{section}",sort_columns_by:"列排序依据...",sort_rows_by:"行排序依据...",speed_grader:"SpeedGrader",student:"学生",student_mute_notification:"教师正在进行评分",student_name:"学生姓名",students_who:{havent_been_graded:"还未打分",havent_submitted_yet:"尚未提交",not_submitted_yet:"尚未提交",scored_less_than:"分数低于",scored_more_than:"分数高于"},submission_information:"提交文件信息",teacher_muted_title:"作业被屏蔽",titles:{assignment_groups:"作业组",click_to_record:"单击麦克风录制您的评论",dropped_assignment_no_total:"此作业将不会列入总分计算",hypothetical_score:"这是假设分数",loading:"正在加载...",turnitin_score:"Turnitin 相似分数 – 更多信息"},tooltips:{submission_dropped:"此提交文件不用于评分目的",submitted_late:"此提交文件提交延迟"},turnitin:{error_message:"提交至 Turnitin 的过程中发生了错误。请在联系技术支持之前先重试。",info_message:"Turnitin 正在处理文件，请晚些时候再来查看得分。",resubmitting:"正在重新提交...",tooltip:{error:"Turnitin 的相似性分数 - 查看提交内容错误的详细信息",pending:"Turnitin 的相似性分数 - 提交内容待处理",score:"Turnitin 的相似性分数 - 查看详细报告"}},unmute_assignment:"取消屏蔽作业",unmute_button:"取消屏蔽作业",upload_scores:"上传分数（从 %{format}）",view_grading_history:"查看评分记录"},not_applicable:"不适用"}}})})