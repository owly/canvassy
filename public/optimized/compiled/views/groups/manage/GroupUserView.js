(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["underscore","Backbone","jst/groups/manage/groupUser"],function(a,c,d){var e,f,g;return f=c.View,e=function(c){function e(){return g=e.__super__.constructor.apply(this,arguments),g}return b(e,c),e.optionProperty("canAssignToGroup"),e.prototype.tagName="li",e.prototype.className="groupUser",e.prototype.template=d,e.prototype.attach=function(){return this.model.on("change",this.render,this)},e.prototype.toJSON=function(){return a.extend({},this,e.__super__.toJSON.apply(this,arguments))},e}(f)})}).call(this)