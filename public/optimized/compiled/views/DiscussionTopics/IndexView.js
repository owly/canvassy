(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["underscore","Backbone","compiled/views/DiscussionTopics/DiscussionListView","jst/DiscussionTopics/IndexView","compiled/views/DiscussionTopics/DiscussionsSettingsView","compiled/views/DiscussionTopics/UserSettingsView"],function(b,d,e,f,g,h){var i,j,k;return j=d.View,i=function(d){function e(){return this.filterResults=a(this.filterResults,this),this.filter=a(this.filter,this),k=e.__super__.constructor.apply(this,arguments),k}return c(e,d),e.prototype.template=f,e.prototype.el="#content",e.child("openDiscussionView",".open.discussion-list"),e.child("lockedDiscussionView",".locked.discussion-list"),e.child("pinnedDiscussionView",".pinned.discussion-list"),e.prototype.events={"click .ig-header .element_toggler":"toggleDiscussionList","click #edit_discussions_settings":"toggleSettingsView","change #onlyUnread, #onlyGraded":"filterResults","keyup #searchTerm":"filterResults"},e.prototype.filters={onlyGraded:{active:!1,fn:function(a){return a.get("assignment_id")}},onlyUnread:{active:!1,fn:function(a){return a.get("unread_count")>0||a.get("read_state")==="unread"}},searchTerm:{active:!1,fn:function(a,b){var c;if(!b)return;return c=new RegExp(b,"ig"),a.get("title").match(c)||a.get("user_name").match(c)||a.summary().match(c)}}},e.prototype.collections=function(){return[this.options.openDiscussionView.collection,this.options.lockedDiscussionView.collection,this.options.pinnedDiscussionView.collection]},e.prototype.afterRender=function(){return this.$("#discussionsFilter").buttonset()},e.prototype.activeFilters=function(){var a=this;return b.select(this.filters,function(a,b){return a.active})},e.prototype.filter=function(a,c){return b.all(this.activeFilters(),function(b){return b.fn.call(a,a,c)})},e.prototype.filterResults=function(a){var c,d=this;return a.target.type==="checkbox"?(this.filters[a.target.id].active=$(a.target).prop("checked"),$("#searchTerm").val().length>0&&(c=$("#searchTerm").val())):(this.filters[a.target.id].active=$(a.target).val().length>0,c=$(a.target).val()),b.each(this.collections(),function(a){return a.each(function(a){return d.activeFilters().length>0?a.set("hidden",!d.filter(a,c)):a.set("hidden",!1)})})},e.prototype.toggleSettingsView=function(){return this.settingsView().toggle()},e.prototype.toggleDiscussionList=function(a){return $(a.currentTarget).find("i").toggleClass("icon-mini-arrow-down").toggleClass("icon-mini-arrow-right")},e.prototype.settingsView=function(){return this._settingsView||(this._settingsView=this.options.permissions.change_settings?new g:new h),this._settingsView},e.prototype.toJSON=function(){return b.extend({},{options:this.options,length:1,atLeastOnePageFetched:!0,new_topic_url:ENV.newTopicURL})},e}(j)})}).call(this)