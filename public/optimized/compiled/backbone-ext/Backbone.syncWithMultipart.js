(function(){define(["use!vendor/backbone","underscore","jquery"],function(a,b,c){return a.syncWithoutMultipart=a.sync,a.syncWithMultipart=function(a,d,e){var f,g,h,i,j,k,l,m;return k=b.uniqueId("file_upload_iframe_"),g=c("<iframe id='"+k+"' name='"+k+"' ></iframe>").hide(),i=new c.Deferred,j={create:"POST",update:"PUT","delete":"DELETE",read:"GET"}[a],l=function(a,d,e){var f;return f=b.map(a,function(a,f){var g,h;d&&(f=""+d+"["+(e?"":f)+"]");if(b.isElement(a))return h=c(a),h.after(h.clone(!0)),a;if(!b.isEmpty(a)&&(b.isArray(a)||typeof a=="object"))return l(a,f,b.isArray(a));if(!(""+f).match(/^_/)&&a!=null&&typeof a!="object"&&typeof a!="function")return g=c("<input/>",{name:f,value:a}),g[0]}),b.flatten(f)},f=c("<form enctype='multipart/form-data' target='"+k+"' action='"+((m=e.url)!=null?m:d.url())+"' method='POST'>\n</form>").hide(),e.proxyAttachment&&f.prepend("<input type='hidden' name='_method' value='"+j+"' />\n<input type='hidden' name='authenticity_token' value='"+ENV.AUTHENTICITY_TOKEN+"' />"),b.each(l(d.toJSON()),function(a){if(!a)return;return a.name==="file"?f.append(a):f.prepend(a)}),c(document.body).prepend(g,f),h=function(){var a,b,d;a=(g[0].contentDocument||g[0].contentWindow.document).body,b=c.parseJSON(c(a).text());if(!b)return;return b=(d=b.objects)!=null?d:b,a.className==="error"?(typeof e.error=="function"&&e.error(b),i.reject(b)):(typeof e.success=="function"&&e.success(b),i.resolve(b)),g.remove(),f.remove()},g[0].onreadystatechange=function(){if(this.readyState==="complete")return h()},g[0].onload=h,f[0].submit(),i},a.sync=function(b,c,d){return(d!=null?d.multipart:void 0)?a.syncWithMultipart.apply(this,arguments):a.syncWithoutMultipart.apply(this,arguments)}})}).call(this)