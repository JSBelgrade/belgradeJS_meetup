(function() {
  'use strict';

    var createButton = [function() {
      return {
        restrict: 'A',
        scope: {
          title: '@'
        },
        replace: true,
        template: '<button>{{title}}</button>'
      }
    }];

    angular.module('belgradeJS.directives', [])
        .directive('createButton', createButton);
})();
