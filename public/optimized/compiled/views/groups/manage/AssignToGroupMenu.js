(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["Backbone","jst/groups/manage/assignToGroupMenu"],function(b,d){var e,f,g;return f=b.View,e=function(b){function e(){return this.hide=a(this.hide,this),g=e.__super__.constructor.apply(this,arguments),g}return c(e,b),e.prototype.initialize=function(){var a;return e.__super__.initialize.apply(this,arguments),this.render(),a=$(document.body),a.on("click",this.hide),this.$el.appendTo(a),this.$el.hide(),this.collection.on("change add remove reset",this.render)},e.prototype.events={"click .set-group":"setGroup"},e.prototype.tagName="div",e.prototype.className="assign-to-group-menu popover content-top horizontal",e.prototype.template=d,e.prototype.showBy=function(a){return this.render(),this.$el.show(),this.$el.position({my:"left+6 top-47",at:"right center",of:a})},e.prototype.hide=function(){return this.$el.hide()},e.prototype.setGroup=function(a){return a.preventDefault(),this.model.set("groupId",$(a.target).data("group-id")),this.hide()},e.prototype.toJSON=function(){return{groups:this.collection.toJSON()}},e}(f)})}).call(this)