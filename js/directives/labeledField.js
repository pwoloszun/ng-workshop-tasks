App.directive("labeledField", [
  function() {
    var definition = {
      templateUrl: 'templates/directive/labeled_field.html',
      link: function(scope) {
        scope.fieldValue = "some fancy value";
      }
    };

    return definition;
  }
]);
