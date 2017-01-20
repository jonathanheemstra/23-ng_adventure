'use strict';

const angular = require('angular');
const ngEscape = angular.module('ngEscape');

ngEscape.component('gameNav', {
  template: require('./game-nav.html'),
  controller: 'GameNavController',
  controllerAs: 'gameNavCtrl'
});

ngEscape.controller('GameNavController', ['$log', GameNavController]);

function GameNavController($log) {
  $log.debug('GameNavController');

  this.direction = {
    location: '',
  };

  this.move = function() {
    console.log('user moved', this.direction.location);
  };
}
