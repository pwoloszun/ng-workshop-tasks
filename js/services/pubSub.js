angular.module("Ng-Tasks-App").factory("pubSub", [
  "$rootScope",
  function($rootScope) {
    var pubSub = {
      publish: function(channel, params) {
        $rootScope.$broadcast(channel, params);
      },
      subscribe: function(channel, fn) {
        $rootScope.$on(channel, fn);
      }
    };

    return pubSub;
  }
]);
