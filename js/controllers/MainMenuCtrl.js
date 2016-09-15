angular.module("Ng-Tasks-App").controller("MainMenuCtrl", [
  "$scope",
  "taskRoutes",
  function($scope, taskRoutes) {
    $scope.taskRoutes = taskRoutes.routes;
  }
]);
