(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection'], function(_, PaginatedCollection) {
    var SyllabusAppointmentGroupsCollection, _ref;

    return SyllabusAppointmentGroupsCollection = (function(_super) {
      __extends(SyllabusAppointmentGroupsCollection, _super);

      function SyllabusAppointmentGroupsCollection() {
        _ref = SyllabusAppointmentGroupsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SyllabusAppointmentGroupsCollection.prototype.url = '/api/v1/appointment_groups';

      SyllabusAppointmentGroupsCollection.prototype.initialize = function(context_codes, scope) {
        this.context_codes = context_codes;
        this.scope = scope != null ? scope : 'reservable';
        return SyllabusAppointmentGroupsCollection.__super__.initialize.apply(this, arguments);
      };

      SyllabusAppointmentGroupsCollection.prototype.fetch = function(options) {
        var _base, _ref1, _ref2, _ref3;

        if (options == null) {
          options = {};
        }
        if ((_ref1 = options['add']) == null) {
          options['add'] = true;
        }
        if ((_ref2 = options['data']) == null) {
          options['data'] = {};
        }
        options['data']['scope'] = this.scope;
        options['data']['context_codes'] = this.context_codes;
        if ((_ref3 = (_base = options['data'])['include_past_appointments']) == null) {
          _base['include_past_appointments'] = '1';
        }
        return SyllabusAppointmentGroupsCollection.__super__.fetch.call(this, options);
      };

      SyllabusAppointmentGroupsCollection.prototype.parse = function(resp) {
        _.each(SyllabusAppointmentGroupsCollection.__super__.parse.apply(this, arguments), function(ev) {
          return ev.related_id = ev.id = "appointment_group_" + ev.id;
        });
        return resp;
      };

      return SyllabusAppointmentGroupsCollection;

    })(PaginatedCollection);
  });

}).call(this);
