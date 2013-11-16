(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["jquery","underscore","Backbone","i18n!calendar.edit","jst/calendar/missingDueDateDialog","jqueryui/dialog","compiled/jquery/fixDialogButtons"],function(b,d,e,f,g){var h,i,j;return i=e.View,h=function(e){function h(){return this.cancel=a(this.cancel,this),this.onAction=a(this.onAction,this),j=h.__super__.constructor.apply(this,arguments),j}return c(h,e),h.prototype.dialogTitle='<span>\n  <i class="icon-warning"></i>\n  '+f.t("titles.warning","Warning")+"\n</span>",h.prototype.initialize=function(a){return this.validationFn=a.validationFn,this.labelFn=a.labelFn||this.defaultLabelFn,this.success=a.success},h.prototype.defaultLabelFn=function(a){return b("label[for="+b(a).attr("id")+"]").text()},h.prototype.render=function(){return this.invalidFields=this.validationFn(),this.invalidFields===!0?!1:(this.invalidSectionNames=d.map(this.invalidFields,this.labelFn),this.showDialog(),this)},h.prototype.getInvalidFields=function(){var a,c;return a=d.select(this.$dateFields,function(a){return b(a).val()===""}),c=d.map(a,this.labelFn),c.length>0?[a,c]:!1},h.prototype.showDialog=function(){var a,c;return a=f.t("missingDueDate",{one:"%{sections} does not have a due date assigned.",other:"%{sections} do not have a due date assigned."},{sections:"",count:this.invalidSectionNames.length}),c=g({description:a,sections:this.invalidSectionNames}),this.$dialog=b(c).dialog({dialogClass:"dialog-warning",draggable:!1,modal:!0,resizable:!1,title:b(this.dialogTitle)}).fixDialogButtons().on("click",".btn",this.onAction),this.$dialog.parents(".ui-dialog:first").focus()},h.prototype.onAction=function(a){return b(a.currentTarget).hasClass("btn-primary")?this.cancel(this.invalidFields,this.sectionNames):this.success(this.$dialog)},h.prototype.cancel=function(a){return this.$dialog.dialog("close").remove(),this.invalidFields[0].focus()},h}(i)})}).call(this)