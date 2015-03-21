var socket;
var usrname= "";
var chat = angular.module('chatApp', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/Templates/login.html',
            controller : 'loginController'
        })
        .when('/chat', {
            templateUrl: '/static/Templates/index.html',
            controller : 'chatboxController'
        })
	.otherwise({

	redirectTo: '/'

      });
});
