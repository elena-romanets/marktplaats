'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('jumbo', function () {
    return {
      templateUrl: 'components/jumbo/jumbo.html',
      restrict: 'EA',
      transclude: true,
      scope:{
        showOverlay:'='
      }
    };
  });
