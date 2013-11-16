define("jst/assignments/_submission_types_form",["compiled/handlebars_helpers","i18n!assignments.submission_types_form"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["assignments/_submission_types_form"]=b(function(a,b,c,d,e){function r(a,b){var d="",e,f,g,h;d+='\n        <label class="checkbox">\n          <input id="assignment_media_recording"\n            name="online_submission_types[media_recording]"\n            type="checkbox"\n            ',k=c.acceptsMediaRecording,e=k||a.acceptsMediaRecording,k=c.checkedIf,f=k||a.checkedIf,typeof f===n?e=f.call(a,e,{hash:{}}):f===p?e=o.call(a,"checkedIf",e,{hash:{}}):e=f,d+=q(e)+"\n            ",e="submission_types",k=c.frozenAttributes,f=k||a.frozenAttributes,k=c.disabledIfIncludes,g=k||a.disabledIfIncludes,typeof g===n?e=g.call(a,f,e,{hash:{}}):g===p?e=o.call(a,"disabledIfIncludes",f,e,{hash:{}}):e=g,d+=q(e)+"/>\n          ",e="Allow Media Recordings",f="labels.allow_media_recordings",g={},h="assignments.submission_types_form",g.scope=h,k=c.t,h=k||a.t,l={},l.hash=g,typeof h===n?e=h.call(a,f,e,l):h===p?e=o.call(a,"t",f,e,l):e=h;if(e||e===0)d+=e;return d+="\n        </label>\n      ",d}c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0,q=this.escapeExpression;f+='<fieldset>\n\n  <div class="control-group" style="margin-bottom:9px">\n    <label for="assignment_submission_type" class="control-label">\n      ',g="Submission Type",h="submission_type",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n    </label>\n    <div class="controls">\n      <select id="assignment_submission_type"\n        name="submission_type"\n        aria-controls="assignment_online_submission_types,assignment_external_tool_settings,assignment_group_selector,assignment_peer_reviews_fields"\n        ',g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+'>\n        <option value="none" ',g="none",k=c.submissionType,h=k||b.submissionType,k=c.selectedIf,i=k||b.selectedIf,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"selectedIf",h,g,{hash:{}}):g=i,f+=q(g)+">\n          ",g="No Submission",h="submission_types.no_submission",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </option>\n        <option value="online" ',g="online",k=c.submissionType,h=k||b.submissionType,k=c.selectedIf,i=k||b.selectedIf,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"selectedIf",h,g,{hash:{}}):g=i,f+=q(g)+">\n          ",g="Online",h="submission_types.online",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </option>\n        <option value="on_paper" ',g="on_paper",k=c.submissionType,h=k||b.submissionType,k=c.selectedIf,i=k||b.selectedIf,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"selectedIf",h,g,{hash:{}}):g=i,f+=q(g)+">\n          ",g="On Paper",h="submission_types.on_paper",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </option>\n        <option value="external_tool" ',g="external_tool",k=c.submissionType,h=k||b.submissionType,k=c.selectedIf,i=k||b.selectedIf,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"selectedIf",h,g,{hash:{}}):g=i,f+=q(g)+">\n          ",g="External Tool",h="submission_types.external_tool",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div id="assignment_online_submission_types"\n    class="control-group"\n    aria-enabled="',k=c.isOnlineSubmission,g=k||b.isOnlineSubmission,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"isOnlineSubmission",{hash:{}})),f+=q(g)+'"\n    style="',k=c.isOnlineSubmission,g=k||b.isOnlineSubmission,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n\n    <div class="controls">\n      <label class="checkbox">\n        <input id="assignment_text_entry"\n          name="online_submission_types[online_text_entry]"\n          type="checkbox"\n          ',k=c.acceptsOnlineTextEntries,g=k||b.acceptsOnlineTextEntries,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n          ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n        ",g="Allow Text Entry",h="labels.allow_text_entry",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n    </div>\n\n    <div class="controls">\n      <label class="checkbox">\n        <input id="assignment_online_url"\n          name="online_submission_types[online_url]"\n          type="checkbox"\n          ',k=c.acceptsOnlineURL,g=k||b.acceptsOnlineURL,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n          ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n        ",g="Allow Website URL",h="labels.allow_url",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n    </div>\n\n    <div class="controls">\n      ',k=c.kalturaEnabled,g=k||b.kalturaEnabled,h=c["if"],l=m.program(1,r,e),l.hash={},l.fn=l,l.inverse=m.noop,g=h.call(b,g,l);if(g||g===0)f+=g;f+='\n    </div>\n\n    <div class="controls">\n      <label class="checkbox" for="assignment_online_upload">\n        <input id="assignment_online_upload"\n          name="online_submission_types[online_upload]"\n          type="checkbox"\n          aria-controls="restrict_file_extensions_container"\n          ',k=c.acceptsOnlineUpload,g=k||b.acceptsOnlineUpload,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n          ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n        ",g="Allow File Uploads",h="labels.allow_file_uploads",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n    </div>\n\n    <div id="restrict_file_extensions_container"\n      aria-expanded="',k=c.acceptsOnlineUpload,g=k||b.acceptsOnlineUpload,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"acceptsOnlineUpload",{hash:{}})),f+=q(g)+'"\n      style="',k=c.acceptsOnlineUpload,g=k||b.acceptsOnlineUpload,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n      <div class="controls">\n        <label class="checkbox" for="assignment_restrict_file_extensions">\n          <input id="assignment_restrict_file_extensions"\n            name="restrict_file_extensions"\n            type="checkbox"\n            aria-controls="allowed_extensions_container"\n            ',k=c.restrictFileExtensions,g=k||b.restrictFileExtensions,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n            ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n          ",g="Restrict Upload File Types",h="labels.restrict_file_extensions",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </label>\n      </div>\n\n      <div id="allowed_extensions_container"\n        aria-expanded="',k=c.restrictFileExtensions,g=k||b.restrictFileExtensions,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"restrictFileExtensions",{hash:{}})),f+=q(g)+'"\n        style="',k=c.restrictFileExtensions,g=k||b.restrictFileExtensions,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n        <label for="assignment_allowed_extensions" class="hidden-readable">\n          ',g="Allowed File Extensions",h="labels.allowed_extensions",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n        </label>\n        <div class="controls">\n          <input id="assignment_allowed_extensions"\n            name="allowed_extensions"\n            type="text"\n            placeholder="',g="Allowed File Extensions",h="labels.allowed_extensions",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='"\n            value="',g=",",k=c.allowedExtensions,h=k||b.allowedExtensions,k=c.join,i=k||b.join,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"join",h,g,{hash:{}}):g=i,f+=q(g)+'"\n            ',g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+'/>\n            <div class="explanation">\n              ',g="Enter a list of accepted extensions, for example: doc,xls,txt",h="descriptions.allowed_extensions",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="controls" style="',k=c.turnitinAvailable,g=k||b.turnitinAvailable,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n      <label for="assignment_turnitin_enabled" class="checkbox">\n        <input id="assignment_turnitin_enabled"\n          name="turnitin_enabled"\n          type="checkbox"\n          aria-controls="advanced_turnitin_settings_link"\n          ',k=c.turnitinEnabled,g=k||b.turnitinEnabled,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n          ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n        ",g="Enable Turnitin Submissions",h="label.turnitin_enabled",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n\n      <a href="#"\n        id="advanced_turnitin_settings_link"\n        aria-expanded="',k=c.turnitinEnabled,g=k||b.turnitinEnabled,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"turnitinEnabled",{hash:{}})),f+=q(g)+'"\n        style="',k=c.turnitinEnabled,g=k||b.turnitinEnabled,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n        ',g="Advanced Turnitin Settings",h="advanced_turnitin_settings",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </a>\n    </div>\n\n  </div>\n\n  <div id="assignment_external_tool_settings" style="',k=c.isExternalTool,g=k||b.isExternalTool,k=c.hiddenUnless,h=k||b.hiddenUnless,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"hiddenUnless",g,{hash:{}}):g=h,f+=q(g)+'">\n\n    <div class="control-group" style="margin-bottom:9px">\n      <label for="assignment_external_tool_tag_attributes_url" class="control-label">\n        ',g="External Tool URL",h="label.external_tool_url",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='\n      </label>\n      <div class="controls">\n        <input id="assignment_external_tool_tag_attributes_url"\n          name="external_tool_tag_attributes[url]"\n          type="text"\n          value="',k=c.externalToolUrl,g=k||b.externalToolUrl,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"externalToolUrl",{hash:{}})),f+=q(g)+'"\n          ',g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+'/>\n      </div>\n    </div>\n\n    <div class="control-group">\n      <div class="controls">\n        <label for="assignment_external_tool_tag_attributes_new_tab" class="checkbox">\n          <input id="assignment_external_tool_tag_attributes_new_tab"\n            name="external_tool_tag_attributes[new_tab]"\n            type="checkbox"\n            ',k=c.externalToolNewTab,g=k||b.externalToolNewTab,k=c.checkedIf,h=k||b.checkedIf,typeof h===n?g=h.call(b,g,{hash:{}}):h===p?g=o.call(b,"checkedIf",g,{hash:{}}):g=h,f+=q(g)+"\n            ",g="submission_types",k=c.frozenAttributes,h=k||b.frozenAttributes,k=c.disabledIfIncludes,i=k||b.disabledIfIncludes,typeof i===n?g=i.call(b,h,g,{hash:{}}):i===p?g=o.call(b,"disabledIfIncludes",h,g,{hash:{}}):g=i,f+=q(g)+"/>\n          ",g="Load This Tool In A New Tab",h="label.external_tool_new_tab",i={},j="assignments.submission_types_form",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="\n        </label>\n      </div>\n    </div>\n\n  </div>\n\n</fieldset>\n",f}),a.registerPartial("assignments/submission_types_form",c["assignments/_submission_types_form"]),c["assignments/_submission_types_form"]})