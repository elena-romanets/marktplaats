'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('panel', function () {
    return {
      templateUrl: 'components/panel/panel.html',
      restrict: 'EA',
      transclude: true,
      scope: {
        title:'@'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
