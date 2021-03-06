describe("BooksCtrl", function() {
  var BooksCtrl;

  beforeEach(function() {
    BooksCtrl = $h.$controller("BooksCtrl");
  });

  describe("books", function() {
    it("should initialize books collection", function() {
      $h.$scope.books.length.should.equal(3);
    });
  });

  describe("create()", function() {
    var title;

    beforeEach(function() {
      title = "test title";
      $h.$scope.create(title);
    });

    it("should increase books collection by 1", function() {
      $h.$scope.books.length.should.equal(4);
    });

    it("should push new book to books collection", function() {
      var lastBook = _($h.$scope.books).last();
      lastBook.title.should.equal(title);
    });
  });

});
