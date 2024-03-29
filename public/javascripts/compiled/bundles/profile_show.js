(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['Backbone', 'jquery', 'str/htmlEscape', 'compiled/util/AvatarWidget', 'compiled/tinymce', 'compiled/jquery/validate', 'tinymce.editor_box'], function(_arg, $, htmlEscape, AvatarWidget) {
    var ProfileShow, View, _ref;

    View = _arg.View;
    ProfileShow = (function(_super) {
      __extends(ProfileShow, _super);

      function ProfileShow() {
        _ref = ProfileShow.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProfileShow.prototype.el = document.body;

      ProfileShow.prototype.events = {
        'click [data-event]': 'handleDeclarativeClick',
        'submit #edit_profile_form': 'validateForm'
      };

      ProfileShow.prototype.attemptedDependencyLoads = 0;

      ProfileShow.prototype.initialize = function() {
        ProfileShow.__super__.initialize.apply(this, arguments);
        return new AvatarWidget('.profile-link');
      };

      ProfileShow.prototype.handleDeclarativeClick = function(event) {
        var $target, method;

        event.preventDefault();
        $target = $(event.currentTarget);
        method = $target.data('event');
        return typeof this[method] === "function" ? this[method](event, $target) : void 0;
      };

      ProfileShow.prototype.editProfile = function() {
        this.initEdit();
        return this.editProfile = this.showEditForm;
      };

      ProfileShow.prototype.showEditForm = function() {
        this.$el.addClass('editing').removeClass('not-editing');
        return this.$('.profile_links').removeClass('span6');
      };

      ProfileShow.prototype.initEdit = function() {
        var title, url, _i, _len, _ref1, _ref2, _ref3;

        if ((_ref1 = this.options.links) != null ? _ref1.length : void 0) {
          _ref2 = this.options.links;
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            _ref3 = _ref2[_i], title = _ref3.title, url = _ref3.url;
            this.addLinkField(null, null, title, url);
          }
        } else {
          this.addLinkField();
          this.addLinkField();
        }
        return this.showEditForm();
      };

      ProfileShow.prototype.cancelEditProfile = function() {
        this.$el.addClass('not-editing').removeClass('editing');
        return this.$('.profile_links').addClass('span6');
      };

      ProfileShow.prototype.addLinkField = function(event, $el, title, url) {
        var $row, _ref1;

        if (title == null) {
          title = '';
        }
        if (url == null) {
          url = '';
        }
        if ((_ref1 = this.$linkFields) == null) {
          this.$linkFields = this.$('#profile_link_fields');
        }
        $row = $("<tr>\n  <td><input type=\"text\" maxlength=\"255\" name=\"link_titles[]\" value=\"" + (htmlEscape(title)) + "\"></td>\n  <td>→</td>\n  <td><input type=\"text\" name=\"link_urls[]\" value=\"" + (htmlEscape(url)) + "\"></td>\n  <td><a href=\"#\" data-event=\"removeLinkRow\"><i class=\"icon-end\"></i></a></td>\n</tr>");
        this.$linkFields.append($row);
        if (event != null) {
          event.preventDefault();
          return $row.find('input:first').focus();
        }
      };

      ProfileShow.prototype.removeLinkRow = function(event, $el) {
        return $el.parents('tr').remove();
      };

      ProfileShow.prototype.validateForm = function(event) {
        if (!$('#edit_profile_form').validate()) {
          return event.preventDefault();
        }
      };

      return ProfileShow;

    })(View);
    return new ProfileShow(ENV.PROFILE);
  });

}).call(this);
