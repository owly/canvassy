(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["jquery","i18n!accounts","compiled/models/Course","compiled/models/Group","compiled/views/ValidatedFormView","str/htmlEscape","jst/accounts/settings/ManualQuotas","compiled/jquery.rails_flash_notifications"],function(b,d,e,f,g,h,i){var j,k;return j=function(g){function j(){return this.findSuccess=a(this.findSuccess,this),this.findError=a(this.findError,this),k=j.__super__.constructor.apply(this,arguments),k}return c(j,g),j.prototype.template=i,j.INTEGER_REGEX=/^[+-]?\d+$/,j.prototype.tag="form",j.prototype.id="manual-quotas",j.prototype.className="form-horizontal",j.prototype.els={"#manual_quotas_type":"$type","#manual_quotas_id":"$id","#manual_quotas_quota":"$quota","#manual_quotas_result":"$result","#manual_quotas_link":"$link"},j.prototype.fields=["type","id","quota"],j.prototype.integerFields=["id","quota"],j.prototype.initialize=function(){return this.events||(this.events=[]),this.events["input #manual_quotas_id"]="validate",this.events["input #manual_quotas_quota"]="validate",this.events["click #manual_quotas_find_button"]="findItem",this.on("success",this.submitSuccess),this.on("fail",this.submitFail),j.__super__.initialize.apply(this,arguments)},j.prototype.afterRender=function(){var a=this;return this.$id.keypress(function(c){if(c.keyCode===b.ui.keyCode.ENTER)return a.findItem()}),this.$result.hide()},j.prototype.submitSuccess=function(){return b.flashMessage(d.t("quota_updated","Quota updated"))},j.prototype.submitFail=function(a){return b.flashError(d.t("quota_not_updated","Quota was not updated"))},j.prototype.getFormData=function(){var a,b,c,d,e;a={},e=this.fields;for(c=0,d=e.length;c<d;c++)b=e[c],a[b]=this["$"+b].val();return a},j.prototype.saveFormData=function(){return this.model.save({storage_quota_mb:this.$quota.val()},this.saveOpts)},j.prototype.validateFormData=function(a){var b,c,e,f,g;b={},g=this.integerFields;for(e=0,f=g.length;e<f;e++)c=g[e],a[c]!==""&&!a[c].match(this.constructor.INTEGER_REGEX)&&(b[c]=[{type:"integer_required",message:d.t("integer_required","An integer value is required")}]);return b},j.prototype.validateBeforeSave=function(){return{}},j.prototype.hideErrors=function(){var a;return a=this.$("div.control-group.error"),a.removeClass("error"),a.find(".help-inline").remove()},j.prototype.showErrors=function(a){var c,d,e,f,g,i,j,k,l;k=this.integerFields,l=[];for(i=0,j=k.length;i<j;i++)e=k[i],c=this["$"+e].closest("div.control-group"),g=a[e],c.toggleClass("error",g!=null),g?(d=b('<span class="help-inline"></span>'),d.html(function(){var a,b,c;c=[];for(a=0,b=g.length;a<b;a++)f=g[a].message,c.push(h(f));return c}().join("<br/>")),l.push(c.find(".controls").append(d))):l.push(void 0);return l},j.prototype.findItem=function(){var a,c,g;this.hideErrors(),a=this.getFormData(),this.model=null,a.type==="course"?(this.model=new e({id:a.id}),c="/courses",g=d.t("course_type","course")):a.type==="group"&&(this.model=new f({id:a.id}),c="/groups",g=d.t("group_type","group"));if(this.model)return this.model.urlRoot="/api/v1"+c,this.model.path=c,this.model.type=g,this.disablingDfd=new b.Deferred,this.$result.hide(),this.$el.disableWhileLoading(this.disablingDfd),this.model.fetch({error:this.findError,success:this.findSuccess})},j.prototype.findError=function(a,b){var c;return this.disablingDfd.reject(),this.hideErrors(),b.status===401?c={id:[{type:"not_authorized",message:d.t("find_not_authorized","You are not authorized to access that %{type}",{type:a.type})}]}:c={id:[{type:"not_found",message:d.t("find_not_found","Could not find a %{type} with that ID",{type:a.type})}]},this.showErrors(c)},j.prototype.findSuccess=function(){return this.$link.html(this.model.get("name")),this.$link.attr("href",this.model.path+"/"+this.model.get("id")),this.$quota.val(this.model.get("storage_quota_mb")),this.$result.show(),this.disablingDfd.resolve()},j}(g)})}).call(this)