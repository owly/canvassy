define("jst/content_migrations/subviews/FolderPicker",["compiled/handlebars_helpers","i18n!content_migrations.subviews.folder_picker"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["content_migrations/subviews/FolderPicker"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<label class="control-label"><strong>',g="Upload to",h="upload_to",i={},j="content_migrations.subviews.folder_picker",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</strong></label>\n<div class="controls">\n  <select class="migrationUploadTo span3" name="migrationUploadTo">\n    <option>',g="Select Folder",h="default_select_folder",i={},j="content_migrations.subviews.folder_picker",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+="</option>\n    ",k=c.folderOptions,g=k||b.folderOptions,typeof g===n?g=g.call(b,{hash:{}}):g===p&&(g=o.call(b,"folderOptions",{hash:{}}));if(g||g===0)f+=g;return f+="\n  </select>\n</div>\n",f}),c["content_migrations/subviews/FolderPicker"]})