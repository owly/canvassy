(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["underscore","compiled/collections/ContentMigrationIssueCollection","compiled/models/ContentMigrationProgress","compiled/models/ProgressingContentMigration","compiled/collections/PaginatedCollection"],function(a,c,d,e,f){var g,h;return g=function(a){function c(){return h=c.__super__.constructor.apply(this,arguments),h}return b(c,a),c.prototype.model=e,c.optionProperty("course_id"),c.prototype.url=function(){return"/api/v1/courses/"+this.course_id+"/content_migrations"},c.prototype.comparator=function(a,b){return b.get("created_at")>a.get("created_at")?1:b.get("created_at")<a.get("created_at")?-1:0},c}(f)})}).call(this)