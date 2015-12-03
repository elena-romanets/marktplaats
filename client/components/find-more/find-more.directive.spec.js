'use strict';

describe('Directive: findMore', function () {

  // load the directive's module and view
  beforeEach(module('marktplaatsIacVerkoopApp'));
  beforeEach(module('components/find-more/find-more.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<find-more></find-more>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the find-more directive');
  }));
});