App.factory("mainMenuItemsService", [
  "taskRoutesData",
  function(taskRoutesData) {
    return {
      all: function() {
        return taskRoutesData;
      }
    };
  }
]);
