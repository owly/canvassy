(function(){var a=[].slice;define(["jquery","underscore","compiled/fn/preventDefault","vendor/jquery.ba-tinypubsub"],function(b,c,d,e){var f,g;return g=e.publish,f={user:"/api/v1/users",collection:"/api/v1/collections"},c.each({follow:"PUT",unfollow:"DELETE"},function(c,e){return b(document).delegate("[data-"+e+"]","click",d(function(){var d,h,i,j;return j=b(this).data(e),h=j.type,d=j.id,i=""+f[h]+"/"+d+"/followers/self",b.ajax(i,{type:c}).success(function(){return g(e,[d,h].concat(a.call(arguments)))})}))})})}).call(this)