'use strict';

describe('Directive: soldCarsItem', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/sold-cars-item/sold-cars-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sold-cars-item></sold-cars-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tipsItem directive');
  }));
});