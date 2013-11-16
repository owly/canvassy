define("jst/tinymce/InsertUpdateImageView",["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!tinymce.insert_update_image_view"],function(a){var b=a.template,c=a.templates=a.templates||{};return c["tinymce/InsertUpdateImageView"]=b(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j,k,l,m=this,n="function",o=c.helperMissing,p=void 0;f+='<div class="insertUpdateImage bootstrap-form form-horizontal" >\n  <fieldset style="max-width: 597px;">\n    <legend>',g="Image Source",h="image_source",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</legend>\n    <div class="ui-tabs-minimal imageSourceTabs">\n      <ul>\n        <li><a href="#tabUrl">',g="URL",h="url",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a></li>\n        <li><a href="#tabUploaded">',g="Canvas",h="canvas",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a></li>\n        <li><a href="#tabFlickr">',g="Flickr",h="flickr",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</a></li>\n      </ul>\n      <div id="tabUrl">\n        <input type="url"\n               name="image[src]"\n               class="input-xxlarge"\n               placeholder="http://example.com/image.png"\n               style="margin-bottom: 20px;">\n      </div>\n      <ul role="tree" class="folderTree insertUpdateImageTabpane" id="tabUploaded"></ul>\n      <div id="tabFlickr">\n\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>',g="Attributes",h="attributes",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</legend>\n    <div class="control-group">\n      <label class="control-label" for="image_alt">',g="Alt text",h="alt_text",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls">\n        <input type="text"\n               class="input-xlarge"\n               name="image[alt]"\n               id="image_alt"\n               aria-describedby="alt_text_description">\n        <span><p class="help-block" id="alt_text_description">',g="Describe the image to improve accessibility",h="alt_help_text",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</p></span>\n      </div>\n    </div>\n    <div class="control-group">\n      <label class="control-label" for="dimensions_controls">',g="Dimensions",h="dimensions",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='</label>\n      <div class="controls" id="dimensions_controls" aria-describedby="aspect_ratio_note">\n        <input class="span1"\n               name="image[width]"\n               type="text"\n               aria-label="',g="Image Width",h="image_width",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n        x\n        <input class="span1"\n               name="image[height]"\n               type="text"\n               aria-label="',g="Image Height",h="image_height",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;f+='">\n      <span><p class="help-block" id="aspect_ratio_note">',g="Aspect ratio will be preserved",h="dimension_help_text",i={},j="tinymce.insert_update_image_view",i.scope=j,k=c.t,j=k||b.t,l={},l.hash=i,typeof j===n?g=j.call(b,h,g,l):j===p?g=o.call(b,"t",h,g,l):g=j;if(g||g===0)f+=g;return f+="</p></span>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",f}),arguments[1]("tinymce/InsertUpdateImageView",".insertUpdateImage .insertUpdateImageTabpane {\n  height: 200px;\n  overflow: auto; }\n.insertUpdateImage .checkbox.inline {\n  white-space: nowrap; }\n.insertUpdateImage legend {\n  margin-bottom: 0px; }\n.insertUpdateImage legend + * {\n  margin-top: 20px;\n  -webkit-margin-collapse: separate; }\n"),c["tinymce/InsertUpdateImageView"]})