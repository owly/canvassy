(function() {
  define(['compiled/views/groups/manage/AssignToGroupMenu', 'compiled/collections/GroupCollection', 'compiled/models/Group', 'Backbone'], function(AssignToGroupMenu, GroupCollection, Group, _arg) {
    var Model, user, view;

    Model = _arg.Model;
    view = null;
    user = null;
    module('AssignToGroupMenu', {
      setup: function() {
        var groups;

        user = new Model({
          id: 1,
          name: "bob",
          groupId: null
        });
        groups = new GroupCollection([
          new Group({
            id: 1,
            name: "a group"
          })
        ]);
        view = new AssignToGroupMenu({
          collection: groups,
          model: user
        });
        view.render();
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        return view.remove();
      }
    });
    return test("updates the user's groupId", function() {
      var $link;

      equal(user.get('groupId'), null);
      $link = view.$('.set-group');
      equal($link.length, 1);
      $link.click();
      return equal(user.get('groupId'), 1);
    });
  });

}).call(this);
