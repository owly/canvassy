(function(){function e(b){function i(a){var b;if(a.nodeType===1){b=a.getAttribute(c);if(b&&b!=="inherit")return b;b=a.contentEditable;if(b!=="inherit")return b}return null}function j(a){var b;while(a){b=i(a);if(b)return b==="false"?a:null;a=a.parentNode}}function k(a){while(a){if(a.id===h)return a;a=a.parentNode}}function l(b){var c;if(b){c=new a(b,b);for(b=c.current();b;b=c.next())if(b.nodeType===3)return b}}function m(a,c){var d,j;if(i(a)==="false"&&e.isBlock(a)){f.select(a);return}return j=e.createRng(),i(a)==="true"&&(a.firstChild||a.appendChild(b.getDoc().createTextNode(" ")),a=a.firstChild,c=!0),d=e.create("span",{id:h,"data-mce-bogus":!0},g),c?a.parentNode.insertBefore(d,a):e.insertAfter(d,a),j.setStart(d.firstChild,1),j.collapse(!0),f.setRng(j),d}function n(a){var b,c,d;if(a)rng=f.getRng(!0),rng.setStartBefore(a),rng.setEndBefore(a),b=l(a),b&&b.nodeValue.charAt(0)==g&&(b=b.deleteData(0,1)),e.remove(a,!0),f.setRng(rng);else{c=k(f.getStart());while((a=e.get(h))&&a!==d)c!==a&&(b=l(a),b&&b.nodeValue.charAt(0)==g&&(b=b.deleteData(0,1)),e.remove(a,!0)),d=a}}function o(){function h(b,c){var d,f,g,h,j;d=e.startContainer,f=e.startOffset;if(d.nodeType==3){j=d.nodeValue.length;if(f>0&&f<j||(c?f==j:f==0))return}else{if(!(f<d.childNodes.length))return c?null:b;var k=!c&&f>0?f-1:f;d=d.childNodes[k],d.hasChildNodes()&&(d=d.firstChild)}g=new a(d,b);while(h=g[c?"prev":"next"]()){if(h.nodeType===3&&h.nodeValue.length>0)return;if(i(h)==="true")return h}return b}var b,c,d,e,g;n(),d=f.isCollapsed(),b=j(f.getStart()),c=j(f.getEnd());if(b||c){e=f.getRng(!0);if(d){b=b||c;var k=f.getStart();(g=h(b,!0))?m(g,!0):(g=h(b,!1))?m(g,!1):f.select(b)}else e=f.getRng(!0),b&&e.setStartBefore(b),c&&e.setEndAfter(c),f.setRng(e)}}function p(b,c){function q(a,b){while(a=a[b?"previousSibling":"nextSibling"])if(a.nodeType!==3||a.nodeValue.length>0)return a}function r(a,b){f.select(a),f.collapse(b)}function s(a){function l(a){var b=d;while(b){if(b===a)return;b=b.parentNode}e.remove(a),o()}function m(){var c,e,f=b.schema.getNonEmptyElements();e=new tinymce.dom.TreeWalker(d,b.getBody());while(c=a?e.prev():e.next()){if(f[c.nodeName.toLowerCase()])break;if(c.nodeType===3&&tinymce.trim(c.nodeValue).length>0)break;if(i(c)==="false")return l(c),!0}return j(c)?!0:!1}var c,d,g,h;if(f.isCollapsed()){c=f.getRng(!0),d=c.startContainer,g=c.startOffset,d=k(d)||d;if(h=j(d))return l(h),!1;if(d.nodeType==3&&(a?g>0:g<d.nodeValue.length))return!0;d.nodeType==1&&(d=d.childNodes[g]||d);if(m())return!1}return!0}var g=c.keyCode,h,l,m,p;m=f.getStart(),p=f.getEnd(),h=j(m)||j(p);if(h&&(g<112||g>124)&&g!=d.DELETE&&g!=d.BACKSPACE){if((tinymce.isMac?c.metaKey:c.ctrlKey)&&(g==67||g==88||g==86))return;c.preventDefault();if(g==d.LEFT||g==d.RIGHT){var t=g==d.LEFT;if(b.dom.isBlock(h)){var u=t?h.previousSibling:h.nextSibling,v=new a(u,u),w=t?v.prev():v.next();r(w,!t)}else r(h,t)}}else if(g==d.LEFT||g==d.RIGHT||g==d.BACKSPACE||g==d.DELETE){l=k(m);if(l){if(g==d.LEFT||g==d.BACKSPACE){h=q(l,!0);if(h&&i(h)==="false"){c.preventDefault();if(g!=d.LEFT){e.remove(h);return}r(h,!0)}else n(l)}if(g==d.RIGHT||g==d.DELETE){h=q(l);if(h&&i(h)==="false"){c.preventDefault();if(g!=d.RIGHT){e.remove(h);return}r(h,!1)}else n(l)}}if((g==d.BACKSPACE||g==d.DELETE)&&!s(g==d.BACKSPACE))return c.preventDefault(),!1}}var e=b.dom,f=b.selection,g,h="mce_noneditablecaret",g="﻿";b.onMouseDown.addToTop(function(a,b){var c=a.selection.getNode();i(c)==="false"&&c==b.target&&o()}),b.onMouseUp.addToTop(o),b.onKeyDown.addToTop(p),b.onKeyUp.addToTop(o)}var a=tinymce.dom.TreeWalker,b="contenteditable",c="data-mce-"+b,d=tinymce.VK;tinymce.create("tinymce.plugins.NonEditablePlugin",{init:function(a,d){function i(a,b){var c=h.length,d=b.content,e=tinymce.trim(g);if(b.format=="raw")return;while(c--)d=d.replace(h[c],function(b){var c=arguments,f=c[c.length-2];return f>0&&d.charAt(f-1)=='"'?b:'<span class="'+e+'" data-mce-content="'+a.dom.encode(c[0])+'">'+a.dom.encode(typeof c[1]=="string"?c[1]:c[0])+"</span>"});b.content=d}var f,g,h;f=" "+tinymce.trim(a.getParam("noneditable_editable_class","mceEditable"))+" ",g=" "+tinymce.trim(a.getParam("noneditable_noneditable_class","mceNonEditable"))+" ",h=a.getParam("noneditable_regexp"),h&&!h.length&&(h=[h]),a.onPreInit.add(function(){e(a),h&&(a.selection.onBeforeSetContent.add(i),a.onBeforeSetContent.add(i)),a.parser.addAttributeFilter("class",function(a){var b=a.length,d,e;while(b--)e=a[b],d=" "+e.attr("class")+" ",d.indexOf(f)!==-1?e.attr(c,"true"):d.indexOf(g)!==-1&&e.attr(c,"false")}),a.serializer.addAttributeFilter(c,function(a,d){var e=a.length,f;while(e--)f=a[e],h&&f.attr("data-mce-content")?(f.name="#text",f.type=3,f.raw=!0,f.value=f.attr("data-mce-content")):(f.attr(b,null),f.attr(c,null))}),a.parser.addAttributeFilter(b,function(a,d){var e=a.length,f;while(e--)f=a[e],f.attr(c,f.attr(b)),f.attr(b,null)})})},getInfo:function(){return{longname:"Non editable elements",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/noneditable",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("noneditable",tinymce.plugins.NonEditablePlugin)})()