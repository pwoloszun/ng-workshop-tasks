describe("playersRepository", function() {
  var playersRepository;

  beforeEach(function() {
    playersRepository = this.$inject("playersRepository");
  });

  describe("getAll()", function() {
    var callback, data;

    beforeEach(function() {
      data = [{name: "batman"}];
      this.$http.whenGET("server/players.json").respond(data);
      callback = sinon.spy();
      playersRepository.getAll(callback);
      this.$http.flush();
    });

    it("should call callback function once", function() {
      callback.should.be.calledOnce;
    });

    it("should call callback with data", function() {
      callback.should.be.calledWith(data);
    });
  });
});
