App.factory("Encryptable", [
  function() {
    var Encryptable = {
      encrypt: function(propertyName) {
        var ENCRYPTION_KEY = "qq!";
        return this[propertyName] + ENCRYPTION_KEY;
      }
    };

    return Encryptable;
  }
]);
