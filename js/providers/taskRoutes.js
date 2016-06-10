App.provider("taskRoutes", [
  function() {
    var BASE_DATA = [{
      name: "Binding",
      filenameSuffix: "_binding"
    }, {
      name: "Controllers basics",
      filenameSuffix: "_controllers_basics"
    }, {
      name: "Refactored Controllers",
      filenameSuffix: "_refactored_controllers"
    }, {
      name: "ng filters",
      filenameSuffix: "_ng_filters"
    }, {
      name: "Directive basics",
      filenameSuffix: "_directive_basics"
    }, {
      name: "Directive element",
      filenameSuffix: "_directive_element"
    }, {
      name: "Directive attributes",
      filenameSuffix: "_directive_attributes"
    }, {
      name: "Directive to Controller communication",
      filenameSuffix: "_directive_to_ctrl_communication"
    }, {
      name: "Directive to Directive communication",
      filenameSuffix: "_directive_to_directive_communication"
    }, {
      name: "Directive isolated scope: call expression (&)",
      filenameSuffix: "_directive_isolated_scope_call_expression"
    }, {
      name: "Directive isolated scope: attribute value (@)",
      filenameSuffix: "_directive_isolated_scope_attribute_value"
    }, {
      name: "Directive isolated scope: bidirectional binding (=)",
      filenameSuffix: "_directive_isolated_scope_bidirectional_binding"
    }, {
      name: "Directive isolated scope summary",
      filenameSuffix: "_directive_isolated_scope_summary"
    }, {
      name: "Transclusion basics",
      filenameSuffix: "_transclusion_basics"
    }, {
      name: "Cross Components Communications: Inherited Scope",
      filenameSuffix: "_cross_components_communication_inherited_scope"
    }, {
      name: "Cross Components Communications: Events",
      filenameSuffix: "_cross_components_communication_events"
    }, {
      name: "Cross Components Communications: Shared Service",
      filenameSuffix: "_cross_components_communication_shared_service"
    }, {
      name: "Scope $watch types",
      filenameSuffix: "_scope_watch_types"
    }, {
      name: "Cross Components Communications: Observer",
      filenameSuffix: "_cross_components_communication_observer"
    }, {
      name: "Custom filters",
      filenameSuffix: "_custom_filters"
    }, {
      name: "Directive isolated scope: Events",
      filenameSuffix: "_directive_isolated_scope_events"
    }, {
      name: "Directive shared scope",
      filenameSuffix: "_directive_shared_scope"
    }, {
      name: "Directive scope",
      filenameSuffix: "_directive_scope"
    }, {
      name: "Directive isolated scope: one way binding (<)",
      filenameSuffix: "_directive_isolated_scope_one_way_binding"
    }];

    var TASK_TEMPLATES_DIR = "templates/tasks/";
    var routeDataMapper = function(baseData, index) {
      var taskNumber = index + 1;
      var taskStr = taskNumber < 10 ? "00" + taskNumber : "0" + taskNumber;
      var state = "task-" + taskNumber;
      var filename = taskStr + baseData.filenameSuffix + ".html";
      return {
        state: state,
        url: "/tasks/" + state,
        templateUrl: TASK_TEMPLATES_DIR + filename,
        name: baseData.name
      };
    };

    var taskRoutes = {
      routes: _(BASE_DATA).map(routeDataMapper),
    };

    return {
      eachRoute: function(fn) {
        _(taskRoutes.routes).each(fn);
      },
      "$get": function() {
        return taskRoutes;
      }
    };
  }
]);
