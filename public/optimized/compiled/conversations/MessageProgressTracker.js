(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["i18n!conversations","underscore","compiled/conversations/MessageProgressBar","jquery.ajaxJSON"],function(b,c,d){var e;return e=function(){function e(b){this.app=b,this.batchPoller=a(this.batchPoller,this),this.batchItems={},this.$list=$("#message_status")}return e.prototype.track=function(a,c){var e,f=this;return e=new d(this,a),this.$list.append(e.$node),e.$bar.focus(),c&&$.when(c).then(function(a,b,c){var d;if(c.status!==202)return e.complete();if(d=c.getResponseHeader("X-Conversation-Batch-Id"))f.batchItems[d]=e;if(!f.polling)return f.batchPoller()},function(a){var c,d,f;return(typeof a.isRejected=="function"?a.isRejected():void 0)?e.complete():(c=((d=a[0])!=null?d.attribute:void 0)==="recipients"&&a[0].message==="invalid"?b.t("recipient_error","The course or group you have selected has no valid recipients"):((f=a[0])!=null?f.attribute:void 0)==="attachment"&&a[0].message==="upload failed"?b.t("attachment_error","Attachment failed to upload, please try again."):b.t("unspecified_error","An unexpected error occurred, please try again"),e.error(c))}),e},e.prototype.batchPoller=function(){var a=this;return this.polling=!0,$.ajaxJSON("/conversations/batches","GET",{},function(b){return a.updateItems(b),b.length>0?setTimeout(a.batchPoller,3e3):a.polling=!1})},e.prototype.updateItems=function(a){var b,d,e,f,g,h;d=c.reduce(a,function(a,b){return a[b.id]=b,a},{});for(e in d)a=d[e],(g=(h=this.batchItems[e])!=null?h.update(a):void 0)!=null?g:this.batchItems[e]=this.track(a);b=function(){var a,b;a=this.batchItems,b=[];for(e in a){f=a[e];if(!!d[e])continue;f.complete(),b.push(delete this.batchItems[e])}return b}.call(this);if(b.length)return this.app.updateView(!0)},e.prototype.height=function(){return this.$list.outerHeight(!0)},e}()})}).call(this)