'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let player = service.player = {
    location: 'beach',
    hp: 15
  };

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {

      let movePossibilities = [];

      (function() {
        for (var option in mapService.mapData[player.location]) {
          if(/^option[1-9]*/.test(option)) movePossibilities.push(mapService.mapData[player.location][option]);
        }
      }());

      let moveDirection = movePossibilities.indexOf(direction.location);

      if(moveDirection === -1) reject('not a viable move direction');
      if(moveDirection !== -1) player.location = direction.location;

      return resolve(direction.location);
    });
  };

  return service;
}
