(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["underscore","Backbone","compiled/models/DaySubstitution"],function(a,c,d){var e,f;return e=function(c){function e(){return f=e.__super__.constructor.apply(this,arguments),f}return b(e,c),e.prototype.model=d,e.prototype.toJSON=function(){var b=this;return this.reduce(function(b,c){return a.extend(b,c.attributes)},{})},e}(c.Collection)})}).call(this)