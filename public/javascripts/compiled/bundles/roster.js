(function() {
  require(['Backbone', 'compiled/models/CreateUserList', 'compiled/models/Role', 'compiled/views/courses/roster/CreateUsersView', 'compiled/views/courses/roster/RoleSelectView', 'jst/courses/roster/rosterUsers', 'compiled/collections/RosterUserCollection', 'compiled/collections/RolesCollection', 'compiled/collections/SectionCollection', 'compiled/views/InputFilterView', 'compiled/views/PaginatedCollectionView', 'compiled/views/courses/roster/RosterUserView', 'compiled/views/courses/roster/RosterView', 'compiled/views/courses/roster/ResendInvitationsView', 'jquery'], function(_arg, CreateUserList, Role, CreateUsersView, RoleSelectView, rosterUsersTemplate, RosterUserCollection, RolesCollection, SectionCollection, InputFilterView, PaginatedCollectionView, RosterUserView, RosterView, ResendInvitationsView, $) {
    var Model, attributes, course, createUsersView, fetchOptions, inputFilterView, resendInvitationsView, roleSelectView, rolesCollection, users, usersView;

    Model = _arg.Model;
    fetchOptions = {
      include: ['avatar_url', 'enrollments', 'email', 'observed_users'],
      per_page: 50
    };
    users = new RosterUserCollection(null, {
      course_id: ENV.context_asset_string.split('_')[1],
      sections: new SectionCollection(ENV.SECTIONS),
      params: fetchOptions
    });
    rolesCollection = new RolesCollection((function() {
      var _i, _len, _ref, _results;

      _ref = ENV.ALL_ROLES;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attributes = _ref[_i];
        _results.push(new Role(attributes));
      }
      return _results;
    })());
    course = new Model(ENV.course);
    inputFilterView = new InputFilterView({
      collection: users
    });
    usersView = new PaginatedCollectionView({
      collection: users,
      itemView: RosterUserView,
      itemViewOptions: {
        course: ENV.course
      },
      canViewLoginIdColumn: ENV.permissions.manage_admin_users || ENV.permissions.manage_students,
      buffer: 1000,
      template: rosterUsersTemplate
    });
    roleSelectView = new RoleSelectView({
      collection: users,
      rolesCollection: rolesCollection
    });
    createUsersView = new CreateUsersView({
      collection: users,
      rolesCollection: rolesCollection,
      model: new CreateUserList({
        sections: ENV.SECTIONS,
        roles: ENV.ALL_ROLES,
        readURL: ENV.USER_LISTS_URL,
        updateURL: ENV.ENROLL_USERS_URL
      }),
      courseModel: course
    });
    resendInvitationsView = new ResendInvitationsView({
      model: course,
      resendInvitationsUrl: ENV.resend_invitations_url,
      canResend: ENV.permissions.manage_students || ENV.permissions.manage_admin_users
    });
    this.app = new RosterView({
      usersView: usersView,
      inputFilterView: inputFilterView,
      roleSelectView: roleSelectView,
      createUsersView: createUsersView,
      resendInvitationsView: resendInvitationsView,
      collection: users,
      roles: ENV.ALL_ROLES,
      permissions: ENV.permissions,
      course: ENV.course
    });
    this.app.render();
    this.app.$el.appendTo($('#content'));
    return users.fetch();
  });

}).call(this);
