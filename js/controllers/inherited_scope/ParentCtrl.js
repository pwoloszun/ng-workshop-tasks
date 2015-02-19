App.controller("InheritedScope.ParentCtrl", [
  "$scope",
  function($scope) {

    var bob = {name: "bob"};
    $scope.parentPerson = bob;

  }
]);
