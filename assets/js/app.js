'use strict';


// Declare app level module which depends on filters, and services
angular.module('cardBase', [
  'ngRoute',
  'cardBase.filters',
  'cardBase.services',
  'cardBase.directives',
  'cardBase.controllers'
]).
config(['$routeProvider', 'USER_ROLES', function($routeProvider, USER_ROLES) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl',
    data: { authorizedRoles: USER_ROLES.all }
  });
  $routeProvider.when('/gametypes', {
    templateUrl: 'partials/gametypes/index.html',
    controller: 'GameTypesCtrl',
    data: { authorizedRoles: USER_ROLES.all }
  });
  $routeProvider.when('/gametypes/new', {
    templateUrl: 'partials/gametypes/new.html',
    controller: 'AddGameTypesCtrl',
    data: { authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor] }
  });
  $routeProvider.when('/gametypes/:gametypeId', {
    templateUrl: 'partials/gametypes/show.html',
    controller: 'ShowGameTypesCtrl',
    data: { authorizedRoles: USER_ROLES.all }
  });
  $routeProvider.when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'ContactCtrl',
    data: { authorizedRoles: USER_ROLES.all }
  });
  $routeProvider.otherwise({redirectTo: '/'});
}])


.run(['$rootScope', 'AUTH_EVENTS', 'AuthService' , function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
}]);
