(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["jst/ExternalTools/AppCenterView","compiled/views/PaginatedCollectionView","compiled/views/ExternalTools/AppThumbnailView"],function(b,d,e){var f,g;return f=function(d){function f(){return this.renderItem=a(this.renderItem,this),g=f.__super__.constructor.apply(this,arguments),g}return c(f,d),f.prototype.filterText="",f.prototype.template=b,f.prototype.itemView=e,f.prototype.renderItem=function(a){var b;b=new RegExp(this.filterText,"i");if(a.get("name").match(b)||a.get("categories").join().match(b))return f.__super__.renderItem.apply(this,arguments)},f}(d)})}).call(this)