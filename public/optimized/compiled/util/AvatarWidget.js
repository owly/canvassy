(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["compiled/util/ProximityLoader"],function(b){var c;return c=function(){function c(b){this._openAvatarDialog=a(this._openAvatarDialog,this),this._initializeDialog=a(this._initializeDialog,this),this.$el=$(b),this._initializeLoader(),this._attachEvents()}return c.prototype._attemptedLoads=0,c.prototype._attachEvents=function(){return this.$el.on("click",this._openAvatarDialog)},c.prototype._initializeLoader=function(){return this.loader=new b(this.$el,{callback:this._initializeDialog,dependencies:["compiled/views/profiles/AvatarDialogView"]})},c.prototype._initializeDialog=function(a){return this.avatarDialog=new a},c.prototype._openAvatarDialog=function(a){return a!=null&&a.preventDefault(),typeof this.avatarDialog!="undefined"?this.avatarDialog.show():this._pollScriptLoad()},c.prototype._pollScriptLoad=function(){this.loader.deferred.resolve();if(this._attemptedLoads<20)return this._attemptedLoads++,setTimeout(this._openAvatarDialog,100);throw new Error("Failed to load AvatarDialogView")},c}()})}).call(this)