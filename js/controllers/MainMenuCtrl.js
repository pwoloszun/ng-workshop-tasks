App.controller("MainMenuCtrl", [
  "$scope",
  "mainMenuItemsService",
  function($scope, mainMenuItemsService) {
    $scope.mainMenuItems = mainMenuItemsService.all();
  }
]);
