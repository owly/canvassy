define("jst/ExternalTools/AppThumbnailView",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["ExternalTools/AppThumbnailView"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<div id="app_',j=c.id,g=j||b.id,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"id",{hash:{}})),f+=o(g)+'">\n  <img class="banner_image" src="',j=c.banner_url,g=j||b.banner_url,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"banner_url",{hash:{}})),f+=o(g)+'"></img>\n  <div class="details">\n    <div class="content">\n      <span class=\'name\'>',j=c.name,g=j||b.name,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"name",{hash:{}})),f+=o(g)+"</span>\n      <div class='desc'>",g=160,j=c.description,h=j||b.description,j=c.truncate,i=j||b.truncate,typeof i===l?g=i.call(b,h,g,{hash:{}}):i===n?g=m.call(b,"truncate",h,g,{hash:{}}):g=i;if(g||g===0)f+=g;return f+="</div>\n    </div>\n  </div>\n</div>\n",f}),c["ExternalTools/AppThumbnailView"]})