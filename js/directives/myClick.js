App.directive("myClick", [
  function() {
    return {
      restrict: "A",
      link: function(scope, element, attributes) {
        element.on("click", function(event) {
          event.preventDefault();
          scope.fetchPeople(); // TODO: refactor, use scope.$apply
        });

        scope.$on("$destroy", function() {
          element.off("click");
        });
      }
    };
  }
]);
