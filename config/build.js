({

  // file optimizations
  optimize: "uglify",

  // continue to let Jammit do its thing
  optimizeCss: "none",

  // where to place optimized javascript, relative to this file
  dir: "../public/optimized",

  // where the "app" is, relative to this file
  appDir: "../public/javascripts",

  // base path for modules, relative to appDir
  baseUrl: "./",

  translate: true,

  paths: {
    "common":"compiled/bundles/common",
    "jqueryui":"vendor/jqueryui",
    "use":"vendor/use",
    "uploadify":"../flash/uploadify/jquery.uploadify-3.1.min"},

  // non-amd shims
  use: {
    'vendor/backbone': {
      deps: ['underscore', 'jquery'],
      attach: function(_, $){
        return Backbone;
      }
    },

    // slick grid shim
    'vendor/slickgrid/lib/jquery.event.drag-2.0.min': {
      deps: ['jquery'],
      attach: '$'
    },
    'vendor/slickgrid/slick.core': {
      deps: ['jquery', 'use!vendor/slickgrid/lib/jquery.event.drag-2.0.min'],
      attach: 'Slick'
    },
    'vendor/slickgrid/slick.grid': {
      deps: ['use!vendor/slickgrid/slick.core'],
      attach: 'Slick'
    },
    'vendor/slickgrid/slick.editors': {
      deps: ['use!vendor/slickgrid/slick.core'],
      attach: 'Slick'
    },
    'vendor/slickgrid/plugins/slick.rowselectionmodel': {
      deps: ['use!vendor/slickgrid/slick.core'],
      attach: 'Slick'
    },

    'uploadify' : {
      deps: ['jquery'],
      attach: '$'
    },

    'vendor/FileAPI/FileAPI.min': {
      deps: ['jquery', 'vendor/FileAPI/config'],
      attach: 'FileAPI'
    }
  }
,

  // which modules should have their dependencies concatenated into them
  modules: [

    // non "app" bundles, should be careful not to try to have too many of these
    {
      name: "compiled/tinymce",

      // this stuff is already in common, should be able to make this a smaller
      // list since some things depend on others in the list, yes, its a bit crazy
      // this is the intersection of common and tinymce, we need to script this
      // config file...
      exclude: [
        'order',
        'i18n',
        'str/escapeRegex',
        'vendor/date',
        'jquery',
        'str/pluralize',
        'INST',
        'str/htmlEscape',
        'i18nObj',
        'vendor/jquery.scrollTo',
        'vendor/jqueryui/core',
        'vendor/jqueryui/widget',
        'vendor/jqueryui/mouse',
        'vendor/jqueryui/position',
        'translations/instructure',
        'i18n!instructure',
        'compiled/util/objectCollection',
        'vendor/spin',
        'vendor/jquery.spin',
        'jquery.google-analytics',
        'vendor/jquery.ba-hashchange',
        'vendor/jqueryui/effects/drop',
        'compiled/jquery.rails_flash_notifications',
        'translations/scribd',
        'i18n!scribd',
        'vendor/scribd.view',
        'jquery.dropdownList',
        'vendor/jqueryui/progressbar',
        'translations/media_comments',
        'i18n!media_comments',
        'vendor/jqueryui/button',
        'vendor/jqueryui/draggable',
        'jqueryui/draggable',
        'vendor/jqueryui/resizable',
        'vendor/jqueryui/dialog',
        'jquery.instructure_jquery_patches',
        'vendor/jqueryui/datepicker',
        'vendor/jqueryui/sortable',
        'jquery.scrollToVisible',
        'vendor/jqueryui/tabs',
        'jquery.disableWhileLoading',
        'jquery.keycodes',
        'jquery.instructure_date_and_time',
        'jquery.instructure_misc_plugins',
        'tinymce.editor_box',
        'jquery.instructure_forms',
        'jquery.ajaxJSON',
        'jquery.instructure_misc_helpers',
        'media_comments'
      ]
    },

    { name: "common", include: ['translations/_core'] },

    // "apps"
    {"name":"compiled/bundles/account_admin_tools","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/account_authorization_configs","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/account_settings","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/account_show","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/account_statistics","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/add_assignment_group","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/add_course_or_user","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/alerts","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/announcements_index","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/assignmentMuter","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/assignment_edit","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/assignment_show","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/assignments","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/attendance","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/calendar","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/calendar2","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/calendar_event","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/change_password","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/chat","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/collaborations","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/conferences","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/confirm_email","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/content_exports","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/content_imports","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/content_migration","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/content_migration_deprecated","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/context_modules","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/conversations","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/copy_course","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/course","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/course_settings","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/course_statistics","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/dashboard","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/datagrid","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/developer_keys","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/discussion","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/discussion_replies","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/discussion_topics_edit","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/discussion_topics_index","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/edit_calendar_event","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/edit_rubric","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/eportfolio","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/external_tools","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/file_inline","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/file_preview","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/file_show","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/full_files","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/global_assignments","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/grade_summary","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/gradebook2","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/gradebook_history","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/gradebook_uploads","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/gradebooks","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/grading_standards","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/group_settings","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/groups","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/jobs","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/jquery_ui_menu","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/json2","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/ldap_settings_test","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/learning_outcomes","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/link_enrollment","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/locale","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/manage_avatars","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/manage_groups","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/messages","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/moderate_quiz","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/notification_preferences","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/notifications","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/otp_login","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/page_views","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/plugins","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/prerequisites_lookup","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/profile","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/profile_show","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/question_bank","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/question_banks","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/quiz_history","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/quiz_show","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/quiz_statistics","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/quizzes_bundle","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/quizzes_index","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/registration","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/registration_confirmation","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/roles","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/roster","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/rubric_assessment","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/section","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/select_content_dialog","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/self_enrollment","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/sis_import","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/site_admin","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/slickgrid","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/speed_grader","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/styleguide","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/sub_accounts","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/submission_download","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/submissions","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/submit_assignment","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/syllabus","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/take_quiz","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/teach_activity_report","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/teacher_activity_report","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/tool_inline","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/user","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/user_lists","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/user_logins","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/user_name","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/user_notes","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/wiki","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/wiki_page_index","exclude":["common","compiled/tinymce"]},
    {"name":"compiled/bundles/zip_file_imports","exclude":["common","compiled/tinymce"]}
  ]
})

