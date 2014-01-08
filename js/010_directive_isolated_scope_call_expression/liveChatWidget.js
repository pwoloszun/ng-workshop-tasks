App.directive("liveChatWidget", [
  function() {
    return {
      templateUrl: "/templates/live_chat_widget.html",
      link: function(scope) {
        scope.privacyTypes = [
          {code: "private", name: "Private call"},
          {code: "public", name: "Public call"}
        ];
        scope.privacyType = scope.privacyTypes[0];
      }
    };
  }
]);
