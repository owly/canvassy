(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!titles","jquery","Backbone","jst/googleDocsTreeView"],function(b,d,e,f){var g,h;return g=function(d){function e(){return this.activateFolder=a(this.activateFolder,this),this.activateFile=a(this.activateFile,this),h=e.__super__.constructor.apply(this,arguments),h}return c(e,d),e.prototype.template=f,e.prototype.initialize=function(a){},e.prototype.events={"click li.file":"activateFile","click li.folder":"activateFolder"},e.prototype.render=function(){var a;return a=b.t("view_in_separate_window","View in Separate Window"),this.$el.html(this.template({tree:this.model,title_text:a})),this.$el.instTree({autoclose:!1,multi:!1,dragdrop:!1})},e.prototype.activateFile=function(a){var b,c;if(this.$(a.target).closest(".popout").length>0)return;return b=this.$(a.currentTarget),a.preventDefault(),a.stopPropagation(),this.$(".file.active").removeClass("active"),b.addClass("active"),c=b.attr("id").substring(9),this.trigger("activate-file",c)},e.prototype.activateFolder=function(a){var b;b=this.$(a.target);if(b.closest(".sign").length===0&&b.closest(".file,.folder").hasClass("folder"))return this.$(a.currentTarget).find(".sign").click()},e.prototype.tagName="ul",e.prototype.id="google_docs_tree",e.prototype.attributes={style:"width: 100%;"},e}(e.View)})}).call(this)