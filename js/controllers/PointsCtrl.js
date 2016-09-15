angular.module("Ng-Tasks-App").controller("PointsCtrl", [
  "$scope",
  function($scope) {
    $scope.myPoints = [
      {x: 1, y: 1},
      {x: -1, y: 3},
      {x: 9, y: 0}
    ];

    $scope.addPoint = function(x, y) {
      $scope.myPoints.push({x: x, y: y});
    };
  }
]);
