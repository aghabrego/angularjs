angular.module("toDoList", ["LocalStorageModule"])
	.factory('toDoService', function (localStorageService) {
		var toDoService = {};
		toDoService.key = 'angular-todoList';

		if (localStorageService.get(toDoService.key)) {
			toDoService.activities = localStorageService.get(toDoService.key);
		} else {
			toDoService.activities = [];
		}

		toDoService.add = function (newActv) {
			toDoService.activities.push(newActv);
			toDoService.updateLocalStorage();
		}

		toDoService.updateLocalStorage = function () {
			localStorageService.set(toDoService.key, toDoService.activities);
		}

		toDoService.clean = function () {
			toDoService.activities = [];
			toDoService.updateLocalStorage();
			return toDoService.getAll();
		}

		toDoService.getAll = function () {
			return toDoService.activities;
		}

		toDoService.removeItem = function (item) {
			toDoService.activities = toDoService.activities.filter(function (act) {
				return act !== item;
			});

			toDoService.updateLocalStorage();
			return toDoService.getAll();
		}

		return toDoService;
		
	})
	.controller("toDoController", function ($scope, toDoService) {
		$scope.todo = toDoService.getAll();
		$scope.newActv = {};

		$scope.addActv = function () {
			toDoService.add($scope.newActv);
			$scope.newActv = {};
		}

		$scope.removeActv = function (item) {
			$scope.todo = toDoService.removeItem(item);
		}

		$scope.clean = function () {
			$scope.todo = toDoService.clean();
		}
	});