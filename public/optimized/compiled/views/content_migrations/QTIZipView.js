(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","jst/content_migrations/QTIZip","compiled/views/content_migrations/MigrationView"],function(a,c,d){var e,f;return e=function(a){function d(){return f=d.__super__.constructor.apply(this,arguments),f}return b(d,a),d.prototype.template=c,d.child("chooseMigrationFile",".chooseMigrationFile"),d.child("questionBank",".selectQuestionBank"),d.child("overwriteAssessmentContent",".overwriteAssessmentContent"),d}(d)})}).call(this)