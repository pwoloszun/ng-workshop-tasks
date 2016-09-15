angular.module("Ng-Tasks-App").directive("parametrizedMagicBox", [
  function() {
    return {
      restrict: "AE",
      template: "<div class='magic-box'>Parametrized Magic! ...with param</div>",
      link: function(scope, element, attributes) {
        console.log("Atribute parametrizedMagicBox:", attributes.parametrizedMagicBox);
        console.log("Atribute xxx:", attributes.xxx);

        //TODO: obseerve attribute value change
        //TODO: evaluate attribute value expression
      }
    };
  }
]);
