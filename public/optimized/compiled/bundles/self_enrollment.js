define("translations/user",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{user:{errors:{already_enrolled:"أنت مسجل بالفعل في هذا المساق",course_full:"هذا المساق مكتمل",invalid_code:"كود غير صالح",required:"مطلوب",terms:"يجب أن توافق على الشروط",too_long:"يتعذر تجاوز %{max} حرفًَا"}}},es:{user:{errors:{already_enrolled:"Ya está matriculado en este curso",course_full:"Este curso está lleno",invalid_code:"Código inválido",required:"Obligatorio",terms:"Debe aceptar estos términos",too_long:"No puede exceder de %{max} caracteres"}}},fr:{user:{errors:{already_enrolled:"Vous êtes déjà inscrit à ce cours.",course_full:"Ce cours est complet.",invalid_code:"Code erroné",required:"Requis",terms:"Vous devez accepter les conditions.",too_long:"Ne doit pas dépasser %{max} caractères"}}},ja:{user:{errors:{already_enrolled:"このコースには既に登録されています",course_full:"このコースには空きがありません",invalid_code:"無効なコード",required:"必須",terms:"利用規約に同意する必要があります",too_long:"%{max} 文字以内にしてください"}}},ko:{user:{errors:{already_enrolled:"이 과목에 이미 등록함",course_full:"이 과목은 만원임",invalid_code:"유효하지 않은 코드",required:"필수",terms:"조건에 동의해야 합니다.",too_long:"%{max}글자를 초과할 수 없습니다."}}},nl:{user:{errors:{already_enrolled:"Je bent al ingeschreven voor deze cursus",course_full:"Deze cursus zit vol",invalid_code:"Ongeldige code",required:"Vereist",terms:"Je moet akkoord gaan met de voorwaarden",too_long:"Kan maximum van %{max} tekens niet overschrijden"}}},pt:{user:{errors:{already_enrolled:"Já está inscrito nesta disciplina",course_full:"Esta disciplina está cheia",invalid_code:"Código inválido",required:"Necessário",terms:"Tem de aceitar os termos",too_long:"Não pode exceder %{max} caracteres"}}},ru:{user:{errors:{already_enrolled:"Вы уже зарегистрированы на данном курсе",course_full:"Группа для данного курса набрана",invalid_code:"Неверный код",required:"Требуется",terms:"Вы должны согласиться с условиями",too_long:"Не может превышать %{max} символов"}}},zh:{user:{errors:{already_enrolled:"您已经登记此课程",course_full:"此课程名额已满",invalid_code:"无效的代码",required:"需要",terms:"您必须同意这些条款",too_long:"不能超过 %{max} 个字符"}}}}})}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/models/User",["i18n!user","underscore","Backbone"],function(a,c,d){var e,f;return e=function(d){function e(){return f=e.__super__.constructor.apply(this,arguments),f}return b(e,d),e.prototype.modelType="user",e.prototype.resourceName="users",e.prototype.errorMap={name:{blank:a.t("errors.required","Required"),too_long:a.t("errors.too_long","Can't exceed %{max} characters",{max:255})},self_enrollment_code:{blank:a.t("errors.required","Required"),invalid:a.t("errors.invalid_code","Invalid code"),already_enrolled:a.t("errors.already_enrolled","You are already enrolled in this course"),full:a.t("errors.course_full","This course is full")},terms_of_use:{accepted:a.t("errors.terms","You must agree to the terms")}},e.prototype.enrollments=function(a,b){return c.where(this.get("enrollments"),a,b)},e.prototype.hasEnrollmentType=function(a){return!!this.enrollments({type:a},!0)},e.prototype.hasEnrollmentRole=function(a){return!!this.enrollments({role:a},!0)},e.prototype.findEnrollmentByRole=function(a){return this.enrollments({role:a},!0)},e.prototype.allEnrollmentsByType=function(a){return this.enrollments({type:a})},e.prototype.allEnrollmentsByRole=function(a){return this.enrollments({role:a})},e.prototype.pending=function(a){return c.any(this.get("enrollments"),function(b){var c;return b.role===a&&((c=b.enrollment_state)==="creation_pending"||c==="invited")})},e.prototype.sectionEditableEnrollments=function(){return c.select(this.get("enrollments"),function(a){return!c.include(["DesignerEnrollment","ObserverEnrollment"],a.type)})},e}(d.Model)})}.call(this),define("translations/pseudonym",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{pseudonym:{errors:{bad_credentials:"اسم مستخدم غير صالح أو كلمة مرور غير صالحة",common:'لا يمكن استخدام كلمات المرور الشائعة (مثل "password")',invalid:"قد يشمل فقط الحروف الأبجدية أو الأرقام أو ما يلي: %{characters}",mismatch:"لا يطابق",not_email:"عنوان بريد إلكتروني غير صالح",repeated:"لا يمكن استخدام نفس الحرف أكثر من %{max} مرة في الصف الواحد",required:"مطلوب",sequence:"لا يمكن تضمين سلسلة من أكثر من %{max} حرفًا (مثل abcdef)",taken:"البريد الإلكتروني قيد الاستخدام بالفعل",too_long:"لا يمكن أن يتجاوز %{max} حرفًا",too_short:"يجب أن يكون %{min} حرفًا على الأقل"}}},es:{pseudonym:{errors:{bad_credentials:"Nombre de usuario o contraseña inválido",common:'No se pueden usar contraseñas habituales (p. ej. "contraseña")',invalid:"Solo puede contener letras, números, o los siguientes caracteres: %{characters}",mismatch:"No coincide",not_email:"No es una dirección de correo electrónico válida",repeated:"No puede tener el mismo carácter más de %{max} veces consecutivas",required:"Obligatorio",sequence:"No puede incluir una serie ordenada de más de %{max} caracteres (p. ej. abcdef)",taken:"El correo electrónico ya está en uso",too_long:"No puede superar los %{max} caracteres",too_short:"Debe contener al menos %{min} caracteres"}}},fr:{pseudonym:{errors:{bad_credentials:"Nom d’utilisateur ou mot de passe erroné",common:"Vous ne pouvez pas utiliser de mots de passe communs (par exemple « password »)",invalid:"Il peut uniquement contenir des lettres, chiffres ou les caractères suivants : %{characters}",mismatch:"Ne correspond pas",not_email:"Cette adresse de messagerie n’est pas valide.",repeated:"Vous ne pouvez pas utiliser plus de %{max} fois un même caractère dans une ligne",required:"Requis",sequence:"Vous ne pouvez pas utiliser de chaîne de plus de %{max} caractères (par exemple abcdef)",taken:"E-mail déjà utilisé",too_long:"Ne doit pas dépasser %{max} caractères",too_short:"Doit contenir au moins %{min} caractères"}}},ja:{pseudonym:{errors:{bad_credentials:"無効なユーザ名またはパスワード",common:'よくあるパスワードは使用できません (例: "password")',invalid:"文字、数字、次の文字だけを使用できます: %{characters}",mismatch:"一致しません",not_email:"有効な電子メール アドレスではありません",repeated:"同じ文字を連続して指定できるのは %{max} 回までです",required:"必須",sequence:"連続する文字を指定できるのは %{max} 文字までです (例: abcdef)",taken:"電子メールは既に使用されています",too_long:"%{max} 文字以内にしてください",too_short:"%{min} 文字以上にしてください"}}},ko:{pseudonym:{errors:{bad_credentials:"유효하지 않은 사용자 이름이나 암호",common:'일반적인 암호를 사용할 수 없음 (예: "password")',invalid:"문자, 숫자 및 다음 글자만 포함할 수 있음: %{characters}",mismatch:"일치하지 않음",not_email:"유효한 이메일 주소가 아님",repeated:"한 행에 같은 글자가 %{max}회 이상 나올 수 없음",required:"필수",sequence:"연속된 %{max} 글자 이상을 포함할 수 없음 (예: abcdef)",taken:"이미 사용 중인 이메일",too_long:"%{max}글자를 초과할 수 없음",too_short:"%{min}글자 이상 되어야 함"}}},nl:{pseudonym:{errors:{bad_credentials:"Ongeldige gebruikersnaam en wachtwoord",common:'Kan geen algemene wachtwoorden gebruiken (bijv. "wachtwoord")',invalid:"Mag alleen letters, cijfers of deze symbolen (%{characters}) bevatten.",mismatch:"Komt niet overeen",not_email:"Geen geldig e-mailadres",repeated:"Kan hetzelfde teken niet vaker dan %{max} keer achter elkaar gebruiken",required:"Vereist",sequence:"Kan niet meer dan %{max} opeenvolgende karakters gebruiken (bijv. abcdef)",taken:"E-mail is al in gebruik",too_long:"Kan maximum van %{max} tekens niet overschrijden.",too_short:"Moet minstens %{min} tekens bevatten"}}},pt:{pseudonym:{errors:{bad_credentials:"Nome de utilizador ou palavra-passe inválidos",common:'Não pode utilizar palavras-passe comuns (ex.: "palavra-passe")',invalid:"Só pode conter letras, números ou os seguintes caracteres: %{characters}",mismatch:"Não corresponde",not_email:"Não é um endereço de e-mail válido",repeated:"Não pode ter o mesmo caráter mais de %{max} vezes por linha",required:"Necessário",sequence:"Não pode incluir uma sequência com mais de %{max} carateres (ex.: abcdef)",taken:"O e-mail já está a ser utilizado",too_long:"Não pode exceder %{max} caracteres",too_short:"Tem de ter pelo menos %{min} caracteres"}}},ru:{pseudonym:{errors:{bad_credentials:"Неверное имя пользователя или пароль",common:"Нельзя использовать распространенные пароли (например «пароль»)",invalid:"Может содержать только буквы, цифры или следующее: %{characters}",mismatch:"Не соответствует",not_email:"Электронный адрес недействителен",repeated:"Число одинаковых символов не должно превышать %{max} подряд",required:"Требуется",sequence:"Нельзя включать последовательности символов больше %{max} букв (например abcdef)",taken:"Электронный адрес уже используется",too_long:"Не может превышать %{max}символов",too_short:"Должно быть не менее %{min} символов"}}},zh:{pseudonym:{errors:{bad_credentials:"用户名或密码无效",common:"不能使用常见密码（例如“password”）",invalid:"只能包含字母、数字或以下字符: %{characters}",mismatch:"不匹配",not_email:"不是有效的电子邮件地址",repeated:"一行中使用同一字符的次数不能超过 %{max} 次",required:"需要",sequence:"不能包括超过 %{max} 个字符的一连串字符（例如 abcdef）",taken:"这个电子邮件已被使用",too_long:"不能超过 %{max} 个字符",too_short:"必须至少包含 %{min} 个字符"}}}}})}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/models/Pseudonym",["i18n!pseudonym","Backbone"],function(a,c){var d,e;return d=function(c){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,c),d.prototype.errorMap=function(b){return{unique_id:{too_short:a.t("errors.required","Required"),too_long:a.t("errors.too_long","Can't exceed %{max} characters",{max:100}),invalid:a.t("errors.invalid","May only contain letters, numbers, or the following: %{characters}",{characters:". + - _ @ ="}),taken:a.t("errors.taken","Email already in use"),bad_credentials:a.t("errors.bad_credentials","Invalid username or password"),not_email:a.t("errors.not_email","Not a valid email address")},sis_user_id:{too_long:a.t("errors.too_long","Can't exceed %{max} characters",{max:255})},password:{too_short:a.t("errors.too_short","Must be at least %{min} characters",{min:b.min_length}),sequence:a.t("errors.sequence","Can't incude a run of more than %{max} characters (e.g. abcdef)",{max:b.max_sequence}),common:a.t("errors.common",'Can\'t use common passwords (e.g. "password")'),repeated:a.t("errors.repeated","Can't have the same character more than %{max} times in a row",{max:b.max_repeats}),confirmation:a.t("errors.mismatch","Doesn't match")}}},d.prototype.normalizeErrors=function(a,b){var c,e,f,g,h,i,j,k,l,m;if(a){k=["unique_id","password"];for(g=0,i=k.length;g<i;g++){f=k[g];if(!(((l=a[f])!=null?l.length:void 0)>1))continue;e=null,m=a[f];for(h=0,j=m.length;h<j;h++)c=m[h],c.type==="too_short"&&(e=c);e&&(a[f]=[e])}}return d.__super__.normalizeErrors.call(this,a,b)},d}(c.Model)})}.call(this),function(){define("compiled/object/flatten",[],function(){var a;return a=function(b,c,d,e){var f,g,h;c==null&&(c={}),d==null&&(d={});for(g in b)h=b[g],g=e?""+e+"["+g+"]":g,f=typeof h=="object",h.length!=null&&c.arrays===!1&&(f=!1),f?a(h,c,d,g):d[g]=h;return d}})}.call(this),function(){define("compiled/registration/registrationErrors",["compiled/models/User","compiled/models/Pseudonym","compiled/object/flatten"],function(a,b,c){var d;return d=function(d,e){return e==null&&(e=ENV.PASSWORD_POLICY),c({user:a.prototype.normalizeErrors(d.user),pseudonym:b.prototype.normalizeErrors(d.pseudonym,e),observee:b.prototype.normalizeErrors(d.observee,e)},{arrays:!1})}})}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define("compiled/views/registration/SelfEnrollmentForm",["jquery","underscore","Backbone","i18n!registration","compiled/registration/registrationErrors","jquery.instructure_forms","jquery.ajaxJSON"],function(b,d,e,f,g){var h,i;return h=function(d){function e(){return this.logOutAndRefresh=a(this.logOutAndRefresh,this),this.logOut=a(this.logOut,this),this.enroll=a(this.enroll,this),this.enrollErrors=a(this.enrollErrors,this),this.errorFormatter=a(this.errorFormatter,this),this.normalizeData=a(this.normalizeData,this),this.success=a(this.success,this),this.beforeSubmit=a(this.beforeSubmit,this),this.changeAction=a(this.changeAction,this),i=e.__super__.constructor.apply(this,arguments),i}return c(e,d),e.prototype.events={"change input[name=initial_action]":"changeAction","click #logout_link":"logOutAndRefresh"},e.prototype.initialize=function(a){return this.options=a!=null?a:{},this.enrollUrl=this.$el.attr("action"),this.action=this.initialAction=this.$el.find("input[type=hidden][name=initial_action]").val(),this.$el.formSubmit({beforeSubmit:this.beforeSubmit,success:this.success,errorFormatter:this.errorFormatter,disableWhileLoading:"spin_on_success"})},e.prototype.changeAction=function(a){return this.action=b(a.target).val(),this.$el.find(".user_info").hide(),this.$el.find("#"+this.action+"_user_info").show(),this.$el.find("#submit_button").css({visibility:"visible"})},e.prototype.beforeSubmit=function(a){return this.action?this.options.confirmEnrollmentUrl&&this.action==="enroll"?(window.location=this.options.confirmEnrollmentUrl,!1):(this.normalizeData(a),this.$el.attr("action",function(){switch(this.action){case"create":return"/users";case"log_in":return"/login";case"enroll":return this.enrollUrl}}.call(this))):!1},e.prototype.success=function(a){var b;return this.action==="enroll"?(b=window.location.search,b=b?""+b+"&":"?",b+="enrolled=1",this.initialAction==="create"&&(b+="&just_created=1"),window.location.search=b):this.enroll()},e.prototype.normalizeData=function(a){var b,c;return this.action==="log_in"&&(a["pseudonym_session[unique_id]"]=(b=a["pseudonym[unique_id]"])!=null?b:"",a["pseudonym_session[password]"]=(c=a["pseudonym[password]"])!=null?c:""),a},e.prototype.errorFormatter=function(a){var b;return b=function(){switch(this.action){case"create":return g(a);case"log_in":return this.loginErrors(a);case"enroll":return this.enrollErrors(g(a))}}.call(this),b},e.prototype.loginErrors=function(a){var b;return a=a.base,b=a[a.length-1].message,{"pseudonym[password]":b}},e.prototype.enrollErrors=function(a){var b;return a["user[self_enrollment_code]"]&&((b=a["pseudonym[unique_id]"])==null&&(a["pseudonym[unique_id]"]=[]),a["pseudonym[unique_id]"].push(a["user[self_enrollment_code]"][0]),delete a["user[self_enrollment_code]"]),this.action=this.initialAction,this.logOut(),a},e.prototype.enroll=function(){return this.action="enroll",this.$el.submit()},e.prototype.logOut=function(a){return a==null&&(a=!1),b.ajaxJSON("/logout","POST",{},function(){if(a)return location.reload(!0)})},e.prototype.logOutAndRefresh=function(a){return a.preventDefault(),this.logOut(!0)},e}(e.View)})}.call(this),function(){require(["jquery","compiled/views/registration/SelfEnrollmentForm"],function(a,b){var c,d;return c=a.extend({},(d=ENV.SELF_ENROLLMENT_OPTIONS)!=null?d:{},{el:"#enroll_form"}),new b(c)})}.call(this),define("compiled/bundles/self_enrollment",function(){})