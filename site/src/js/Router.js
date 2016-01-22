var Router = function ($stateProvider, $urlRouterProvider, $locationProvider) {
	"use strict";
	let templateFolder = '/views';

	$urlRouterProvider.otherwise('/');
	//$locationProvider.html5Mode(true);
	$stateProvider
		.state('home', {
			url:         '/',
			templateUrl: `${templateFolder}/MainPage.html`
		})
		.state('home.bookmark', {
			url:         'home/:bookmarkId',
			templateUrl: `${templateFolder}/Bookmarks/rightColumn.html`,
			controller:  'BookmarkController'
		})
		/*.state('bookmarks', {
		 url:   '/bookmarks',
		 views: {
		 '':                      {
		 templateUrl: `${templateFolder}/Bookmarks.html`
		 },
		 'leftColumn@bookmarks':  {
		 templateUrl: `${templateFolder}/Bookmarks/leftColumn.html`,
		 controller:  'BookmarkController'
		 },
		 'rightColumn@bookmarks': {
		 templateUrl: `${templateFolder}/Bookmarks/rightColumn.html`
		 }
		 }
		 })
		 .state('bookmarks/:id', {
		 url:   '/bookmarks/:id',
		 views: {
		 '':                      {
		 templateUrl: `${templateFolder}/Bookmarks.html`
		 },
		 'leftColumn@bookmarks':  {
		 templateUrl: `${templateFolder}/Bookmarks/leftColumn.html`,
		 controller:  'BookmarkController'
		 },
		 'rightColumn@bookmarks': {
		 templateUrl: `${templateFolder}/Bookmarks/rightColumn.html`
		 }
		 }
		 })*/
		/*.state('admin/tables/:table', {
		 url:         '/admin/tables/:table',
		 templateUrl: `${templateFolder}/Table/Table.html`,
		 controller:  'TableController'
		 })
		 .state('admin/tables/:table/config', {
		 url:         '/admin/tables/:table/config',
		 templateUrl: `${templateFolder}/Table/config.html`,
		 controller:  'TableController'
		 })
		 .state('admin/tables/:table/create', {
		 url:         '/admin/tables/:table/create',
		 templateUrl: `${templateFolder}/Table/Create.html`,
		 controller:  'TableController'
		 })
		 .state('ErrorPage', {
		 templateUrl: `${templateFolder}/ErrorPage.html`
		 })
		 .state('admin/testPage', {
		 url:         '/admin/testpage',
		 templateUrl: `${templateFolder}/TestPage.html`,
		 controller:  'TestController'
		 })*/
		/*.otherwise({
		 templateUrl: `${templateFolder}/ErrorPage.html`
		 })*/;
};
