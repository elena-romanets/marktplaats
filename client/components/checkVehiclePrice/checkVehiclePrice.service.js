'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .service('checkVehiclePrice', function ($q, $http) {
    return function(license, mileage){
      var defer = $q.defer()
      $http.jsonp('http://www.marktplaats.nl/auto-s/vraagprijsadvies.jsonp?licensePlate='+license+'&mileage='+mileage+'&callback=JSON_CALLBACK')
        .success(function (result) {
          if(result.valid && result.value > -1){
            defer.resolve(result.value)
          } else {
            // When there is no price available, just continue with the flow
            defer.resolve(0);
          }
        })
      return defer.promise
    }
  });
