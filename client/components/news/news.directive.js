'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('news', function () {
    return {
      templateUrl: 'components/news/news.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });