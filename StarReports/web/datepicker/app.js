(function(angular) {
    'use strict';

    angular.module('datepicker', [])
        .controller('DatepickerController', ['$scope', '$timeout', function($scope, $timeout) {
            var vm = this;

            vm.date = new Date();
            vm.options = '{format:"DD-MM-YYYY"}'


        }]);

})(window.angular);