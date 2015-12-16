'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('soldCars', function () {
    return {
      templateUrl: 'components/sold-cars/sold-cars.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.find(".icon-social-twitter").each(function () {
          var wrapper = $(this).closest('.row');
          var description = wrapper.find('.sold-cars__tw_descr').text();
          var encodedDescription = encodeURIComponent(description);
          var videoId = wrapper.find('sold-cars-item').attr('youtube-id');

          var link = 'https://twitter.com/share?url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D' + videoId + '&text=' + encodedDescription + '&hashtags=Marktplaats';
          $(this).attr("href", link);
        })
      }
    };
  });

