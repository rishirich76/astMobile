'use strict';

var app = angular.module('astMobApp');

app.controller("astPNRCtrl", ['$scope', 'pnrService', function($scope, pnrService) {
    console.log('Hi....');
    $scope.pnrdataresponse = pnrService.getPnrdata('ABCD');
}]);