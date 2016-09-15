angular.module("Ng-Tasks-App").factory("firstDependencyService", [
  function() {
    var firstDependencyService = {
      getValue: function() {
        return 1;
      }
    };

    return firstDependencyService;
  }
]);
