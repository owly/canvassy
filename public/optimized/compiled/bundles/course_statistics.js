(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a},d=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},e=[].slice;define("compiled/collections/PaginatedCollection",["Backbone","underscore"],function(b,f){var g,h,i;return h=function(a){return a==null&&(a=""),a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},g=function(b){function g(){return this._setStateAfterFetch=a(this._setStateAfterFetch,this),i=g.__super__.constructor.apply(this,arguments),i}return c(g,b),g.prototype.nameRegex=/rel="([a-z]+)/,g.prototype.linkRegex=/^<([^>]+)/,g.prototype.pageRegex=/\Wpage=(\d+)/,g.prototype.perPageRegex=/\per_page=(\d+)/,g.prototype.parse=function(a,b){var c,e,f;return(c=this._urlCache)==null&&(this._urlCache=[]),(e=this._lastFetchOptions)==null&&(this._lastFetchOptions={}),this._setStateAfterFetch(b,this._lastFetchOptions),(f=this._lastFetchOptions.url,d.call(this._urlCache,f)<0)&&this._urlCache.push(this._lastFetchOptions.url),delete this._lastFetchOptions,g.__super__.parse.apply(this,arguments)},g.prototype.fetch=function(a){var b,c=this;return a==null&&(a={}),b="fetching"+h(a.page)+"Page",this[b]=!0,a.page!=null&&(this.urls!=null&&(a.url=this.urls[a.page]),a.add==null&&(a.add=!0),a.data=""),this._lastFetchOptions=a,this.trigger("beforeFetch",this,a),a.page!=null&&this.trigger("beforeFetch:"+a.page,this,a),g.__super__.fetch.call(this,a).done(function(d,f,g){var h;c[b]=!1,c.trigger("fetch",c,d,a),a.page!=null&&c.trigger("fetch:"+a.page,c,d,a);if((h=c.urls)!=null?!h.next:!void 0)return c.trigger.apply(c,["fetched:last"].concat(e.call(arguments)))})},g.prototype.canFetch=function(a){return this.urls!=null&&this.urls[a]!=null},g.prototype._setStateAfterFetch=function(a,b){var c,e,f,g,h,i,j,k,l,m,n,o,p;return b==null&&(b={}),j=(l=b.url,d.call(this._urlCache,l)<0),c=this.urls==null,g=c||((m=b.page)==="next"||m==="bottom")&&j,h=c||((n=b.page)==="prev"||n==="top")&&j,e=this.urls,this.urls=this._parsePageLinks(a),g&&this.urls.next!=null?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=e.bottom:delete this.urls.bottom,h&&this.urls.prev!=null?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=e.top:delete this.urls.top,i=(o=this.urls.first)!=null?o:this.urls.next,i!=null&&(f=parseInt(i.match(this.perPageRegex)[1],10),((p=(k=this.options).params)!=null?p:k.params={}).per_page=f),this.urls.last&&(this.totalPages=parseInt(this.urls.last.match(this.pageRegex)[1],10)),this.atLeastOnePageFetched=!0},g.prototype._parsePageLinks=function(a){var b,c,d=this;return b=(c=a.getResponseHeader("link"))!=null?c.split(","):void 0,b==null&&(b=[]),f.reduce(b,function(a,b){var c,e;return c=b.match(d.nameRegex)[1],e=b.match(d.linkRegex)[1],a[c]=e,a},{})},g}(b.Collection)})}).call(this),define("translations/user",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{user:{errors:{already_enrolled:"أنت مسجل بالفعل في هذا المساق",course_full:"هذا المساق مكتمل",invalid_code:"كود غير صالح",required:"مطلوب",terms:"يجب أن توافق على الشروط",too_long:"يتعذر تجاوز %{max} حرفًَا"}}},es:{user:{errors:{already_enrolled:"Ya está matriculado en este curso",course_full:"Este curso está lleno",invalid_code:"Código inválido",required:"Obligatorio",terms:"Debe aceptar estos términos",too_long:"No puede exceder de %{max} caracteres"}}},fr:{user:{errors:{already_enrolled:"Vous êtes déjà inscrit à ce cours.",course_full:"Ce cours est complet.",invalid_code:"Code erroné",required:"Requis",terms:"Vous devez accepter les conditions.",too_long:"Ne doit pas dépasser %{max} caractères"}}},ja:{user:{errors:{already_enrolled:"このコースには既に登録されています",course_full:"このコースには空きがありません",invalid_code:"無効なコード",required:"必須",terms:"利用規約に同意する必要があります",too_long:"%{max} 文字以内にしてください"}}},ko:{user:{errors:{already_enrolled:"이 과목에 이미 등록함",course_full:"이 과목은 만원임",invalid_code:"유효하지 않은 코드",required:"필수",terms:"조건에 동의해야 합니다.",too_long:"%{max}글자를 초과할 수 없습니다."}}},nl:{user:{errors:{already_enrolled:"Je bent al ingeschreven voor deze cursus",course_full:"Deze cursus zit vol",invalid_code:"Ongeldige code",required:"Vereist",terms:"Je moet akkoord gaan met de voorwaarden",too_long:"Kan maximum van %{max} tekens niet overschrijden"}}},pt:{user:{errors:{already_enrolled:"Já está inscrito nesta disciplina",course_full:"Esta disciplina está cheia",invalid_code:"Código inválido",required:"Necessário",terms:"Tem de aceitar os termos",too_long:"Não pode exceder %{max} caracteres"}}},ru:{user:{errors:{already_enrolled:"Вы уже зарегистрированы на данном курсе",course_full:"Группа для данного курса набрана",invalid_code:"Неверный код",required:"Требуется",terms:"Вы должны согласиться с условиями",too_long:"Не может превышать %{max} символов"}}},zh:{user:{errors:{already_enrolled:"您已经登记此课程",course_full:"此课程名额已满",invalid_code:"无效的代码",required:"需要",terms:"您必须同意这些条款",too_long:"不能超过 %{max} 个字符"}}}}})}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/models/User",["i18n!user","underscore","Backbone"],function(a,c,d){var e,f;return e=function(d){function e(){return f=e.__super__.constructor.apply(this,arguments),f}return b(e,d),e.prototype.modelType="user",e.prototype.resourceName="users",e.prototype.errorMap={name:{blank:a.t("errors.required","Required"),too_long:a.t("errors.too_long","Can't exceed %{max} characters",{max:255})},self_enrollment_code:{blank:a.t("errors.required","Required"),invalid:a.t("errors.invalid_code","Invalid code"),already_enrolled:a.t("errors.already_enrolled","You are already enrolled in this course"),full:a.t("errors.course_full","This course is full")},terms_of_use:{accepted:a.t("errors.terms","You must agree to the terms")}},e.prototype.enrollments=function(a,b){return c.where(this.get("enrollments"),a,b)},e.prototype.hasEnrollmentType=function(a){return!!this.enrollments({type:a},!0)},e.prototype.hasEnrollmentRole=function(a){return!!this.enrollments({role:a},!0)},e.prototype.findEnrollmentByRole=function(a){return this.enrollments({role:a},!0)},e.prototype.allEnrollmentsByType=function(a){return this.enrollments({type:a})},e.prototype.allEnrollmentsByRole=function(a){return this.enrollments({role:a})},e.prototype.pending=function(a){return c.any(this.get("enrollments"),function(b){var c;return b.role===a&&((c=b.enrollment_state)==="creation_pending"||c==="invited")})},e.prototype.sectionEditableEnrollments=function(){return c.select(this.get("enrollments"),function(a){return!c.include(["DesignerEnrollment","ObserverEnrollment"],a.type)})},e}(d.Model)})}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/collections/UserCollection",["compiled/collections/PaginatedCollection","compiled/models/User"],function(a,c){var d,e;return d=function(a){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,a),d.prototype.model=c,d}(a)})}.call(this),function(){define("compiled/util/registerTemplateCss",[],function(){var a,b,c,d,e,f;return b=window.document,e={},c=function(a,b){return e[a]=b,d()},c.clear=function(){return e={},d()},d=function(){var c,d,f,g,h;f=[];for(h in e)d=e[h],f.push("/* From: "+h+" */"),f.push(d);return c=f.join("\n"),g=a(),"cssText"in g?g.cssText=c:g.appendChild(b.createTextNode(c))},f=null,a=function(){var a,c;if(f){while(a=f.firstChild)f.removeChild(a);return f}return b.createStyleSheet?f=b.createStyleSheet():(c=b.head||b.getElementsByTagName("head")[0],f=b.createElement("style"),c.appendChild(f))},c})}.call(this),define("translations/paginated_view",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{paginated_view:{loading_more_results:"تحميل مزيد من النتائج"}},es:{paginated_view:{loading_more_results:"Cargando más resultados"}},fr:{paginated_view:{loading_more_results:"Chargement de résultats supplémentaires"}},ja:{paginated_view:{loading_more_results:"より多くの結果を読み込んでいます"}},ko:{paginated_view:{loading_more_results:"더 많은 결과 로드"}},nl:{paginated_view:{loading_more_results:"Meer resultaten aan het laden"}},pt:{paginated_view:{loading_more_results:"Carregando mais resultados"}},ru:{paginated_view:{loading_more_results:"Загрузка других результатов"}},zh:{paginated_view:{loading_more_results:"正在加载其他结果"}}}})}),define("translations/course_statistics",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{course_statistics:{unknown:"غير معروف"},time:{event:"%{date} في %{time}"}},es:{course_statistics:{unknown:"desconocido"},time:{event:"%{date} en %{time}"}},fr:{course_statistics:{unknown:"inconnu"},time:{event:"%{date} à %{time}"}},ja:{course_statistics:{unknown:"不明"},time:{event:"%{date} 於  %{time}"}},ko:{course_statistics:{unknown:"알 수 없음"},time:{event:"%{date} %{time}"}},nl:{course_statistics:{unknown:"onbekend"},time:{event:"%{date} om %{time}"}},pt:{course_statistics:{unknown:"desconhecido"},time:{event:"%{date} em %{time}"}},ru:{course_statistics:{unknown:"Неизвестный"},time:{event:"%{date} в %{time}"}},zh:{course_statistics:{unknown:"未知"},time:{event:"%{date} %{time}"}}}})}),define("translations/recent_student",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{recent_student:{last_logged_in:"آخر تسجيل دخول في %{last_login}"}},es:{recent_student:{last_logged_in:"último inicio de sesión en %{last_login}"}},fr:{recent_student:{last_logged_in:"dernière connexion : %{last_login}"}},ja:{recent_student:{last_logged_in:"最終ログイン日時: %{last_login}"}},ko:{recent_student:{last_logged_in:"%{last_login}에 마지막으로 로그인"}},nl:{recent_student:{last_logged_in:"laatst ingelogd %{last_login}"}},pt:{recent_student:{last_logged_in:"último início de sessão em %{last_login}"}},ru:{recent_student:{last_logged_in:"последний вход в систему %{last_login}"}},zh:{recent_student:{last_logged_in:"上次登录时间 %{last_login}"}}}})}),define("jst/PaginatedView",["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!paginated_view"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.PaginatedView=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div class="paginatedView-loading" role="status" aria-live="polite">\n  ',g="Loading more results",h="loading_more_results",i={},j="paginated_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n</div>",f}),arguments[1]("PaginatedView",'.paginatedView-loading {\n  text-align: center;\n  color: #e9e9e9;\n  font-size: 26px;\n  background: url("/images/load.gif") no-repeat 50% 80%;\n  padding-bottom: 56px; }\n'),c.PaginatedView}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/views/PaginatedView",["underscore","jquery","Backbone","jst/PaginatedView"],function(a,c,d,e){var f,g;return f=function(d){function f(){return g=f.__super__.constructor.apply(this,arguments),g}return b(f,d),f.prototype.paginationLoaderTemplate=e,f.prototype.paginationScrollContainer=window,f.prototype.distanceTillFetchNextPage=100,f.prototype.initialize=function(a){var b;return b=f.__super__.initialize.call(this,a),this.fetchOptions=a.fetchOptions,this.startPaginationListener(),this.bindPaginationEvents(),b},f.prototype.render=function(){var a;return a=f.__super__.render.apply(this,arguments),this.collection.fetchingNextPage&&this.showPaginationLoader(),a},f.prototype.showPaginationLoader=function(){var a;return(a=this.$paginationLoader)==null&&(this.$paginationLoader=c(this.paginationLoaderTemplate())),this.placePaginationLoader()},f.prototype.placePaginationLoader=function(){var a;return(a=this.$paginationLoader)!=null?a.insertAfter(this.el):void 0},f.prototype.hidePaginationLoader=function(){var a;return(a=this.$paginationLoader)!=null?a.remove():void 0},f.prototype.distanceToBottom=function(){var a,b;return a=c(this.paginationScrollContainer),b=a[0]===window?c(document).height():a[0].scrollHeight,b-a.scrollTop()-a.height()},f.prototype.startPaginationListener=function(){return c(this.paginationScrollContainer).on("scroll.pagination"+this.cid+", resize.pagination"+this.cid,c.proxy(this.fetchNextPageIfNeeded,this)),this.fetchNextPageIfNeeded()},f.prototype.stopPaginationListener=function(){return c(this.paginationScrollContainer).off(".pagination"+this.cid)},f.prototype.fetchNextPageIfNeeded=function(){var b=this;if(this.collection.fetchingNextPage)return;if(!this.collection.urls||!this.collection.urls.next){this.collection.length&&this.stopPaginationListener();return}return setTimeout(function(){if(c(b.paginationScrollContainer).is(":visible")&&b.distanceToBottom()<b.distanceTillFetchNextPage)return b.collection.fetch(a.extend({page:"next"},b.fetchOptions))},0)},f.prototype.bindPaginationEvents=function(){return this.collection.on("beforeFetch:next",this.showPaginationLoader,this),this.collection.on("fetch:next",this.hidePaginationLoader,this),this.collection.on("all",this.fetchNextPageIfNeeded,this)},f}(d.View)})}.call(this),define("jst/recentStudent",["compiled/handlebars_helpers","i18n!recent_student"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.recentStudent=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<a class="header" href="/courses/',k=c.course_id,g=k||b.course_id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"course_id",{hash:{}})),f+=q(g)+"/users/",k=c.id,g=k||b.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"id",{hash:{}})),f+=q(g)+'">',k=c.name,g=k||b.name,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"name",{hash:{}})),f+=q(g)+'</a>\n<div class="sub_header">',g="last logged in %{last_login}",h="last_logged_in",i={},j="recent_student",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</div>\n",f}),c.recentStudent}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/views/RecentStudents/RecentStudentView",["i18n!course_statistics","jquery","underscore","Backbone","jst/recentStudent"],function(a,c,d,e,f){var g,h;return g=function(d){function e(){return h=e.__super__.constructor.apply(this,arguments),h}return b(e,d),e.prototype.tagName="li",e.prototype.template=f,e.prototype.toJSON=function(){var b,d;return b=this.model.toJSON(),b.last_login!=null?(d=c.fudgeDateForProfileTimezone(new Date(b.last_login),!1),b.last_login=a.t("#time.event","%{date} at %{time}",{date:a.l("#date.formats.short",d),time:a.l("#time.formats.tiny",d)})):b.last_login=a.t("unknown","unknown"),b},e}(e.View)})}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define("compiled/views/RecentStudents/RecentStudentCollectionView",["jquery","underscore","compiled/views/PaginatedView","compiled/views/RecentStudents/RecentStudentView"],function(b,d,e,f){var g,h;return g=function(b){function d(){return this.renderUser=a(this.renderUser,this),this.render=a(this.render,this),h=d.__super__.constructor.apply(this,arguments),h}return c(d,b),d.prototype.initialize=function(a){return this.collection.on("add",this.renderUser),this.collection.on("reset",this.render),this.paginationScrollContainer=this.$el,d.__super__.initialize.apply(this,arguments)},d.prototype.render=function(){var a,b=this;return a=d.__super__.render.apply(this,arguments),this.collection.each(function(a){return b.renderUser(a)}),a},d.prototype.renderUser=function(a){return a.set("course_id",this.collection.course_id,{silent:!0}),this.$el.append((new f({model:a})).render().el)},d}(e)})}.call(this),function(){require(["jquery","compiled/collections/UserCollection","compiled/views/RecentStudents/RecentStudentCollectionView"],function(a,b,c){return a(function(){var d;return a("#reports-tabs").tabs().show(),d=new b,d.url=ENV.RECENT_STUDENTS_URL,d.course_id=ENV.context_asset_string.split("_")[1],d.fetch(),window.app={studentsTab:{}},window.app.studentsTab=new c({el:"#tab-students .item_list",collection:d})})})}.call(this),define("compiled/bundles/course_statistics",function(){})