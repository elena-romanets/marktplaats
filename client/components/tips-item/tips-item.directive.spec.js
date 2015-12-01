'use strict';

describe('Directive: tipsItem', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/tips-item/tips-item.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tips-item></tips-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tipsItem directive');
  }));
});