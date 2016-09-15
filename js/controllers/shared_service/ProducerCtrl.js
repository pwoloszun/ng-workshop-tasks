angular.module("Ng-Tasks-App").controller("SharedService.ProducerCtrl", [
  "$scope",
  "SharedService.sharedPersonService",
  function($scope, sharedPersonService) {

    $scope.producerPerson = sharedPersonService;
  }
]);
