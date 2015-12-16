'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .controller('MainCtrl', function ($scope, carInformation, checkVehiclePrice) {
    $scope.carInformation = carInformation;

    //checkVehiclePrice('1000','5000');

    $scope.result = {
      licensePlate: carInformation.licensePlate,
      sellUrl: 'https://www.marktplaats.nl/syi/91/plaatsAdvertentie.html?bucket=&origin=HEADER&licensePlate=' + carInformation.licensePlate
    };
  });
