App.directive("walking", [
  function() {
    return {
      require: "human",
      link: function(scope, element, attributes, controller) {
        controller.addAbility("walking");
      }
    };
  }
]);
