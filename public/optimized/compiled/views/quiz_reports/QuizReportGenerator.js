(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["underscore","Backbone","jst/quiz_reports/quizReportGenerator","compiled/models/QuizReport"],function(b,d,e,f){var g,h,i;return h=d.View,g=function(b){function d(){return this.reportReady=a(this.reportReady,this),i=d.__super__.constructor.apply(this,arguments),i}return c(d,b),d.prototype.template=e,d.prototype.initialize=function(){var a;return(a=this.model.get("progress"))&&this.model.progressModel.set(a),this.model.progressModel.on("change",this.render),this.model.on("progressResolved",this.reportReady)},d.prototype.events={"click .create-report":function(){return this.autoDownload=!0,this.model.save()}},d.prototype.reportReady=function(){this.render();if(this.autoDownload)return this.triggerDownload()},d.prototype.triggerDownload=function(){var a;return a=this.model.get("file").url,$(document.body).append($("<iframe>",{style:"display:none",src:a}))},d}(h)})}).call(this)