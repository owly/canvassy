(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","jquery","jst/accounts/admin_tools/RestoreContentPane"],function(a,c,d){var e,f;return e=function(a){function c(){return f=c.__super__.constructor.apply(this,arguments),f}return b(c,a),c.child("courseSearchFormView","#courseSearchForm"),c.child("courseSearchResultsView","#courseSearchResults"),c.prototype.template=d,c}(a.View)})}).call(this)