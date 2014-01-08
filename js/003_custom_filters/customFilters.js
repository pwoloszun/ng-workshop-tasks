window.CustomFiltersApp = angular.module("CustomFiltersApp", []);

CustomFiltersApp.filter("reverse", [
  function() {
    var reverseFilter = function(text) {
      text = text || "";
      return text.split("").reverse().join("");
    };

    return reverseFilter;
  }
]);
