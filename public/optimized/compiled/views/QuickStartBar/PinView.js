(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["underscore","compiled/views/KollectionItems/KollectionItemSaveView","compiled/views/QuickStartBar/BaseItemView","compiled/models/Pin","jst/quickStartBar/pin","compiled/models/KollectionItem","jquery.instructure_date_and_time","compiled/jquery.rails_flash_notifications"],function(b,d,e,f,g,h){var i,j,k,l;return j=function(b){function d(){return this.render=a(this.render,this),k=d.__super__.constructor.apply(this,arguments),k}return c(d,b),d.prototype.render=function(){return d.__super__.render.apply(this,arguments),this.$(".toolbar").removeClass("toolbar"),this.$(".box-header").removeClass("box-header"),this.$(".box-content").removeClass("box-content").addClass("v-gutter"),this.$(".btn").addClass("small-button"),this.$("[autoFocus]").removeAttr("autoFocus")},d}(d),i=function(a){function d(){return l=d.__super__.constructor.apply(this,arguments),l}return c(d,a),d.prototype.events=b.extend({"keyup [name=url]":"onUrlKeyUp"},e.prototype.events),d.prototype.template=g,d.prototype.urlRegEx=/^(http(s?))?:\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,d.prototype.render=function(){return d.__super__.render.apply(this,arguments),this.createKollectionItemSaveView()},d.prototype.save=function(){return this.kollectionItemSaveView.model.save().done(function(){return $.flashMessage("TODO: Add collection items to the stream >:O")})},d.prototype.createKollectionItemSaveView=function(){return this.model=new h,this.kollectionItemSaveView=new j({model:this.model,el:this.$(".kollectionItemSaveView")[0]})},d.prototype.onUrlKeyUp=b.throttle(function(a){var b,c,d;return b=$(a.target),d=b.val(),c=this.addHTTP(d),this.updateLinkData(c)},1e3),d.prototype.addHTTP=function(a){return/^http(s)?:\/\//.test(a)?a:"http://"+a},d.prototype.updateLinkData=function(a){if(a===this.url)return;this.model.set("title",null),this.url=a;if(this.urlRegEx.test(a))return this.model.set("image_url",null,{silent:!0}),this.model.set("link_url",a,{silent:!0}),this.model.fetchLinkData()},d.type="pin",d.title=function(){return d.__super__.constructor.title.call(this,"pin","Pin")},d}(e)})}).call(this)