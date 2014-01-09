App.controller("PropertiesScreenCtrl", [
  "$scope",
  "pubSubSrv",
  function($scope, pubSubSrv) {
    $scope.properties = [];
    for (var i = 0; i < 10; i++) {
      $scope.properties.push({
        name: "Property name " + i,
        x: Math.random(),
        y: Math.random(),
        address: "some address " + i,
        description: "some desc " + i
      });
    }
  }
]);
