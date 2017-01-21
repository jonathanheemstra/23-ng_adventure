'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.factory('locationService', ['$log', 'mapService', locationService]);

function locationService($log, mapService) {
  $log.debug('locationService');

  let service = {};

  let locationDesc = service.locationDesc = {
    desc: '',
  };

  service.setCurrentLocation = function(location) {
    locationDesc.desc = mapService.mapData[location].desc;
    return;
  };

  return service;
}
