var instance={},tinychat,TinychatEmbed,getWindowSize;tinychat=function(a,b){return(new TinychatEmbed(a,b)).initialize()},TinychatEmbed=function(a,b){if(typeof a.room!="string")return this.initialize=function(){alert('Developer: please send "room" and "target" variables.')},this;this.applicationId="tinychat"+a.room,this.flashvars={key:"tinychat",target:"client"},this.options={baseUrl:"//tinychat.com/embed/",bgcolor:"#222"};for(var c in a)this.flashvars[c]=a[c];for(var c in b)this.options[c]=b[c];this.data={inFocus:!0,interval:{},messageCount:0,originalDocumentTitle:document.title,privateChatListInFocus:!1,privateChatSenderName:null,publicChatListInFocus:!1,scripts:[],SWAP_TIMEOUT:2e3,swapToPrivateChatMessageNotice:!0,titleSwapTimer:null}},TinychatEmbed.prototype.load_script=function(a,b,c){var d=this,e=document.createElement("script");c||(c=3);for(var f in this.data.scripts)if(this.data.scripts[f]===a)return b(!0);return this.data.scripts[this.data.scripts.length]=a,e.src=a,typeof b=="function"&&(e.readyState?e.onreadystatechange=function(){if(e.readyState==="loaded"||e.readyState==="complete")delete e.onreadystatechange,window.clearTimeout(d.data.interval[a]),b(!0)}:e.onload=function(){window.clearTimeout(d.data.interval[a]),b(!0)},document.getElementsByTagName("head")[0].appendChild(e),this.data.interval[a]=window.setTimeout(function(){e.onreadystatechange=function(){},e.onload=function(){},b(!1)},c*1e3)),!0},TinychatEmbed.prototype.initialize=function(){var a=this;return this.load_script("//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",function(){a.embedFlash(),typeof a.callback=="function"&&a.callback()}),this},TinychatEmbed.prototype.reloadFlash=function(){var a=document.createElement("div");a.id=this.flashvars.target,document.getElementById(this.applicationId).parentNode.appendChild(a),swfobject.removeSWF(this.applicationId),this.embedFlash()},TinychatEmbed.prototype.embedFlash=function(){var a=swfobject.getFlashPlayerVersion().major,b=swfobject.getFlashPlayerVersion().minor,c=this.getApplicationUrl(a,b),d=a+"."+b+".0",e,f;instance[this.flashvars.target]=this,e={allowfullscreen:"true",allowscriptaccess:"always",bgcolor:this.options.bgcolor,quality:"high",wmode:this.flashvars.wmode},f={align:"middle",id:this.applicationId,name:this.applicationId},swfobject.embedSWF(c,this.flashvars.target,"100%","100%",d,!1,this.flashvars,e,f),this.registerListeners()},TinychatEmbed.prototype.onFocusHandler=function(){this.data.publicChatListInFocus&&(this.data.messageCount=0),this.data.privateChatListInFocus&&this.resetPrivateChatMessageNotice(),this.data.inFocus=!0,this.updateTitle()},TinychatEmbed.prototype.onBlurHandler=function(){this.data.inFocus=!1,this.updateTitle()},TinychatEmbed.prototype.registerListeners=function(){var a=this;window.onfocus=function(){a.onFocusHandler()},window.onblur=function(){a.onBlurHandler()},window.addEventListener?window.addEventListener("message",function(b){a.oAuthDone(b.data)},!1):window.attachEvent&&window.attachEvent("onmessage",function(b){a.oAuthDone(b.data)})},TinychatEmbed.prototype.getApplicationUrl=function(a,b){var c;return a>10?c="Tinychat-11.1-1.0.0.0556.swf":a==10&&(b>=3?c="Tinychat-10.3-1.0.0.0546.swf":b==2?c="Tinychat-10.2-1.0.0.0546.swf":c="Tinychat-10.0-1.0.0.0546.swf"),this.options.baseUrl+c+"?version=1.0.0.0546"},TinychatEmbed.prototype.openSecurityPanel=function(a){var b=this.options.baseUrl+"SecurityPanelPopup.html?panel="+a+"&"+Math.random(),c=createIframe("SecurityPanel",b,215,138);this.centerElement(c),document.body.appendChild(c)},TinychatEmbed.prototype.closeSecurityPanel=function(){var a=getSecurityPanel(),b;document.body.removeChild(a),b=this.getApplication(),b.securityPanelClosed()},TinychatEmbed.prototype.securityPanelAuthorizationChanged=function(a){var b=this.getApplication();b.securityPanelAuthorizationChanged(a)},TinychatEmbed.prototype.getSecurityPanel=function(){return document.getElementById("SecurityPanel")},TinychatEmbed.prototype.getApplication=function(){return document.getElementById(this.applicationId)},TinychatEmbed.prototype.createIframe=function(a,b,c,d){var e=document.createElement("iframe");return e.allowTransparency=!0,e.frameBorder=0,e.style.overflow="hidden",e.style.position="absolute",e.style.display="block",e.id=a,e.setAttribute("src",b),c&&(e.width=c),d&&(e.height=d),e},TinychatEmbed.prototype.createFloatingDiv=function(a){var b=document.createElement("div");a&&(b.id=a),document.body.appendChild(b),b.style.position="fixed",b.style.left="45%",b.style.top="45%",b.style.zIndex=50},TinychatEmbed.prototype.toggleElementVisibility=function(a,b){var c=document.getElementById(a);c&&(b?c.style.display="block":c.style.display="none")},TinychatEmbed.prototype.centerElement=function(a){var b=getWindowSize();a.style.position="fixed",a.style.left=b.x+"px",a.style.top=b.y+"px"},TinychatEmbed.prototype.clientOAuth=function(a,b,c,d){var e=this,f=e.getApplication(),g="//tinychat.com/api/clientoauth?type="+b+"&site="+a+"&room="+c+"&cid="+d,h=e.openPopup(g),i=""+window.location.hash,j,k,l,m,n;if(!h||h===null)return f.oAuthResponse("blocked");j=setInterval(function(){if(h.closed)return clearInterval(j),e.clearHash(),f.oAuthResponse("closed");try{k=""+window.location.hash;if(""+window.location.hash!==i){l=unescape(window.location.hash.substring(1)),l.indexOf("#")>0&&(l=l.substring(0,l.indexOf("#"))),m=jQuery.parseJSON(l);try{f.oAuthResponse(m.res,m.type,m.id,m.name,m.pic)}catch(a){}return clearInterval(j),h.close(),e.clearHash()}}catch(a){}try{k=""+window.location,n=k.indexOf("//tinychat.com");if(n!==0&&h.postMessage)h.postMessage(j,"http://tinychat.com/closepopup");else{m=h.checkoauth();if(m.done){try{f.oAuthResponse(m.res,m.type,m.id,m.name,m.pic)}catch(a){}return clearInterval(j),h.close(),e.clearHash()}}}catch(a){}},1e3)},TinychatEmbed.prototype.clearHash=function(){var a=""+window.location;window.location=a.indexOf("#")>0?a.substring(0,a.indexOf("#"))+"#":a+"#"},TinychatEmbed.prototype.oAuthDone=function(a){var b,c;try{if(a){var b=a.split(/,/);b.length==5&&(clearInterval(b[0]),c=this.getApplication(),c.oAuthResponse("OK",b[1],b[2],b[3],b[4]))}}catch(d){}},TinychatEmbed.prototype.openPopup=function(a,b,c){return b||(b=785),c||(c=450),window.open(a,"win","menubar=no,width="+b+",height="+c+",toolbar=no")},TinychatEmbed.prototype.getPublicChatUnreadMessageCount=function(){return this.data.messageCount},TinychatEmbed.prototype.increasePublicChatUnreadMessageCount=function(){if(!this.data.publicChatListInFocus||!this.data.inFocus)this.data.messageCount++,this.updateTitle()},TinychatEmbed.prototype.privateMessageReceived=function(a){if(!this.data.privateChatListInFocus||!this.data.inFocus)this.data.titleSwapTimer&&this.resetPrivateChatMessageNotice(),this.data.privateChatSenderName=a,this.swapTitleDisplay()},TinychatEmbed.prototype.swapTitleDisplay=function(){var a=this;this.data.swapToPrivateChatMessageNotice?document.title=this.data.privateChatSenderName+" sent you a message!":this.updateTitle(),this.data.swapToPrivateChatMessageNotice=!this.data.swapToPrivateChatMessageNotice,this.data.titleSwapTimer=setTimeout(function(){a.swapTitleDisplay()},this.data.SWAP_TIMEOUT)},TinychatEmbed.prototype.publicChatListFocusChange=function(a){this.data.publicChatListInFocus=a,a&&(this.data.messageCount=0,this.updateTitle())},TinychatEmbed.prototype.privateChatListFocusChange=function(a){this.data.privateChatListInFocus=a,a&&(this.resetPrivateChatMessageNotice(),this.updateTitle())},TinychatEmbed.prototype.updateTitle=function(){this.data.messageCount===0?document.title=this.data.originalDocumentTitle:this.data.messageCount>99?document.title=this.data.originalDocumentTitle+" (99+)":this.data.messageCount>0&&(document.title=this.data.originalDocumentTitle+" ("+this.data.messageCount+")")},TinychatEmbed.prototype.resetPrivateChatMessageNotice=function(){clearTimeout(this.data.titleSwapTimer),this.data.titleSwapTimer=null,this.data.privateChatSenderName=null,this.data.swapToPrivateChatMessageNotice=!0},getWindowSize=function(){var a=0,b=0;return window.innerWidth?(a=window.innerWidth,b=window.innerHeight):document.documentElement.clientWidth!==0?(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight):(a=document.body.clientWidth,b=document.body.clientHeight),{width:a,height:b}}