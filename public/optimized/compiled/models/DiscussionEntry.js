(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["underscore","Backbone","i18n!discussions"],function(a,c,d){var e,f,g;return f={avatar_image_url:null,display_name:d.t("unknown_author","Unknown Author"),id:null},e=function(a){function c(){return g=c.__super__.constructor.apply(this,arguments),g}return b(c,a),c.prototype.author=function(){return this.findParticipant(this.get("user_id"))},c.prototype.editor=function(){return this.findParticipant(this.get("editor_id"))},c.prototype.findParticipant=function(a){var b,c,d;return a&&(b=(c=this.collection)!=null?c.participants.get(a):void 0)?b.toJSON():a===((d=ENV.current_user)!=null?d.id:void 0)?ENV.current_user:f},c}(c.Model)})}).call(this)