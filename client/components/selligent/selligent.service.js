'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .service('selligent', function ($q, $http) {

    /**
     * Note! We need this method because we can not use the $location service for getting
     * the search query when HTML5 mode is set to false.
     *
     * @param name
     * @returns {*}
     */
    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    /**
     *
     * @param carInformation
     * @param EXTID The EXTID is a unique key for a user so we can map a user to a car
     * @returns {string}
     */
    function createComposedPixelUrl(carInformation, EXTID) {
      var composedUrl = '//marktplaats.emsecure.net/optiext/optiextension.dll?ID=' + EXTID;
      composedUrl+= '&P1=' + carInformation.licensePlate; // License plate
      composedUrl+= '&P2=' + carInformation.mileage; // Mileage
      composedUrl+= '&P3=' + carInformation.averagePrice; // Price
      composedUrl+= '&P4=' + carInformation.brand; // Brand
      composedUrl+= '&P5=' + carInformation.model; // Model
      composedUrl+= '&P6=' + carInformation.year; // Year
      composedUrl+= '&P7='; // Fuel, not available yet
      composedUrl+= '&P8=' + carInformation.modelTimesSeen  ; // Model views
      composedUrl+= '&P9=' + carInformation.brandTimesSeen; // Brand views
      composedUrl+= '&P0=' + carInformation.averageDays; // Time to sell
      composedUrl+= '&PA='; // Photo url, not available yet

      return composedUrl;
    }

    return function(carInformation){

      var EXTID = getParameterByName('EXTID');
      if(typeof EXTID === 'undefined') return;

      // Never send undefined to the server
      carInformation.mileage = carInformation.mileage ? carInformation.mileage : '';

      // Create url
      var composedPixelUrl = createComposedPixelUrl(carInformation, EXTID);

      return composedPixelUrl;

    }
  });
