(function(){tinymce.create("tinymce.plugins.AutoResizePlugin",{init:function(a,b){function e(){var b,f=a.getDoc(),g=f.body,h=f.documentElement,i=tinymce.DOM,j=c.autoresize_min_height,k;k=tinymce.isIE?g.scrollHeight:tinymce.isWebKit&&g.clientHeight==0?0:g.offsetHeight,k>c.autoresize_min_height&&(j=k),c.autoresize_max_height&&k>c.autoresize_max_height?(j=c.autoresize_max_height,g.style.overflowY="auto",h.style.overflowY="auto"):(g.style.overflowY="hidden",h.style.overflowY="hidden",g.scrollTop=0),j!==d&&(b=j-d,i.setStyle(i.get(a.id+"_ifr"),"height",j+"px"),d=j,tinymce.isWebKit&&b<0&&e())}var c=this,d=0;if(a.getParam("fullscreen_is_enabled"))return;c.editor=a,c.autoresize_min_height=parseInt(a.getParam("autoresize_min_height",a.getElement().offsetHeight)),c.autoresize_max_height=parseInt(a.getParam("autoresize_max_height",0)),a.onInit.add(function(a){a.dom.setStyle(a.getBody(),"paddingBottom",a.getParam("autoresize_bottom_margin",50)+"px")}),a.onChange.add(e),a.onSetContent.add(e),a.onPaste.add(e),a.onKeyUp.add(e),a.onPostRender.add(e),a.getParam("autoresize_on_init",!0)&&(a.onLoad.add(e),a.onLoadContent.add(e)),a.addCommand("mceAutoResize",e)},getInfo:function(){return{longname:"Auto Resize",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autoresize",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("autoresize",tinymce.plugins.AutoResizePlugin)})()