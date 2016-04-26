var am = angular.module("context", []);

am.controller("firstController", function ($scope) {
	$scope.nombre = "Angel";

	document.querySelector("#cambiar").addEventListener("click", function () {
		$scope.$apply(function () {
			$scope.nombre = "Gabriel";
		});
	});
});