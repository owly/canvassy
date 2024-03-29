/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
define(["jquery","jqueryui/draggable-unpatched"],function(a){function e(a,b){if(a.originalEvent.touches.length>1)return;a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}a.support.touch="ontouchend"in document;if(!a.support.touch)return;var b=a.ui.mouse.prototype,c=b._mouseInit,d;b._touchStart=function(a){var b=this;if(d||!b._mouseCapture(a.originalEvent.changedTouches[0]))return;d=!0,b._touchMoved=!1,e(a,"mouseover"),e(a,"mousemove"),e(a,"mousedown")},b._touchMove=function(a){if(!d)return;this._touchMoved=!0,e(a,"mousemove")},b._touchEnd=function(a){if(!d)return;e(a,"mouseup"),e(a,"mouseout"),this._touchMoved||e(a,"click"),d=!1},b._mouseInit=function(){var b=this;b.element.bind("touchstart",a.proxy(b,"_touchStart")).bind("touchmove",a.proxy(b,"_touchMove")).bind("touchend",a.proxy(b,"_touchEnd")),c.call(b)}})