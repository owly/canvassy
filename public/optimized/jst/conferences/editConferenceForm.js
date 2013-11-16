define("jst/conferences/editConferenceForm",["compiled/handlebars_helpers","i18n!conferences.edit_conference_form"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["conferences/editConferenceForm"]=b(function(a,b,c,d,e){function r(a,b){return"disabled='disabled'"}function s(a,b){var d="",e,f;d+='\n          <option value="',k=c.type,e=k||a.type,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"type",{hash:{}})),d+=q(e)+'" ',k=c.selected,e=k||a.selected,f=c["if"],l=m.program(4,t,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+=">",k=c.name,e=k||a.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"name",{hash:{}})),d+=q(e)+"</option>\n        ",d}function t(a,b){return'selected="selected"'}function u(a,b){var d="",e,f;d+="\n        ",k=c.conferenceData,e=k||a.conferenceData,e=e===null||e===undefined||e===!1?e:e.has_advanced_settings,f=c["if"],l=m.program(7,v,b),l.hash={},l.fn=l,l.inverse=m.noop,e=f.call(a,e,l);if(e||e===0)d+=e;return d+="\n      ",d}function v(a,b){var d="",e,f,g,h;d+='\n          <a href="',k=c.conferenceData,e=k||a.conferenceData,e=e===null||e===undefined||e===!1?e:e.url,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"conferenceData.url",{hash:{}})),d+=q(e)+'/settings" target="_blank" class="advanced_settings">\n            ',e="Manage Advanced Settings...",f="advanced_settings",g={},h="conferences.edit_conference_form",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n          </a>\n        ",d}function w(a,b){return"disabled='disabled'"}function x(a,b){return"checked"}function y(a,b){return"disabled='disabled'"}function z(a,b){return"checked"}function A(a,b){var d="",e;return d+='\n        <li class="member user_',k=c.id,e=k||a.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"id",{hash:{}})),d+=q(e)+'">\n          <label class="checkbox" for="user_',k=c.id,e=k||a.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"id",{hash:{}})),d+=q(e)+'">\n            <input name="user[',k=c.id,e=k||a.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"id",{hash:{}})),d+=q(e)+']" type="hidden" value="0">\n            <input id="user_',k=c.id,e=k||a.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"id",{hash:{}})),d+=q(e)+'" name="user[',k=c.id,e=k||a.id,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"id",{hash:{}})),d+=q(e)+']" type="checkbox" value="1">\n            ',k=c.name,e=k||a.name,typeof e===n?e=e.call(a,{hash:{}}):e===p&&(e=o.call(a,"name",{hash:{}})),d+=q(e)+"\n          </label>\n        </li>\n      ",d}function B(a,b){var d="",e,f,g,h;d+='\n      <button type="submit" class="btn btn-primary save-button">',e="Create Conference",f="buttons.create_conference",g={},h="conferences.edit_conference_form",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</button>\n    ",d}function C(a,b){var d="",e,f,g,h;d+='\n      <button type="submit" class="btn btn-primary save-button">',e="Update Conference",f="buttons.update_condference",g={},h="conferences.edit_conference_form",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="</button>\n    ",d}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<form action="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.url,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.url",{hash:{}})),f+=q(g)+'" class="form-dialog form-horizontal" method="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.http_method,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.http_method",{hash:{}})),f+=q(g)+'">\n  <input type="hidden" name="_method" value="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.http_method,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.http_method",{hash:{}})),f+=q(g)+'">\n  <div style="margin:0;padding:0;display:inline">\n    <input name="authenticity_token" type="hidden" value="',k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.auth_token,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"settings.auth_token",{hash:{}})),f+=q(g)+'">\n  </div>\n\n  <div class="control-group">\n    <label class="control-label" for="web_conference_title">',g="Name",h="name",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls">\n      <input id="web_conference_title" name="web_conference[title]" type="text" value="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.title,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.title",{hash:{}})),f+=q(g)+'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="web_conference_conference_type">',g="Type",h="conference_type",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls">\n      <select id="web_conference_conference_type" name="web_conference[conference_type]" ',k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.is_editing,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+=">\n        ",k=c.conferenceTypes,g=k||b.conferenceTypes,h=c.each,l=m.program(3,s,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n      </select>\n\n      ",k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.is_editing,h=c["if"],l=m.program(6,u,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="web_conference_duration">',g="Duration",h="duration",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls form-inline">\n      <input id="web_conference_duration" name="web_conference[duration]" type="text"\n             data-restore-value="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.restore_duration,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.restore_duration",{hash:{}})),f+=q(g)+'"\n             value="',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.duration,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.duration",{hash:{}})),f+=q(g)+'"\n             ',k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.disable_duration_changes,h=c["if"],l=m.program(9,w,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="> ",g="minutes",h="duration_in_minutes",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="web_conference_options">',g="Options",h="options",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls">\n      <div class="web_conference_user_settings"></div>\n      <label class="checkbox" for="web_conference_long_running">\n        <input name="web_conference[long_running]" type="hidden" value="0">\n        <input id="web_conference_long_running" name="web_conference[long_running]" type="checkbox"\n               value="1" ',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.long_running,h=c["if"],l=m.program(11,x,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+="\n               ",k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.disable_duration_changes,h=c["if"],l=m.program(13,y,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+=">\n        ",g="No time limit (for long-running conferences)",h="long_running",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="web_conference_description">',g="Description",h="description",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls">\n      <textarea cols="40" id="web_conference_description" name="web_conference[description]" rows="6">',k=c.conferenceData,g=k||b.conferenceData,g=g===null||g===undefined||g===!1?g:g.description,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"conferenceData.description",{hash:{}})),f+=q(g)+"</textarea>\n    </div>\n  </div>\n  <legend>",g="Members",h="members",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</legend>\n  <label class="checkbox" for="user_all">\n    <input name="user[all]" type="hidden" value="0">\n    <input class="all_users_checkbox" id="user_all" name="user[all]" type="checkbox" value="1" ',k=c.inviteAll,g=k||b.inviteAll,h=c["if"],l=m.program(15,z,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+=">\n    ",g="Invite All Course Members",h="invite_all",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n  </label>\n  <div>\n    <ul id="members_list" style="border: 1px solid #333; padding: 10px; overflow-y: auto; max-height: 150px;">\n      ',k=c.users,g=k||b.users,h=c.each,l=m.program(17,A,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n    </ul>\n  </div>\n\n  <div class="form-controls">\n    <button type="button" class="cancel_button btn">',g="Cancel",h="buttons.cancel",i={},j="conferences.edit_conference_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</button>\n    ",k=c.settings,g=k||b.settings,g=g===null||g===undefined||g===!1?g:g.is_adding,h=c["if"],l=m.program(19,B,e),l.hash={},l.fn=l,l.inverse=m.program(21,C,e),g=h.call(b,g,l);if(g||g===0)f+=g;return f+="\n  </div>\n</form>\n",f}),c["conferences/editConferenceForm"]})