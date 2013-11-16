define(["jquery"],function(a){function b(b,c){this.callback=a.proxy(this,"callback"),this.$el=a(b),this.options=a.extend({},this.defaults,c),this.findScrollParent(),this.scroll()}return b.prototype.defaults={duration:200,offset:{x:20,y:20}},b.window=a(window),b.SCROLLABLE_ROOT=document.body,b.prototype.scroll=function(){this.calculateDimensions(),this.calculateScrollOptions(),a.isEmptyObject(this.scrollOptions)?this.callback():this.scrollParent.animate(this.scrollOptions,this.callback)},b.prototype.callback=function(){this.options.complete&&this.options.complete.call(this.$el)},b.prototype.findScrollParent=function(){var b=this.$el.scrollParent();b[0]==document&&(b=a(this.constructor.SCROLLABLE_ROOT)),this.scrollParent=b},b.prototype.calculateDimensions=function(){var a=this.calculateElementDimensions(this.$el),b=this.calculateElementDimensions(this.scrollParent);this.dimensions={relative:{top:a.box.top-(b.box.top+b.border.top),right:b.box.right-b.border.right-b.scrollbar.right-a.box.right,bottom:b.box.bottom-b.border.bottom-b.scrollbar.bottom-a.box.bottom,left:a.box.left-(b.box.left+b.border.left)},element:a,parent:b}},b.prototype.calculateElementDimensions=function(b){var c=this.constructor.window,d=b[0]==this.constructor.SCROLLABLE_ROOT;d&&(b=a(document.documentElement));var e=b[0].getBoundingClientRect();return{border:this.calculateBorder(b[0]),scroll:{top:(d?c:b).scrollTop(),left:(d?c:b).scrollLeft()},scrollbar:{right:d?0:b.innerWidth()-b[0].clientWidth,bottom:d?0:b.innerHeight()-b[0].clientHeight},box:{top:d?0:e.top,right:d?b[0].clientWidth:e.right,bottom:d?b[0].clientHeight:e.bottom,left:d?0:e.left}}},b.prototype.calculateBorder=function(b){var c=!!document.defaultView&&!!document.defaultView.getComputedStyle,d=c?document.defaultView.getComputedStyle(b,null):b.currentStyle,e={top:parseFloat(c?d.borderTopWidth:a.css(b,"borderTopWidth"))||0,left:parseFloat(c?d.borderLeftWidth:a.css(b,"borderLeftWidth"))||0,bottom:parseFloat(c?d.borderBottomWidth:a.css(b,"borderBottomWidth"))||0,right:parseFloat(c?d.borderRightWidth:a.css(b,"borderRightWidth"))||0};return{top:e.top,left:e.left,bottom:e.bottom,right:e.right,vertical:e.top+e.bottom,horizontal:e.left+e.right}},b.prototype.calculateScrollOptions=function(){var a={},b=this.dimensions.relative,c=this.options.offset,d=this.dimensions.element,e=this.dimensions.parent;b.top<0?a.scrollTop=e.scroll.top+b.top-c.y:b.top>0&&b.bottom<0&&(a.scrollTop=e.scroll.top+c.y+Math.min(b.top,-b.bottom)),b.left<0?a.scrollLeft=e.scroll.left+b.left-c.x:b.left>0&&b.right<0&&(a.scrollLeft=e.scroll.left+c.x+Math.min(b.left,-b.right)),this.scrollOptions=a},a.fn.scrollIntoView=function(a,c){return c&&a&&(a.duration=c),new b(this,a),this},b})