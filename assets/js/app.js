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
  $routeProvider.when('/',          { templateUrl: 'partials/home.html',        controller: 'HomeCtrl' });
  $routeProvider.when('/gametypes',     { templateUrl: 'partials/gametypes/index.html', controller: 'GameTypesCtrl' });
  $routeProvider.when('/gametypes/new', { templateUrl: 'partials/gametypes/new.html',   controller: 'AddGameTypesCtrl' });
  $routeProvider.when('/contact',   { templateUrl: 'partials/contact.html',     controller: 'ContactCtrl' });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
