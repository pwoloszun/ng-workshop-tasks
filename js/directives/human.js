App.directive("human", [
  function() {
    // TODO: isolated scope
    return {
      controller: function($scope) {
        $scope.abilities = [];

        this.addAbility = function(ability) {
          $scope.abilities.push(ability);
        };
      },
      link: function(scope, element) {
        element.on("click", function() {
          console.log(scope.abilities);
        });
      }
    };
  }
]);
