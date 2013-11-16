define("jst/profiles/notification_preferences",["compiled/handlebars_helpers","i18n!profiles.notification_preferences"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["profiles/notification_preferences"]=b(function(a,b,c,d,e){function p(a,b,d){var e="",f,g,h,p;e+='\n  <table cellspacing="0"\n         class="notification-prefs-table table\n                table-columns-striped table-bordered">\n    <caption class="screenreader-only">\n      ',f="%{name} notification events and settings",g="captions.notification_preferences",h={},p="profiles.notification_preferences",h.scope=p,i=c.t,p=i||a.t,j={},j.hash=h,typeof p===l?f=p.call(a,g,f,j):p===n?f=m.call(a,"t",g,f,j):f=p;if(f||f===0)e+=f;e+='\n    </caption>\n\n    <thead>\n      <tr class="grouping">\n        <th scope="col"><h3 class="group-name">',i=c.name,f=i||a.name,typeof f===l?f=f.call(a,{hash:{}}):f===n&&(f=m.call(a,"name",{hash:{}})),e+=o(f)+"</h3></th>\n        ",i=c.channels,f=i||d.channels,g=c.each,j=k.program(2,q,b),j.hash={},j.fn=j,j.inverse=k.noop,f=g.call(a,f,j);if(f||f===0)e+=f;e+="\n      </tr>\n    </thead>\n\n    <tbody>\n      ",i=c.items,f=i||a.items,g=c.each,j=k.program(4,r,b),j.hash={},j.fn=j,j.inverse=k.noop,f=g.call(a,f,j);if(f||f===0)e+=f;return e+="\n    </tbody>\n  </table>\n",e}function q(a,b){var d="",e;return d+='\n          <th class="comm-channel" scope="col">\n            <div class="channel-name">',i=c.name,e=i||a.name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"name",{hash:{}})),d+=o(e)+'</div>\n            <div class="channel-addr">',i=c.address,e=i||a.address,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"address",{hash:{}})),d+=o(e)+"</div>\n          </th>\n        ",d}function r(a,b){var d="",e,f;d+='\n        <tr>\n          <th class="comm-event" scope="row">\n            <div class="row-title-cell">\n              <span class="category-name show-popover"\n                    title="<div class=\'arrow\'></div>\n                           <div class=\'popover-title\'>',i=c.title,e=i||a.title,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"title",{hash:{}})),d+=o(e)+"</div>\n                           <div class='popover-content'>\n                             <p>",i=c.description,e=i||a.description,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"description",{hash:{}})),d+=o(e)+'</p>\n                           </div>">\n                ',i=c.title,e=i||a.title,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"title",{hash:{}})),d+=o(e)+"\n              </span>\n\n              ",i=c.checkName,e=i||a.checkName,f=c["if"],j=k.program(5,s,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;d+="\n            </div>\n          </th>\n\n          ",i=c.policyCells,e=i||a.policyCells,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"policyCells",{hash:{}}));if(e||e===0)d+=e;return d+="\n\n        </tr>\n      ",d}function s(a,b){var d="",e,f;d+='\n                <div class="user-preference">\n                  <label class="checkbox" for="',i=c.checkID,e=i||a.checkID,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"checkID",{hash:{}})),d+=o(e)+'">\n                    <input type="checkbox"\n                           id="',i=c.checkID,e=i||a.checkID,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"checkID",{hash:{}})),d+=o(e)+'"\n                           class="user-pref-check"\n                           name="',i=c.checkName,e=i||a.checkName,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"checkName",{hash:{}})),d+=o(e)+'"\n                           ',i=c.checkedState,e=i||a.checkedState,f=c["if"],j=k.program(6,t,b),j.hash={},j.fn=j,j.inverse=k.noop,e=f.call(a,e,j);if(e||e===0)d+=e;return d+=" />\n                    ",i=c.checkLabel,e=i||a.checkLabel,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"checkLabel",{hash:{}})),d+=o(e)+"\n                  </label>\n                </div>\n              ",d}function t(a,b){return'checked="checked"'}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.eventGroups,g=i||b.eventGroups,h=c.each,j=k.programWithDepth(p,e,b),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n",f}),c["profiles/notification_preferences"]})