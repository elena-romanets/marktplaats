'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('tipsFirst', function () {
    return {
      templateUrl: 'components/tips-first/tips-first.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });