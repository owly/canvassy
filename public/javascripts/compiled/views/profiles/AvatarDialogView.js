(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!profile', 'underscore', 'compiled/views/DialogBaseView', 'jst/profiles/avatarDialog', 'jst/profiles/avatar', 'compiled/util/BackoffPoller'], function(I18n, _, DialogBaseView, template, avatarTemplate, BackoffPoller) {
    var AvatarDialogView, _ref;

    return AvatarDialogView = (function(_super) {
      __extends(AvatarDialogView, _super);

      function AvatarDialogView() {
        this.onUpdate = __bind(this.onUpdate, this);
        this.updateAvatar = __bind(this.updateAvatar, this);
        this.onAvatarLoad = __bind(this.onAvatarLoad, this);
        this.onPoll = __bind(this.onPoll, this);        _ref = AvatarDialogView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AvatarDialogView.prototype.template = template;

      AvatarDialogView.prototype.url = '/api/v1/users/self/avatars';

      AvatarDialogView.prototype.pollThumbnails = false;

      AvatarDialogView.prototype.events = {
        'click .img': 'selectAvatar',
        'click .add_pic_link': 'toggleAddForm'
      };

      AvatarDialogView.prototype.els = {
        '#add_pic_form': '$form'
      };

      AvatarDialogView.prototype.messages = {
        cancel: I18n.t('#buttons.cancel', 'Cancel'),
        selectImage: I18n.t('buttons.select_image', 'Select Image'),
        selectProfile: I18n.t('titles.select_profile_pic', 'Select Profile Pic'),
        selectingImage: I18n.t('buttons.selecting_image', 'Selecting Image...'),
        selectImage: I18n.t('buttons.select_image', 'Select Image'),
        addingFile: I18n.t('buttons.adding_file', 'Adding File...'),
        addFile: I18n.t('buttons.add_file', 'Add File'),
        addFailed: I18n.t('errors.adding_file_failed', 'Adding File Failed')
      };

      AvatarDialogView.prototype.dialogOptions = function() {
        return {
          buttons: [
            {
              text: this.messages.cancel,
              click: this.cancel
            }, {
              text: this.messages.selectImage,
              "class": 'btn-primary select_button',
              click: this.updateAvatar
            }
          ],
          height: 300,
          title: this.messages.selectProfile,
          width: 500
        };
      };

      AvatarDialogView.prototype.initialize = function() {
        this.thumbnailPoller = new BackoffPoller(this.url, this.onPoll);
        return AvatarDialogView.__super__.initialize.apply(this, arguments);
      };

      AvatarDialogView.prototype.show = function() {
        if (!this.rendered) {
          this.initContent();
        }
        this.selectButton().prop('disabled', true);
        return AvatarDialogView.__super__.show.apply(this, arguments);
      };

      AvatarDialogView.prototype.initContent = function() {
        this.loadAvatars();
        this.render();
        this.initializeForm();
        return this.rendered = true;
      };

      AvatarDialogView.prototype.loadAvatars = function() {
        return $.ajaxJSON(this.url, 'GET', {}, this.onAvatarLoad);
      };

      AvatarDialogView.prototype.onPoll = function(data) {
        var $images, avatar, count, loadedImages, _i, _len;

        loadedImages = {};
        $images = this.$el.find('img.pending');
        count = 0;
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          avatar = data[_i];
          if (!avatar.pending) {
            loadedImages[avatar.token] = avatar.url;
          }
        }
        $images.each(function() {
          var $image, associatedUrl;

          $image = $(this);
          associatedUrl = loadedImages[$image.data('token')];
          if (associatedUrl !== null) {
            $image.removeClass('pending').attr('src', associatedUrl);
            return count++;
          }
        });
        if (count === $images.length) {
          return 'stop';
        }
        if (count > 0) {
          return 'reset';
        }
        return 'continue';
      };

      AvatarDialogView.prototype.onAvatarLoad = function(avatars) {
        var avatar, _i, _len;

        if (!(avatars != null ? avatars.length : void 0)) {
          return;
        }
        this.$el.addClass('loaded').find('h3').remove();
        for (_i = 0, _len = avatars.length; _i < _len; _i++) {
          avatar = avatars[_i];
          this.drawAvatar(avatar);
        }
        if (this.pollThumbnails) {
          return this.thumbnailPoller.start();
        }
      };

      AvatarDialogView.prototype.drawAvatar = function(avatar) {
        var $result, binding;

        binding = _.extend({
          classNames: ''
        }, avatar);
        if (avatar.pending) {
          binding.classNames = 'pending';
          binding.url = '/images/ajax-loader.gif';
        }
        binding.alt = binding.title = avatar.display_name || avatar.type;
        $result = $(avatarTemplate(binding));
        $result.find('img')[0].onerror = $result.remove.bind($result, null);
        return this.$el.find('.profile_pic_list .clear').before($result);
      };

      AvatarDialogView.prototype.selectAvatar = function(e) {
        if (/pending/.test(e.target.className)) {
          return;
        }
        this.$el.find('.img.selected').removeClass('selected');
        $(e.currentTarget).addClass('selected');
        return this.selectButton().prop('disabled', false);
      };

      AvatarDialogView.prototype.updateAvatar = function(e) {
        var $image, data, url;

        url = '/api/v1/users/self';
        $image = this.$el.find('.selected img');
        data = {
          'user[avatar][token]': $image.data('token')
        };
        this.selectButton().prop('disabled', true).text(this.messages.selectingImage);
        if (!$image.length) {
          return;
        }
        return $.ajaxJSON(url, 'PUT', data, this.onUpdate);
      };

      AvatarDialogView.prototype.onUpdate = function(user) {
        var newSrc, profilePicLink;

        profilePicLink = $('.profile_pic_link img, .profile-link img');
        newSrc = this.$el.find('.selected img').attr('src');
        this.selectButton().prop('disabled', false).text(this.messages.selectImage);
        if (user.avatar_url === '/images/no_pic.gif') {
          user.avatar_url = '/images/dotted_pic.png';
        }
        profilePicLink.attr('src', newSrc);
        return this.close();
      };

      AvatarDialogView.prototype.selectButton = function() {
        return this.$selectButton || (this.$selectButton = this.$el.parent().find('.select_button'));
      };

      AvatarDialogView.prototype.addFileButton = function() {
        return this.$addFileButton || (this.$addFileButton = this.$form.find('button'));
      };

      AvatarDialogView.prototype.initializeForm = function() {
        var _this = this;

        return this.$form.formSubmit({
          fileUpload: true,
          fileUploadOptions: {
            preparedFileUpload: true,
            upload_only: true,
            singleFile: true,
            context_code: ENV.context_asset_string,
            folder_id: ENV.folder_id,
            formDataTarget: 'uploadDataUrl'
          },
          object_name: 'attachment',
          required: ['uploaded_data'],
          beforeSubmit: function() {
            var $image, $span;

            _this.addFileButton().prop('disabled', true).text(_this.messages.addingFile);
            $span = $('<span class="img"><img alt="" /></span>');
            $image = $span.find('img').attr('src', '/images/ajax-loader.gif');
            $image.addClass('pending');
            _this.$el.find('.profile_pic_list .clear').before($span);
            return $span;
          },
          success: function(data, $span) {
            var $image, attachment, avatar;

            attachment = data.attachment, avatar = data.avatar;
            _this.addFileButton().prop('disabled', false).text(_this.messages.addFile);
            if ($span) {
              $image = $span.find('img');
              $image.data({
                type: 'attachment',
                token: avatar.token
              }).attr('alt', attachment.display_name);
              $image[0].onerror = function() {
                return $image.attr('src', '/images/dotted_pic.png');
              };
              return _this.thumbnailPoller.start().then(function() {
                return $image.click();
              });
            }
          },
          error: function(data, $span) {
            _this.addFileButton().prop('disabled', false).text(_this.messages.addFailed);
            if ($span) {
              return $span.remove();
            }
          }
        });
      };

      AvatarDialogView.prototype.toggleAddForm = function(e) {
        return this.$form.slideToggle();
      };

      return AvatarDialogView;

    })(DialogBaseView);
  });

}).call(this);
