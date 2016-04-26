angular.module("filter", ["LocalStorageModule"])
	.filter("removerHtml", function () {
		return function ($text) {
			return String($text).replace(/<[^>]+>/gm, '');
		}
	})
	.controller("filterController", function ($scope) {
		$scope.mi_html = {};
		$scope.mi_html.titulo = "Hola";
		$scope.mi_html.cuerpo = "<p>hola mundo</p>";
		$scope.costo = 5;
	});