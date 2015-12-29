'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('findMore', function () {
    return {
      templateUrl: 'components/find-more/find-more.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
      }
    };
  });