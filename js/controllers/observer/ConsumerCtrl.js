angular.module("Ng-Tasks-App").controller("Observer.ConsumerCtrl", [
  "$scope",
  "Observer.observablePersonService",
  function($scope, observablePersonService) {

    observablePersonService.on("change", function(changedPerson) {
      $scope.consumerPerson = changedPerson;
    });

  }
]);
