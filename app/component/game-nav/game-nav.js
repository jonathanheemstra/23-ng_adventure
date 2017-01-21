'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('gameNav', {
  template: require('./game-nav.html'),
  controller: 'GameNavController',
  controllerAs: 'gameNavCtrl'
});

ngEscape.controller('GameNavController', ['$log', 'playerService', GameNavController]);

function GameNavController($log, playerService) {
  $log.debug('GameNavController');

  this.direction = {
    location: '',
  };

  this.movePlayer = function() {
    playerService.movePlayer(this.direction)
    .then( location => {
      $log.log(`player currently at ${location}`);
    })
    .then( () => {
      playerService.moveOptions();
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
