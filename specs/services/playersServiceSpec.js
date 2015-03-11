describe("playersService", function() {
  var playersService;

  beforeEach(function() {
    playersService = $h.$inject("playersService");
  });

  describe("all()", function() {
    var allPlayers;

    beforeEach(function() {
      allPlayers = playersService.all();
    });

    it("should return an array", function() {
      allPlayers.should.be.an.instanceof(Array);
    });

    it("should return array 10 players", function() {
      allPlayers.length.should.equal(10);
    });
  });
});
