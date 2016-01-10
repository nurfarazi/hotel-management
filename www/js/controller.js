var app = angular.module('ionicApp');


app.controller('SignInCtrl', function ($scope, $state, $http, $window) {



    $scope.signIn = function () {
        $state.go('home');
    }
    $scope.registrationclick = function () {
        $state.go('register');
    }

    console.log('signin');
});
app.controller('homeCtrl', function ($scope, $state, $http, $window) {

    $scope.tvchannels = function () {
        $state.go('tvchannels');
    }
    $scope.PreArrival = function () {
        $state.go('PreArrival');
    }
    console.log('home');

});

app.controller('showqrCtrl', function ($scope, $state, $http, $window) {
    console.log('qr');

});