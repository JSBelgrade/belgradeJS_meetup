(function() {
  'use strict';

  var UserService = [
    '$http', '$q', 'User',
    function($http, $q, User) {

      // reveal public methods
      // -------------------------
      return {
        getAll: getAll,
        getOne: getOne,
        insert: insert,
        update: update,
        remove: remove
      };

      // Get all users
      function getAll() {

        var request = $http({
          method: 'GET',
          url: '/api/users',
          config: { params: { limit: User.limitAmount } }
        });

        return request.then( handleSuccess, handleError );
      }

      // Get single user
      function getOne(user_id) {
        var request = $http({
          method: 'GET',
          url: '/api/users/'+ user_id
        });

        return request.then( handleSuccess, handleError );
      }

      // Add new user
      function insert(query) {

        var request = $http({
          method: 'POST',
          url: '/api/users',
          data: query
        });

        return request.then( handleSuccess, handleError );
      }

      // Update user
      function update(user_id, userData) {

        var request = $http({
          method: 'PUT',
          url: '/api/users/' + user_id,
          data: userData
        });

        return request.then( handleSuccess, handleError );
      }

      // Remove user
      function remove(user_id) {

        var request = $http({
          method: 'DELETE',
          url: '/api/users/' + user_id,
        });

        return request.then( handleSuccess, handleError );
      }


      // Private methods
      // -------------------------

      function handleError(response) {

        if (!angular.isObject( response.data ) || !response.data.message) {

          return $q.reject( "An unknown error occurred." );

        }

        // Otherwise, use expected error message.
        return $q.reject( response.data.message );

      }

      function handleSuccess(response) {

        return response.data;

      }
    }
  ];

  angular.module('belgradeJS.services').factory('UserService', UserService);

})();
