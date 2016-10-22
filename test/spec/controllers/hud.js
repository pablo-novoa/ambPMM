'use strict';

describe('Controller: HudCtrl', function () {

  // load the controller's module
  beforeEach(module('ambPmApp'));

  var HudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HudCtrl = $controller('HudCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HudCtrl.awesomeThings.length).toBe(3);
  });
});
