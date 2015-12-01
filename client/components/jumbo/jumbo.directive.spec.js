'use strict';

describe('Directive: jumbo', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/jumbo/jumbo.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jumbo></jumbo>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the jumbo directive');
  }));
});