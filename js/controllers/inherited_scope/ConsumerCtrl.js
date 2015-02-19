App.controller("InheritedScope.ConsumerCtrl", [
  "$scope",
  function($scope) {

    $scope.consumerPerson = $scope.parentPerson;

  }
]);
