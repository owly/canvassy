(function(){define(["underscore","Backbone","compiled/models/Account","compiled/views/accounts/settings/QuotasView","compiled/views/accounts/settings/ManualQuotasView"],function(a,b,c,d,e){var f,g,h;if(ENV.ACCOUNT)return f=new c(ENV.ACCOUNT),f.toJSON=function(){return{id:this.get("id"),account:a.pick(this.attributes,"default_storage_quota_mb","default_user_storage_quota_mb","default_group_storage_quota_mb")}},h=new d({model:f}),$("#tab-quotas").append(h.el),h.render(),g=new e,$("#tab-quotas").append(g.el),g.render()})}).call(this)