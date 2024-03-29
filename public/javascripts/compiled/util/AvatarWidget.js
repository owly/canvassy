(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['compiled/util/ProximityLoader'], function(ProximityLoader) {
    var AvatarWidget;

    return AvatarWidget = (function() {
      AvatarWidget.prototype._attemptedLoads = 0;

      function AvatarWidget(el) {
        this._openAvatarDialog = __bind(this._openAvatarDialog, this);
        this._initializeDialog = __bind(this._initializeDialog, this);        this.$el = $(el);
        this._initializeLoader();
        this._attachEvents();
      }

      AvatarWidget.prototype._attachEvents = function() {
        return this.$el.on('click', this._openAvatarDialog);
      };

      AvatarWidget.prototype._initializeLoader = function() {
        return this.loader = new ProximityLoader(this.$el, {
          callback: this._initializeDialog,
          dependencies: ['compiled/views/profiles/AvatarDialogView']
        });
      };

      AvatarWidget.prototype._initializeDialog = function(AvatarDialogView) {
        return this.avatarDialog = new AvatarDialogView;
      };

      AvatarWidget.prototype._openAvatarDialog = function(e) {
        if (e != null) {
          e.preventDefault();
        }
        if (typeof this.avatarDialog !== 'undefined') {
          return this.avatarDialog.show();
        } else {
          return this._pollScriptLoad();
        }
      };

      AvatarWidget.prototype._pollScriptLoad = function() {
        this.loader.deferred.resolve();
        if (this._attemptedLoads < 20) {
          this._attemptedLoads++;
          return setTimeout(this._openAvatarDialog, 100);
        } else {
          throw new Error('Failed to load AvatarDialogView');
        }
      };

      return AvatarWidget;

    })();
  });

}).call(this);
