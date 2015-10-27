App.directive("callFn", [
  function() {
    return {
      scope: {
        fnToCall: "&"
      },
      template: "<button ng-click='fnToCall()()'>Click</button>",
      link: function(scope) {

        //scope.fnToCall()(123, "qq", bob);

      }
    };
  }
]);
