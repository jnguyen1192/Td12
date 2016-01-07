'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ["$scope", function ($scope) {
	$scope.notes = [];
	$scope.addNote = function () {
		$scope.notes.push({
			id: $scope.notes.length,
			content: $scope.content
		});
		$scope.content = null;
	}

	$scope.delNote = function () {
		$scope.notes.pop({
			id: $scope.notes.length,
			content: null
		});
		$scope.content = null;
	}
}]);
