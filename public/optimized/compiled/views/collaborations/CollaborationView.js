(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!collaborations","underscore","Backbone","compiled/views/collaborations/CollaboratorPickerView","jst/collaborations/edit"],function(b,d,e,f,g){var h,i,j,k;return j=d.extend,i=e.View,h=function(d){function e(){return this["delete"]=a(this["delete"],this),k=e.__super__.constructor.apply(this,arguments),k}return c(e,d),e.prototype.events={"click .edit_collaboration_link":"onEdit","click .delete_collaboration_link":"onDelete","click .cancel_button":"onCloseForm"},e.prototype.initialize=function(){return this.id=this.$el.data("id")},e.prototype.formTemplate=function(a){var b,c,d,e;return c=a.action,d=a.className,e=a.data,b=$(g(j(e,{action:c,id:this.id,token:ENV.AUTHENTICITY_TOKEN})))},e.prototype.confirmGoogleDocsDelete=function(){var a;return a=$("#delete_collaboration_dialog").data("collaboration",this.$el),a.dialog({title:b.t("titles.delete","Delete collaboration?"),width:350})},e.prototype.confirmDelete=function(a){return this.$el.confirmDelete({message:b.t("collaboration.delete","Are you sure you want to delete this collaboration?"),success:this["delete"],url:a})},e.prototype["delete"]=function(){var a=this;return this.$el.slideUp(function(){return a.$el.remove()}),this.trigger("delete",this)},e.prototype.onEdit=function(a){var b;return a.preventDefault(),b=this.formTemplate({action:$(a.currentTarget).attr("href"),className:this.$el.attr("class"),data:this.$el.getTemplateData({textValues:["title","description"]})}),this.$el.children().hide(),this.$el.append(b),this.addCollaboratorPicker(b)},e.prototype.onDelete=function(a){var b;return a.preventDefault(),b=$(a.currentTarget).attr("href"),this.$el.hasClass("google_docs")?this.confirmGoogleDocsDelete():this.confirmDelete(b)},e.prototype.onCloseForm=function(a){return this.$el.find("form").remove(),this.$el.children().show()},e.prototype.addCollaboratorPicker=function(a){var b;return b=new f({edit:!0,el:a.find(".collaborator_list"),id:this.id}),b.render()},e}(i)})}).call(this)