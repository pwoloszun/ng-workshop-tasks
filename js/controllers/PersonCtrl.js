App.controller("PersonCtrl", [
  "$scope",
  function($scope) {

    var bob = {
      name: "Bob"
    };

    $scope.person = bob;

    $scope.greet = function(suffix) {
      var msg = "Hi " + $scope.person.name + ".";
      if (suffix)
        msg += " " + suffix;
      console.log(msg);
    };

    // TODO: task 002
  }
]);
