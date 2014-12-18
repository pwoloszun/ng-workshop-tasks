App.controller("PersonCtrl", [
  "$scope",
  function($scope) {

    $scope.person = {
      name: "Bob"
    };

    $scope.greet = function(suffix) {
      var msg = "Hi " + $scope.person.name + ".";
      if (suffix)
        msg += " " + suffix;
      console.log(msg);
    };

    // TODO: task 002
  }
]);
