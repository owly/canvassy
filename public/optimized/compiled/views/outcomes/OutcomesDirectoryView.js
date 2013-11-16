(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};define(["i18n!outcomes","jquery","underscore","compiled/views/PaginatedView","compiled/models/OutcomeGroup","compiled/collections/OutcomeCollection","compiled/collections/OutcomeGroupCollection","compiled/views/outcomes/OutcomeGroupIconView","compiled/views/outcomes/OutcomeIconView","jquery.disableWhileLoading","jqueryui/droppable","compiled/jquery.rails_flash_notifications"],function(b,d,e,f,g,h,i,j,k){var l,m;return l=function(f){function l(){return this.render=a(this.render,this),this.reset=a(this.reset,this),this.triggerSelect=a(this.triggerSelect,this),this.selectFirstOutcome=a(this.selectFirstOutcome,this),this.focusFirstOutcome=a(this.focusFirstOutcome,this),this.moveModelHere=a(this.moveModelHere,this),m=l.__super__.constructor.apply(this,arguments),m}return c(l,f),l.prototype.tagName="ul",l.prototype.className="outcome-level",l.prototype.initialize=function(a){var b;this.readOnly=a.readOnly,this.parent=a.parent;if(this.outcomeGroup=a.outcomeGroup)this.groups||(this.groups=new i,this.groups.url=this.outcomeGroup.get("subgroups_url")),this.groups.on("add reset",this.reset,this),this.groups.on("remove",this.removeGroup,this),this.groups.on("fetched:last",this.fetchOutcomes,this),this.outcomes||(this.outcomes=new h,this.outcomes.url=this.outcomeGroup.get("outcomes_url")),this.outcomes.on("add remove reset",this.reset,this);this.collection=this.groups,this.paginationScrollContainer=this.$el,l.__super__.initialize.call(this,a),this.loadDfd=d.Deferred(),this.outcomeGroup&&(this.$el.disableWhileLoading(b=this.groups.fetch()),b.done(this.focusFirstOutcome));if(a.selectFirstItem)return this.loadDfd.done(this.selectFirstOutcome)},l.prototype.initDroppable=function(){var a=this;return this.$el.droppable({scope:"outcomes",hoverClass:"outcome-level-hover",drop:function(b,c){var d;if(c.draggable.parent().get(0)===b.target)return;return d=c.draggable.data("view").model,a.moveModelHere(d)}})},l.prototype.promise=function(){return this.loadDfd.promise()},l.prototype.moveModelHere=function(a){var b;return a.collection.remove(a),a instanceof g?(this.groups.add(a),b=this.moveGroup(a,this.outcomeGroup.toJSON())):(this.outcomes.add(a),b=this.changeLink(a,this.outcomeGroup.toJSON())),b.done(function(){return a.trigger("select")})},l.prototype.changeLink=function(a,c){var e,f,g;return e=new d.Deferred,this.$el.disableWhileLoading(e),f=function(a,c){return e.reject(),d.flashError(b.t("flash.error","An error occurred. Please refresh the page and try again."))},a.setUrlTo("delete"),g=a.url,a.outcomeGroup=c,a.setUrlTo("add"),d.ajaxJSON(a.url,"POST",{outcome_id:a.get("id")}).done(function(c){return a.set(a.parse(c)),d.ajaxJSON(g,"DELETE").done(function(){return d.flashMessage(b.t("flash.updateSuccess","Update successful")),e.resolve()}).fail(f)}).fail(f),e},l.prototype.moveGroup=function(a,c){var e,f;return e=new d.Deferred,f=function(a,c){return e.reject(),d.flashError(b.t("flash.error","An error occurred. Please refresh the page and try again."))},a.setUrlTo("edit"),d.ajaxJSON(a.url,"PUT",{parent_outcome_group_id:c.id}).done(function(c){return a.set(a.parse(c)),d.flashMessage(b.t("flash.updateSuccess","Update successful")),e.resolve()}).fail(f),this.$el.disableWhileLoading(e),e},l.prototype.focusFirstOutcome=function(){var a;return a=this.$el.find("[tabindex=0]"),a.length>0?a.focus():this.$el.prev().find("[tabindex=0]").focus()},l.prototype.selectFirstOutcome=function(){return d("ul.outcome-level li:first").click()},l.prototype.paginationLoaderTemplate=function(){return"<li><a href='#' class='loading-more'>        "+b.t("loading_more_results","Loading more results")+"</a></li>"},l.prototype.showPaginationLoader=function(){var a;return this.$el.append((a=this.$paginationLoader)!=null?a:this.$paginationLoader=d(this.paginationLoaderTemplate()))},l.prototype.fetchOutcomes=function(){var a=this;return this.collection=this.outcomes,this.bindPaginationEvents(),this.outcomes.fetch({success:function(){return a.loadDfd.resolve(a)}}),this.showPaginationLoader()},l.prototype.triggerSelect=function(a){return this.clearSelection(),this.selectedModel=a.model,a.select(),this.trigger("select",this,a.model)},l.prototype.views=function(){var a,b,c,d;if(this._views&&!e.isEmpty(this._views))return this._views;this._views=this._viewsFor(this.groups.models,j).concat(this._viewsFor(this.outcomes.models,k)),d=this._views;for(b=0,c=d.length;b<c;b++)a=d[b],a.on("select",this.triggerSelect),a.model===this.selectedModel&&a.select();return this._views},l.prototype.reset=function(){return this._clearViews(),this.render()},l.prototype.removeGroup=function(a){var b;this.reset();if(a===((b=e.last(this.sidebar.directories))!=null?b.outcomeGroup:void 0))return this.trigger("select",this,null)},l.prototype.remove=function(){return this._clearViews(),this.selectedModel=null,l.__super__.remove.apply(this,arguments)},l.prototype.clearSelection=function(a){return a!=null&&a.preventDefault(),this.prevSelectedModel=this.selectedModel,this.selectedModel=null,e.each(this.views(),function(a){return a.unSelect()})},l.prototype.clearOutcomeSelection=function(){if(this.selectedModel instanceof Outcome)return this.clearSelection()},l.prototype.render=function(){var a=this;return this.$el.empty(),e.each(this.views(),function(b){return a.$el.append(b.render().el)}),this.readOnly||this.initDroppable(),this.$("li:first").attr("tabindex",0),this.$el.data("view",this),this},l.prototype._viewsFor=function(a,b){var c=this;return e.map(a,function(a){return new b({model:a,readOnly:c.readOnly,dir:c})})},l.prototype._clearViews=function(){return e.each(this._views,function(a){return a.remove()}),this._views=null},l}(f)})}).call(this)