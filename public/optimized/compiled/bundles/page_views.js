(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a},d=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},e=[].slice;define("compiled/collections/PaginatedCollection",["Backbone","underscore"],function(b,f){var g,h,i;return h=function(a){return a==null&&(a=""),a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},g=function(b){function g(){return this._setStateAfterFetch=a(this._setStateAfterFetch,this),i=g.__super__.constructor.apply(this,arguments),i}return c(g,b),g.prototype.nameRegex=/rel="([a-z]+)/,g.prototype.linkRegex=/^<([^>]+)/,g.prototype.pageRegex=/\Wpage=(\d+)/,g.prototype.perPageRegex=/\per_page=(\d+)/,g.prototype.parse=function(a,b){var c,e,f;return(c=this._urlCache)==null&&(this._urlCache=[]),(e=this._lastFetchOptions)==null&&(this._lastFetchOptions={}),this._setStateAfterFetch(b,this._lastFetchOptions),(f=this._lastFetchOptions.url,d.call(this._urlCache,f)<0)&&this._urlCache.push(this._lastFetchOptions.url),delete this._lastFetchOptions,g.__super__.parse.apply(this,arguments)},g.prototype.fetch=function(a){var b,c=this;return a==null&&(a={}),b="fetching"+h(a.page)+"Page",this[b]=!0,a.page!=null&&(this.urls!=null&&(a.url=this.urls[a.page]),a.add==null&&(a.add=!0),a.data=""),this._lastFetchOptions=a,this.trigger("beforeFetch",this,a),a.page!=null&&this.trigger("beforeFetch:"+a.page,this,a),g.__super__.fetch.call(this,a).done(function(d,f,g){var h;c[b]=!1,c.trigger("fetch",c,d,a),a.page!=null&&c.trigger("fetch:"+a.page,c,d,a);if((h=c.urls)!=null?!h.next:!void 0)return c.trigger.apply(c,["fetched:last"].concat(e.call(arguments)))})},g.prototype.canFetch=function(a){return this.urls!=null&&this.urls[a]!=null},g.prototype._setStateAfterFetch=function(a,b){var c,e,f,g,h,i,j,k,l,m,n,o,p;return b==null&&(b={}),j=(l=b.url,d.call(this._urlCache,l)<0),c=this.urls==null,g=c||((m=b.page)==="next"||m==="bottom")&&j,h=c||((n=b.page)==="prev"||n==="top")&&j,e=this.urls,this.urls=this._parsePageLinks(a),g&&this.urls.next!=null?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=e.bottom:delete this.urls.bottom,h&&this.urls.prev!=null?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=e.top:delete this.urls.top,i=(o=this.urls.first)!=null?o:this.urls.next,i!=null&&(f=parseInt(i.match(this.perPageRegex)[1],10),((p=(k=this.options).params)!=null?p:k.params={}).per_page=f),this.urls.last&&(this.totalPages=parseInt(this.urls.last.match(this.pageRegex)[1],10)),this.atLeastOnePageFetched=!0},g.prototype._parsePageLinks=function(a){var b,c,d=this;return b=(c=a.getResponseHeader("link"))!=null?c.split(","):void 0,b==null&&(b=[]),f.reduce(b,function(a,b){var c,e;return c=b.match(d.nameRegex)[1],e=b.match(d.linkRegex)[1],a[c]=e,a},{})},g}(b.Collection)})}).call(this),define("translations/user",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{user:{errors:{already_enrolled:"أنت مسجل بالفعل في هذا المساق",course_full:"هذا المساق مكتمل",invalid_code:"كود غير صالح",required:"مطلوب",terms:"يجب أن توافق على الشروط",too_long:"يتعذر تجاوز %{max} حرفًَا"}}},es:{user:{errors:{already_enrolled:"Ya está matriculado en este curso",course_full:"Este curso está lleno",invalid_code:"Código inválido",required:"Obligatorio",terms:"Debe aceptar estos términos",too_long:"No puede exceder de %{max} caracteres"}}},fr:{user:{errors:{already_enrolled:"Vous êtes déjà inscrit à ce cours.",course_full:"Ce cours est complet.",invalid_code:"Code erroné",required:"Requis",terms:"Vous devez accepter les conditions.",too_long:"Ne doit pas dépasser %{max} caractères"}}},ja:{user:{errors:{already_enrolled:"このコースには既に登録されています",course_full:"このコースには空きがありません",invalid_code:"無効なコード",required:"必須",terms:"利用規約に同意する必要があります",too_long:"%{max} 文字以内にしてください"}}},ko:{user:{errors:{already_enrolled:"이 과목에 이미 등록함",course_full:"이 과목은 만원임",invalid_code:"유효하지 않은 코드",required:"필수",terms:"조건에 동의해야 합니다.",too_long:"%{max}글자를 초과할 수 없습니다."}}},nl:{user:{errors:{already_enrolled:"Je bent al ingeschreven voor deze cursus",course_full:"Deze cursus zit vol",invalid_code:"Ongeldige code",required:"Vereist",terms:"Je moet akkoord gaan met de voorwaarden",too_long:"Kan maximum van %{max} tekens niet overschrijden"}}},pt:{user:{errors:{already_enrolled:"Já está inscrito nesta disciplina",course_full:"Esta disciplina está cheia",invalid_code:"Código inválido",required:"Necessário",terms:"Tem de aceitar os termos",too_long:"Não pode exceder %{max} caracteres"}}},ru:{user:{errors:{already_enrolled:"Вы уже зарегистрированы на данном курсе",course_full:"Группа для данного курса набрана",invalid_code:"Неверный код",required:"Требуется",terms:"Вы должны согласиться с условиями",too_long:"Не может превышать %{max} символов"}}},zh:{user:{errors:{already_enrolled:"您已经登记此课程",course_full:"此课程名额已满",invalid_code:"无效的代码",required:"需要",terms:"您必须同意这些条款",too_long:"不能超过 %{max} 个字符"}}}}})}),function(){define("compiled/util/registerTemplateCss",[],function(){var a,b,c,d,e,f;return b=window.document,e={},c=function(a,b){return e[a]=b,d()},c.clear=function(){return e={},d()},d=function(){var c,d,f,g,h;f=[];for(h in e)d=e[h],f.push("/* From: "+h+" */"),f.push(d);return c=f.join("\n"),g=a(),"cssText"in g?g.cssText=c:g.appendChild(b.createTextNode(c))},f=null,a=function(){var a,c;if(f){while(a=f.firstChild)f.removeChild(a);return f}return b.createStyleSheet?f=b.createStyleSheet():(c=b.head||b.getElementsByTagName("head")[0],f=b.createElement("style"),c.appendChild(f))},c})}.call(this),define("translations/paginated_view",["i18nObj","jquery"],function(a,b){b.extend(!0,a,{translations:{ar:{paginated_view:{loading_more_results:"تحميل مزيد من النتائج"}},es:{paginated_view:{loading_more_results:"Cargando más resultados"}},fr:{paginated_view:{loading_more_results:"Chargement de résultats supplémentaires"}},ja:{paginated_view:{loading_more_results:"より多くの結果を読み込んでいます"}},ko:{paginated_view:{loading_more_results:"더 많은 결과 로드"}},nl:{paginated_view:{loading_more_results:"Meer resultaten aan het laden"}},pt:{paginated_view:{loading_more_results:"Carregando mais resultados"}},ru:{paginated_view:{loading_more_results:"Загрузка других результатов"}},zh:{paginated_view:{loading_more_results:"正在加载其他结果"}}}})}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/models/PageView",["i18n!user","underscore","Backbone","compiled/str/TextHelper","jquery.instructure_misc_helpers"],function(a,c,d,e){var f,g,h;return g=e.truncateText,f=function(a){function c(){return h=c.__super__.constructor.apply(this,arguments),h}return b(c,a),c.prototype.computedAttributes=["summarizedUserAgent","readableInteractionTime","truncatedURL","isLinkable"],c.prototype.isLinkable=function(){var a;return a=this.get("http_method"),a==null?!0:a==="get"},c.prototype.summarizedUserAgent=function(){return $.parseUserAgentString(this.get("user_agent"))},c.prototype.readableInteractionTime=function(){var a;return a=this.get("interaction_seconds"),a>5?Math.round(a):"--"},c.prototype.truncatedURL=function(){return g(this.get("url"),{max:90})},c}(d.Model)})}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/collections/PageViewCollection",["compiled/collections/PaginatedCollection","compiled/models/PageView"],function(a,c){var d,e;return d=function(a){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,a),d.prototype.model=c,d}(a)})}.call(this),define("jst/PaginatedView",["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!paginated_view"],function(a){var b=a.template,c=a.templates=a.templates||{};return c.PaginatedView=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div class="paginatedView-loading" role="status" aria-live="polite">\n  ',g="Loading more results",h="loading_more_results",i={},j="paginated_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n</div>",f}),arguments[1]("PaginatedView",'.paginatedView-loading {\n  text-align: center;\n  color: #e9e9e9;\n  font-size: 26px;\n  background: url("/images/load.gif") no-repeat 50% 80%;\n  padding-bottom: 56px; }\n'),c.PaginatedView}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/views/PaginatedView",["underscore","jquery","Backbone","jst/PaginatedView"],function(a,c,d,e){var f,g;return f=function(d){function f(){return g=f.__super__.constructor.apply(this,arguments),g}return b(f,d),f.prototype.paginationLoaderTemplate=e,f.prototype.paginationScrollContainer=window,f.prototype.distanceTillFetchNextPage=100,f.prototype.initialize=function(a){var b;return b=f.__super__.initialize.call(this,a),this.fetchOptions=a.fetchOptions,this.startPaginationListener(),this.bindPaginationEvents(),b},f.prototype.render=function(){var a;return a=f.__super__.render.apply(this,arguments),this.collection.fetchingNextPage&&this.showPaginationLoader(),a},f.prototype.showPaginationLoader=function(){var a;return(a=this.$paginationLoader)==null&&(this.$paginationLoader=c(this.paginationLoaderTemplate())),this.placePaginationLoader()},f.prototype.placePaginationLoader=function(){var a;return(a=this.$paginationLoader)!=null?a.insertAfter(this.el):void 0},f.prototype.hidePaginationLoader=function(){var a;return(a=this.$paginationLoader)!=null?a.remove():void 0},f.prototype.distanceToBottom=function(){var a,b;return a=c(this.paginationScrollContainer),b=a[0]===window?c(document).height():a[0].scrollHeight,b-a.scrollTop()-a.height()},f.prototype.startPaginationListener=function(){return c(this.paginationScrollContainer).on("scroll.pagination"+this.cid+", resize.pagination"+this.cid,c.proxy(this.fetchNextPageIfNeeded,this)),this.fetchNextPageIfNeeded()},f.prototype.stopPaginationListener=function(){return c(this.paginationScrollContainer).off(".pagination"+this.cid)},f.prototype.fetchNextPageIfNeeded=function(){var b=this;if(this.collection.fetchingNextPage)return;if(!this.collection.urls||!this.collection.urls.next){this.collection.length&&this.stopPaginationListener();return}return setTimeout(function(){if(c(b.paginationScrollContainer).is(":visible")&&b.distanceToBottom()<b.distanceTillFetchNextPage)return b.collection.fetch(a.extend({page:"next"},b.fetchOptions))},0)},f.prototype.bindPaginationEvents=function(){return this.collection.on("beforeFetch:next",this.showPaginationLoader,this),this.collection.on("fetch:next",this.hidePaginationLoader,this),this.collection.on("all",this.fetchNextPageIfNeeded,this)},f}(d.View)})}.call(this),define("jst/contexts/PageView",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["contexts/PageView"]=b(function(a,b,c,d,e){function q(a,b){var d="",e;return d+='\n      <a href="',j=c.url,e=j||a.url,typeof e===m?e=e.call(a,{hash:{}}):e===o&&(e=n.call(a,"url",{hash:{}})),d+=p(e)+'">',j=c.truncatedURL,e=j||a.truncatedURL,typeof e===m?e=e.call(a,{hash:{}}):e===o&&(e=n.call(a,"truncatedURL",{hash:{}})),d+=p(e)+"</a>\n    ",d}function r(a,b){var d="",e;return d+="\n      ",j=c.truncatedURL,e=j||a.truncatedURL,typeof e===m?e=e.call(a,{hash:{}}):e===o&&(e=n.call(a,"truncatedURL",{hash:{}})),d+=p(e)+"\n    ",d}function s(a,b){return'<img src="/images/checked.png" width=12 />'}c=c||a.helpers;var f="",g,h,i,j,k,l=this,m="function",n=c.helperMissing,o=void 0,p=this.escapeExpression;f+="<tr>\n\n  <td>\n    ",j=c.isLinkable,g=j||b.isLinkable,h=c["if"],k=l.program(1,q,e),k.hash={},k.fn=k,k.inverse=l.program(3,r,e),g=h.call(b,g,k);if(g||g===0)f+=g;f+="\n  </td>\n\n  <td>",g="date_at_time",j=c.created_at,h=j||b.created_at,j=c.tDateToString,i=j||b.tDateToString,typeof i===m?g=i.call(b,h,g,{hash:{}}):i===o?g=n.call(b,"tDateToString",h,g,{hash:{}}):g=i,f+=p(g)+"</td>\n  <td>",j=c.participated,g=j||b.participated,h=c["if"],k=l.program(5,s,e),k.hash={},k.fn=k,k.inverse=l.noop,g=h.call(b,g,k);if(g||g===0)f+=g;return f+="</td>\n  <td>",j=c.readableInteractionTime,g=j||b.readableInteractionTime,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"readableInteractionTime",{hash:{}})),f+=p(g)+'</td>\n  <td title="',j=c.user_agent,g=j||b.user_agent,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"user_agent",{hash:{}})),f+=p(g)+'" class="user_agent">',j=c.summarizedUserAgent,g=j||b.summarizedUserAgent,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"summarizedUserAgent",{hash:{}})),f+=p(g)+"</td>\n</tr>\n\n",f}),c["contexts/PageView"]}),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define("compiled/views/contexts/PageViewView",["jquery","underscore","compiled/views/PaginatedView","jst/contexts/PageView"],function(a,c,d,e){var f,g;return f=function(a){function d(){return g=d.__super__.constructor.apply(this,arguments),g}return b(d,a),d.prototype.initialize=function(a){var b;return b=a.fetchOptions,this.paginationScrollContainer=this.$el.parent(),d.__super__.initialize.call(this,{fetchOptions:b})},d.prototype.render=function(){var a;return a=c.map(this.collection.models,this.renderPageView),this.$el.append(a.join("")),d.__super__.render.apply(this,arguments)},d.prototype.renderPageView=function(a){return e(a.toJSON())},d}(d)})}.call(this),function(){require(["jquery","compiled/collections/PageViewCollection","compiled/views/contexts/PageViewView"],function(a,b,c){var d,e,f,g,h,i,j;return d=a("#pageviews"),e=d.find("table"),j=e.data("userId"),h=new b,h.url="/api/v1/users/"+j+"/page_views",f={add:!1},i=new c({collection:h,el:e,fetchOptions:f}),h.on("reset",i.render,i),g={per_page:100},i.$el.disableWhileLoading(h.fetch({data:g}))})}.call(this),define("compiled/bundles/page_views",function(){})