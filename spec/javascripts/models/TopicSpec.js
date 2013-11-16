(function() {
  define(['compiled/models/Topic'], function(Topic) {
    module("Topic");
    test("#parse should set author on view entries", function() {
      var data, entry, participant, topic;

      topic = new Topic;
      participant = {
        id: 1
      };
      entry = {
        id: 1,
        user_id: participant.id
      };
      data = topic.parse({
        participants: [participant],
        view: [entry],
        new_entries: [],
        unread_entries: []
      });
      return strictEqual(data.entries[0].author, participant);
    });
    return test("#parse should set author on new entries", function() {
      var data, entry, participant, topic;

      topic = new Topic;
      participant = {
        id: 1
      };
      entry = {
        id: 1,
        user_id: participant.id
      };
      data = topic.parse({
        participants: [participant],
        view: [],
        new_entries: [entry],
        unread_entries: []
      });
      return strictEqual(data.entries[0].author, participant);
    });
  });

}).call(this);
