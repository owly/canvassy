(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["compiled/models/DiscussionTopic","underscore"],function(a,c){var d,e;return d=function(a){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,a),d.prototype.urlRoot=function(){return c.result(this.collection,"url").replace(this.collection._stringToAppendToURL,"")},d.prototype.defaults={is_announcement:!0},d}(a)})}).call(this)