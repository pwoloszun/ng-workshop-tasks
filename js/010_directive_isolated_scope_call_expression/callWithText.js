//TODO: call with param from text field
App.directive("callWithText", [
  function() {
    return {
      scope: {
        fnToCall: "&"
      },
      templateUrl: "/templates/call_with_text.html"
    };
  }
]);
