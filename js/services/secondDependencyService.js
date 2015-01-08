App.factory("secondDependencyService", [
  function() {
    var secondDependencyService = {
      getValue: function() {
        return 2;
      }
    };

    return secondDependencyService;
  }
]);
