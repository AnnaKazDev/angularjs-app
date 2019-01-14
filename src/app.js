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
			alert('Thank you for sending info!');
		}
	};

});

myApp.controller('skicamsController', function ($scope, $http) {

	$scope.currentDate = new Date();
	$scope.getSkiCams = function () {
		$http({
			method: 'GET',
			url: 'https://makevoid-skicams.p.mashape.com/cams.json',
			headers: {
				'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
			}
		}).then(function (res) {
			$scope.skiCams = res.data;
			for (var key in $scope.skiCams) {
				if ($scope.skiCams[key].name === 'Brusson') {
					$scope.brussonCams = $scope.skiCams[key].cams;
					if (Object.keys($scope.brussonCams).length > 1) {
						$scope.brussonImgs = [];
						for (var i = 0; i < 2; i++) {
							$scope.brussonImgs.push($scope.brussonCams[Object.keys($scope.brussonCams)[i]].url)
						}
					}

				} else if ($scope.skiCams[key].name === 'Piani di Bobbio') {
					$scope.pianiDiBobbioCams = $scope.skiCams[key].cams;
					if (Object.keys($scope.pianiDiBobbioCams).length > 1) {
						$scope.pianiDiBobbioImgs = [];
						for (var i = 0; i < 2; i++) {
							$scope.pianiDiBobbioImgs.push(
								$scope.pianiDiBobbioCams[Object.keys($scope.pianiDiBobbioCams)[i]].url)
						}
					}
				}
			}
		}, function (rej) {
			alert('There is a problem with displaying the cameras. Please try again later.');
			console.error('Error: ' + rej.data.message)
		});
	};
	$scope.getSkiCams();
});