App.config([
  "$stateProvider",
  "$urlRouterProvider",
  "taskRoutesData",
  function($stateProvider, $urlRouterProvider, taskRoutesData) {
    var TASK_TEMPLATES_DIR = "templates/tasks/";
    var taskTemplateUrl = function(url) {
      return TASK_TEMPLATES_DIR + url + ".html";
    };

    var CTRL_TEMPLATES_DIR = "templates/controllers/";
    var ctrlTemplateUrl = function(url) {
      return CTRL_TEMPLATES_DIR + url + ".html";
    };

    // For any unmatched url, send to /
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('main', {
      url: "/",
      templateUrl: ctrlTemplateUrl("MainMenu/index"),
      controller: "MainMenuCtrl"
    });

    for (var i = 0; i < taskRoutesData.length; i++) {
      var taskData = taskRoutesData[i];
      var url = "/tasks/task-" + (i + 1);
      $stateProvider.state(taskData["state"], {
        url: url,
        templateUrl: taskTemplateUrl(taskData["filename"])
      });
    }
  }
]);
