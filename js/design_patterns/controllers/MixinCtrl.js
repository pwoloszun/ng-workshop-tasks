App.controller("MixinCtrl", [
  "mixinSrv",
  "User",
  "Encryptable",
  function(mixinSrv, User, Encryptable) {
    // create Encryptable module with encrypt(propertyName)
    mixinSrv(User.prototype, Encryptable);

    var bob = new User("bob");
    console.log(bob.encrypt("login"));
  }
]);
