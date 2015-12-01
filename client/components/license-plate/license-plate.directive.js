'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('licensePlate', function () {
    return {
      templateUrl: 'components/license-plate/license-plate.html',
      restrict: 'EA',
      scope:{
        ngModel: '=',
        editable: '='
      },
      replace:true,
      link: function (scope, element, attrs) {
      }
    };
  });
