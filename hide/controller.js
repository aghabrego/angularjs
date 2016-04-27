angular.module("httpcontroller", [])
	.controller("firstController", function($scope, $http) {
		$scope.posts = [];
		$scope.loading = true;
		$http.get("http://jsonplaceholder.typicode.com/posts")
			.success(function(data) {
				$scope.posts = data;
				$scope.loading = false;
			})
			.error(function(err) {
				$scope.loading = false;
				console.log(err);
			});
	});