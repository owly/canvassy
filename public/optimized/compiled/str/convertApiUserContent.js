(function(){define(["jquery","underscore"],function(a,b){var c;return c=function(c,d){var e;return d==null&&(d={}),e=a("<div />").html(c),e.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith(function(){var b;return b=a("<a id='media_comment_"+a(this).data("media_comment_id")+"'            data-media_comment_type='"+a(this).data("media_comment_type")+"'            class='instructure_inline_media_comment "+this.nodeName.toLowerCase()+"_comment' />"),b.html(a(this).html()),b}),e.find("object.instructure_user_content embed").remove(),d.forEditing||e.find("object.instructure_user_content,embed.instructure_user_content").replaceWith(function(){var c,d,e,f;return d=a(this),!d.data("uc_snippet")||!d.data("uc_sig")?this:(f=b.uniqueId("uc_"),e="/object_snippet",ENV.files_domain&&(e="//"+ENV.files_domain+e),c=a("<form action='"+e+"' method='post' class='user_content_post_form' target='"+f+"' id='form-"+f+"' />"),c.append(a("<input type='hidden'/>").attr({name:"object_data",value:d.data("uc_snippet")})),c.append(a("<input type='hidden'/>").attr({name:"s",value:d.data("uc_sig")})),a("body").append(c),setTimeout(function(){return c.submit()},0),a("<iframe class='user_content_iframe' name='"+f+"' style='width: "+d.data("uc_width")+"; height: "+d.data("uc_height")+";' frameborder='0' />"))}),e.html()}})}).call(this)