(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["jquery","underscore","compiled/views/PaginatedView","jst/contexts/PageView"],function(a,c,d,e){var f,g;return f=function(a){function d(){return g=d.__super__.constructor.apply(this,arguments),g}return b(d,a),d.prototype.initialize=function(a){var b;return b=a.fetchOptions,this.paginationScrollContainer=this.$el.parent(),d.__super__.initialize.call(this,{fetchOptions:b})},d.prototype.render=function(){var a;return a=c.map(this.collection.models,this.renderPageView),this.$el.append(a.join("")),d.__super__.render.apply(this,arguments)},d.prototype.renderPageView=function(a){return e(a.toJSON())},d}(d)})}).call(this)