(function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["Backbone","jquery","i18n!notifications_search","jst/accounts/admin_tools/commMessagesSearchForm","compiled/collections/CommMessageCollection","compiled/views/ValidatedMixin","jquery.ajaxJSON"],function(a,c,d,e,f,g){var h,i;return h=function(a){function c(){return i=c.__super__.constructor.apply(this,arguments),i}return b(c,a),c.mixin(g),c.prototype.tagName="form",c.prototype.template=e,c.prototype.events={submit:"submit"},c.prototype.els={"#userIdSearchField":"$userIdSearchField","#dateStartSearchField":"$dateStartSearchField","#dateEndSearchField":"$dateEndSearchField"},c.prototype.afterRender=function(){return this.$dateStartSearchField.datetime_field(),this.$dateEndSearchField.datetime_field()},c.prototype.validityCheck=function(){var a,b,c;return b=this.$el.toJSON(),c=!0,a={},b.user_id||(c=!1,a.user_id=[{type:"required",message:d.t("cant_be_blank","Canvas User ID can't be blank")}]),b.start_time&&b.end_time&&b.start_time>b.end_time&&(c=!1,a.end_time=[{type:"invalid",message:d.t("cant_come_before_from","'To Date' can't come before 'From Date'")}]),this.showErrors(a),c},c.prototype.submit=function(a){a.preventDefault();if(this.validityCheck())return this.updateCollection()},c.prototype.updateCollection=function(){var a;return a=this.$el.toJSON(),a.start_time||(a.start_time=""),a.end_time||(a.end_time=""),this.collection.setParams(a)},c}(a.View)})}).call(this)