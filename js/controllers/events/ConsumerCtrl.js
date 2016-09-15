angular.module("Ng-Tasks-App").controller("Events.ConsumerCtrl", [
  "$scope",
  "pubSub",
  function($scope, pubSub) {

    pubSub.subscribe("person name has change", function(event, person) {
      $scope.consumerPerson = person;
    });

  }
]);
