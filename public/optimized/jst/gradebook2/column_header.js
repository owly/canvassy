define("jst/gradebook2/column_header",["compiled/handlebars_helpers","i18n!gradebook2.column_header"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["gradebook2/column_header"]=b(function(a,b,c,d,e){function r(a,b){var d="",e,f,g,h;d+='\n    title="',e="This assignment is muted",f="this_assignment_is_muted",g={},h="gradebook2.column_header",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+='"\n  ',d}function s(a,b){var d="",e,f,g,h;d+='\n    title="',e="Assignments in this group have no points possible and cannot be included in grade calculation",f="zero_point_assignment",g={},h="gradebook2.column_header",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+='"\n  ',d}function t(a,b){return"muted"}function u(a,b){return'\n    <i class="icon-warning"></i>\n  '}function v(a,b){var d="",e,f,g,h;d+="\n  <div class='assignment-points-possible'>\n    ",e="Out of %{assignment.points_possible}",f="points_out_of",g={},h="gradebook2.column_header",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n  </div>\n",d}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+="<a\n  ",k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.muted,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n  ",k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.invalid,h=c["if"],l=m.program(3,s,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n  class="assignment-name ',k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.muted,h=c["if"],l=m.program(5,t,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='"\n  href="',k=c.href,g=k||b.href,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"href",{hash:{}})),f+=q(g)+'"\n>\n  ',k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.invalid,h=c["if"],l=m.program(7,u,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n  ",k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.name,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"assignment.name",{hash:{}}));if(g||g===0)f+=g;f+='\n</a>\n<a class="gradebook-header-drop assignment_header_drop" data-assignment-id="',k=c.assignment,g=k||b.assignment,g=g===null||g===undefined||g===!1?g:g.id,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"assignment.id",{hash:{}})),f+=q(g)+'" href="#" role="button">\n  ',g="Assignment Options",h="assignment_options",i={},j="gradebook2.column_header",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="\n</a>\n",k=c.showPointsPossible,g=k||b.showPointsPossible,h=c["if"],l=m.program(9,v,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;return f+="\n",f}),c["gradebook2/column_header"]})