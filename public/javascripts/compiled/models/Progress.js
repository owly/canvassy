(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['Backbone'], function(_arg) {
    var Model, Progress, _ref;

    Model = _arg.Model;
    return Progress = (function(_super) {
      __extends(Progress, _super);

      function Progress() {
        this.onPoll = __bind(this.onPoll, this);
        this.poll = __bind(this.poll, this);        _ref = Progress.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Progress.prototype.defaults = {
        url: null,
        timeout: 1000
      };

      Progress.prototype.pollStates = ['queued', 'running'];

      Progress.prototype.isPolling = function() {
        var _ref1;

        return _ref1 = this.get('workflow_state'), __indexOf.call(this.pollStates, _ref1) >= 0;
      };

      Progress.prototype.initialize = function() {
        var _this = this;

        this.pollDfd = new $.Deferred;
        return this.on('change:url', function() {
          if (_this.isPolling()) {
            return _this.poll();
          }
        });
      };

      Progress.prototype.url = function() {
        return this.get('url');
      };

      Progress.prototype.poll = function() {
        var _this = this;

        this.fetch().then(this.onPoll, function() {
          return _this.pollDfd.rejectWith(_this, arguments);
        });
        return this.pollDfd;
      };

      Progress.prototype.onPoll = function() {
        if (this.isPolling()) {
          return setTimeout(this.poll, this.get('timeout'));
        } else {
          this.pollDfd.resolve();
          return this.trigger('complete');
        }
      };

      return Progress;

    })(Model);
  });

}).call(this);
