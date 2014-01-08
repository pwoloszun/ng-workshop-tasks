App.directive("user", [
  function() {
    return {
      restrict: "AE",
      scope: {
        //TODO bidirectional reference for userName
      },
      template: "<input type='text' ng-model='userName' />"
    };
  }
]);
