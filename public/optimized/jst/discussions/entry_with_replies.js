define("jst/discussions/entry_with_replies",["compiled/handlebars_helpers","jst/discussions/_deleted_entry","jst/discussions/_entry_content","jst/discussions/_reply_form"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["discussions/entry_with_replies"]=b(function(a,b,c,d,e){function p(a,b){return"deleted-discussion-entry"}function q(a,b){return"can-reply"}function r(a,b){var e="",f;e+="\n      ",f=a,f=k.invokePartial(d["discussions/deleted_entry"],"discussions/deleted_entry",f,c,d);if(f||f===0)e+=f;return e+="\n    ",e}function s(a,b){var e="",f;e+="\n      ",f=a,f=k.invokePartial(d["discussions/entry_content"],"discussions/entry_content",f,c,d);if(f||f===0)e+=f;return e+="\n    ",e}function t(a,b){var e="",f;e+="\n    ",f=a,f=k.invokePartial(d["discussions/reply_form"],"discussions/reply_form",f,c,d);if(f||f===0)e+=f;return e+="\n  ",e}function u(a,b){var e="",f;e+='\n  <div class="bottom-reply-with-box">\n    ',f=a,f=k.invokePartial(d["discussions/reply_form"],"discussions/reply_form",f,c,d);if(f||f===0)e+=f;return e+="\n  </div>\n",e}c=c||a.helpers,d=d||a.partials;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<article class="discussion_entry can_be_marked_as_read ',i=c.read_state,g=i||b.read_state,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"read_state",{hash:{}})),f+=o(g)+"-onload ",i=c.read_state,g=i||b.read_state,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"read_state",{hash:{}})),f+=o(g)+" ",i=c.deleted,g=i||b.deleted,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+=" ",i=c.canReply,g=i||b.canReply,h=c["if"],j=k.program(3,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='"\n         data-mark-read-url="',i=c.mark_read_url,g=i||b.mark_read_url,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"mark_read_url",{hash:{}})),f+=o(g)+'">\n  <a href="#"\n     class="discussion-read-state-btn"\n     role="button"\n     title=""\n     data-tooltip=\'{ "position": "top", "collision": "none" }\'\n     data-event="toggleRead">\n    <div class="discussion-read-state tooltip data-tooltip"></div>\n  </a>\n  <div class="entry_content" data-should-position>\n    ',i=c.deleted,g=i||b.deleted,h=c["if"],j=k.program(5,r,e),j.hash={},j.fn=j,j.inverse=k.program(7,s,e),g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n  </div>\n  ",i=c.allowsThreadedReplies,g=i||b.allowsThreadedReplies,h=c["if"],j=k.program(9,t,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='\n</article>\n<div class="replies hide-if-collapsed"></div>\n',i=c.allowsSideComments,g=i||b.allowsSideComments,h=c["if"],j=k.program(11,u,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n\n\n",f}),c["discussions/entry_with_replies"]})