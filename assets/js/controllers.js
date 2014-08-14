'use strict';

/* Controllers */

angular.module('cardBase.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])

  .controller('GameTypesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('gametypes').success(function(data){
      console.log({data: data});
      $scope.gametypes = data;
    });
    $scope.destroyGame = function(gametype){
      $http.delete('gametypes/'+gametype.id).success(function(data){
        for(var i = 0; i < $scope.gametypes.length; i++){
          if($scope.gametypes[i].id == gametype.id){
            $scope.gametypes.splice(i, 1);
            break;
          }
        }
      });
      console.log('destroying: '+gametype.id);
    }
  }])

  .controller('AddGameTypesCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.form = {};
    $scope.submitPost = function () {
      $http.post('/gametypes', $scope.form).
        success(function(data) {
          $location.path('#/gametypes');
        });
    };
  }])

  .controller('ContactCtrl', ['$scope', function($scope) {

  }]);
