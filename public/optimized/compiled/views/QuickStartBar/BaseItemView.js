(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","underscore","jquery","compiled/widget/ContextSearch","jquery.instructure_date_and_time","jquery.disableWhileLoading"],function(a,c,d,e){var f,g,h;return g=a.View,f=function(a){function c(){return h=c.__super__.constructor.apply(this,arguments),h}return b(c,a),c.prototype.events={"submit form":"onFormSubmit"},c.prototype.template=function(){return""},c.prototype.contextSearchOptions={fakeInputWidth:"100%",contexts:ENV.CONTEXTS,placeholder:"Type the name of a class to assign this too...",selector:{baseData:{type:"course"},noExpand:!0,browser:!1}},c.prototype.render=function(){return this.$el.html(this.template()),c.__super__.render.apply(this,arguments)},c.prototype.afterRender=function(){return this.$(".dateField").datetime_field(),this.contextSearch=new e(this.$(".contextSearch"),this.contextSearchOptions)},c.prototype.teardown=function(){return this.contextSearch.teardown()},c.prototype.onFormSubmit=function(a){var b,c,e,f=this;return a.preventDefault(),b=d(a.target),e=d(a.target).toJSON(),c=this.save(e),this.$("form").disableWhileLoading(c),c.done(function(){return f.trigger("save")}),c.fail(function(){return f.trigger("saveFail")})},c.prototype.save=function(){return this.model.save()},c.title=function(a,b){var c;return c="",I18n.scoped("dashboard",function(d){return c=d.t(a,b)}),c},c}(g)})}).call(this)