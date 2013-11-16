(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!discussions","compiled/arr/walk","Backbone","jst/discussions/EntryCollectionView","jst/discussions/entryStats","compiled/views/DiscussionTopic/EntryView"],function(b,d,e,f,g,h){var i,j,k;return j=e.View,i=function(e){function i(){return this.add=a(this.add,this),this.addAll=a(this.addAll,this),k=i.__super__.constructor.apply(this,arguments),k}return c(i,e),i.prototype.defaults={descendants:2,showMoreDescendants:2,showReplyButton:!1,displayShowMore:!0,threaded:!1,root:!1},i.prototype.events={"click .loadNext":"loadNextFromEvent"},i.prototype.template=f,i.prototype.els={".discussion-entries":"list"},i.prototype.attach=function(){return this.collection.on("reset",this.addAll),this.collection.on("add",this.add)},i.prototype.toJSON=function(){return this.options},i.prototype.addAll=function(){return this.teardown(),this.collection.each(this.add)},i.prototype.add=function(a){var b;return b=new h({model:a,treeView:this.constructor,descendants:this.options.descendants,children:this.collection.options.perPage,showMoreDescendants:this.options.showMoreDescendants,threaded:this.options.threaded,collapsed:this.options.collapsed}),b.render(),a.on("change:editor",this.nestEntries),a.get("new")?this.addNewView(b):(this.options.descendants?b.renderTree():a.hasChildren()&&b.renderDescendantsLink(),!this.options.threaded&&!this.options.root?this.list.prepend(b.el):this.list.append(b.el),this.nestEntries())},i.prototype.nestEntries=function(){return $(".entry_content[data-should-position]").each(function(){var a,b;return a=$(this),b=(a.parents("li.entry").length-1)*30,a.css("padding-left",b).removeAttr("data-should-position")})},i.prototype.addNewView=function(a){var b=this;a.model.set("new",!1),this.options.threaded?this.list.prepend(a.el):this.list.append(a.el),this.nestEntries();if(!this.options.root)return a.$el.hide(),setTimeout(function(){return a.$el.fadeIn()},500)},i.prototype.teardown=function(){return this.list.empty()},i.prototype.afterRender=function(){return i.__super__.afterRender.apply(this,arguments),this.addAll(),this.renderNextLink()},i.prototype.renderNextLink=function(){var a,c,d,e;(e=this.nextLink)!=null&&e.remove();if(!(this.options.displayShowMore&&this.unShownChildren()>0))return;return d=this.getUnshownStats(),this.nextLink=$("<div/>"),c=!0,this.options.threaded||(a=b.t("show_all_n_replies",{one:"Show one reply",other:"Show all %{count} replies"},{count:d.total+this.collection.options.perPage})),this.nextLink.html(g({stats:d,moreText:a,showMore:!0})),this.nextLink.addClass("showMore loadNext"),this.options.threaded?this.nextLink.insertAfter(this.list):this.nextLink.insertBefore(this.list)},i.prototype.getUnshownStats=function(){var a,b,c,e,f;return b=this.collection.length,a=this.collection.fullCollection.length,f=this.collection.fullCollection.toJSON().slice(b,a),c=0,e=0,d(f,"replies",function(a){c++;if(a.read_state==="unread")return e++}),{total:c,unread:e}},i.prototype.unShownChildren=function(){return this.collection.fullCollection.length-this.collection.length},i.prototype.loadNextFromEvent=function(a){return a.stopPropagation(),a.preventDefault(),this.loadNext()},i.prototype.loadNext=function(){return this.options.threaded?this.collection.add(this.collection.fullCollection.getPage("next")):this.collection.reset(this.collection.fullCollection.toArray()),this.renderNextLink()},i.prototype.filter=i.prototype.afterRender,i}(j)})}).call(this)