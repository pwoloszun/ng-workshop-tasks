angular.module("Ng-Tasks-App").directive("titledPanel", [
  function() {
    return {
      restrict: "E",
      transclude: true,
      templateUrl: "templates/directives/titled_panel.html"
    };
  }
]);
