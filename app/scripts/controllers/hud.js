'use strict';

/**
 * @ngdoc function
 * @name ambPmApp.controller:HudCtrl
 * @description
 * # HudCtrl
 * Controller of the ambPmApp
 */
angular.module('ambPmApp')
  .controller('HudCtrl', function ($scope, $mdSidenav) {
  	
    $scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	  };

  });
