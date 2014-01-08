App.directive("magicBox", [
  function() {
    return {
      restrict: "AE",
      template: "<div class='magic-box'>Magic! Pufff...</div>",
      link: function(scope, element) {
        element.on("mouseenter", function() {
          console.log("dont touch me!");
        });

        element.on("mouseout", function() {
          console.log("ufff... that was close");
        });
      }
    };
  }
]);

