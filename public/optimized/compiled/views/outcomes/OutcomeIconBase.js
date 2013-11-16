(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["jquery","Backbone","str/htmlEscape","jqueryui/draggable"],function(b,d,e){var f,g;return f=function(d){function f(){return this.triggerSelect=a(this.triggerSelect,this),g=f.__super__.constructor.apply(this,arguments),g}return c(f,d),f.prototype.tagName="li",f.prototype.attributes={tabindex:-1},f.prototype.events={click:"triggerSelect",keydown:"onKeydown",focus:"onFocus"},f.prototype.keyCodes={13:"Enter",27:"Escape",32:"Space",37:"LeftArrow",38:"UpArrow",39:"RightArrow",40:"DownArrow"},f.prototype.initialize=function(a){return this.readOnly=a.readOnly,this.dir=a.dir,this.attachEvents()},f.prototype.attachEvents=function(){return this.model.on("change:title",this.updateTitle,this),this.model.on("remove",this.remove,this),this.model.on("select",this.triggerSelect,this)},f.prototype.triggerSelect=function(a){return a&&a.preventDefault(),this.trigger("select",this),this.select()},f.prototype.onKeydown=function(a){var c,d;c=b(a.target),d="on"+this.keyCodes[a.keyCode]+"Key";if(this[d])return this[d].call(this,a,c)&&a.preventDefault()},f.prototype.onUpArrowKey=function(a,b){return b.prev().focus()},f.prototype.onDownArrowKey=function(a,b){return b.next().focus()},f.prototype.onLeftArrowKey=function(a,b){if(b.parent().prev().length>0)return this.$el.parent().prev().find("[aria-expanded=true]").click().attr("aria-expanded",!1).attr("tabindex",0).focus();return},f.prototype.onEnterKey=function(a,b){return b.hasClass("outcome-group")?this.onRightArrowKey(a,b):this.triggerSelect()},f.prototype.onDrop=function(a,c){var d,e,f,g,h;d=a.li,g=a.model,e=c.data("view"),h=a.parent,e!=null?(g.collection.remove(g),d.hasClass("outcome-link")?e.outcomes.add(g):e.groups.add(g),g.trigger("select"),f=e.moveModelHere(g)):e=h;if(!f)return;return f.done(function(){return b(".wrapper [data-id="+d.data("id")+"]").attr("tabindex",0).attr("aria-grabbed",!1).focus(),c.parents(".wrapper:first").data("drag",null)})},f.prototype.onSpaceKey=function(a,b){var c,d;return c=b.parents(".wrapper:first"),(d=c.data("drag"))?(b.after(d.li),this.onDrop(d,b.parent())):(b.attr("aria-grabbed",!0),d={li:b,model:b.data("view").model,parent:b.parent().data("view")},c.data("drag",d),b.blur(),b.focus())},f.prototype.onEscapeKey=function(a,b){var c,d;c=b.parents(".wrapper:first");if(!(d=c.data("drag")))return;return d.li.data("parent",null).attr("aria-grabbed",!1),c.data("drag",null)},f.prototype.onFocus=function(a){var c;return c=b(a.target),c.parents(".wrapper:first").find("[tabindex=0]").attr("tabindex",-1),c.attr("tabindex",0)},f.prototype.select=function(){return this.$el.parent().find("[tabindex=0]").attr("tabindex",-1),this.$el.addClass("selected").attr("tabindex",0)},f.prototype.unSelect=function(){return this.$el.removeClass("selected")},f.prototype.remove=function(){return this.model.off("change:title",this.updateTitle,this),this.model.off("remove",this.remove,this),this.model.off("select",this.triggerSelect,this),f.__super__.remove.apply(this,arguments)},f.prototype.updateTitle=function(){return this.$("span").text(this.model.get("title")),this.$("a").attr("title",e(this.model.get("title")))},f.prototype.render=function(){return this.readOnly||this.initDraggable(),this.$el.data("view",this),this},f.prototype.initDraggable=function(){return this.$el.draggable({scope:"outcomes",containment:".outcomes-sidebar",opacity:.7,helper:"clone",revert:"invalid",scroll:!1,drag:function(a,c){var d,e,f,g,h,i;d=b(this).data("draggable"),e=d.options,f=!1,g=d.relative_container,h=g.offset().left,i=g.width(),a.pageX-h<e.scrollSensitivity?g[0].scrollLeft=f=g[0].scrollLeft-e.scrollSpeed:h+i-a.pageX<e.scrollSensitivity&&(g[0].scrollLeft=f=g[0].scrollLeft+e.scrollSpeed);if(f!==!1&&b.ui.ddmanager&&!e.dropBehaviour)return b.ui.ddmanager.prepareOffsets(d,a)}})},f}(d.View)})}).call(this)