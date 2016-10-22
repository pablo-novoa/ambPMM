'use strict';

/**
 * @ngdoc function
 * @name ambPmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambPmApp
 */
angular.module('ambPmApp')
  .controller('MainCtrl', function ($scope) {

    $scope.onSwipeLeft = function(ev) {
      alert('You swiped left!!');
    };

    $scope.onSwipeRight = function(ev) {
      alert('You swiped Right!!');
    };

});
