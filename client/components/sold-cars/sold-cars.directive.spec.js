'use strict';

describe('Directive: soldCars', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/sold-cars/sold-cars.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sold-cars></sold-cars>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sold-cars directive');
  }));
});