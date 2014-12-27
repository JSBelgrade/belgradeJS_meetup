(function () {
  'use strict';

  angular.module('belgradeJS.filters', [])

    .filter('replaceBlankWithUnderscore', function() {
      return function(value) {
        return value.replace(/ /g,"_");
      }
    })

    .filter('toLowerCase', function() {
      return function(value) {
        return value.toLowerCase();
      }
    })

    .filter('capitalize', function() {
      return function(value) {
        return value && value[0].toUpperCase() + value.slice(1);
      }
    });

})();
