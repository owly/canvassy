(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!outcomes","jquery","underscore","Backbone","compiled/models/Outcome","compiled/models/OutcomeGroup"],function(b,d,e,f,g,h){var i,j;return i=function(d){function e(){return this.resetBackButton=a(this.resetBackButton,this),this.findDialog=a(this.findDialog,this),this.addGroup=a(this.addGroup,this),this.addOutcome=a(this.addOutcome,this),this.goBack=a(this.goBack,this),j=e.__super__.constructor.apply(this,arguments),j}return c(e,d),e.prototype.events={"click .go_back":"goBack","click .add_outcome_link":"addOutcome","click .add_outcome_group":"addGroup","click .find_outcome":"findDialog"},e.prototype.goBack=function(a){return a.preventDefault(),this.trigger("goBack")},e.prototype.addOutcome=function(a){var c;return a.preventDefault(),c=new g({title:b.t("new_outcome","New Outcome")}),this.trigger("add",c)},e.prototype.addGroup=function(a){var c;return a.preventDefault(),c=new h({title:b.t("new_outcome_group","New Outcome Group")}),this.trigger("add",c)},e.prototype.findDialog=function(a){return a.preventDefault(),this.trigger("find")},e.prototype.resetBackButton=function(a,b){if(!ENV.PERMISSIONS.manage_outcomes)return;return a||b.length>1?this.$(".go_back").show(200):this.$(".go_back").hide(200)},e}(f.View)})}).call(this)