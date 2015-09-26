App.provider("templates", [
  function() {
    var templates = {
      taskTemplateUrl: function(name) {
        var TASK_TEMPLATES_DIR = "templates/tasks/";
        return TASK_TEMPLATES_DIR + name + ".html";
      },
      ctrlTemplateUrl: function(name) {
        var CTRL_TEMPLATES_DIR = "templates/controllers/";
        return CTRL_TEMPLATES_DIR + name + ".html";
      },
      directiveTemplateUrl: function(name) {
        var DIRECTIVE_TEMPLATES_DIR = "templates/directives/";
        return DIRECTIVE_TEMPLATES_DIR + name + ".html";
      }
    };

    return {
      "$get": function() {
        return templates;
      }
    };
  }
]);
