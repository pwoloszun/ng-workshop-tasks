App.factory("playersRepository", [
  "$http",
  function($http) {
    var URL = "server/players.json";
    var onError = function(data) {
      console.error("playersRepository GET error:", data);
    };

    var httpGetAllPlayers = function(callback) {
      var promise = $http.get(URL);
      promise.success(callback);
      promise.error(onError);
    };

    var getAll = function(callback) {
      httpGetAllPlayers(callback);
    };

    var getById = function(id, callback) {
      httpGetAllPlayers(function(players) {
        var player = _(players).find(function(player) {
          return player.id === id;
        });
        callback(player);
      });
    };

    return {
      getAll: getAll,
      getById: getById
    };
  }
]);
