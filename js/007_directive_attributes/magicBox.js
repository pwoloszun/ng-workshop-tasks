App.directive("magicBox", [
  function() {
    return {
      restrict: "AE",
      template: "<div class='magic-box'>Magic! Pufff...</div>",
      link: function(scope, element, attributes) {
        console.log(attributes.magicBox);
      }
    };
  }
]);
