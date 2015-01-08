describe("percentage", function() {
  var percentage;

  beforeEach(function() {
    percentage = this.$filter("percentage");
  });

  describe("value is defined", function() {
    xit("should return given percentage", function() {
      var value = 123.01;
      percentage(value).should.be.equal(value + "%");
    });
  });

  describe("value is undefined", function() {
    xit("should return % sign", function() {
      var value;
      percentage(value).should.be.equal("%");
    });
  });

  xdescribe("both value & fraction size are defined", function() {
    // TODO
  });
});
