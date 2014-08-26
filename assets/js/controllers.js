'use strict';

/* Controllers */

angular.module('cardBase.controllers', [])

  .controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', function ($scope, USER_ROLES, AuthService) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
  }])

  .controller('HomeCtrl', ['$scope', function($scope) {

  }])

  .controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', function($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
      email: '',
      password: ''
    };
    $scope.login = function (credentials) {
      AuthService.login(credentials).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
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

  .controller('ShowGameTypesCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/gametypes/' + $routeParams.gametypeId).success(function(data){
      $scope.gametype = data;
      $scope.openGames = [];
    });
  }])

  .controller('ContactCtrl', ['$scope', function($scope) {

  }]);
