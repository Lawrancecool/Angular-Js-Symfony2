/**
 * Created by lawrance on 31/5/16.
 */
var app = angular.module('exampleProgress', ['ngProgressLite','ngResource']);

app.config(['ngProgressLiteProvider', function (ngProgressLiteProvider) {
    ngProgressLiteProvider.settings.ease = 'ease-in';
}]);

app.controller('MainCtrl', function ($scope, ngProgressLite, $timeout) {
    $scope.show = 0;
    ngProgressLite.start();
    $timeout(function () {
        ngProgressLite.done();
        $scope.show = 1;
    }, 1500);

    $scope.set = function () {
        ngProgressLite.set(0.4);
    };

    $scope.start = function () {
        ngProgressLite.start();
    };

    $scope.inc = function () {
        ngProgressLite.inc();
    };

    $scope.done = function () {
        ngProgressLite.done();
    };
});