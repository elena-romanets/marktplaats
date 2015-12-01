'use strict';

describe('Directive: tipsFirst', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/tips-first/tips-first.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tips-first></tips-first>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tips directive');
  }));
});