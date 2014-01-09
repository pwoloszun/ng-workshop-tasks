App.directive("map", [
  function() {
    return {
      restrict: "E",
      template: '<div class="map"></div>',
      link: function(scope, el, attrs) {
      }
    };
  }
]);
