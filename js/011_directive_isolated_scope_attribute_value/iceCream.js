App.directive("iceCream", [
  function() {
    return {
      scope: {
        flavour: "@"
      },
      template: "<button>Ice cream {{flavour}}</button>"
    };
  }
]);
