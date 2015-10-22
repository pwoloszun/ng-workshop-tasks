App.directive("labeledField", [
  function() {
    var definition = {
      templateUrl: 'templates/directives/labeled_field.html',
      link: function(scope) {
        scope.fieldValue = "some fancy value";
      }
    };

    return definition;
  }
]);
