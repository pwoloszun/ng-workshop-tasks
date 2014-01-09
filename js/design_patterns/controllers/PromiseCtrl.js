App.controller("PromiseCtrl", [
  "$q",
  function($q) {
    var ctrl = this;

    var defered = $q.defer();
    defered.promise.then(function(user) {
      ctrl.user = user;
    });

    this.getUser = function() {
      defered.resolve({name: "Bob"});
    };
  }
]);



