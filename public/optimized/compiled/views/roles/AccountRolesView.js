(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["jquery","underscore","Backbone","jst/roles/accountRoles"],function(a,c,d,e){var f,g;return f=function(a){function c(){return g=c.__super__.constructor.apply(this,arguments),g}return b(c,a),c.prototype.template=e,c}(d.View)})}).call(this)