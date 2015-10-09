App.directive("labeledField", [
  function() {
    var definition = {
      template: '<label>{{labelText}}</label><input ng-model="fieldValue" />',
      link: function(scope) {
        scope.labelText = "First Name";
        scope.fieldValue = "asd";
      }
    };

    return definition;
  }
]);
