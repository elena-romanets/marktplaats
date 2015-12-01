'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('soldCars', function () {
    return {
      templateUrl: 'components/sold-cars/sold-cars.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });