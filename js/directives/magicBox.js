angular.module("Ng-Tasks-App").directive("magicBox", [
  function() {
    var directiveDefinition = {
      restrict: "AE",
      template: "<div class='magic-box'>Magic! Pufff...</div>"
    };

   return directiveDefinition;
  }
]);
