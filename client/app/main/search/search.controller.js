'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .controller('SearchCtrl', function ($scope, carInformation, $analytics, selligent, $location, checkVehiclePrice) {
    $analytics.pageTrack('/search');

    var data = carInformation.data;

    $scope.result = {
      licensePlate: carInformation.licensePlate,
      mileage: carInformation.mileage,
      brand: data.vehicle.make_name,
      model: data.vehicle.model_name,
      averagePrice: data.averagePrice,
      year: data.vehicle.vehicle_reg_year,
      sellUrl: 'https://www.marktplaats.nl/syi/91/plaatsAdvertentie.html?bucket=&origin=HEADER&licensePlate='+carInformation.licensePlate
    };
    $scope.fact = {
      modelTimesSeen: data.views.model,
      averageDays: data.vehicle.days_to_sell,
      brandTimesSeen: data.views.make
    };

  });
