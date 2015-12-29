'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('jumbo', function () {
    return {
      templateUrl: 'components/jumbo/jumbo.html',
      restrict: 'A',
      transclude: true,
      scope:{
        showOverlay:'='
      }
    };
  });
