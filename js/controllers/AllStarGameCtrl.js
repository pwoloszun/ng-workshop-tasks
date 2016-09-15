angular.module("Ng-Tasks-App").controller("AllStarGameCtrl", [
  "$scope",
  "playersService",
  function($scope, playersService) {
    $scope.players = playersService.all();

    //TODO: sorting

    //TODO: filtering
    $scope.searchByFields = [
      {value: "$", label: "All"},
      {value: "position", label: "Player position"},
      {value: "name", label: "Player name"},
      {value: "team", label: "Player team"}
    ];
    $scope.currentSearchByField = $scope.searchByFields[0];

  }
]);
