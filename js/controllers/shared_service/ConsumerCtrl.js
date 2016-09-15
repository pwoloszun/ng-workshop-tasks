angular.module("Ng-Tasks-App").controller("SharedService.ConsumerCtrl", [
  "$scope",
  "SharedService.sharedPersonService",
  function($scope, sharedPersonService) {

    $scope.consumerPerson = sharedPersonService;
  }
]);
