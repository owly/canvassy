(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/models/User'], function(User) {
    var RosterUser, _ref;

    return RosterUser = (function(_super) {
      __extends(RosterUser, _super);

      function RosterUser() {
        _ref = RosterUser.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RosterUser.prototype.defaults = {
        avatar_url: '/images/messages/avatar-50.png'
      };

      RosterUser.prototype.computedAttributes = [
        'sections', {
          name: 'html_url',
          deps: ['enrollments']
        }
      ];

      RosterUser.prototype.html_url = function() {
        return this.get('enrollments')[0].html_url;
      };

      RosterUser.prototype.sections = function() {
        var course_section_id, sections, _i, _len, _ref1, _ref2, _results;

        if (((_ref1 = this.collection) != null ? _ref1.sections : void 0) == null) {
          return [];
        }
        sections = this.collection.sections;
        _ref2 = this.get('enrollments');
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          course_section_id = _ref2[_i].course_section_id;
          _results.push(sections.get(course_section_id).attributes);
        }
        return _results;
      };

      return RosterUser;

    })(User);
  });

}).call(this);
