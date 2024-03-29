define(["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{groups:{button:{create_category:"إنشاء فئة"},buttons:{create_group:"إنشاء مجموعة"},category:{student:{one:"طالب واحد",other:"%{count} من الطلاب"}},confirm:{assign_students:"سيقوم هذا الإجراء عشوائيًا بتعيين كافة الطلاب غير المعينين بالتساوي بقدر الإمكان على مجموعات الطلاب الموجودة.",delete_group:"هل ترغب بالتأكيد في حذف هذه المجموعة؟",remove_category:"هل ترغب بالتأكيد في إزالة طقم المجموعات هذا؟"},errors:{category_in_use:'"%{category_name}" قيد الاستخدام بالفعل',creating_category_failed:"فشل إنشاء الفئة، حاول مرة أخرى",creating_group_failed:"فشل إنشاء المجموعة",group_limit:"يجب أن يكون حد المجموعة فارغًا أو أكبر من 1",unknown:"حدث خطأ غير متوقع.",update_failed:"فشل التحديث، حاول مرة أخرى"},group:{one:"مجموعة واحدة",other:"%{count} مجموعة (مجموعات)"},group_name:"اسم المجموعة",loading:"جارٍ تحميل كشف المجموعات...",member:{one:"عضو واحد",other:"%{count} من الأعضاء"},member_tooltip_hide:"إخفاء كشف المجموعة",member_tooltip_show:"عرض كشف المجموعة",messages:{creating_group:"جارٍ إنشاء مجموعة..."},notices:{no_students_assigned:"لا يتعين فعل شيء",students_assigned:"تم تعيين الطلاب إلى مجموعات."},status:{assigning_students:"جارٍ تعيين الطلاب...",creating_groups:"جارٍ إنشاء الفئة...",updating:"جارٍ التحديث..."},students_who_have_not_joined_a_group:"الطلاب الذين لم ينضموا إلى مجموعة",titles:{self_signup_help:"مجموعات التسجيل الذاتي"}}},es:{groups:{button:{create_category:"Crear Categoría"},buttons:{create_group:"Crear Grupo"},category:{student:{one:"1 estudiante",other:"%{count} estudiantes"}},confirm:{assign_students:"Esto asignará todos los estudiantes sin asignar aleatoriamente entre los grupos de estudiantes existentes",delete_group:"¿Seguro que quiere borrar este grupo?",remove_category:"¿Seguro que quiere remover esta serie de grupos?"},errors:{category_in_use:'"%{category_name}" ya está en uso',creating_category_failed:"Falló la Creación de la Categoría, Intente de Nuevo",creating_group_failed:"Creación del Grupo no se pudo Completar",group_limit:"El límite del grupo debe estar en blanco o ser superior a 1",unknown:"Ocurrió un error inesperado.",update_failed:"Falló la Actualización, Intente de Nuevo"},group:{one:"1 Grupo",other:"%{count} Grupos"},group_name:"Nombre del Grupo",loading:"cargando la nómina del grupo...",member:{one:"1 miembro",other:"%{count} miembros"},member_tooltip_hide:"Esconder la nómina del grupo",member_tooltip_show:"Ver la nómina del grupo",messages:{creating_group:"Creando Grupo..."},notices:{no_students_assigned:"Nada que hacer.",students_assigned:"Alumnos asignados a grupos"},status:{assigning_students:"Asignando alumnos...",creating_groups:"Creando la Categoría...",updating:"Actualizando..."},students_who_have_not_joined_a_group:"Alumnos que no se han incorporado a ningún grupo",titles:{self_signup_help:"Grupos con Auto-Inscripción"}}},fr:{groups:{button:{create_category:"Créer une catégorie"},buttons:{create_group:"Créer un groupe"},category:{student:{one:"1 étudiant",other:"%{count} étudiants"}},confirm:{assign_students:"Tous les étudiants non attribués seront distribués de manière aléatoire et aussi égale que possible dans les groupes d’étudiants existants.",delete_group:"Voulez-vous vraiment supprimer ce groupe ?",remove_category:"Voulez-vous vraiment supprimer cet ensemble de groupes ?"},errors:{category_in_use:'"%{category_name}" est déjà utilisé',creating_category_failed:"Échec de la création d’une catégorie, veuillez réessayer",creating_group_failed:"Échec de la création d’un groupe",group_limit:"La limite du groupe doit être vide ou supérieure à 1",unknown:"Une erreur inattendue s’est produite.",update_failed:"Échec de la mise à jour, veuillez réessayer"},group:{one:"1 groupe",other:"%{count} groupes"},group_name:"Nom du groupe",loading:"chargement de la liste des groupes...",member:{one:"1 membre",other:"%{count} membres"},member_tooltip_hide:"Masquer la liste des groupes",member_tooltip_show:"Afficher la liste des groupes",messages:{creating_group:"Création d’un groupe..."},notices:{no_students_assigned:"Aucune intervention requise.",students_assigned:"Étudiants attribués aux groupes."},status:{assigning_students:"Attribution d’étudiants...",creating_groups:"Création d’une catégorie...",updating:"Mise à jour en cours..."},students_who_have_not_joined_a_group:"Étudiants non inclus dans un groupe",titles:{self_signup_help:"Groupes d’inscription libre"}}},ja:{groups:{button:{create_category:"カテゴリの作成"},buttons:{create_group:"グループの作成"},category:{student:{one:"%{count} 人の受講生",other:"%{count} 人の受講生"}},confirm:{assign_students:"未割り当ての全受講生を、無作為に、できるだけ均等に、既存の受講生グループに割り当てます。",delete_group:"このグループを削除してもよろしいですか?",remove_category:"このグループ セットを削除してもよろしいですか?"},errors:{category_in_use:'"%{category_name}" は既に使用されています',creating_category_failed:"カテゴリ作成に失敗しました。もう一度、試してください",creating_group_failed:"グループ作成に失敗しました",group_limit:"グループの制限は空白または 1 以上でなければなりません",unknown:"予期せぬエラーが発生しました。",update_failed:"更新に失敗しました。もう一度、試してください"},group:{one:"グループ 1 件",other:"グループ %{count} 件"},group_name:"グループ名",loading:"グループ名簿を読み込んでいます...",member:{one:"%{count} 人のメンバー",other:"%{count} 人のメンバー"},member_tooltip_hide:"グループ名簿を非表示",member_tooltip_show:"グループ名簿を表示",messages:{creating_group:"グループを作成しています..."},notices:{no_students_assigned:"特に何かをする必要はありません。",students_assigned:"受講生がグループに割り当てられました。"},status:{assigning_students:"受講生を割り当てています...",creating_groups:"カテゴリを作成しています...",updating:"更新しています..."},students_who_have_not_joined_a_group:"グループに未参加の受講生",titles:{self_signup_help:"セルフ サインアップ グループ"}}},ko:{groups:{button:{create_category:"범주 만들기"},buttons:{create_group:"그룹 만들기"},category:{student:{one:"학생 %{count}명",other:"학생 %{count}명"}},confirm:{assign_students:"이는 할당되지 않은 학생을 기존 학생 그룹에 가능한 한 고르게 임의로 할당함",delete_group:"이 그룹을 삭제하시겠습니까?",remove_category:"이 그룹 집합을 제거하시겠습니까?"},errors:{category_in_use:'"%{category_name}"은(는) 이미 사용 중임',creating_category_failed:"범주 만들기 실패. 다시 시도하시기 바랍니다.",creating_group_failed:"그룹 만들기 실패",group_limit:"그룹 제한은 공란이거나 1보다 커야 함",unknown:"예기치 않은 오류가 발생했습니다.",update_failed:"업데이트 실패. 다시 시도하시기 바랍니다."},group:{one:"그룹 1개",other:"그룹 %{count}개"},group_name:"그룹 이름",loading:"그룹 명부 로드 중...",member:{one:"멤버 %{count}명",other:"멤버 %{count}명"},member_tooltip_hide:"그룹 명부 숨김",member_tooltip_show:"그룹 명부 보기",messages:{creating_group:"그룹 만드는 중..."},notices:{no_students_assigned:"할 일이 없습니다.",students_assigned:"학생을 그룹에 할당했습니다."},status:{assigning_students:"학생 할당 중...",creating_groups:"범주 만드는 중...",updating:"업데이트 중..."},students_who_have_not_joined_a_group:"그룹에 참여하지 않은 학생",titles:{self_signup_help:"직접 등록 그룹"}}},nl:{groups:{button:{create_category:"Maak categorie"},buttons:{create_group:"Maak groep"},category:{student:{one:"1 leerling",other:"%{count} leerlingen"}},confirm:{assign_students:"Dit zal alle leerlingen zonder groep gelijk verdelen over de bestaande groepen",delete_group:"Weet u zeker dat u deze groep wil verwijderen?",remove_category:"Weet je zeker dat je deze set van groepen wil verwijderen?"},errors:{category_in_use:'"%{category_name}" is al in gebruik',creating_category_failed:"Aanmaken van de categorie is mislukt, probeer het opnieuw",creating_group_failed:"Aanmaken van de groep mislukt",group_limit:"Groepslimiet moet leeg of groter dan 1 zijn",unknown:"Er is een onverwachte fout opgetreden.",update_failed:"Wijzigen mislukt, probeer het opnieuw"},group:{one:"1 Groep",other:"%{count} Groepen"},group_name:"Groepsnaam",loading:"laden van groepsrooster...",member:{one:"1 groepslid",other:"%{count} groepsleden"},member_tooltip_hide:"Verberg groepsrooster",member_tooltip_show:"Bekijk groepsrooster",messages:{creating_group:"Groep wordt aangemaakt..."},notices:{no_students_assigned:"Niets te doen.",students_assigned:"Leerlingen toegekend aan groepen."},status:{assigning_students:"Leerlingen toekennen...",creating_groups:"Categorie aanmaken...",updating:"Wijzigen..."},students_who_have_not_joined_a_group:"Leerlingen die geen lid zijn van een groep",titles:{self_signup_help:"Zelf-inschrijven groepen"}}},pt:{groups:{button:{create_category:"Criar categoria"},buttons:{create_group:"Criar grupo"},category:{student:{one:"1 aluno",other:"%{count} alunos"}},confirm:{assign_students:"Isto atribuirá automaticamente todos os alunos não atribuídos da forma mais uniforme possível entre os grupos de alunos existentes.",delete_group:"Tem certeza de que deseja excluir este grupo?",remove_category:"Tem certeza de que deseja remover este conjunto de grupos?"},errors:{category_in_use:'"%{category_name}" já está sendo usado',creating_category_failed:"Falha na criação da categoria, tente novamente",creating_group_failed:"Falha na criação do grupo",group_limit:"O limite do grupo tem de ficar em branco ou ser superior a 1",unknown:"Ocorreu um erro inesperado.",update_failed:"Falha na atualização, tente novamente"},group:{one:"1 grupo",other:"%{count} grupos"},group_name:"Nome de grupo",loading:"carregando rol de grupos...",member:{one:"1 membro",other:"%{count} membros"},member_tooltip_hide:"Ocultar rol de grupos",member_tooltip_show:"Exibir rol de grupos",messages:{creating_group:"Criando grupo..."},notices:{no_students_assigned:"Nada a fazer.",students_assigned:"Alunos atribuídos a grupos."},status:{assigning_students:"Atribuindo alunos...",creating_groups:"Criando categoria...",updating:"Atualizando..."},students_who_have_not_joined_a_group:"Alunos que não aderiram a um grupo",titles:{self_signup_help:"Grupos de auto-inscrição"}}},ru:{groups:{button:{create_category:"Создать категорию"},buttons:{create_group:"Создать группу"},category:{student:{one:"1 студент",other:"%{count} студента(ов)"}},confirm:{assign_students:"Они будут назначать всех неназначенных студентов случайным образом среди существующих групп студентов как можно более равномерно",delete_group:"Удалить эту группу?",remove_category:"Действительно удалить этот набор групп?"},errors:{category_in_use:'"%{category_name}" уже используется',creating_category_failed:"Ошибка создания категории, повторите попытку",creating_group_failed:"Ошибка создания группы",group_limit:"Поле лимита группы должно быть пустым или больше 1",unknown:"Произошла непредвиденная ошибка.",update_failed:"Сбой обновления, повторите попытку"},group:{one:"1 группа",other:"%{count} групп"},group_name:"Имя группы",loading:"загрузка списка групп...",member:{one:"1 член",other:"%{count} члена(ов)"},member_tooltip_hide:"Скрыть список групп",member_tooltip_show:"Просмотреть список групп",messages:{creating_group:"Создание группы..."},notices:{no_students_assigned:"Ничего не делать.",students_assigned:"Студенты назначены группам."},status:{assigning_students:"Назначение студентов...",creating_groups:"Создание категории...",updating:"Обновление..."},students_who_have_not_joined_a_group:"Студенты, не присоединившиеся к группе",titles:{self_signup_help:"Группы с самостоятельной регистрацией"}}},zh:{groups:{button:{create_category:"创建类别"},buttons:{create_group:"创建组"},category:{student:{one:"%{count} 个学生",other:"%{count} 个学生"}},confirm:{assign_students:"这会将所有未分配的学生尽可能均匀地随机分配到现有的学生组",delete_group:"是否确定要删除此组?",remove_category:"是否确定要删除此组设置?"},errors:{category_in_use:'"%{category_name}" 已在使用',creating_category_failed:"类别创建失败，请重试",creating_group_failed:"创建组失败",group_limit:"组限制必须为空或大于 1",unknown:"发生意外错误。",update_failed:"更新失败，请重试"},group:{one:"1 个组",other:"%{count} 个组"},group_name:"组名称",loading:"正在加载组清单...",member:{one:"%{count} 个成员",other:"%{count} 个成员"},member_tooltip_hide:"隐藏组清单",member_tooltip_show:"查看组清单",messages:{creating_group:"正在创建组..."},notices:{no_students_assigned:"未分配到组的学生。",students_assigned:"已分配到组的学生。"},status:{assigning_students:"正在分配学生...",creating_groups:"正在创建类别...",updating:"正在更新..."},students_who_have_not_joined_a_group:"未加入组的学生",titles:{self_signup_help:"自行注册组"}}}}})})