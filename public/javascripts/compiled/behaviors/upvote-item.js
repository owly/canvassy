(function() {
  var __slice = [].slice;

  define(['jquery', 'underscore', 'compiled/fn/preventDefault', 'vendor/jquery.ba-tinypubsub'], function($, _, preventDefault, _arg) {
    var publish;

    publish = _arg.publish;
    return _.each(['upvote', 'deupvote'], function(action) {
      return $(document).delegate("[data-" + action + "-item]", 'click', preventDefault(function() {
        var itemId, type, url;

        itemId = $(this).data("" + action + "Item");
        type = {
          upvote: 'PUT',
          deupvote: 'DELETE'
        }[action];
        url = "/api/v1/collections/items/" + itemId + "/upvotes/self";
        return $.ajax(url, {
          type: type
        }).success(function() {
          return publish("" + action + "Item", [itemId].concat(__slice.call(arguments)));
        });
      }));
    });
  });

}).call(this);
