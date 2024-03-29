(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!conversations', 'underscore', 'compiled/conversations/MessageProgressBar', 'jquery.ajaxJSON'], function(I18n, _, MessageProgressBar) {
    var MessageProgressTracker;

    return MessageProgressTracker = (function() {
      function MessageProgressTracker(app) {
        this.app = app;
        this.batchPoller = __bind(this.batchPoller, this);
        this.batchItems = {};
        this.$list = $('#message_status');
      }

      MessageProgressTracker.prototype.track = function(data, deferred) {
        var item,
          _this = this;

        item = new MessageProgressBar(this, data);
        this.$list.append(item.$node);
        item.$bar.focus();
        if (deferred) {
          $.when(deferred).then(function(data, submitParam, xhr) {
            var batchId;

            if (xhr.status === 202) {
              if (batchId = xhr.getResponseHeader('X-Conversation-Batch-Id')) {
                _this.batchItems[batchId] = item;
              }
              if (!_this.polling) {
                return _this.batchPoller();
              }
            } else {
              return item.complete();
            }
          }, function(data) {
            var error, _ref, _ref1;

            if (typeof data.isRejected === "function" ? data.isRejected() : void 0) {
              return item.complete();
            } else {
              error = ((_ref = data[0]) != null ? _ref.attribute : void 0) === 'recipients' && data[0].message === 'invalid' ? I18n.t('recipient_error', 'The course or group you have selected has no valid recipients') : ((_ref1 = data[0]) != null ? _ref1.attribute : void 0) === 'attachment' && data[0].message === 'upload failed' ? I18n.t('attachment_error', 'Attachment failed to upload, please try again.') : I18n.t('unspecified_error', 'An unexpected error occurred, please try again');
              return item.error(error);
            }
          });
        }
        return item;
      };

      MessageProgressTracker.prototype.batchPoller = function() {
        var _this = this;

        this.polling = true;
        return $.ajaxJSON('/conversations/batches', 'GET', {}, function(data) {
          _this.updateItems(data);
          if (data.length > 0) {
            return setTimeout(_this.batchPoller, 3000);
          } else {
            return _this.polling = false;
          }
        });
      };

      MessageProgressTracker.prototype.updateItems = function(data) {
        var completed, dataHash, id, item, _ref, _ref1;

        dataHash = _.reduce(data, function(h, i) {
          h[i.id] = i;
          return h;
        }, {});
        for (id in dataHash) {
          data = dataHash[id];
                    if ((_ref = (_ref1 = this.batchItems[id]) != null ? _ref1.update(data) : void 0) != null) {
            _ref;
          } else {
            this.batchItems[id] = this.track(data);
          };
        }
        completed = (function() {
          var _ref2, _results;

          _ref2 = this.batchItems;
          _results = [];
          for (id in _ref2) {
            item = _ref2[id];
            if (!(!dataHash[id])) {
              continue;
            }
            item.complete();
            _results.push(delete this.batchItems[id]);
          }
          return _results;
        }).call(this);
        if (completed.length) {
          return this.app.updateView(true);
        }
      };

      MessageProgressTracker.prototype.height = function() {
        return this.$list.outerHeight(true);
      };

      return MessageProgressTracker;

    })();
  });

}).call(this);
