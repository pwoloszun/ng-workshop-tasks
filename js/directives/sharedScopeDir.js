angular.module("Ng-Tasks-App").directive("sharedScopeDir", [
  function () {
    var dirDefinition = {
      template: "<input ng-model='dirModel'/>",
      link: function (scope) {
        // var msg = "shared DIR " + Math.random();
        // console.log("from dir", msg);
        // scope.dirModel = msg;
      }
    };

    return dirDefinition;
  }
]);
