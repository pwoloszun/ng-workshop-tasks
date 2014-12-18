App.directive("iceCream", [
  function() {
    return {
      scope: {
        flavour: "@"
      },
      template: "<div class='panel'>Ice cream {{flavour}}</div>"
    };
  }
]);
