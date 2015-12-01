'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('resultbox', function () {
    return {
      templateUrl: 'components/resultbox/resultbox.html',
      restrict: 'EA',
      scope:{
        result: '=',
        averagePrice: '=',
        fact: '='
      }
    };
  });
