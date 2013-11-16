(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["underscore","compiled/views/PaginatedView","jquery.disableWhileLoading"],function(b,d){var e,f;return e=function(d){function e(){return this.showPaginationLoader=a(this.showPaginationLoader,this),this.addOne=a(this.addOne,this),this.render=a(this.render,this),f=e.__super__.constructor.apply(this,arguments),f}return c(e,d),e.prototype.tagName="div",e.prototype.className="list",e.prototype.paginationLoaderTemplate=function(){return'<div class="pagination-loader" style="height: 60px;">&nbsp;</div>'},e.prototype.events={"blur li":"onBlur","focus li":"onFocus","keydown li":"onKeydown"},e.prototype.keyCodes={13:"Enter",16:"Shift",17:"Control",18:"Alt",27:"Escape",32:"Space",37:"LeftArrow",38:"UpArrow",39:"RightArrow",40:"DownArrow",91:"Command"},e.prototype.initialize=function(a){return this.selector=this.options.selector,this.parent=this.options.parent,this.ancestors=this.options.ancestors,this.query=this.options.query,this.$heading=$("<ul />",{"class":"heading"}).appendTo(this.$el),this.paginationScrollContainer=$("<ul />",{role:"menu"}),this.$body=this.paginationScrollContainer.appendTo(this.$el),this.$el.find("ul").on("mousemove",this.selector.mouseMove).on("mousedown",this.selector.mouseDown).on("click",this.selector.click),this.collection.on("beforeFetch",this.showPaginationLoader,this),this.collection.on("fetch",this.render),e.__super__.initialize.apply(this,arguments)},e.prototype.render=function(){var a,b,c,d,f,g,h,i,j,k,l,m;return c=this.paginationScrollContainer.children(".active").index(),this.clear(),this.$selectAll=null,this.parent?(a=this.parent.clone(),a.addClass("expanded").removeClass("active first last"),this.$heading.append(a).show()):this.$heading.hide(),this.query.search||(this.collection.length>0&&(f=typeof (h=this.selector.options).includeFilterOption=="function"?h.includeFilterOption(this.query):void 0,f&&this.addFilterOption(f)),this.collection.length>1&&(d=typeof (i=this.selector.options).includeEveryoneOption=="function"?i.includeEveryoneOption(this.query,this.parent):void 0,g=typeof (j=this.selector.options).includeSelectAllOption=="function"?j.includeSelectAllOption(this.query,this.parent):void 0,d&&this.addEveryoneOption(d),g&&this.addSelectAllOption(g))),this.collection.each(this.addOne),(this.selectAllActive()||((k=this.parent)!=null?typeof k.hasClass=="function"?k.hasClass("on"):void 0:void 0))&&this.$body.find("li.toggleable").addClass("on"),this.$el.toggleClass("with-toggles",this.selector.options.showToggles&&this.$body.find("li.toggleable").length>0),this.selector.select($(this.paginationScrollContainer.children()[c])),this.collection.fetchingPage||this.collection.fetchingNextPage?this.showPaginationLoader():this.hidePaginationLoader(),this.collection.atLeastOnePageFetched&&!this.$body.find("li").length&&(b=$('<li class="message first last no-results"></li>'),b.text((l=(m=this.selector.options.messages)!=null?m.noResults:void 0)!=null?l:""),this.$body.append(b)),e.__super__.render.apply(this,arguments)},e.prototype.addEveryoneOption=function(a){var b,c;return b=this.parent.data("user_data"),c={id:""+this.query.context+"_all",name:a,user_count:b.user_count,type:"context",avatar_url:b.avatar_url},this.selector.options.includeSelectAllOption&&$.extend(c,{permissions:b.permissions,selectAll:b.permissions.send_messages_all}),this.addOneRaw(c)},e.prototype.addSelectAllOption=function(a){var b;return b=this.parent.data("user_data"),this.addOneRaw({id:this.query.context,name:a,user_count:b.user_count,type:"context",avatar_url:b.avatar_url,permissions:b.permissions,selectAll:!0,noExpand:!0})},e.prototype.addFilterOption=function(a){return this.addOneRaw({id:this.query.context,name:this.parent.data("text"),type:"context",avatar_url:this.parent.data("user_data").avatar_url,subText:a,noExpand:!0})},e.prototype.addOne=function(a){return this.addOneRaw(a.attributes)},e.prototype.addOneRaw=function(a){var b;return b=$("<li />",{"class":"selectable",tabindex:"-1"}),this.$body.find("li:first")||b.addClass("first"),this.$body.find("li:last").removeClass("last"),b.addClass("last"),this.populateRow(b,a,{level:this.ancestors.length,parent:this.parent,ancestors:this.ancestors}),a.selectAll&&(this.$selectAll=b),b.hasClass("toggleable")&&this.selector.input.hasToken(b.data("id"))&&b.addClass("on"),this.$body.append(b)},e.prototype.populateRow=function(a,b,c){return c==null&&(c={}),this.selector.options.populator?(c=$.extend({noExpand:this.selector.options.noExpand},c),this.selector.options.populator(this.selector,a,b,c)):(a.data("id",b.text),a.text(b.text))},e.prototype.first=function(){return this.$el.find("li:first")},e.prototype.last=function(){return this.$el.find("li:last")},e.prototype.appendTo=function(a){return a.append(this.$el)},e.prototype.insertAfter=function(a){return this.$el.insertAfter(a.$el)},e.prototype.remove=function(){return this.$el.remove()},e.prototype.hide=function(a){return this.$el.animate({height:"1px"},"fast",a)},e.prototype.restore=function(){return this.$el.css("height","auto")},e.prototype.clear=function(){return this.$body.empty(),this.$heading.empty()},e.prototype.showPaginationLoader=function(){var a;return a=e.__super__.showPaginationLoader.apply(this,arguments),this.$paginationLoader.disableWhileLoading(this.collection.deferred),a},e.prototype.placePaginationLoader=function(){var a;return(a=this.$paginationLoader)!=null?a.insertAfter(this.$body):void 0},e.prototype.canSelectAll=function(){return this.$selectAll!=null},e.prototype.selectAllActive=function(){var a;return(a=this.$selectAll)!=null?a.hasClass("on"):void 0},e.prototype.updateSelectAll=function(a,b){var c,d,e=this;if(!this.$selectAll)return;c=this.$body.find("li.toggleable").not(this.$selectAll);if(a)return this.selectAllActive()?c.addClass("on").each(function(a,c){return b(!1,$(c))}):c.removeClass("on").each(function(a,c){return b(!1,$(c))});d=c.filter(".on");if(d.length<c.length&&this.selectAllActive())return this.$selectAll.removeClass("on"),b(!1,this.$selectAll),d.each(function(a,c){return b(!0,$(c))});if(d.length===c.length&&!this.selectAllActive())return this.$selectAll.addClass("on"),b(!0,this.$selectAll),d.each(function(a,c){return b(!1,$(c))})},e.prototype.onKeydown=function(a){var c,d,e;c=$(a.target),d=a.keyCode||a.which,e="on"+this.keyCodes[d]+"Key";if(this[e])return this[e].call(this,a,c)&&a.preventDefault();if(!b.include([16,17,18,92],d))return this.selector.input.focus(),$(this.selector.input.$input).trigger(a)},e.prototype.onBlur=function(a){var b;return $(a.target).removeClass("active"),typeof (b=this.selector).blur=="function"?b.blur():void 0},e.prototype.onFocus=function(a){return $(a.target).addClass("active")},e.prototype.onUpArrowKey=function(a,b){a.preventDefault(),this.selector.selectPrev();if(b.prev().length===0)return this.selector.input.focus()},e.prototype.onDownArrowKey=function(a,b){return a.preventDefault(),this.selector.selectNext()},e.prototype.onRightArrowKey=function(a,b){return a.preventDefault(),this.selector.expandSelection()},e.prototype.onLeftArrowKey=function(a,b){if(this.selector.listExpanded())return this.selector.collapse()},e.prototype.onEnterKey=function(a,b){return a.preventDefault(),this.selectResult(b)},e.prototype.onSpaceKey=function(a,b){return a.preventDefault(),this.selectResult(b)},e.prototype.onEscapeKey=function(a,b){return this.selector.input.focus(),this.selector.close()},e.prototype.selectResult=function(a){return a.hasClass("expandable")&&a.find("a.toggle").length>0?this.selector.toggleSelection():a.click()},e}(d)})}).call(this)