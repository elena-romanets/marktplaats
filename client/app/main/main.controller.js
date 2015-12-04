'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .controller('MainCtrl', function ($scope, carInformation, checkVehiclePrice) {
    $scope.carInformation = carInformation;

    //checkVehiclePrice('1000','5000');

    $scope.result = {
      licensePlate: carInformation.licensePlate,
      sellUrl: 'https://www.marktplaats.nl/syi/91/plaatsAdvertentie.html?bucket=&origin=HEADER&licensePlate=' + carInformation.licensePlate
    };
    var $ = angular.element;

    $(".icon-social").delegate(".facebook", "click", function (e) {
      e.preventDefault();

      var wrapper = $(this).closest('.row');

      var name = wrapper.find('.sold-cars__title').text();
      var description = wrapper.find('.sold-cars__descr').text();
      var videoId = wrapper.find('sold-cars-item').attr('youtube-id');

      FB.ui({
        method: 'feed',
        link: 'https://developers.facebook.com/docs/reference/dialogs/',
        picture: 'http://img.youtube.com/vi/' + videoId + '/0.jpg',
        name: name,
        caption: 'Het geheim van de dealer',
        description: description
      });
    });
  });
