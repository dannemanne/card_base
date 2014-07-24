'use strict';


// Declare app level module which depends on filters, and services
angular.module('cardBase', [
  'ngRoute',
  'cardBase.filters',
  'cardBase.services',
  'cardBase.directives',
  'cardBase.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/',          { templateUrl: 'partials/home.html',      controller: 'HomeCtrl' });
  $routeProvider.when('/games',     { templateUrl: 'partials/games.html',     controller: 'GamesCtrl' });
  $routeProvider.when('/contact',   { templateUrl: 'partials/contact.html',   controller: 'ContactCtrl' });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
