'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('location', {
  template: require('./location.html'),
  controller: 'LocationController',
  controllerAs: 'locationCtrl'
});

ngEscape.controller('LocationController', ['$log', 'playerService', 'mapService', LocationController]);

function LocationController($log, playerService, mapService) {
  $log.debug('LocationController');

  this.locationDesc = mapService.mapData[playerService.player.location].desc;
}
