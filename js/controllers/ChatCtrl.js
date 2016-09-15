angular.module("Ng-Tasks-App").controller("ChatCtrl", [
  "$scope",
  function($scope) {
    $scope.messages = [];

    $scope.sendMessage = function(text, type) {
      console.log(text, type);
      $scope.messages.push({
        text: text,
        type: type
      });
    };

    $scope.logTypeChange = function() {
      console.log("Type has changed");
    };
  }
]);
