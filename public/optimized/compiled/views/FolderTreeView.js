(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b},c=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};define(["Backbone","underscore","compiled/fn/preventDefault","compiled/models/Folder","jst/FolderTreeItem"],function(a,d,e,f,g){var h,i;return h=function(a){function e(){return i=e.__super__.constructor.apply(this,arguments),i}return b(e,a),e.prototype.tagName="li",e.prototype.attributes=function(){return{role:"treeitem","aria-expanded":""+!!this.model.isExpanded}},e.prototype.events={"click .folderLabel":"toggle"},e.prototype.initialize=function(){return this.model.on("all",this.render,this),this.model.files.on("all",this.render,this),this.model.folders.on("all",this.render,this),this.render(),e.__super__.initialize.apply(this,arguments)},e.prototype.render=function(){var a;a=this.$(document.activeElement),this.renderSelf(),this.renderContents();if(a.length)return this.$el.find(a).focus()},e.prototype.toggle=function(a){return a.preventDefault(),a.stopPropagation(),this.model.toggle(),this.$el.attr(this.attributes())},e.prototype.title_text=function(){return this.model.get("custom_name")||this.model.get("name")},e.prototype.renderSelf=function(){return this.$label||(this.$label=$("<a class='folderLabel' href='#' title='"+this.title_text()+"'/>").prependTo(this.$el)),this.$label.text(this.title_text()).toggleClass("expanded",!!this.model.isExpanded).toggleClass("loading after",!!this.model.isExpanding)},e.prototype.renderContents=function(){var a,b=this;(a=this.$folderContents)!=null&&a.detach();if(this.model.isExpanded)return this.$folderContents=$("<ul role='group' />").appendTo(this.$el),d.each(this.model.contents(),function(a){var d,h,i;d=b[h="viewFor_"+a.cid]||(b[h]=a.constructor===f?(new e({model:a,contentTypes:b.options.contentTypes})).el:!b.options.contentTypes||(i=a.get("content-type"),c.call(b.options.contentTypes,i)>=0)?$(g({title:a.get("display_name"),thumbnail_url:a.get("thumbnail_url"),preview_url:b.model.previewUrlForFile(a)})):void 0);if(d)return b.$folderContents.append(d)})},e}(a.View)})}).call(this)