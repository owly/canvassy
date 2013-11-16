(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!editor","jquery","underscore","Backbone","compiled/views/tinymce/EquationToolbarView","jst/tinymce/EquationEditorView","jqueryui/dialog","mathquill"],function(b,d,e,f,g,h){var i,j,k;return j=function(a){return e.map(a,function(a){var b;if((b=a.nodeType)===3||b===4)return a.nodeValue;if(a.nodeName==="IMG"&&a.className==="equation_image")return a.alt;if(a.nodeType!==8)return j(a.childNodes)}).join("")},i=function(e){function f(){return this.onSubmit=a(this.onSubmit,this),this.setView=a(this.setView,this),this.toggleView=a(this.toggleView,this),this.initialRender=a(this.initialRender,this),k=f.__super__.constructor.apply(this,arguments),k}return c(f,e),f.prototype.template=h,f.prototype.el=d(document.createElement("span")).appendTo("body")[0],f.prototype.els={"#mathquill-view":"$mathquillView","#mathquill-container":"$mathquillContainer","#mathjax-view":"$mathjaxView","#mathjax-editor":"$mathjaxEditor","#mathjax-message":"$mathjaxMessage"},f.prototype.initialize=function(a){var c,e;return this.editor=a,this.$editor=d("#"+this.editor.id),this.prevSelection=this.editor.selection.getBookmark(),(this.toolbar=this.$el.data("toolbar"))||(e=d("<span>").html(this.editor.selection.getContent()),c=j(e).replace(/^\s+|\s+$/g,""),this.addToolbar(c)),this.cacheEls(),this.$el.dialog({minWidth:670,minHeight:290,resizable:!1,title:b.t("equation_editor_title","Use the toolbars here, or Switch View to Advanced to type/paste in LaTeX"),dialogClass:"math-dialog",open:this.initialRender,buttons:[{"class":"btn-primary",text:b.t("button.insert_equation","Insert Equation"),click:this.onSubmit}]})},f.prototype.initialRender=function(){var a,b;return b=d("<span>").html(this.editor.selection.getContent()),a=j(b).replace(/^\s+|\s+$/g,""),this.$mathjaxMessage.empty(),this.setView(this.$el.data("view"),a),this.renderEquation(this.opposite(this.$el.data("view")),"")},f.prototype.addToolbar=function(a){return this.$el.append(this.template),d("#mathjax-preview").html("<script type='math/tex; mode=display'>"+a+"</script>"),this.toolbar=new g({el:this.$el}),this.toolbar.render(),d("a.math-toggle-link").bind("click",this.toggleView),this.$el.data("toolbar",this.toolbar),this.$el.data("view","mathquill")},f.prototype.opposite=function(a){if(a==="mathquill")return"mathjax";if(a==="mathjax")return"mathquill"},f.prototype.getEquation=function(){var a;a=this.$el.data("view");if(a==="mathquill")return this.$mathquillContainer.mathquill("latex");if(a==="mathjax")return this.$mathjaxEditor.val()},f.prototype.toggleView=function(){var a,b;return b=this.$el.data("view"),a=this.getEquation(),this.$mathjaxMessage.empty(),this.setView(this.opposite(b),a)},f.prototype.setView=function(a,b){return a==="mathquill"?(this.$mathjaxView.hide(),this.$mathquillView.show()):a==="mathjax"&&(this.$mathquillView.hide(),this.$mathjaxView.show()),this.renderEquation(a,b)?this.$el.data("view",a):this.setView("mathjax",b)},f.prototype.renderEquation=function(a,c){if(a==="mathquill"){this.$mathquillContainer.mathquill("revert").addClass("mathquill-editor").mathquill("editor").mathquill("write",c);if(this.$mathquillContainer.mathquill("latex").replace(/\s+/,"")!==c.replace(/\s+/,""))return this.$mathjaxMessage.html(b.t("cannot_render_equation","This equation cannot be rendered in Basic View.")),!1}else a==="mathjax"&&(this.$mathjaxEditor.val(c),this.toolbar.renderPreview&&this.toolbar.renderPreview());return!0},f.prototype.restoreCaret=function(){return this.editor.selection.moveToBookmark(this.prevSelection)},f.prototype.onSubmit=function(a){var b,c,e,f;return a.preventDefault(),e=this.getEquation(),f="/equation_images/"+encodeURIComponent(escape(e)),c=d(document.createElement("img")).attr({src:f,alt:e,title:e,"class":"equation_image"}),b=d(document.createElement("div")).append(c),this.restoreCaret(),this.$editor.editorBox("insert_code",b.html()),this.$el.dialog("close")},f}(f.View)})}).call(this)