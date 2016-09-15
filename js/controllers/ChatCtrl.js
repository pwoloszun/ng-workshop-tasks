angular.module("Ng-Tasks-App").controller("ChatCtrl", [
  "$scope",
  function($scope) {

    $scope.sendMessage = function(text, type) {
      console.log(text, type);
    };

    $scope.logTypeChange = function() {
      console.log("Type has changed");
    };
  }
]);
