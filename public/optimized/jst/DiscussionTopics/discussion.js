define("jst/DiscussionTopics/discussion",["compiled/handlebars_helpers","i18n!discussion_topics.discussion"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["DiscussionTopics/discussion"]=b(function(a,b,c,d,e){function q(a,b){return'<i class="icon-assignment"></i>'}function r(a,b){var d="",e,f;d+="\n        ",j=c.assignment,e=j||a.assignment,e=e===null||e===undefined||e===!1?e:e.due_at,f=c["if"],k=l.program(4,s,b),k.hash={},k.fn=k,k.inverse=l.program(6,t,b),e=f.call(a,e,k);if(e||e===0)d+=e;return d+="\n      ",d}function s(a,b){var d="",e,f,g,h;d+="\n          ",e="Due",f="due",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+=" ",e="medium",j=c.assignment,f=j||a.assignment,f=f===null||f===undefined||f===!1?f:f.due_at,j=c.tDateToString,g=j||a.tDateToString,typeof g===m?e=g.call(a,f,e,{hash:{}}):g===o?e=n.call(a,"tDateToString",f,e,{hash:{}}):e=g,d+=p(e)+"\n        ",d}function t(a,b){var d="",e,f,g,h;d+="\n          ",e="No Due Date",f="no_due_date",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+="\n        ",d}function u(a,b){var d="",e,f,g,h;d+='\n        <i class="icon-discussion-check"\n           data-tooltip\n           title="',e="You are subscribed to this topic",f="user_subscribed",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+='"></i>\n      ',d}function v(a,b){var d="",e,f,g,h;d+='\n        <i class="icon-discussion"\n           data-tooltip\n           title="',e="You are not subscribed to this topic",f="user_unsubscribed",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+='"></i>\n      ',d}function w(a,b){var d="",e,f,g,h;d+='\n        <a href="#" class="al-trigger">\n          <i class="icon-settings"></i><i class="icon-mini-arrow-down"></i>\n        </a>\n\n        <ul class="al-options">\n          <li>\n            <a href="#" class="icon-lock">\n              ',j=c.locked,e=j||a.locked,f=c["if"],k=l.program(13,x,b),k.hash={},k.fn=k,k.inverse=l.program(15,y,b),e=f.call(a,e,k);if(e||e===0)d+=e;d+='\n            </a>\n          </li>\n          <li>\n            <a href="#" class="icon-trash">',e="Delete",f="delete",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;d+="</a>\n          </li>\n          ",j=c.pinnable,e=j||a.pinnable,f=c["if"],k=l.program(17,z,b),k.hash={},k.fn=k,k.inverse=l.noop,e=f.call(a,e,k);if(e||e===0)d+=e;return d+="\n        </ul>\n      ",d}function x(a,b){var d="",e,f,g,h;d+="\n                ",e="Open to comments",f="open_to_comments",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+="\n              ",d}function y(a,b){var d="",e,f,g,h;d+="\n                ",e="Close for comments",f="close_for_comments",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+="\n              ",d}function z(a,b){var d="",e,f;d+='\n            <li>\n              <a href="#" class="icon-pin">\n                ',j=c.pinned,e=j||a.pinned,f=c["if"],k=l.program(18,A,b),k.hash={},k.fn=k,k.inverse=l.program(20,B,b),e=f.call(a,e,k);if(e||e===0)d+=e;return d+="\n              </a>\n            </li>\n          ",d}function A(a,b){var d="",e,f,g,h;d+="\n                  ",e="Unpin",f="unpin",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+="\n                ",d}function B(a,b){var d="",e,f,g,h;d+="\n                  ",e="Pin",f="pin",g={},h="discussion_topics.discussion",g.scope=h,j=c.t,h=j||a.t,k={},k.hash=g,typeof h===m?e=h.call(a,f,e,k):h===o?e=n.call(a,"t",f,e,k):e=h;if(e||e===0)d+=e;return d+="\n                ",d}c=c||a.helpers;var f="",g,h,i,j,k,l=this,m="function",n=c.helperMissing,o=void 0,p=this.escapeExpression;f+='<div class="discussion-content">\n  <div class="discussion-row">\n    <div class="discussion-type">\n      ',j=c.assignment,g=j||b.assignment,h=c["if"],k=l.program(1,q,e),k.hash={},k.fn=k,k.inverse=l.noop,g=h.call(b,g,k);if(g||g===0)f+=g;f+='\n    </div>\n\n    <div class="discussion-title">\n      <a href="',j=c.html_url,g=j||b.html_url,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"html_url",{hash:{}})),f+=p(g)+'" class="title">',j=c.title,g=j||b.title,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"title",{hash:{}})),f+=p(g)+"</a>\n      <small>Last post ",g="medium",j=c.last_reply_at,h=j||b.last_reply_at,j=c.tDateToString,i=j||b.tDateToString,typeof i===m?g=i.call(b,h,g,{hash:{}}):i===o?g=n.call(b,"tDateToString",h,g,{hash:{}}):g=i,f+=p(g)+'</small>\n    </div>\n\n    <div class="discussion-due-date">\n      ',j=c.assignment,g=j||b.assignment,h=c["if"],k=l.program(3,r,e),k.hash={},k.fn=k,k.inverse=l.noop,g=h.call(b,g,k);if(g||g===0)f+=g;f+='\n    </div>\n\n    <div class="discussion-status">\n      ',j=c.subscribed,g=j||b.subscribed,h=c["if"],k=l.program(8,u,e),k.hash={},k.fn=k,k.inverse=l.program(10,v,e),g=h.call(b,g,k);if(g||g===0)f+=g;f+='\n\n      <!-- <i class="icon-unpublished"></i> -->\n    </div>\n\n    <div class="discussion-unread-status">\n      <div class="new-and-total-badge pull-right">\n        <span class="new-items"\n              title="',j=c.unread_count_tooltip,g=j||b.unread_count_tooltip,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"unread_count_tooltip",{hash:{}})),f+=p(g)+'"\n              data-tooltip>\n          ',j=c.unread_count,g=j||b.unread_count,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"unread_count",{hash:{}})),f+=p(g)+'\n        </span>\n\n        <div class="total-items"\n             title="',j=c.reply_count_tooltip,g=j||b.reply_count_tooltip,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"reply_count_tooltip",{hash:{}})),f+=p(g)+'"\n             data-tooltip>\n          ',j=c.discussion_subentry_count,g=j||b.discussion_subentry_count,typeof g===m?g=g.call(b,{hash:{}}):g===o&&(g=n.call(b,"discussion_subentry_count",{hash:{}})),f+=p(g)+'\n        </div>\n      </div>\n    </div>\n\n\n    <div class="discussion-actions">\n      ',j=c.permissions,g=j||b.permissions,g=g===null||g===undefined||g===!1?g:g["delete"],h=c["if"],k=l.program(12,w,e),k.hash={},k.fn=k,k.inverse=l.noop,g=h.call(b,g,k);if(g||g===0)f+=g;return f+="\n    </div>\n  </div>\n</div>\n",f}),c["DiscussionTopics/discussion"]})