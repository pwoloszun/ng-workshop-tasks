describe("RefactoredBooksCtrlSpec", function () {
  var RefactoredBooksCtrl;
  var booksCollectionMock;

  beforeEach(function () {
  });

  describe("create()", function () {
    it("should xxx", function () {
      var functionSpy = sinon.spy(); // function instance

      functionSpy(123, "qq"); // call index == 0
      functionSpy(); // call index == 1
      functionSpy(["a"], null, {}, null); // call index == 2

      functionSpy.should.be.called;

      functionSpy.getCall(2).args[0].should.have.length(1);

    });

  });

});
