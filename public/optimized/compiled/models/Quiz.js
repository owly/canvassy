(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","compiled/collections/AssignmentOverrideCollection"],function(a,c){var d,e,f;return d=a.Model,e=function(a){function d(){return f=d.__super__.constructor.apply(this,arguments),f}return b(d,a),d.prototype.initialize=function(a){var b,d;return d=a.assignment_overrides,b=new c(d),this.set("assignment_overrides",b,{silent:!0})},d.prototype.defaults={due_at:null,unlock_at:null,lock_at:null},d}(d)})}).call(this)