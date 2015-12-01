'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('tipsItem', function () {
    return {
      templateUrl: 'components/tips-item/tips-item.html',
      restrict: 'EA',
      scope: {
        title:'@',
        youtubeId:'@'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
