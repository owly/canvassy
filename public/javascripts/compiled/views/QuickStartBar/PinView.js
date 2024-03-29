(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/views/KollectionItems/KollectionItemSaveView', 'compiled/views/QuickStartBar/BaseItemView', 'compiled/models/Pin', 'jst/quickStartBar/pin', 'compiled/models/KollectionItem', 'jquery.instructure_date_and_time', 'compiled/jquery.rails_flash_notifications'], function(_, KollectionItemSaveView, BaseItemView, Pin, template, KollectionItem) {
    var PinView, QuickStartKollectionItemSaveView, _ref, _ref1;

    QuickStartKollectionItemSaveView = (function(_super) {
      __extends(QuickStartKollectionItemSaveView, _super);

      function QuickStartKollectionItemSaveView() {
        this.render = __bind(this.render, this);        _ref = QuickStartKollectionItemSaveView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuickStartKollectionItemSaveView.prototype.render = function() {
        QuickStartKollectionItemSaveView.__super__.render.apply(this, arguments);
        this.$('.toolbar').removeClass('toolbar');
        this.$('.box-header').removeClass('box-header');
        this.$('.box-content').removeClass('box-content').addClass('v-gutter');
        this.$('.btn').addClass('small-button');
        return this.$('[autoFocus]').removeAttr('autoFocus');
      };

      return QuickStartKollectionItemSaveView;

    })(KollectionItemSaveView);
    return PinView = (function(_super) {
      __extends(PinView, _super);

      function PinView() {
        _ref1 = PinView.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      PinView.prototype.events = _.extend({
        'keyup [name=url]': 'onUrlKeyUp'
      }, BaseItemView.prototype.events);

      PinView.prototype.template = template;

      PinView.prototype.urlRegEx = /^(http(s?))?:\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;

      PinView.prototype.render = function() {
        PinView.__super__.render.apply(this, arguments);
        return this.createKollectionItemSaveView();
      };

      PinView.prototype.save = function() {
        return this.kollectionItemSaveView.model.save().done(function() {
          return $.flashMessage('TODO: Add collection items to the stream >:O');
        });
      };

      PinView.prototype.createKollectionItemSaveView = function() {
        this.model = new KollectionItem;
        return this.kollectionItemSaveView = new QuickStartKollectionItemSaveView({
          model: this.model,
          el: this.$('.kollectionItemSaveView')[0]
        });
      };

      PinView.prototype.onUrlKeyUp = _.throttle(function(event) {
        var $el, url, val;

        $el = $(event.target);
        val = $el.val();
        url = this.addHTTP(val);
        return this.updateLinkData(url);
      }, 1000);

      PinView.prototype.addHTTP = function(url) {
        if (/^http(s)?:\/\//.test(url)) {
          return url;
        } else {
          return "http://" + url;
        }
      };

      PinView.prototype.updateLinkData = function(url) {
        if (url === this.url) {
          return;
        }
        this.model.set('title', null);
        this.url = url;
        if (this.urlRegEx.test(url)) {
          this.model.set('image_url', null, {
            silent: true
          });
          this.model.set('link_url', url, {
            silent: true
          });
          return this.model.fetchLinkData();
        }
      };

      PinView.type = 'pin';

      PinView.title = function() {
        return PinView.__super__.constructor.title.call(this, 'pin', 'Pin');
      };

      return PinView;

    })(BaseItemView);
  });

}).call(this);
