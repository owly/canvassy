(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","compiled/models/ContentMigrationProgress","compiled/collections/ContentMigrationIssueCollection"],function(a,c,d){var e,f;return e=function(a){function e(){return f=e.__super__.constructor.apply(this,arguments),f}return b(e,a),e.prototype.initialize=function(a,b){var c;return e.__super__.initialize.apply(this,arguments),this.course_id=((c=this.collection)!=null?c.course_id:void 0)||(b!=null?b.course_id:void 0)||this.get("course_id"),this.buildChildren(),this.pollIfRunning(),this.syncProgressUrl()},e.prototype.buildChildren=function(){return this.progressModel=new c({url:this.get("progress_url"),course_id:this.course_id}),this.issuesCollection=new d(null,{course_id:this.course_id,content_migration_id:this.get("id")})},e.prototype.pollIfRunning=function(){if(this.get("workflow_state")==="running")return this.progressModel.poll()},e.prototype.syncProgressUrl=function(){var a=this;return this.on("change:progress_url",function(){return a.progressModel.set("url",a.get("progress_url"))})},e}(a.Model)})}).call(this)