'use strict';

angular.module('marktplaatsIacVerkoopApp')
/**
 *
 * Sellingent pixel placement
 *
 * Sends information about the car to Sellingent, which is
 * a CRM platform.
 *
 */
  .directive('sellingent', function () {
    return {
      template: '<img ng-src="{{pixelUrl}}" />',
      restrict: 'EA',
      scrope: {
        result: '=',
        averagePrice: '=',
        fact: '='
      },
      controller: function ($scope, selligent) {
        $scope.pixelUrl = selligent(angular.extend($scope.result, $scope.fact));
      }
    };
  });
