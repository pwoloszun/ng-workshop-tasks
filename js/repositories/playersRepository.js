angular.module("Ng-Tasks-App").factory("playersRepository", [
  "$http",
  function($http) {
    var URL = "server/players.json";

    var getAll = function(callback) {
      //TODO
    };

    var getById = function(id, callback) {
      //TODO
    };

    return {
      getAll: getAll,
      getById: getById
    };
  }
]);
