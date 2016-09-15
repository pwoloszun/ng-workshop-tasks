angular.module("Ng-Tasks-App").directive("interactiveMagicBox", [
  function() {
    return {
      restrict: "AE",
      template: "<div class='magic-box'>Interactive Hocus Pocus!</div>",
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

//task - define directives: my-click, my-dblclick, my-log-pressed-key
