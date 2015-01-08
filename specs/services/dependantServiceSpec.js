describe("dependantService", function() {
  var dependantService;

  beforeEach(function() {
    var mock = {
      getValue: function() {
        return 100;
      }
    };
    var dependencies = {
      "firstDependencyService": mock
    };
    dependantService = this.$inject("dependantService", dependencies);
  });

  describe("calculate()", function() {
    it("should calculate result", function() {
      dependantService.calculate().should.be.equal(105);
    });
  });
});
