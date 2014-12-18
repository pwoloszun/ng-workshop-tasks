App.directive("callFn", [
  function() {
    return {
      scope: {
        fnToCall: "&"
      },
      template: "<button ng-click='fnToCall()'>Click</button>"
    };
  }
]);
