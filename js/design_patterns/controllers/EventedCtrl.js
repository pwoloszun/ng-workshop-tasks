App.controller("EventedCtrl", [
  "mixinSrv",
  "Evented",
  "User",
  function(mixinSrv, Evented, User) {
    mixinSrv(User.prototype, Evented);

    var bob = new User("bob");
    bob.on("remove", function() {
      log("remove triggered", arguments);
    });
    bob.on("remove", function() {
      log("another remove listener triggered...");
    });
    bob.trigger("remove", [1, "qq"]); // loged msg on console
    bob.off("remove");
    bob.trigger("remove", [1, "qq"]); // nothing logged
  }
]);
