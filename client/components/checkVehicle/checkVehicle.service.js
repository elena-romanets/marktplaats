'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .service('checkVehicle', function ($q, $http, checkVehiclePrice) {
    return function(license, mileage){
      var defer = $q.defer()
      $http.jsonp('http://www.marktplaatsautoverkoper.nl/sellyourcar/api/vehicle?callback=JSON_CALLBACK&lpn='+license)
        .success(function (result) {
          if(result.success){
            checkVehiclePrice(license,mileage)
              .then(function(e) {
                result.content.averagePrice = e;
                defer.resolve(result.content);
              })
          } else {
            defer.reject()
          }
        });
      return defer.promise
    }
  });
