// Creacion de mudulo
var app = angular.module("myFirstApp", []);

// Creacion de controlador
app.controller("firstController", function($scope) { // Objeto scope
	$scope.nombre = "Angel";
});