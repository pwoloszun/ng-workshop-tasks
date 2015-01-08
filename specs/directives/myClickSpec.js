describe("myClick", function() {
  var el;

  beforeEach(function() {
    var html = "<div my-click='xxx = 123'></div>";
    el = this.$compile(html);
    this.$digest();
  });

  describe("scope model change", function() {
    beforeEach(function() {
      el.triggerHandler("click");
    });

    xit("should eval expression", function() {
      this.$scope.xxx.should.equal(123);
    });
  });
});
