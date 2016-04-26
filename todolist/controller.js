angular.module("toDoList", ["LocalStorageModule"])
	.controller("toDoController", function($scope, localStorageService) {
		if (localStorageService.get('angular-todoList')) {
			$scope.todo = localStorageService.get('angular-todoList');
		} else {
			$scope.todo = [];
		}

		$scope.$watchCollection('todo', function(newValue, oldValue) {
			localStorageService.set('angular-todoList', $scope.todo);
		});

		$scope.addActv = function() {
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}

		$scope.clean = function() {
			$scope.todo = [];
		}
	});