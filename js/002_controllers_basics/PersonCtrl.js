window.GreetingApp = angular.module("GreetingApp", []);

GreetingApp.controller("PersonCtrl", [
  "$scope",
  function($scope) {

    $scope.person = {
      name: "Bob"
    };

    //TODO: pass suffix arg
    $scope.greet = function() {
      var msg = "Hi " + $scope.person.name + ".";
      console.log(msg);
    };
  }
]);
