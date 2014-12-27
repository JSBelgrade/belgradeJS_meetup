(function () {
    'use strict';

    var User = function () {
        return {

            UI: {
                isMessageReplyable: true
            }
        };
    };

    angular.module('belgradeJS.models').factory('User', User);

}());
