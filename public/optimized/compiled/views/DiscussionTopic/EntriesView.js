(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["underscore","jquery","jst/DiscussionTopics/pageNav","Backbone","compiled/views/DiscussionTopic/EntryCollectionView","compiled/jquery/scrollIntoView"],function(b,d,e,f,g){var h,i;return h=function(f){function h(){return this.render=a(this.render,this),this.goToEntry=a(this.goToEntry,this),this.addEntry=a(this.addEntry,this),this.hideIfFiltering=a(this.hideIfFiltering,this),i=h.__super__.constructor.apply(this,arguments),i}return c(h,f),h.prototype.defaults={initialPage:0,descendants:2,showMoreDescendants:50,children:3},h.prototype.$window=d(window),h.prototype.initialize=function(){return this.collection.on("add",this.addEntry),this.model.on("change",this.hideIfFiltering)},h.prototype.hideIfFiltering=function(){return this.model.hasFilter()?this.$el.addClass("hidden"):this.$el.removeClass("hidden")},h.prototype.addEntry=function(a){return this.collectionView.collection.add(a)},h.prototype.goToEntry=function(a){var b,c;return typeof a!="object"?a=parseInt(a,10):(c=a,a=c.entry.id),b=d("#entry-"+a),b.length?this.scrollToEl(b):(c==null&&(c=this.collection.getEntryData(a)),this.collection.currentPage===c.page?c.levels===0?this.expandToUnrenderedEntry(c):this.descendToUnrenderedEntry(c):this.renderAndGoToEntry(c))},h.prototype.expandToUnrenderedEntry=function(a){var b,c,e;c=a.entry,b={};while(!b.length)c=c.parent,b=d("#entry-"+c.id);return e=b.data("view"),e.treeView?e.treeView.loadNext():e.renderTree(),this.goToEntry(a)},h.prototype.descendToUnrenderedEntry=function(a){var c,e,f,g,h,i,j;g=a.entry,h=g,f=-1,c={};while(!c.length)e=h,h=e.parent,f++,i=b.without(h.replies,e),i.unshift(e),h.replies=i,c=d("#entry-"+e.id);return j=c.data("view"),j.renderTree({descendants:f}),this.goToEntry(a)},h.prototype.renderAndGoToEntry=function(a){return this.render(a.page+1),this.goToEntry(a)},h.prototype.scrollToEl=function(a){var b=this;return this.$window.scrollTo(a,200,{offset:-150,onAfter:function(){var c;return setTimeout(function(){return a.addClass("highlight")},200),setTimeout(function(){return a.removeClass("highlight")},400),setTimeout(function(){return a.addClass("highlight")},600),c=function(){return a.removeClass("highlight"),b.$window.off("scroll",c),b.trigger("scrollAwayFromEntry")},setTimeout(function(){return b.$window.on("scroll",c),setTimeout(c,5e3)},10)}})},h.prototype.render=function(a){return a==null&&(a=1),this.teardown(),this.collectionView=new g({el:this.$el[0],collection:this.collection.getPageAsCollection(a-1,{perPage:this.options.children}),descendants:this.options.descendants,showMoreDescendants:this.options.showMoreDescendants,displayShowMore:!1,threaded:this.options.threaded,root:!0,collapsed:this.model.get("collapsed")}),this.collectionView.render(),this.renderPageNav(),this},h.prototype.teardown=function(){return this.$el.empty()},h.prototype.renderPageNav=function(){var a,b,c,d,f,g,h;f=this.collection.totalPages(),a=this.collection.currentPage+1;if(f<2)return;return d=3,c={current:a},c.showFirst=f>d&&a!==1,f>d&&a!==f&&(c.lastPage=f),c.pages=f<d+1?function(){h=[];for(var a=1;1<=f?a<=f:a>=f;1<=f?a++:a--)h.push(a);return h}.apply(this):c.showFirst&&c.lastPage?[a-1,a,a+1]:c.showFirst&&!c.lastPage?[a-2,a-1,a]:!c.showFirst&&c.lastPage?[a,a+1,a+2]:void 0,b=e(c),this.$el.prepend(b).append(b)},h}(f.View)})}).call(this)