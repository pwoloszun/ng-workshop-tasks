angular.module("Ng-Tasks-App").directive("sharedScopeDir", [
  function () {
    var dirDefinition = {
      controllerAs: "vm",
      template: "<input ng-model='vm.dirModel'/>"
    };

    return dirDefinition;
  }
]);
