define("jst/discussions/noResults",["compiled/handlebars_helpers","i18n!discussions.no_results"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["discussions/noResults"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+="<p>\n  ",g="Your search did not match any entries.",h="your_search_did_not_match_any_entries",i={},j="discussions.no_results",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n</p>\n<p>\n",g="Suggestions:",h="suggestions",i={},j="discussions.no_results",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n<ul>\n  <li>",g="Make sure all search terms are spelled correctly.",h="make_sure_all_search_terms_are_spelled_correctly",i={},j="discussions.no_results",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n  <li>",g="Try different, more general, or fewer keywords.",h="try_different_more_general_or_fewer_keywords",i={},j="discussions.no_results",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</li>\n  <li>",g='Try disabling the "Unread" filter.',h="try_disabling_the_unread_filter",i={},j="discussions.no_results",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</li>\n</ul>\n",f}),c["discussions/noResults"]})