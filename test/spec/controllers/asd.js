'use strict';

describe('Controller: AsdCtrl', function () {

  // load the controller's module
  beforeEach(module('ambPmApp'));

  var AsdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsdCtrl = $controller('AsdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AsdCtrl.awesomeThings.length).toBe(3);
  });
});
