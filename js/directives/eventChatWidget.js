angular.module("Ng-Tasks-App").directive("eventChatWidget", [
  function() {
    return {
      scope: {},
      templateUrl: "templates/directives/event_chat_widget.html",
      link: function(scope) {
        scope.sendBtnClick = function() {
          scope.$emit("eventChatWidget.buttonClick", scope.message);
        }
      }
    };
  }
]);
