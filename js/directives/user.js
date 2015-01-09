App.directive("user", [
  function() {
    return {
      scope: {
        myAttr: "="
      },
      template: "USER DIRECTIVE: <input type='text' ng-model='myAttr' />"
    };
  }
]);
