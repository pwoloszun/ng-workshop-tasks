describe("myClick", function() {
  var el;

  beforeEach(function() {
    var html = "<div my-click='xxx = 123'></div>";
    el = $h.$compile(html);
    $h.$digest();
  });

  describe("scope model change", function() {
    beforeEach(function() {
      el.triggerHandler("click");
    });

    xit("should eval expression", function() {
      $h.$scope.xxx.should.equal(123);
    });
  });
});
