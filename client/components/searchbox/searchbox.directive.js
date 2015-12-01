'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('searchbox', function () {
    return {
      templateUrl: 'components/searchbox/searchbox.html',
      restrict: 'EA',
      controller: function ($scope) {
      }
    };
  });
