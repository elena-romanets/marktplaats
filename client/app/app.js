'use strict';

angular.module('marktplaatsIacVerkoopApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'youtube-embed',
  'angulartics',
  'angulartics.google.tagmanager.custom',
  //'angulartics.debug',
  'ngEqualizer'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

  })
  .config(function ($analyticsProvider) {
    $analyticsProvider.virtualPageviews(false);

  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        $state.go('main.home')
      })
  })
  .filter('replaceComma', function () {
    return function (input) {
      if (input) {
        return input.split(',').join('.');
      }
    };
  });
