'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .controller('HomeCtrl', function ($scope, $state, $analytics, checkVehicle, carInformation, $location) {
    $analytics.pageTrack('/');

    $scope.license = getParameterByName('licensePlate') || '';
    $scope.submitLicense = submitLicense;
    $scope.hasErrors = false;

    function submitLicense(license, mileage) {
      mileage = mileage || 0;
      checkVehicle(license, mileage)
        .then(function () {
          $scope.hasErrors = false;

          $state.go('main.search', {license: license, mileage: mileage})
        })
        .catch(function () {
          $scope.hasErrors = true;
        })
    }
  });

function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
