define("jst/ExternalTools/IndexView",["compiled/handlebars_helpers","i18n!external_tools.index_view"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["ExternalTools/IndexView"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<h2 class="page-header">',g="External Apps",h="app_headder",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n\n  <button class="btn view_tools_link lm pull-right">\n    ',g="View Installed Apps",h="view_installed_tools",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n  </button>\n  <button class="btn view_app_center_link lm pull-right">\n    ',g="View App Center",h="view_app_center",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n  </button>\n  <button class="btn btn-primary add_tool_link lm pull-right">\n    ',g="Add New App",h="add_new_tool",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n  </button>\n\n  <input type="text" id="app_center_filter" class="input-large search-query pull-right" placeholder="',g="Filter by name",h="search_filter",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n</h2>\n\n<p class="well well-small">\n  ',g="Apps are an easy way to add new features to Canvas. They can be added to individual courses, or to all courses in an account. Once configured, you can link to them through course modules and create assignments for assessment tools.",h="external_tools_note",i={},j="external_tools.index_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="<br/><br/>",g="Click *here* to see some LTI tools that work great with Canvas. You can also check out the Canvas Community topics about LTI tools **here**",h="external_tools_references",i={},j="external_tools.index_view",i.scope=j,j='<a href="https://www.edu-apps.org">$1</a>',i.w0=j,j='<a href="http://help.instructure.com/entries/20878626-lti-tools-and-examples"> $1</a>',i.w1=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+='\n</p>\n\n<div data-view="appCenter"></div>\n<div data-view="externalTools"></div>\n<div data-view="appFull"></div>\n',f}),c["ExternalTools/IndexView"]})