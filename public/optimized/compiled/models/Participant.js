(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","i18n!discussions.participant"],function(a,c){var d,e;return d=function(a){function d(){return e=d.__super__.constructor.apply(this,arguments),e}return b(d,a),d.prototype.defaults={avatar_image_url:"",display_name:c.t("anonymous_user","Anonymous"),id:null},d}(a.Model)})}).call(this)