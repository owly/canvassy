define("jst/wiki/WikiPageIndexItem",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["wiki/WikiPageIndexItem"]=b(function(a,b,c,d,e){function p(a,b){return"text-success"}function q(a,b){return"muted"}function r(a,b){return' <span class="label">Front Page</span>'}function s(a,b){var d="",e;return d+=" by ",i=c.last_edited_by,e=i||a.last_edited_by,e=e===null||e===undefined||e===!1?e:e.display_name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"last_edited_by.display_name",{hash:{}})),d+=o(e),d}function t(a,b){return"text-success"}function u(a,b){return"muted"}function v(a,b){return"publish"}function w(a,b){return"unpublished"}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<td><a href="',i=c.htmlUrl,g=i||b.htmlUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"htmlUrl",{hash:{}})),f+=o(g)+'" class="',i=c.published,g=i||b.published,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.program(3,q,e),g=h.call(b,g,j);if(g||g===0)f+=g;f+='">',i=c.title,g=i||b.title,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"title",{hash:{}})),f+=o(g)+"</a>",i=c.front_page,g=i||b.front_page,h=c["if"],j=k.program(5,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="</td>\n<td>",i=c.created_at,g=i||b.created_at,i=c.friendlyDatetime,h=i||b.friendlyDatetime,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"friendlyDatetime",g,{hash:{}}):g=h,f+=o(g)+"</td>\n<td>",i=c.updated_at,g=i||b.updated_at,i=c.friendlyDatetime,h=i||b.friendlyDatetime,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"friendlyDatetime",g,{hash:{}}):g=h,f+=o(g),i=c.last_edited_by,g=i||b.last_edited_by,h=c["if"],j=k.program(7,s,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='</td>\n<td><span class="',i=c.published,g=i||b.published,h=c["if"],j=k.program(9,t,e),j.hash={},j.fn=j,j.inverse=k.program(11,u,e),g=h.call(b,g,j);if(g||g===0)f+=g;f+='"><i class="icon-',i=c.published,g=i||b.published,h=c["if"],j=k.program(13,v,e),j.hash={},j.fn=j,j.inverse=k.program(15,w,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+='"></i></span></td>',f}),c["wiki/WikiPageIndexItem"]})