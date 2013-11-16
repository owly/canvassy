(function(){tinymce.create("tinymce.plugins.XHTMLXtrasPlugin",{init:function(a,b){a.addCommand("mceCite",function(){a.windowManager.open({file:b+"/cite.htm",width:350+parseInt(a.getLang("xhtmlxtras.cite_delta_width",0)),height:250+parseInt(a.getLang("xhtmlxtras.cite_delta_height",0)),inline:1},{plugin_url:b})}),a.addCommand("mceAcronym",function(){a.windowManager.open({file:b+"/acronym.htm",width:350+parseInt(a.getLang("xhtmlxtras.acronym_delta_width",0)),height:250+parseInt(a.getLang("xhtmlxtras.acronym_delta_height",0)),inline:1},{plugin_url:b})}),a.addCommand("mceAbbr",function(){a.windowManager.open({file:b+"/abbr.htm",width:350+parseInt(a.getLang("xhtmlxtras.abbr_delta_width",0)),height:250+parseInt(a.getLang("xhtmlxtras.abbr_delta_height",0)),inline:1},{plugin_url:b})}),a.addCommand("mceDel",function(){a.windowManager.open({file:b+"/del.htm",width:340+parseInt(a.getLang("xhtmlxtras.del_delta_width",0)),height:310+parseInt(a.getLang("xhtmlxtras.del_delta_height",0)),inline:1},{plugin_url:b})}),a.addCommand("mceIns",function(){a.windowManager.open({file:b+"/ins.htm",width:340+parseInt(a.getLang("xhtmlxtras.ins_delta_width",0)),height:310+parseInt(a.getLang("xhtmlxtras.ins_delta_height",0)),inline:1},{plugin_url:b})}),a.addCommand("mceAttributes",function(){a.windowManager.open({file:b+"/attributes.htm",width:380+parseInt(a.getLang("xhtmlxtras.attr_delta_width",0)),height:370+parseInt(a.getLang("xhtmlxtras.attr_delta_height",0)),inline:1},{plugin_url:b})}),a.addButton("cite",{title:"xhtmlxtras.cite_desc",cmd:"mceCite"}),a.addButton("acronym",{title:"xhtmlxtras.acronym_desc",cmd:"mceAcronym"}),a.addButton("abbr",{title:"xhtmlxtras.abbr_desc",cmd:"mceAbbr"}),a.addButton("del",{title:"xhtmlxtras.del_desc",cmd:"mceDel"}),a.addButton("ins",{title:"xhtmlxtras.ins_desc",cmd:"mceIns"}),a.addButton("attribs",{title:"xhtmlxtras.attribs_desc",cmd:"mceAttributes"}),a.onNodeChange.add(function(a,b,c,d){c=a.dom.getParent(c,"CITE,ACRONYM,ABBR,DEL,INS"),b.setDisabled("cite",d),b.setDisabled("acronym",d),b.setDisabled("abbr",d),b.setDisabled("del",d),b.setDisabled("ins",d),b.setDisabled("attribs",c&&c.nodeName=="BODY"),b.setActive("cite",0),b.setActive("acronym",0),b.setActive("abbr",0),b.setActive("del",0),b.setActive("ins",0);if(c)do b.setDisabled(c.nodeName.toLowerCase(),0),b.setActive(c.nodeName.toLowerCase(),1);while(c=c.parentNode)}),a.onPreInit.add(function(){a.dom.create("abbr")})},getInfo:function(){return{longname:"XHTML Xtras Plugin",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/xhtmlxtras",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("xhtmlxtras",tinymce.plugins.XHTMLXtrasPlugin)})()