define("jst/conferences/newConference",["compiled/handlebars_helpers","i18n!conferences.new_conference"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["conferences/newConference"]=b(function(a,b,c,d,e){function p(a,b){var d="",e,f,g,h;d+='\n      <span class="label label-success ',i=c.has_actions,e=i||a.has_actions,f=c["if"],j=k.program(2,q,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;d+='">',e="In Progress",f="in_progress",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</span>\n    ",d}function q(a,b){return"has_actions"}function r(a,b){var d="",e,f,g,h;d+='\n        <a class="icon-edit edit_conference_link" href="',i=c.url,e=i||a.url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"url",{hash:{}})),d+=o(e)+'" aria-label="',e="Edit",f="edit",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+='"></a>\n      ',d}function s(a,b){var d="",e,f,g,h;d+='\n        <a class="icon-trash delete_conference_link" href="',i=c.url,e=i||a.url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"url",{hash:{}})),d+=o(e)+'" aria-label="',e="Delete",f="delete",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+='"></a>\n      ',d}function t(a,b){return"show-end-button"}function u(a,b){var d="",e,f,g,h;d+="\n      <a class='btn btn-small close_conference_link' href=\"",i=c.url,e=i||a.url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"url",{hash:{}})),d+=o(e)+'/close">',e="End",f="end_it_now",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="</a>\n    ",d}function v(a,b){var d="",e,f;d+="\n      ",i=c.permissions,e=i||a.permissions,e=e===null||e===undefined||e===!1?e:e.join,f=c["if"],j=k.program(13,w,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;return d+="\n   ",d}function w(a,b){var d="",e,f,g,h;d+='\n        <a href="',i=c.join_url,e=i||a.join_url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"join_url",{hash:{}})),d+=o(e)+'" class="btn btn-small join-button btn-primary" target="_blank">\n          ',e="Join",f="join",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="\n        </a>\n      ",d}function x(a,b){var d="",e,f;d+="\n      ",i=c.permissions,e=i||a.permissions,e=e===null||e===undefined||e===!1?e:e.initiate,f=c["if"],j=k.program(16,y,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;return d+="\n   ",d}function y(a,b){var d="",e,f,g,h;d+='\n        <a href="',i=c.join_url,e=i||a.join_url,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"join_url",{hash:{}})),d+=o(e)+'" class="btn btn-small start-button" target="_blank">\n          ',e="Start",f="start",g={},h="conferences.new_conference",g.scope=h,i=c.t,h=i||a.t,j={},j.hash=g,typeof h===l?e=h.call(a,f,e,j):h===n?e=m.call(a,"t",f,e,j):e=h;if(e||e===0)d+=e;return d+="\n        </a>\n      ",d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<div class="conference table-row">\n  <div class="table-cell conference-title ellipsis" title="',i=c.title,g=i||b.title,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"title",{hash:{}})),f+=o(g)+'">\n    ',i=c.title,g=i||b.title,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"title",{hash:{}})),f+=o(g)+'\n  </div>\n  <div class="table-cell conference-description">\n    ',i=c.description,g=i||b.description,i=c.newlinesToBreak,h=i||b.newlinesToBreak,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"newlinesToBreak",g,{hash:{}}):g=h,f+=o(g)+'\n  </div>\n  <div class="table-cell conference-actions align-center">\n    ',i=c.started_at,g=i||b.started_at,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='\n\n    <div class="actions">\n      ',i=c.permissions,g=i||b.permissions,g=g===null||g===undefined||g===!1?g:g.update,h=c["if"],j=k.program(4,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n      ",i=c.permissions,g=i||b.permissions,g=g===null||g===undefined||g===!1?g:g["delete"],h=c["if"],j=k.program(6,s,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='\n    </div>\n  </div>\n  <div class="table-cell conference-start align-right ',i=c.show_end,g=i||b.show_end,h=c["if"],j=k.program(8,t,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='">\n    ',i=c.show_end,g=i||b.show_end,h=c["if"],j=k.program(10,u,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="\n    ",i=c.started_at,g=i||b.started_at,h=c["if"],j=k.program(12,v,e),j.hash={},j.fn=j,j.inverse=k.program(15,x,e),g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n  </div>\n</div>\n",f}),c["conferences/newConference"]})