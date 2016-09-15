angular.module("Ng-Tasks-App").controller("GreetingsCtrl", [
  "$scope",
  function($scope) {
    $scope.greet = function() {
      console.log("Hello world!");
    };

    $scope.sayHiTo = function(name) {
      console.log("Hi, " + name);
    };
  }
]);
