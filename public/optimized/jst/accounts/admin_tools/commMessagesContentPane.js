define("jst/accounts/admin_tools/commMessagesContentPane",["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_content_pane"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["accounts/admin_tools/commMessagesContentPane"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+="<h3>",g="View Notifications",h="view_notifications",i={},j="accounts.admin_tools.comm_messages_content_pane",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</h3>\n<p>\n  ",g="To view all notifications sent to a Canvas user, enter their Canvas user ID and date range for your search.",h="search_info",i={},j="accounts.admin_tools.comm_messages_content_pane",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+='\n</p>\n\n<form id="commMessagesSearchForm" class=\'form-horizontal\'></form>\n<hr />\n<div id="commMessagesSearchOverview"></div>\n\n<div id="commMessagesSearchResults"></div>\n',f}),c["accounts/admin_tools/commMessagesContentPane"]})