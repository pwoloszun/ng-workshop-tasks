beforeEach(function() {
  var that = this;
  module('Ng-Tasks-App', function($provide) {
    that.$provide = $provide;
  });
});

beforeEach(function() {
  var that = this;

  inject(function($httpBackend, $compile, $rootScope, $controller, $location, $injector, $timeout, $filter) {
    that.$scope = $rootScope.$new();
    that.$http = $httpBackend;
    that.$location = $location;
    that.$timeout = $timeout;
    that.$filter = $filter;
    that.$injector = $injector;

    that.$compile = function(html) {
      return $compile(html)(that.$scope);
    };

    var ctrlDefaultDependencies = {
      "$scope": that.$scope
    };
    that.$controller = function(id, dependencies) {
      $controller(id, _(ctrlDefaultDependencies).extend(dependencies || {}));
    };

    that.$inject = function(name, dependencies) {
      for (var id in dependencies || {}) {
        var mock = dependencies[id];
        that.$provide.value(id, mock);
      }
      return that.$injector.get(name);
    };

    that.$digest = function() {
      that.$scope.$digest();
    };
    //that.sandbox = sinon.sandbox.create();
  });

});

afterEach(function() {
  this.$http.resetExpectations();
  this.$http.verifyNoOutstandingExpectation();
});
