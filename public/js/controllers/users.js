(function () {
  'use strict';

  var UsersCtrl = [
    '$scope', '$http', 'AlertService', 'User', 'UserService',
    function($scope, $http, AlertService, User, UserService) {
      // Define scope variables
      $scope.userModel = User;

      $scope.UI = {
        // manipulate UI elements here
      };

      // define models
      $scope.models = {
        usersList: []
      };

      $scope.$watch('models.country', function(value) {
        if ($scope.models.city === $scope.models.country) {
          AlertService.show('info', 'ne moze to tako', 5000);
        }
      });

      /**
       * Controllers Init function
       */
      $scope.init = function() {
        UserService
          .getAll()
          .then(function (result) {
            $scope.models.usersList = result;
          });
      };

      $scope.editUser = function(user) {
        var userData = {
          name: 'Pera Peric',
          address: 'Neznanog Junaka BB',
          city: 'Belgrade',
          country: 'Serbia'
        };

        UserService
          .update(user._id, userData)
          .then(function(response) {
            console.log(response)
          });
      };

      $scope.deleteUser = function(user) {
        UserService
          .remove(user._id)
          .then(function(response) {
            console.log(response)
          });
      };


    }
  ];

  angular.module('belgradeJS.controllers').controller('UsersCtrl', UsersCtrl);

})();
