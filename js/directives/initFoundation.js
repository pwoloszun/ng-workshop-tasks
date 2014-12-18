App.directive("initFoundation", [
  "$document",
  function($document) {
    var definition = {
      restrict: "AE",
      scope: false,
      link: function() {
        $($document).foundation();
      }

    };

    return definition;
  }
]);
