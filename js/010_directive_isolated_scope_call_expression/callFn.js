App.directive("callFn", [
  function() {
    return {
      scope: {
        fnToCall: "&"
      },
      //TODO on click: call function from attribute "fnToCall"
      template: "<button>Click</button>"
    };
  }
]);
