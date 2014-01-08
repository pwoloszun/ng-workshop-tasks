App.directive("customDrink", [
  function() {
    return {
      restrict: "AE",
      scope: {
        type: "@",
        withSugar: "@",
        withMilk: "@"
      },
      templateUrl: "/templates/custom_drink.html"
    };
  }
]);
