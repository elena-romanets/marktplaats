'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('tips', function () {
    return {
      templateUrl: 'components/tips/tips.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });