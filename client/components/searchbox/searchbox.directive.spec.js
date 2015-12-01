'use strict';

describe('Directive: searchbox', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/searchbox/searchbox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<searchbox></searchbox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the searchbox directive');
  }));
});