(function() {
  'use strict';

  // Load various angular modules
  angular.module('belgradeJS.controllers', []);
  angular.module('belgradeJS.services', []);
  angular.module('belgradeJS.models', []);
  angular.module('belgradeJS.filters', []);
  angular.module('belgradeJS.directives', []);

  var belgradeJSApp = angular.module('belgradeJS', [
    'ngRoute',
    'belgradeJS.controllers',
    'belgradeJS.services',
    'belgradeJS.models',
    'belgradeJS.filters',
    'belgradeJS.directives'
  ]);

  belgradeJSApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider

        // home page
        .when('/', {
          templateUrl: 'views/users.html',
          controller: 'UsersCtrl'
        })

        .when('/user/:user_id', {
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl'
        })

        .otherwise({
          redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }
  ]);


})();
