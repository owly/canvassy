(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","compiled/quickStartBar/models/Assignment","jst/quickStartBarTemplates/assignment","jquery.instructure_date_and_time"],function(a,c,d){var e,f,g;return f=a.View,e=function(a){function c(){return g=c.__super__.constructor.apply(this,arguments),g}return b(c,a),c.prototype.render=function(){var a;return a=d(this.model.toJSON),this.$el.html(a),this.filter()},c.prototype.afterRender=function(){return this.$(".dateField").datetime_field()},c}(f)})}).call(this)