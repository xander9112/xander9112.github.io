var MainController = function ($scope, $mdSidenav) {
	"use strict";

	$scope.toggleRight = function () {
		$mdSidenav('left').toggle();
	};

	$scope.imagePath = 'assets/images/washedout.png';

	$scope.menu = {};
	$scope.menu.pages = [
		{
			"state": "/", "discription": "Главная"
		}/*, {
			"state": "bookmarks", "discription": "Bookmarks"
		}*/

	];

	$scope.close = function () {
		$mdSidenav('left').close();
	};
};
