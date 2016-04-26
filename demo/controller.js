// Creacion de mudulo
var app = angular.module("cometarios", []); // Aqui se puede agregar ngResource que consume app REST

// Creacion de controlador
app.controller("firstController", ["$scope", function(e) { // Objeto scope
	e.nombre = "Angel";
	e.nuevoComentario = {};
	e.comentrios = [
		{
			comentrio: "Bue tutorial",
			username: "codigofacilito"
		},
		{
			comentrio: "Malisimo el tutorial",
			username: "otros_usuarios"
		}
	];
	e.agregarComentario = function () {
		// Agrega un nuevo elemento
		e.comentrios.push(e.nuevoComentario);

		// Inicializar variable de scope
		e.nuevoComentario = {};
	}
}]);