App.directive("sharedScopeDir", [
  function() {
    var definition = {
      template: "<input ng-model='dirModel'/>"
    };

    return definition;
  }
]);
