define("jst/accounts/settings/ManualQuotas",["compiled/handlebars_helpers","i18n!accounts.settings.manual_quotas"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["accounts/settings/ManualQuotas"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<fieldset class="quota_settings">\n  <legend>',g="Manually Settable Quotas",h="manual_quotas_title",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</legend>\n  <div class="control-group">\n    <label class="control-label" for="manual_quotas_type">',g="Find course or group",h="select_type_label",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n    <div class="controls">\n      <select id="manual_quotas_type" class="span2">\n        <option value="course">',g="Course ID",h="select_type_courses",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</option>\n        <option value="group">',g="Group ID",h="select_type_groups",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</option>\n      </select>\n      <input id="manual_quotas_id" type="text" class="span2" maxlength="13">\n      <button id="manual_quotas_find_button" type="button" class="btn">',g="Find",h="find_button",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</button>\n    </div>\n  </div>\n  <div id="manual_quotas_result">\n    <hr/>\n    <div class="control-group">\n      <label class="control-label" for="manual_quotas_quota">\n        <a id="manual_quotas_link" href="#" target="_blank"></a>\n      </label>\n      <div class="controls">\n        <div class="input-append">\n          <input id="manual_quotas_quota" type="text" class="span2" title="',g="megabytes",h="megabytes_tooltip",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='" maxlength="13">\n          <span class="add-on">',g="megabytes",h="megabytes",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</span>\n        </div>\n      </div>\n    </div>\n    <div class="button-container">\n      <div class="controls">\n        <button id="manual_quotas_submit_button" type="submit" class="btn">',g="Update Quota",h="update_button",i={},j="accounts.settings.manual_quotas",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</button>\n      </div>\n    </div>\n  </div>\n</fieldset>\n",f}),c["accounts/settings/ManualQuotas"]})