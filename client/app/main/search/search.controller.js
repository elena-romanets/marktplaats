'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .controller('SearchCtrl', function ($scope, carInformation, $analytics, checkVehicle, $state, selligent, $location, checkVehiclePrice) {
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

    $scope.license = getParameterByName('licensePlate') || '';
    $scope.hasErrors = false;

    $scope.submitLicense = function (license, mileage) {
      mileage = mileage || 0;
      checkVehicle(license, mileage)
        .then(function () {
          $scope.hasErrors = false;

          $state.go('main.search', {license: license, mileage: mileage})
        })
        .catch(function () {
          $scope.hasErrors = true;
        })
    };
  });

function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
