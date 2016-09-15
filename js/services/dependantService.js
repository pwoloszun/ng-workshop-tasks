angular.module("Ng-Tasks-App").factory("dependantService", [
  "firstDependencyService",
  "secondDependencyService",
  function(firstDependencyService, secondDependencyService) {
    var dependantService = {
      calculate: function() {
        return firstDependencyService.getValue() + secondDependencyService.getValue() + 3;
      }
    };

    return dependantService;
  }
]);
