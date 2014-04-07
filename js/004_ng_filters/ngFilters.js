window.ngFiltersApp = angular.module("ngFiltersApp", []);

ngFiltersApp.factory("asgPlayersSrv", [
  function() {
    var data= [
      {
        position: "G",
        name: "Allen Iverson",
        team: "Philadelphia 76ers",
        side: "East"
      },
      {
        position: "G",
        name: "Tracy McGrady",
        team: "Orlando Magic",
        side: "East"
      },
      {
        position: "F",
        name: "Vince Carter",
        team: "Toronto Raptors",
        side: "East"
      },
      {
        position: "F",
        name: "Grant Hill",
        team: "Orlando Magic",
        side: "East"
      },
      {
        position: "C",
        name: "Alonzo Mourning",
        team: "Miami Heat",
        side: "East"
      },
      {
        position: "G",
        name: "Jason Kidd",
        team: "Phoenix Suns",
        side: "West"
      },
      {
        position: "G",
        name: "Kobe Bryant",
        team: "Los Angeles Lakers",
        side: "West"
      },
      {
        position: "F",
        name: "Chris Webber",
        team: "Sacramento Kings",
        side: "West"
      },
      {
        position: "F",
        name: "Tim Duncan",
        team: "San Antonio Spurs",
        side: "West"
      },
      {
        position: "C",
        name: "Shaquille O'Neal",
        team: "Los Angeles Lakers",
        side: "West"
      }
    ];

    return {
      all: function() {
        return data;
      }
    }
  }
]);

ngFiltersApp.controller("AllStarGameCtrl", [
  "$scope",
  "asgPlayersSrv",
  function($scope, asgPlayersSrv) {
    $scope.players = asgPlayersSrv.all();

    $scope.orderField = "name";

    // TODO: example
    $scope.heroes = {
      first: {name: "Batman"},
      sec: {name: "Superman"}
    };

  }
]);
