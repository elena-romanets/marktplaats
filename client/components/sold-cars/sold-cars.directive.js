'use strict';

angular.module('marktplaatsIacVerkoopApp')
  .directive('soldCars', function () {
    return {
      templateUrl: 'components/sold-cars/sold-cars.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        var $ = angular.element;

        $(".icon-social-facebook").delegate(".facebook", "click", function (e) {
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

