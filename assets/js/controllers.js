'use strict';

/* Controllers */

angular.module('cardBase.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])

  .controller('GamesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('games').success(function(data){
      $scope.games = data;
    });
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
