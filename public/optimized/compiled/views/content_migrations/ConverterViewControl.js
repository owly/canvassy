(function(){define(["underscore","vendor/jquery.ba-tinypubsub"],function(a){var b;return b=function(){function b(){}return b.subscribed=!1,b.registeredViews=[],b.getModel=function(){return this._model},b.setModel=function(a){if(!this._model)return this._model=a},b.register=function(a){this.registeredViews.push(a);if(!this.subscribed)return $.subscribe("contentImportChange",this.renderView),this.subscribed=!0},b.resetControl=function(){return this.subscribed=!1,this.registeredViews.length=0},b.renderView=function(c){var d,e,f,g;f=c.value,d=c.migrationConverter,e=a.find(b.registeredViews,function(a){return a.key===f});if(e!=null?(g=e.view)!=null?g.validateBeforeSave:void 0:void 0)d.validateBeforeSave=e.view.validateBeforeSave;return d.renderConverter(e!=null?e.view:void 0)},b}.call(this)})}).call(this)