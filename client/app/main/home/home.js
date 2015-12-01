'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.home', {
        url: '/',
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
          resetCarInformation: function ($q, carInformation) {
            carInformation.reset();
          }
        }
      });
  });
