define("jst/wiki/_wiki_page_buttons",["compiled/handlebars_helpers","i18n!wiki.wiki_page_buttons"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["wiki/_wiki_page_buttons"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div id="wiki_page_buttons" class="clearfix">\n  <div id="pages-toolbar-right-buttons" style="float:right;">\n    <button class="btn btn-primary new_page">',g="New Page",h="buttons.new_page",i={},j="wiki.wiki_page_buttons",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</button>\n  </div>\n</div>\n",f}),a.registerPartial("wiki/wiki_page_buttons",c["wiki/_wiki_page_buttons"]),c["wiki/_wiki_page_buttons"]})