App.directive("labeledField", [
  function() {
    var definition = {
      template: '<label>{{labelText}}</label><input ng-model="fieldValue" />',
      link: function(scope, element, attributes) {
        scope.labelText = "First Name";
        scope.fieldValue = 123;
      }
    };

    return definition;
  }
]);
