App.directive("titledPanel", [
  function() {
    return {
      restrict: "E",
      //TODO add transclusion
      templateUrl: "/templates/titled_panel.html"
    };
  }
]);
