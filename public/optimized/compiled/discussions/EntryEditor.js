(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!editor","jquery","compiled/editor/EditorToggle","compiled/str/convertApiUserContent","vendor/jquery.ba-tinypubsub"],function(b,d,e,f,g){var h,i;return i=g.publish,h=function(e){function g(b){this.view=b,this.onSaveError=a(this.onSaveError,this),this.onSaveSuccess=a(this.onSaveSuccess,this),g.__super__.constructor.call(this,this.getEditingElement(),{switchViews:!0}),this.cancelButton=this.createCancelButton(),this.done.addClass("btn-small")}return c(g,e),g.prototype.display=function(a){g.__super__.display.apply(this,arguments),this.cancelButton.detach();if((a!=null?a.cancel:void 0)!==!0)return this.view.model.set("replies",[]),this.view.model.set("updated_at",(new Date).toISOString()),this.view.model.set("editor",ENV.current_user),this.view.model.save({messageNotification:b.t("saving","Saving..."),message:this.content},{success:this.onSaveSuccess,error:this.onSaveError})},g.prototype.createCancelButton=function(){var a=this;return d("<a/>").html(b.t("cancel","Cancel")).css({marginLeft:"5px"}).attr("href","javascript:").addClass("cancel_button").click(function(){return a.display({cancel:!0})})},g.prototype.edit=function(){return this.editingElement(this.getEditingElement()),g.__super__.edit.apply(this,arguments),this.cancelButton.insertAfter(this.done)},g.prototype.getEditingElement=function(){return this.view.$(".message:first")},g.prototype.getContent=function(){return f(this.view.model.get("message"),{forEditing:!0})},g.prototype.onSaveSuccess=function(){return this.view.model.set("messageNotification","")},g.prototype.onSaveError=function(){return this.view.model.set({messageNotification:b.t("save_failed","Failed to save, please try again later")}),this.edit()},g}(e)})}).call(this)