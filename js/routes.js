App.config([
  "$stateProvider",
  "$urlRouterProvider",
  "taskRoutesProvider",
  function($stateProvider, $urlRouterProvider, taskRoutesProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('main', {
      url: "/",
      templateUrl: "templates/main_menu.html",
      controller: "MainMenuCtrl"
    });

    taskRoutesProvider.eachRoute(function(taskRouteData) {
      $stateProvider.state(taskRouteData.state, {
        url: taskRouteData.url,
        templateUrl: taskRouteData.templateUrl
      });
    });
  }
]);
