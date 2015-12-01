'use strict';

describe('Directive: resultbox', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/resultbox/resultbox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<resultbox></resultbox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the resultbox directive');
  }));
});