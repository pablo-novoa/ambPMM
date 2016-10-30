'use strict';

/**
 * @ngdoc overview
 * @name ambPmApp
 * @description
 * # ambPmApp
 *
 * Main module of the application.
 */
angular
  .module('ambPmApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue-grey');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/asd', {
        templateUrl: 'views/asd.html',
        controller: 'AsdCtrl',
        controllerAs: 'asd'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
