describe("interactiveMagicBox", function() {
  var el;

  beforeEach(function() {
    var html = "<div interactive-magic-box></div>";
    el = this.$compile(html);
    this.$digest();
  });

  describe("render", function() {
    it("should render magic box", function() {
      el.html().should.contain('<div class="magic-box">Interactive Hocus Pocus!</div>');
    });
  });

  describe("mouse enter event", function() {
    var originalLog;

    beforeEach(function() {
      originalLog = console.log;
      console.log = sinon.spy();
      el.triggerHandler("mouseenter");
    });

    it("should call console log", function() {
      console.log.should.be.calledOnce;
    });

    afterEach(function() {
      console.log = originalLog;
    });
  });
});
