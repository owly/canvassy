(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!outcomes","jquery","underscore","compiled/views/ValidatedFormView","tinymce.editor_box","compiled/jquery.rails_flash_notifications","jquery.disableWhileLoading","compiled/tinymce"],function(b,d,e,f){var g,h;return g=function(g){function i(){return this.updateTitle=a(this.updateTitle,this),this["delete"]=a(this["delete"],this),this.edit=a(this.edit,this),this.cancel=a(this.cancel,this),this.submit=a(this.submit,this),this._cleanUpTiny=a(this._cleanUpTiny,this),h=i.__super__.constructor.apply(this,arguments),h}return c(i,g),i.prototype.tagName="div",i.prototype.className="wrapper",i.prototype.events=e.extend({"click .edit_button":"edit","click .cancel_button":"cancel","click .delete_button":"delete","keyup input.outcome_title":"updateTitle"},f.prototype.events),i.prototype.validations={title:function(a){if(e.isEmpty(a.title))return b.t("blank_error","Cannot be blank")}},i.prototype.isValid=function(){var a,b,c,d,f;this.errors={},a=this.getFormData(),f=this.validations;for(c in f){d=f[c];if(b=d(a))this.errors[c]=[{message:b}]}return e.isEmpty(this.errors)},i.prototype.initialize=function(a){var b=this;return this.state=a.state,this._readOnly=a.readOnly,this.on("success",this.success,this),this.on("fail",this.fail,this),this.setModelUrl(),this.model.isAbbreviated()&&this.state!=="add"&&(this.state="loading",this.$el.disableWhileLoading(this.model.fetch({success:function(){return b.state=a.state,b.render()}}))),i.__super__.initialize.call(this)},i.prototype._cleanUpTiny=function(){return this.$el.find('[name="description"]').editorBox("destroy")},i.prototype.submit=function(a){return a.preventDefault(),this.setModelUrl(),this.getTinyMceCode(),this.isValid()?(i.__super__.submit.call(this,a),this._cleanUpTiny(),d(".edit_button").focus()):this.showErrors(this.errors)},i.prototype.success=function(){return this.state==="add"?(this.trigger("addSuccess",this.model),d.flashMessage(b.t("flash.addSuccess","Creation successful"))):d.flashMessage(b.t("flash.updateSuccess","Update successful")),this.state="show",this.render(),d(".edit_button").focus(),this},i.prototype.fail=function(){return d.flashError(b.t("flash.error","An error occurred. Please refresh the page and try again."))},i.prototype.getTinyMceCode=function(){var a;return a=this.$("textarea"),a.val(a.editorBox("get_code"))},i.prototype.setModelUrl=function(){return this.model.setUrlTo(function(){switch(this.state){case"add":return"add";case"delete":return"delete";default:return"edit"}}.call(this))},i.prototype.getFormData=function(){return this.$("form").toJSON()},i.prototype.remove=function(){return this.$el.hideErrors(),this.state==="add"&&this.model.isNew()&&this.model.destroy(),i.__super__.remove.apply(this,arguments)},i.prototype.cancel=function(a){return a.preventDefault(),this.resetModel(),this._cleanUpTiny(),this.$el.hideErrors(),this.state==="add"?(this.$el.empty(),this.model.destroy(),this.state="show",d(".add_outcome_link").focus()):(this.state="show",this.render(),d(".edit_button").focus()),this},i.prototype.edit=function(a){return a.preventDefault(),this.state="edit",this._modelAttributes=this.model.toJSON(),this.render()},i.prototype["delete"]=function(a){var c=this;a.preventDefault();if(!confirm(b.t("confirm.delete","Are you sure you want to delete?")))return;return this.state="delete",this.setModelUrl(),this.$el.disableWhileLoading(this.model.destroy({success:function(){return d.flashMessage(b.t("flash.deleteSuccess","Deletion successful")),c.trigger("deleteSuccess"),c.remove(),d(".add_outcome_link").focus()},error:function(){return d.flashError(b.t("flash.deleteError","Something went wrong. Unable to delete at this time."))}}))},i.prototype.resetModel=function(){return this.model.set(this._modelAttributes)},i.prototype.readyForm=function(){var a=this;return setTimeout(function(){return a.$("textarea").editorBox(),a.$("input:first").focus()})},i.prototype.readOnly=function(){return this._readOnly||!this.model.get("can_edit")},i.prototype.updateTitle=function(a){return this.model.set("title",a.currentTarget.value)},i}(f)})}).call(this)