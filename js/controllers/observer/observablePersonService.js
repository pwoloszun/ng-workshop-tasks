angular.module("Ng-Tasks-App").factory("Observer.observablePersonService", [
  function() {
    var events = {};

    var bob = {
      name: "bob",
      on: function(eventName, listenerFn) {
        events[eventName] = listenerFn;
      },
      setName: function(name) {
        this.name = name;
        var listenerFn = events["change"];
        listenerFn.call(this, this);
      }
    };

    return bob;

  }
]);
