(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a},d=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};define(["Backbone"],function(b){var e,f,g;return e=b.Model,f=function(b){function e(){return this.onPoll=a(this.onPoll,this),this.poll=a(this.poll,this),g=e.__super__.constructor.apply(this,arguments),g}return c(e,b),e.prototype.defaults={url:null,timeout:1e3},e.prototype.pollStates=["queued","running"],e.prototype.isPolling=function(){var a;return a=this.get("workflow_state"),d.call(this.pollStates,a)>=0},e.prototype.initialize=function(){var a=this;return this.pollDfd=new $.Deferred,this.on("change:url",function(){if(a.isPolling())return a.poll()})},e.prototype.url=function(){return this.get("url")},e.prototype.poll=function(){var a=this;return this.fetch().then(this.onPoll,function(){return a.pollDfd.rejectWith(a,arguments)}),this.pollDfd},e.prototype.onPoll=function(){return this.isPolling()?setTimeout(this.poll,this.get("timeout")):(this.pollDfd.resolve(),this.trigger("complete"))},e}(e)})}).call(this)