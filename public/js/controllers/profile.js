(function () {
  'use strict';

  var ProfileCtrl = [
    '$scope', '$http', 'AlertService', 'UserService',
    function($scope, $http, AlertService, UserService) {
      // Define scope variables
      $scope.UI = {

      };

      // define models
      $scope.models = {
        usersList: []
      };

      /**
       * Controllers Init function
       */
      $scope.init = function() {
        fetchAllUsers();
      };

      function fetchAllUsers() {
        UserService
          .getAll()
          .then(function (result) {
            $scope.models.usersList = result;

            console.log(result);
          });
      }
    }
  ];

  angular.module('belgradeJS.controllers').controller('ProfileCtrl', ProfileCtrl);

})();
