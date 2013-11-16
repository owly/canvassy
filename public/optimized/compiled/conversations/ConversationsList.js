(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!conversations.conversations_list","compiled/widget/ScrollableList","compiled/conversations/Conversation","jst/conversations/conversationItem","jquery.instructure_date_and_time"],function(b,d,e,f){return function(d){function g(b,c){var d=this;this.pane=b,this.conversationItem=a(this.conversationItem,this),this.clicked=a(this.clicked,this),this.loaded=a(this.loaded,this),this.triggerConversationAction=a(this.triggerConversationAction,this),this.app=this.pane.app,this.$empty=this.pane.$pane.find("#no_messages"),g.__super__.constructor.call(this,c,{model:e,itemTemplate:this.conversationItem,elementHeight:76,itemIdsKey:"conversation_ids",itemsKey:"conversations",sortKey:"last_message_at",sortDir:"desc",baseUrl:"/conversations?include_all_conversation_ids=1",noAutoLoad:!0}),$("#menu-wrapper").on("click","a.standard_action",this.triggerConversationAction),this.$list.on("click","li[data-id] > a.standard_action",this.triggerConversationAction),this.$list.on("click","button.al-trigger",this.pane.filterMenu.bind(this.pane)),$(window).unload(function(){return clearTimeout(d.markAsUnread)})}return c(g,d),g.prototype.triggerConversationAction=function(a){return a.preventDefault(),this.pane.action($(a.currentTarget),{method:"PUT"})},g.prototype.baseData=function(){return{scope:this.scope,filter:this.filters}},g.prototype.load=function(a,b){var c,d=this;return this.scope=a.scope,this.filters=(c=a.filter)!=null?c:[],g.__super__.load.call(this,{sortKey:""+this.lastMessageKey()+"_at",params:this.baseData(),force:a.force,loadId:a.id,cb:function(){return d.emptyCheck(),typeof b=="function"?b():void 0}})},g.prototype.loaded=function(a,b,c){return a&&b==null?this.app.updateHashData({id:null}):this.activate(b,c)},g.prototype.added=function(a,b){return this.$empty.hide()},g.prototype.updated=function(a,b){var c=this;this.emptyCheck();if(this.isActive(a.id)&&a.get("workflow_state")==="unread")return this.markAsUnread=setTimeout(function(){if(!c.isActive(a.id)||!c.$item(a.id))return;return a.inboxAction({method:"PUT",data:{conversation:{workflow_state:"read"}},success:function(a){return a.defer_visibility_check=!0}})},2e3)},g.prototype.removed=function(a,b){this.emptyCheck();if(this.isActive(a.id))return this.activate(null)},g.prototype.clicked=function(a){if(!$(a.target).closest(".admin-links").length)return this.select($(a.currentTarget).data("id"))},g.prototype.lastMessageKey=function(){return this.scope==="sent"?"last_authored_message":"last_message"},g.prototype.emptyCheck=function(){var a,c,d,e;return d=this.app.filterNameMap,e=function(){switch(this.scope){case"unread":return b.t("no_unread_messages","You have no unread messages");case"starred":return b.t("no_starred_messages","You have no starred messages");case"sent":return b.t("no_sent_messages","You have no sent messages");case"archived":return b.t("no_archived_messages","You have no archived messages");default:return b.t("no_messages","You have no messages")}}.call(this),a=function(){var a,b,e,f;e=this.filters,f=[];for(a=0,b=e.length;a<b;a++)c=e[a],d[c]&&f.push(d[c]);return f}.call(this),a.length&&(e+=" ("+a.join(", ")+")"),this.$empty.text(e),this.$empty.showIf(!this.$items().length)},g.prototype.select=function(a,b){b==null&&(b=!0),this.ensureSelected(a,b);if(b)return this.app.updateHashData({id:a})},g.prototype.isActive=function(a){return this.active&&this.active.id===a},g.prototype.deactivate=function(){var a,b;if(!this.active||!(a=this.item(this.active.id)))return;return delete this.active,(b=this.$item(a.id))!=null&&b.removeClass("selected"),a.get("visible")||this.removeItem(a),clearTimeout(this.markAsUnread)},g.prototype.ensureSelected=function(a,b){var c;b==null&&(b=!0),b?(this.selected=[],this.$items().removeClass("selected"),this.isActive(a)||this.deactivate()):(c=this.selected)==null&&(this.selected=[]);if(a!=null)return this.$item(a).addClass("selected"),this.selected.push(a)},g.prototype.activate=function(a,b){var c=this;if(a&&this.isActive(a!=null?a.id:void 0)){this.app.deselectMessages();return}return this.ensureSelected(a!=null?a.id:void 0),this.active=a,this.app.loadConversation(this.active,b,function(){if(b!=null?b.hasClass("unread"):void 0)return b.removeClass("read unread archived").addClass("read")})},g.prototype.conversationItem=function(a){var b,c,d,e,g,h,i;c=$.extend({},a.toJSON());if(c.participants){i=c.participants;for(g=0,h=i.length;g<h;g++)e=i[g],this.app.userCache[e.id]||(this.app.userCache[e.id]=e)}return c.audience&&(c.audienceHtml=this.app.htmlAudience(c,{highlightFilters:!0}),this.isActive(c.id)&&this.app.formPane.refresh()),c.lastMessage=c[this.lastMessageKey()],c.lastMessageAt=$.friendlyDatetime($.parseFromISO(c[this.lastMessageKey()+"_at"]).datetime),c.hideCount=c.message_count===1,b=function(){var a,b,e,f;e=c.properties,f=[];for(a=0,b=e.length;a<b;a++)d=e[a],f.push(d);return f}(),b.push(c.workflow_state),c["private"]&&b.push("private"),c.starred&&b.push("starred"),c.subscribed||b.push("unsubscribed"),$.inArray(c.id,this.selected)>=0&&b.push("selected"),c.classes=b.join(" "),f(c)},g}(d)})}).call(this)