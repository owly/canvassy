(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["i18n!assignment_muter","jquery","jst/mute_dialog","jquery.ajaxJSON","jquery.disableWhileLoading","jqueryui/dialog","vendor/jquery.ba-tinypubsub"],function(b,c,d){var e;return e=function(){function e(b,d,e){var f=this;this.$link=b,this.assignment=d,this.url=e,this.confirmUnmute=a(this.confirmUnmute,this),this.afterUpdate=a(this.afterUpdate,this),this.showDialog=a(this.showDialog,this),this.updateLink=a(this.updateLink,this),this.$link=c(this.$link),this.updateLink(),this.$link.click(function(a){return a.preventDefault(),f.assignment.muted?f.confirmUnmute():f.showDialog()})}return e.prototype.updateLink=function(){return this.$link.text(this.assignment.muted?b.t("unmute_assignment","Unmute Assignment"):b.t("mute_assignment","Mute Assignment"))},e.prototype.showDialog=function(){var a=this;return this.$dialog=c(d()).dialog({buttons:[{text:b.t("mute_assignment","Mute Assignment"),"data-text-while-loading":b.t("muting_assignment","Muting Assignment..."),click:function(){return a.$dialog.disableWhileLoading(c.ajaxJSON(a.url,"put",{status:!0},a.afterUpdate))}}],close:function(){return a.$dialog.remove()},resizable:!1,width:400})},e.prototype.afterUpdate=function(a){return this.assignment.muted=a.assignment.muted,this.updateLink(),this.$dialog.dialog("close"),c.publish("assignment_muting_toggled",[this.assignment])},e.prototype.confirmUnmute=function(){var a=this;return this.$dialog=c("<div />").text(b.t("unmute_dialog","This assignment is currently muted. That means students can't see their grades and feedback. Would you like to unmute now?")).dialog({buttons:[{text:b.t("unmute_button","Unmute Assignment"),"data-text-while-loading":b.t("unmuting_assignment","Unmuting Assignment..."),click:function(){return a.$dialog.disableWhileLoading(c.ajaxJSON(a.url,"put",{status:!1},a.afterUpdate))}}],close:function(){return a.$dialog.remove()},resizable:!1,title:b.t("unmute_assignment","Unmute Assignment"),width:400})},e}()})}).call(this)