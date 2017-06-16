'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
    .module('astMobApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/ast.dashboard.html',
                controller: 'astPNRCtrl',
                controllerAs: 'astPNRCtrl'
            })
            .when('/pnrdata', {
                templateUrl: 'views/pnr.display.html',
                controller: 'astPNRCtrl',
                controllerAs: 'astPNRCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });