define("jst/calendar/reservationOverLimitDialog",["compiled/handlebars_helpers","i18n!calendar.reservation_over_limit_dialog"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["calendar/reservationOverLimitDialog"]=b(function(a,b,c,d,e){function r(a,b){var d="",e,f,g,h;d+="\n    ",e="Cancel existing reservation and sign up for this one?",f="cancel_existing_reservation",g={},h="calendar.reservation_over_limit_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n  ",d}function s(a,b){var d="",e,f,g,h;d+="\n    ",e="Appointment limit reached",f="appointment_limit_reached",g={},h="calendar.reservation_over_limit_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n  ",d}function t(a,b){var d="",e,f,g;return d+="\n    <div>\n      ",k=c.end_at,e=k||a.end_at,k=c.start_at,f=k||a.start_at,k=c.semanticDateRange,g=k||a.semanticDateRange,typeof g===n?e=g.call(a,f,e,{hash:{}}):g===p?e=o.call(a,"semanticDateRange",f,e,{hash:{}}):e=g,d+=q(e)+"\n    </div>\n  ",d}function u(a,b){var d="",e,f,g,h;d+="\n    ",e="Would you like to cancel that and sign up for this?",f="would_you_like_to_cancel_that_and_sign_up_for_this",g={},h="calendar.reservation_over_limit_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n  ",d}function v(a,b){var d="",e,f,g,h;d+="\n    ",e="Please cancel one of your other reservations and try again.",f="cancel_some_appointments_and_try_again",g={},h="calendar.reservation_over_limit_dialog",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n  ",d}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<div title="\n  ',k=c.reschedulable,g=k||b.reschedulable,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.program(3,s,e),g=h.call(b,g,l);if(g||g===0)f+=g;f+='">\n\n  ',g="You are already signed up for:",h="you_are_already_signed_up_for",i={},j="calendar.reservation_over_limit_dialog",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="<br>\n  ",k=c.reservations,g=k||b.reservations,h=c.each,l=m.program(5,t,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n  ",k=c.reschedulable,g=k||b.reschedulable,h=c["if"],l=m.program(7,u,e),l.hash={},l.fn=l,l.inverse=m.program(9,v,e),g=h.call(b,g,l);if(g||g===0)f+=g;return f+="\n</div>\n",f}),c["calendar/reservationOverLimitDialog"]})