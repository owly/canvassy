(function() {
  var __slice = [].slice;

  define(['jquery', 'underscore', 'compiled/fn/preventDefault', 'vendor/jquery.ba-tinypubsub'], function($, _, preventDefault, _arg) {
    var followableTypes, publish;

    publish = _arg.publish;
    followableTypes = {
      user: '/api/v1/users',
      collection: '/api/v1/collections'
    };
    return _.each({
      follow: 'PUT',
      unfollow: 'DELETE'
    }, function(method, action) {
      return $(document).delegate("[data-" + action + "]", 'click', preventDefault(function() {
        var id, type, url, _ref;

        _ref = $(this).data(action), type = _ref.type, id = _ref.id;
        url = "" + followableTypes[type] + "/" + id + "/followers/self";
        return $.ajax(url, {
          type: method
        }).success(function() {
          return publish(action, [id, type].concat(__slice.call(arguments)));
        });
      }));
    });
  });

}).call(this);
