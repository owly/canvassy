define("jst/content_migrations/ProgressingIssues",["compiled/handlebars_helpers"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["content_migrations/ProgressingIssues"]=b(function(a,b,c,d,e){function l(a,b){return'\n<ul class="unstyled well collectionViewItems"></ul>\n'}c=c||a.helpers;var f="",g,h,i,j,k=this;i=c.collection,g=i||b.collection,g=g===null||g===undefined||g===!1?g:g.length,h=c["if"],j=k.program(1,l,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+='\n\n<div class="paginatedLoadingIndicator">Loading</div>\n',f}),c["content_migrations/ProgressingIssues"]})