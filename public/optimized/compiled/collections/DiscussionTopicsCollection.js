(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["compiled/collections/PaginatedCollection","compiled/models/DiscussionTopic"],function(a,c){var d,e;return d=function(a){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,a),d.prototype.model=c,d.prototype.comparator=d.dateComparator,d.dateComparator=function(a,b){var c,d;return c=(new Date(a.get("last_reply_at"))).getTime(),d=(new Date(b.get("last_reply_at"))).getTime(),c<d?1:c===d?0:-1},d.positionComparator=function(a,b){var c,d;return c=a.get("position"),d=b.get("position"),c<d?-1:c===d?0:1},d}(a)})}).call(this)