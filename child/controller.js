angular.module('child', [])
	.run(function ($rootScope) {
		$rootScope.nombre = 'Angel Hidalgo';
	})
	.controller('firstController', function ($scope) { // ($scope, $rootScope)
		$scope.nombre = "AH"
	})
	.controller('childController', function ($scope) {

	});
