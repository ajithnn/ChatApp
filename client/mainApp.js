var usrname = "";
var socket;

var chat = angular.module('chatApp', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/login.html'
        })
        .when('/chat', {
            templateUrl: '/static/index.html',
            controller : 'chatboxController'
        })
	.otherwise({

	redirectTo: '/'

      });
});
