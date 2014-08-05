'use strict';

/* Controllers */

angular.module('cardBase.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])

  .controller('GamesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('game_types').success(function(data){
      $scope.game_types = data;
    });
    $scope.destroyGame = function(game){
      console.log('destroying: '+game.id);
    }
  }])

  .controller('AddGamesCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.form = {};
    $scope.submitPost = function () {
      $http.post('/games', $scope.form).
        success(function(data) {
          $location.path('#/games');
        });
    };
  }])

  .controller('ContactCtrl', ['$scope', function($scope) {

  }]);
