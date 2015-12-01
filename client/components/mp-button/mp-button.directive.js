'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('mpButton', function () {
    return {
      templateUrl: 'components/mp-button/mp-button.html',
      restrict: 'EA',
      transclude: true,
      replace:true,
      link: function (scope, element, attrs) {
      }
    };
  });
