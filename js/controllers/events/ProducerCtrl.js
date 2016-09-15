angular.module("Ng-Tasks-App").controller("Events.ProducerCtrl", [
  "$scope",
  "pubSub",
  function($scope, pubSub) {
    var bob = {name: "bob"};

    $scope.producerPerson = bob;

    $scope.$watch("producerPerson.name", function(newValue, oldValue) {
      pubSub.publish("person name has change", $scope.producerPerson);
    });
  }
]);
