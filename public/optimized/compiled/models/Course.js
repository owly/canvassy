(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["underscore","Backbone"],function(a,c){var d,e,f;return e=c.Model,d=function(c){function d(){return f=d.__super__.constructor.apply(this,arguments),f}return b(d,c),d.prototype.modelType="course",d.prototype.resourceName="courses",d.prototype.toJSON=function(){return{course:a.omit(this.attributes,"id","calendar","enrollments","workflow_state")}},d}(e)})}).call(this)