define(["INST","jquery"],function(a,b){function d(a){var c=a.getResponseHeader("X-CSRF-Token");c&&(ENV.AUTHENTICITY_TOKEN=c,b("#ajax_authenticity_token").text(c))}var c=b.getJSON;b.getJSON=function(a,d,e){var f=c.apply(b,arguments);return b.ajaxJSON.storeRequest(f,a,"GET",d),f},b.ajaxJSON=function(a,c,e,f,g,h){e=e||{};if(!a&&g){g(null,null,"URL required for requests",null);return}a=a||".",c!="GET"&&(e._method=c,c="POST",e.authenticity_token||(e.authenticity_token=b("#ajax_authenticity_token").text())),b("#page_view_id").length>0&&!e.page_view_id&&(!h||!h.skipPageViewLog)&&(e.page_view_id=b("#page_view_id").text());var i=function(a,c,d){var e=a;if(a.responseText){var f=a.responseText.replace(/(<([^>]+)>)/ig,"");e={message:f};try{e=b.parseJSON(a.responseText)}catch(i){}}h&&h.skipDefaultError&&b.ajaxJSON.ignoredXHRs.push(a),g&&b.isFunction(g)?g(e,a,c,d):b.ajaxJSON.unhandledXHRs.push(a)},j={url:a,dataType:"json",type:c,success:function(a,c,e){d(e),a=a||{};var g=null;e&&e.getResponseHeader&&(g=e.getResponseHeader("X-Canvas-Page-View-Id"))&&setTimeout(function(){b(document).triggerHandler("page_view_id_received",g)},50),!a.length&&a.errors?(i(a.errors,null,""),!h||!h.skipDefaultError?b.fn.defaultAjaxError.func.call(b.fn.defaultAjaxError.object,null,a,"0",a.errors):b.ajaxJSON.ignoredXHRs.push(e)):f&&b.isFunction(f)&&f(a,e)},error:function(a){d(a),i.apply(this,arguments)},complete:function(a){},data:e};h&&h.timeout&&(j.timeout=h.timeout);var k=b.ajax(j);return b.ajaxJSON.storeRequest(k,a,c,e),k},b.ajaxJSON.unhandledXHRs=[],b.ajaxJSON.ignoredXHRs=[],b.ajaxJSON.passedRequests=[],b.ajaxJSON.storeRequest=function(a,c,d,e){b.ajaxJSON.passedRequests.push({xhr:a,url:c,submit_type:d,data:e})},b.ajaxJSON.findRequest=function(a){var c=b.ajaxJSON.passedRequests;for(var d in c)if(c[d]&&c[d].xhr==a)return c[d];return null},b.fn.defaultAjaxError=function(c){b.fn.defaultAjaxError.object=this,b.fn.defaultAjaxError.func=function(d,e,f,g){var h=a.environment=="production",i=b.inArray(e,b.ajaxJSON.unhandledXHRs)!=-1,j=b.inArray(e,b.ajaxJSON.ignoredXHRs)!=-1;if((!h||i)&&!j){b.ajaxJSON.unhandledXHRs=b.grep(b.ajaxJSON.unhandledXHRs,function(a,b){return a!=e});var k=!1;i||(k=!0),c.call(this,d,e,f,g,k)}},this.ajaxError(b.fn.defaultAjaxError.func)}})