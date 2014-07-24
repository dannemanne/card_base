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
  .controller('ContactCtrl', ['$scope', function($scope) {

  }]);
