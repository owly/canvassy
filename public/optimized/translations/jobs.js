define(["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{jobs:{columns:{attempt:"المحاولة",count:"العدد",id:"المعرف",priority:"الأولوية",run_at:"يعمل عند",strand:"جزء",tag:"العلامة",worker:"العامل"},confirm:{destroy_all:"هل تريد بالتأكيد هدم *كل* المهام من هذا النوع ومطابقة هذا الاستعلام؟",hold_all:"هل تريد بالتأكيد استبقاء *كل* المهام من هذا النوع ومطابقة هذا الاستعلام؟",unhold_all:"هل تريد بالتأكيد إلغاء استبقاء *كل* المهام من هذا النوع ومطابقة هذا الاستعلام؟"},titles:{job_handler:"معالج المهام",last_error:"الخطأ الأخير"}}},es:{jobs:{columns:{attempt:"intento",count:"recuento",id:"id",priority:"prioridad",run_at:"ejecutar en",strand:"hilo",tag:"etiqueta",worker:"trabajador"},confirm:{destroy_all:"¿Está seguro de que desea destruír *todos* los trabajos de este tipo y aquellos similares a esta búsqueda?",hold_all:"¿Está seguro de que quiere detener *todos* los trabajos de este tipo y aquellos similares a esta búsqueda?",unhold_all:"¿Está seguro de que ya no quiere guardar *todos* los trabajos de este tipo y aquellos similares a esta búsqueda?"},titles:{job_handler:"Controlador de trabajos",last_error:"Último Error"}}},fr:{jobs:{columns:{attempt:"tentative",count:"nombre",id:"ID",priority:"priorité",run_at:"exécuter à",strand:"élément",tag:"étiquette",worker:"travailleur"},confirm:{destroy_all:"Voulez-vous vraiment supprimer *toutes* les tâches de ce type et qui correspondent à cette requête ?",hold_all:"Voulez-vous vraiment mettre en attente *toutes* les tâches de ce type et qui correspondent à cette requête ?",unhold_all:"Voulez-vous vraiment reprendre *toutes* les tâches de ce type et qui correspondent à cette requête ?"},titles:{job_handler:"Gestionnaire de tâches",last_error:"Dernière erreur"}}},ja:{jobs:{columns:{attempt:"試行",count:"数",id:"ID",priority:"優先順位",run_at:"実行された場所",strand:"ストランド",tag:"タグ",worker:"ワーカ"},confirm:{destroy_all:"このクエリに一致するこの種類のジョブを *すべて* 破棄してもよろしいですか?",hold_all:"このクエリに一致するこの種類のジョブを *すべて* 保持してもよろしいですか?",unhold_all:"このクエリに一致するこの種類のジョブを *すべて* 保持解除してもよろしいですか?"},titles:{job_handler:"ジョブ ハンドラ",last_error:"最後のエラー"}}},ko:{jobs:{columns:{attempt:"시도",count:"회수",id:"ID",priority:"우선 순위",run_at:"실행 시각",strand:"고립",tag:"태그",worker:"작업자"},confirm:{destroy_all:"이 쿼리와 일치하는 이 유형의 *모든* 작업을 제거하시겠습니까?",hold_all:"이 쿼리와 일치하는 이 유형의 *모든* 작업을 보류하시겠습니까?",unhold_all:"이 쿼리와 일치하는 이 유형의 *모든* 작업을 보류 해제하시겠습니까?"},titles:{job_handler:"작업 처리기",last_error:"마지막 오류"}}},nl:{jobs:{columns:{attempt:"poging",count:"aantal",id:"id",priority:"prioriteit",run_at:"uitvoeren op",strand:"streng",tag:"tag",worker:"werker"},confirm:{destroy_all:"Weet je zeker dat je *alle* taken van dit type en met deze query wilt stoppen?",hold_all:"Weet je zeker dat je *alle* taken van dit type overeenkomend met deze query wil pauzeren?",unhold_all:"Weet je zeker dat je *alle* taken van dit type en met deze query wil herstarten?"},titles:{job_handler:"Taak handler",last_error:"Laatste fout"}}},pt:{jobs:{columns:{attempt:"tentativa",count:"contagem",id:"id",priority:"prioridade",run_at:"executar em",strand:"parte",tag:"tag",worker:"trabalhador"},confirm:{destroy_all:"Tem a certeza de que pretende destruir *todos* os trabalhos deste tipo correspondentes a esta consulta?",hold_all:"Tem a certeza de que pretende manter *todos* os trabalhos deste tipo correspondentes a esta consulta?",unhold_all:"Tem a certeza de que não pretende manter *todos* os trabalhos deste tipo correspondentes a esta consulta?"},titles:{job_handler:"Gestor de trabalhos",last_error:"Último erro"}}},ru:{jobs:{columns:{attempt:"попытка",count:"Итоговая сумма",id:"идентификатор",priority:"приоритет",run_at:"работает на",strand:"конфликт",tag:"тег",worker:"сотрудник"},confirm:{destroy_all:"Вы уверены, что хотите уничтожить *все* работы такого типа и соответствующих этому запросу?",hold_all:"Вы уверены, что хотите сохранить *все* работы такого типа и соответствующих этому вопросу?",unhold_all:"Вы уверены, что хотите раскрыть *все* работы такого типа и соответствующих этому вопросу?"},titles:{job_handler:"Обработчик задания",last_error:"Последняя ошибка"}}},zh:{jobs:{columns:{attempt:"尝试",count:"计数",id:"id",priority:"优先级",run_at:"运行位置",strand:"股",tag:"标签",worker:"工作者"},confirm:{destroy_all:"是否确定要摧毁符合此询问的此类型的*所有*任务?",hold_all:"是否确定要保留符合此询问的此类型的*所有*任务?",unhold_all:"是否确定要释放符合此询问的此类型的*所有*任务?"},titles:{job_handler:"任务处理程序",last_error:"上次的错误"}}}}})})