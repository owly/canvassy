(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["compiled/collections/PaginatedCollection"],function(b){var d,e;return d=function(b){function d(){return this.updateGroupId=a(this.updateGroupId,this),e=d.__super__.constructor.apply(this,arguments),e}return c(d,b),d.collectionMap={},d.optionProperty("groupId"),d.prototype.initialize=function(a){return d.__super__.initialize.apply(this,arguments),this.on("change:groupId",this.updateGroupId),d.collectionMap[this.groupId]=this},d.prototype.updateGroupId=function(a,b){var c;return this.remove(a),(c=d.collectionMap[b])!=null?c.add(a):void 0},d}(b)})}).call(this)