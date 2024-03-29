(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'i18n!course_restore', 'jquery.instructure_forms'], function(Backbone, $, I18n) {
    var CourseRestore, _ref;

    return CourseRestore = (function(_super) {
      __extends(CourseRestore, _super);

      function CourseRestore() {
        this.restore = __bind(this.restore, this);        _ref = CourseRestore.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseRestore.prototype.baseUrl = function() {
        return "/api/v1/accounts/" + (this.get('account_id')) + "/courses";
      };

      CourseRestore.prototype.searchUrl = function() {
        return "" + (this.baseUrl()) + "/" + (this.get('id')) + "?include[]=all_courses";
      };

      CourseRestore.prototype.search = function(id) {
        var _this = this;

        this.trigger('searching');
        this.set('id', id, {
          silent: true
        });
        return this.fetch({
          url: this.searchUrl(),
          success: function(model) {
            return model.trigger('doneSearching');
          },
          error: function(model, response) {
            var account_id, message;

            account_id = _this.get('account_id');
            _this.clear({
              silent: true
            });
            _this.set('account_id', account_id, {
              silent: true
            });
            message = $.parseJSON(response.responseText);
            return _this.set(message);
          }
        });
      };

      CourseRestore.prototype.parse = function(response) {
        response.account_id = this.get('account_id');
        this.clear({
          silent: true
        });
        return response;
      };

      CourseRestore.prototype.restore = function() {
        var ajaxRequest, deferred, restoreError, restoreSuccess, setTakingTooLong, takingTooLong,
          _this = this;

        this.trigger('restoring');
        deferred = $.Deferred();
        takingTooLong = false;
        setTakingTooLong = function() {
          return takingTooLong = true;
        };
        setTimeout(setTakingTooLong, 60000);
        ajaxRequest = function(url, method) {
          if (method == null) {
            method = "GET";
          }
          return $.ajax({
            url: url,
            type: method,
            success: restoreSuccess,
            error: restoreError
          });
        };
        restoreError = function(response) {
          if (response == null) {
            response = {};
          }
          $.flashError(I18n.t('restore_error', "There was an error attempting to restore the course. Course was not restored."));
          return deferred.reject();
        };
        restoreSuccess = function(response) {
          if (takingTooLong) {
            return restoreError();
          }
          switch (response.workflow_state) {
            case 'queued':
            case 'running':
              return setTimeout((function() {
                return ajaxRequest(response.url);
              }), 1000);
            case 'completed':
              _this.set({
                workflow_state: 'unpublished',
                restored: true
              });
              _this.trigger('doneRestoring');
              return deferred.resolve();
            case 'failed':
              return restoreError();
          }
        };
        ajaxRequest("" + (this.baseUrl()) + "/?course_ids[]=" + (this.get('id')) + "&event=undelete", "PUT");
        return deferred;
      };

      return CourseRestore;

    })(Backbone.Model);
  });

}).call(this);
