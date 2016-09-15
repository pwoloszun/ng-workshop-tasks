angular.module("Ng-Tasks-App").controller("Observer.ProducerCtrl", [
  "$scope",
  "Observer.observablePersonService",
  function($scope, observablePersonService) {

    $scope.producerPerson = observablePersonService;

    $scope.$watch("producerPerson.name", function(newValue, oldValue) {
      observablePersonService.setName(newValue);
    });
  }
]);
