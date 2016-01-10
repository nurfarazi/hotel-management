var app = angular.module('ionicApp');

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('signin', {
            url: '/sign-in',
            templateUrl: 'templates/sign-in.html',
            controller: 'SignInCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('tvchannels', {
            url: '/home',
            templateUrl: 'templates/tvchannels.html',
            controller: 'homeCtrl'
        })
        .state('PreArrival', {
            url: '/home',
            templateUrl: 'templates/PreArrival.html',
            controller: 'homeCtrl'
        })
        .state('checkin', {
            url: '/home',
            templateUrl: 'templates/checkin.html',
            controller: 'homeCtrl'
        })
        .state('guestservice', {
            url: '/home',
            templateUrl: 'templates/guestservice.html',
            controller: 'homeCtrl'
        })
        .state('health', {
            url: '/home',
            templateUrl: 'templates/health.html',
            controller: 'homeCtrl'
        })
        .state('car', {
            url: '/home',
            templateUrl: 'templates/car.html',
            controller: 'homeCtrl'
        })


    $urlRouterProvider.otherwise('/sign-in');

});