(function() {
  define(['compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/content_migrations/ContentCheckboxView', 'compiled/models/content_migrations/ContentCheckbox'], function(CheckboxCollection, CheckboxView, CheckboxModel) {
    var CheckboxHelper;

    CheckboxHelper = (function() {
      function CheckboxHelper() {}

      CheckboxHelper.renderView = function(options) {
        var checkboxCollection, checkboxModel;

        options || (options = {});
        checkboxModel = new CheckboxModel(options);
        checkboxModel.property || (checkboxModel.property = "copy[all_course_settings]");
        checkboxModel.title || (checkboxModel.title = "Course Settings");
        checkboxModel.type || (checkboxModel.type = "course_settings");
        checkboxCollection = new CheckboxCollection([checkboxModel], {
          isTopLevel: true
        });
        this.checkboxView = new CheckboxView({
          model: checkboxModel
        });
        return this.$fixtures.html(this.checkboxView.render().el);
      };

      CheckboxHelper.teardown = function() {
        return this.checkboxView.remove();
      };

      CheckboxHelper.$fixtures = $('#fixtures');

      CheckboxHelper.checkboxView = void 0;

      CheckboxHelper.$checkbox = function() {
        return this.$fixtures.find('[type=checkbox]').first();
      };

      CheckboxHelper.$sublevelCheckboxes = function() {
        return this.checkboxView.$el.find('ul [type=checkbox]');
      };

      CheckboxHelper.serverResponse = function() {
        return [
          200, {
            "Content-Type": "application/json"
          }, JSON.stringify([
            {
              "type": "assignment_groups",
              "property": "copy[assignment_groups][i6314c45816f1cc6d9519d88e4b7f64ab]",
              "title": "Assignments",
              "migration_id": "i6314c45816f1cc6d9519d88e4b7f64ab",
              "sub_items": [
                {
                  "type": "assignments",
                  "property": "copy[assignments][i1a139fc4cbf94f961973c63bd90fc1c7]",
                  "title": "Assignment 1",
                  "migration_id": "i1a139fc4cbf94f961973c63bd90fc1c7"
                }, {
                  "type": "assignments",
                  "property": "copy[assignments][i7af74171d7c7207f1578328d8bbf9dae]",
                  "title": "Unnamed Quiz",
                  "migration_id": "i7af74171d7c7207f1578328d8bbf9dae"
                }, {
                  "type": "assignments",
                  "property": "copy[assignments][i4af043da2399a5ec221f666b38714fa8]",
                  "title": "Unnamed Quiz",
                  "migration_id": "i4af043da2399a5ec221f666b38714fa8"
                }
              ]
            }
          ])
        ];
      };

      return CheckboxHelper;

    })();
    module("Toplevel Content Checkbox Behaviors", {
      teardown: function() {
        return CheckboxHelper.teardown();
      }
    });
    test('renders a checkbox with name set from model property', function() {
      var nameValue;

      CheckboxHelper.renderView({
        property: 'copy[all_course_settings]'
      });
      nameValue = CheckboxHelper.$checkbox().prop('name');
      return equal(nameValue, 'copy[all_course_settings]', 'Adds the correct name attribute from property');
    });
    test('toplevel checkbox is checked by default', function() {
      CheckboxHelper.renderView();
      return ok(CheckboxHelper.$checkbox().is(":checked"), "Checkbox is checked");
    });
    test('sublevel checkbox is unchecked by default', function() {
      CheckboxHelper.renderView();
      return ok(!CheckboxHelper.$sublevelCheckboxes().is(":checked"), "Checkbox is unchecked");
    });
    module("Sublevel Content Checkbox Behaviors", {
      setup: function() {
        return this.server = sinon.fakeServer.create();
      },
      teardown: function() {
        this.server.restore();
        return CheckboxHelper.teardown();
      }
    });
    test('unchecking a checkbox with a url attribute creates a sub-level collection with that url', function() {
      var checkboxView, url;

      url = "http://www.google.com";
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      checkboxView = CheckboxHelper.checkboxView;
      return equal(checkboxView.sublevelCheckboxes.url, url, "Sets a sublevel checkbox collections url");
    });
    test('unchecking a checkbox calls fetch on a CheckboxCollection', function() {
      var fetch, url;

      fetch = sinon.spy(CheckboxCollection.prototype, 'fetch');
      url = "http://www.google.com";
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      return ok(fetch.calledOnce, "Calls fetch on the CheckboxCollection");
    });
    test('renders sublevel checkboxes', function() {
      var url;

      url = '/api/v1/courses/42/content_migrations/5/selective_data?type=assignments';
      this.server.respondWith('GET', url, CheckboxHelper.serverResponse());
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      this.server.respond();
      return equal(CheckboxHelper.checkboxView.$el.find('.collectionViewItems').last().find('[type=checkbox]').length, 3, "Renders all sublevel checkboxes");
    });
    test('checkboxes with sublevel checkboxes and no url only display labels', function() {
      var url;

      url = '/api/v1/courses/42/content_migrations/5/selective_data?type=assignments';
      this.server.respondWith('GET', url, CheckboxHelper.serverResponse());
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      this.server.respond();
      return equal(CheckboxHelper.checkboxView.$el.find('ul').first().find('[type=checkbox]').length, 3, "Doesn't include checkbox");
    });
    test('clicking Select All, checks all sublevel checkboxes', function() {
      var $subCheckboxes, url;

      url = '/api/v1/courses/42/content_migrations/5/selective_data?type=assignments';
      this.server.respondWith('GET', url, CheckboxHelper.serverResponse());
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      this.server.respond();
      CheckboxHelper.checkboxView.$el.find("a").first().click();
      $subCheckboxes = CheckboxHelper.checkboxView.$el.find('ul').last().find('[type=checkbox]');
      return $subCheckboxes.each(function() {
        return ok($(this).is(':checked'), "Checked child checkboxes");
      });
    });
    return test('clicking Select None, unchecks all sublevel checkboxes', function() {
      var $subCheckboxes, url;

      url = '/api/v1/courses/42/content_migrations/5/selective_data?type=assignments';
      this.server.respondWith('GET', url, CheckboxHelper.serverResponse());
      CheckboxHelper.renderView({
        sub_items_url: url
      });
      CheckboxHelper.$checkbox().click();
      this.server.respond();
      $subCheckboxes = CheckboxHelper.checkboxView.$el.find('ul').last().find('[type=checkbox]');
      $subCheckboxes.each(function() {
        return $(this).prop('checked', true);
      });
      CheckboxHelper.checkboxView.$el.find("a").last().click();
      return $subCheckboxes.each(function() {
        return ok(!$(this).is(':checked'), "Unchecked child checkboxes");
      });
    });
  });

}).call(this);
