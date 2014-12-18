App.controller("PeopleCtrl", [
  "$scope",
  function($scope) {
    $scope.people = null;

    $scope.fetchPeople = function() {
      console.log("Fetching people...");
      var random = Math.random();
      $scope.people = ["Bob " + random, "Kate " + random, "Ed " + random];
    };

    // TODO: removePerson(index)
  }
]);
