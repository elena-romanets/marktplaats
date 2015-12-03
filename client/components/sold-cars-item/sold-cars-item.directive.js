'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('soldCarsItem', function () {
    return {
      templateUrl: 'components/sold-cars-item/sold-cars-item.html',
      restrict: 'EA',
      scope: {
        title:'@',
        youtubeId:'@'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
