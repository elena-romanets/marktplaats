'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .service('carInformation', function (checkVehicle, checkVehiclePrice) {
    var service = {
      data: undefined,
      licensePlate: '',
      mileage:0,
      getResultsForLicense: getResults,
      reset: reset
    }

    return service;

    function getResults(license, mileage){
      service.licensePlate = license;
      service.mileage = mileage;

      return checkVehicle(license, mileage)
        .then(function (result) {
          service.data = result;
        })
    }

    function reset(){
      service.data = undefined;
    }
  });
