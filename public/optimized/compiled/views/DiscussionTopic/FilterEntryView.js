(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["Backbone","i18n!discussions","compiled/views/DiscussionTopic/EntryView","jst/discussions/results_entry"],function(b,d,e,f){var g,h,i;return h=b.View,g=function(b){function e(){return this.updateReadState=a(this.updateReadState,this),i=e.__super__.constructor.apply(this,arguments),i}return c(e,b),e.prototype.els={".discussion_entry:first":"$entryContent",".discussion-read-state-btn:first":"$readStateToggle"},e.prototype.events={click:"click","click .discussion-read-state-btn":"toggleRead"},e.prototype.tagName="li",e.prototype.className="entry",e.prototype.template=f,e.prototype.initialize=function(){return e.__super__.initialize.apply(this,arguments),this.model.on("change:read_state",this.updateReadState)},e.prototype.toJSON=function(){return this.model.attributes},e.prototype.click=function(){return this.trigger("click",this)},e.prototype.afterRender=function(){return e.__super__.afterRender.apply(this,arguments),this.updateReadState()},e.prototype.toggleRead=function(a){return a.stopPropagation(),a.preventDefault(),this.model.get("read_state")==="read"?this.model.markAsUnread():this.model.markAsRead()},e.prototype.updateReadState=function(){return this.updateTooltip(),this.$entryContent.toggleClass("unread",this.model.get("read_state")==="unread"),this.$entryContent.toggleClass("read",this.model.get("read_state")==="read")},e.prototype.updateTooltip=function(){var a;return a=this.model.get("read_state")==="unread"?d.t("mark_as_read","Mark as Read"):d.t("mark_as_unread","Mark as Unread"),this.$readStateToggle.attr("title",a)},e}(h)})}).call(this)