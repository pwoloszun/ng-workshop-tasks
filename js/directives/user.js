App.directive("user", [
  function() {
    return {
      scope: {
        userName: "="
      },
      template: "<input type='text' ng-model='userName' />"
    };
  }
]);
