'use strict';

describe('Directive: mpButton', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/mp-button/mp-button.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mp-button></mp-button>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mpButton directive');
  }));
});