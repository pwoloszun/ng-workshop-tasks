App.directive("callWithText", [
  function() {
    return {
      scope: {
        fnToCall: "&"
      },
      templateUrl: "/templates/directives/call_with_text.html"
    };
  }
]);
