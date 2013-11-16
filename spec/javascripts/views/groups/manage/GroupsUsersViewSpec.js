(function() {
  define(['jquery', 'compiled/views/groups/manage/GroupUsersView', 'compiled/views/groups/manage/AssignToGroupMenu', 'compiled/collections/GroupCollection', 'compiled/collections/GroupUserCollection', 'compiled/models/Group'], function($, GroupUsersView, AssignToGroupMenu, GroupCollection, GroupUserCollection, Group) {
    var groups, users, view;

    view = null;
    groups = null;
    users = null;
    module('GroupUsersView', {
      setup: function() {
        var menu;

        groups = new GroupCollection([
          new Group({
            name: "a group"
          }), new Group({
            name: "another group"
          })
        ]);
        users = new GroupUserCollection([
          {
            id: 1,
            name: "bob"
          }, {
            id: 2,
            name: "joe"
          }
        ]);
        menu = new AssignToGroupMenu({
          collection: groups
        });
        view = new GroupUsersView({
          collection: users,
          groupsCollection: groups,
          canAssignToGroup: true,
          assignToGroupMenu: menu
        });
        view.render();
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        view.remove();
        return $('.assign-to-group-menu').remove();
      }
    });
    test('toggles group class if canAssignToGroup', function() {
      var group;

      groups.pop();
      ok(view.$el.attr('class').indexOf('group-category-empty') === -1);
      group = groups.pop();
      ok(view.$el.attr('class').indexOf('group-category-empty') >= 0);
      groups.push(group);
      return ok(view.$el.attr('class').indexOf('group-category-empty') === -1);
    });
    return test('opens the assignToGroupMenu', function() {
      var $menu;

      view.$('.assign-to-group').eq(0).click();
      $menu = $('.assign-to-group-menu').filter(':visible');
      equal($menu.length, 1);
      return equal($menu.find('.set-group').length, 2);
    });
  });

}).call(this);
