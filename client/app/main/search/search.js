'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.search', {
        url: '/:license/:mileage',
        templateUrl: 'app/main/search/search.html',
        controller: 'SearchCtrl',
        resolve: {
          licenseResult: function (carInformation, $stateParams) {
            return carInformation.getResultsForLicense($stateParams.license, $stateParams.mileage);
          }
        }
      });
  });
