App.directive("myClick", [
  function() {
    return {
      restrict: "A",
      link: function(scope, element, attributes) {
        element.on("click", function() {
          // TODO: call ctrl method
          console.log("TODO", attributes.myAttr);
        });
      }
    };
  }
]);
