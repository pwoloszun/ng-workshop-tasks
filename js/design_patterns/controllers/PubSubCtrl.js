App.controller("PubSubCtrl", [
  "pubSubSrv",
  function(pubSub) {
    var handler = pubSub.subscribe("buttonClicked", function() {
      console.log("buttonClicked published", arguments);
    });
    pubSub.subscribe("buttonClicked", function() {
      console.log("other buttonClicked published subscriber...", arguments);
    });
    pubSub.subscribe("resultsUpdate", function() {
      console.log("resultsUpdate published", arguments);
    });

    pubSub.publish("buttonClicked", [1, "qq"]);
    pubSub.publish("resultsUpdate", [234, "ihaha!"]);
    // handler.off(); // TODO
    pubSub.unsubscribe("resultsUpdate");
    pubSub.publish("buttonClicked");
    pubSub.publish("resultsUpdate");
  }
]);
