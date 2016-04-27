angular.module('evento', [])
	.controller('firstController', function ($scope) {
		$scope.count = 0;

		$scope.click = function () {
			$scope.count++;
		}
	});