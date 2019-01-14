var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
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


myApp.controller('mainController', function ($scope) {

	$scope.menuItems = [
		{name: 'about us'.toUpperCase(), url: '#!about'},
		{name: 'skicams'.toUpperCase(), url: '#!skicams'},
		{name: 'contact'.toUpperCase(), url: '#!contact'}];
	$scope.activeMenu = $scope.menuItems[0];
	$scope.setActive = function (menuItem) {
		$scope.activeMenu = menuItem
	};

});
myApp.controller('contactController', function ($scope) {

	$scope.submitForm = function () {
		if ($scope.userForm.$valid) {
			alert('Thank you!');
		}
	};

});
myApp.controller('skicamsController', function ($scope) {
	$scope.message = 'skicam page';
});
