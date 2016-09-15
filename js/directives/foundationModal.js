angular.module("Ng-Tasks-App").directive("foundationModal", [
  "$document",
  function($document) {
    return {
      restrict: "E",
      transclude: true,
      scope: {
        fmId: "@"
      },
      templateUrl: "/templates/directives/foundation_modal.html",
      link: function() {
        $($document).foundation();
      }
    };
  }
]);
