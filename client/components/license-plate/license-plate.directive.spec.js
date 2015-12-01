'use strict';

describe('Directive: licensePlate', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/license-plate/license-plate.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<license-plate></license-plate>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the licensePlate directive');
  }));
});