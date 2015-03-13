App.controller("EventChatCtrl", [
  "$scope",
  function($scope) {

    $scope.$on("eventChatWidget.buttonClick", function(event, message) {
      console.log("directive data:", message);
    });

  }
]);
