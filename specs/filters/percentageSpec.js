describe("percentage", function() {
  var percentage;

  beforeEach(function() {
    percentage = this.$filter("percentage");
  });

  describe("value is defined", function() {
    xit("should TODO", function() {
      var value = 123;
      percentage(value).should.be.equal(value + "%");
    });
  });

  describe("value is undefined", function() {
    xit("should TODO", function() {
      var value;
      percentage(value).should.be.equal("%");
    });
  });
});
