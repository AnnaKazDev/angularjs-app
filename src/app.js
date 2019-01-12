var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider


		.when('/', {
			templateUrl: 'views/about.html',
			controller: 'mainController'
		})
		.when('/skicams', {
			templateUrl: 'views/skicams.html',
			controller: 'skicamsController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});


});


myApp.controller('mainController', function($scope) {
	$scope.message = 'about page';
});
myApp.controller('contactController', function($scope) {
	$scope.message = 'contact page';
});
myApp.controller('skicamsController', function($scope) {
	$scope.message = 'skicam page';
});
