App.directive("user", [
  function() {
    return {
      scope: {
        myAttr: "="
      },
      template: "USER DIRECTIVE {{myAttr}}: <input type='text' ng-model='myAttr' />",
      link: function(scope) {

        console.log("in dir", scope.myAttr);

      }
    };
  }
]);
