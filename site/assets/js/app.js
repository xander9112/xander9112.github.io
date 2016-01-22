'use strict';

var MainController = function MainController($scope, $mdSidenav) {
	"use strict";

	$scope.toggleRight = function () {
		$mdSidenav('left').toggle();
	};

	$scope.imagePath = 'assets/images/washedout.png';

	$scope.menu = {};
	$scope.menu.pages = [{
		"state": "/", "discription": "Главная"
	} /*, {
   "state": "bookmarks", "discription": "Bookmarks"
   }*/

	];

	$scope.close = function () {
		$mdSidenav('left').close();
	};
};
'use strict';

var Dependencies = ['ngResource', 'ui.router', 'ngStorage', 'ngMaterial'];

var interpolateProvider = function interpolateProvider($interpolateProvider) {
	"use strict";

	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
};

var LocalStorageKeyPrefix = function LocalStorageKeyPrefix($localStorageProvider, $sessionStorageProvider) {
	"use strict";

	$localStorageProvider.setKeyPrefix('HB_');
	$sessionStorageProvider.setKeyPrefix('HB_');
};

var StripTrailingSlashes = function StripTrailingSlashes($resourceProvider) {
	"use strict";

	// Don't strip trailing slashes from calculated URLs
	//console.log($resourceProvider);

	$resourceProvider.defaults.stripTrailingSlashes = false;
};

var mdThemingProvider = function mdThemingProvider($mdThemingProvider) {
	"use strict";

	$mdThemingProvider.theme('indigo').primaryPalette('blue-grey').accentPalette('blue');
};

var iconConfig = function iconConfig($mdIconProvider) {
	"use strict";

	var svgFolder = '/site/assets/svg-icons';

	$mdIconProvider.iconSet('navigation:menu', svgFolder + '/navigation/ic_menu_24px.svg', 24).iconSet('action:favorite', svgFolder + '/action/ic_favorite_24px.svg', 24).iconSet('image:gridOn', svgFolder + '/image/ic_grid_on_24px.svg', 24).defaultIconSet(svgFolder + '/core-icons.svg', 24);
};

var httpMethodInterceptor = function httpMethodInterceptor(httpMethodInterceptorProvider) {
	httpMethodInterceptorProvider.whitelistLocalRequests();
};
'use strict';

var Router = function Router($stateProvider, $urlRouterProvider, $locationProvider) {
	"use strict";

	var templateFolder = '/views';

	$urlRouterProvider.otherwise('/');
	//$locationProvider.html5Mode(true);
	$stateProvider.state('home', {
		url: '/',
		templateUrl: templateFolder + '/MainPage.html'
	}).state('home.bookmark', {
		url: 'home/:bookmarkId',
		templateUrl: templateFolder + '/Bookmarks/rightColumn.html',
		controller: 'BookmarkController'
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
'use strict';

var App = angular.module('app', Dependencies, function ($httpProvider) {
	"use strict";

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.transformRequest = [function (data) {
		var param = function param(obj) {
			var query = '';
			var name, value, fullSubName, subValue, innerObj, i;

			for (name in obj) {
				value = obj[name];

				if (value instanceof Array) {
					for (i = 0; i < value.length; ++i) {
						subValue = value[i];
						fullSubName = name + '[' + i + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += param(innerObj) + '&';
					}
				} else if (value instanceof Object) {
					for (var subName in value) {
						if (value.hasOwnProperty(subName) && subName !== '$$hashKey') {
							subValue = value[subName];
							fullSubName = name + '[' + subName + ']';
							innerObj = {};
							innerObj[fullSubName] = subValue;
							query += param(innerObj) + '&';
						}
					}
				} else {
					query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
				}
			}

			return query.length ? query.substr(0, query.length - 1) : query;
		};

		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}];
});

App.config(Router);

App.config(LocalStorageKeyPrefix);
App.config(StripTrailingSlashes);
//App.config(interpolateProvider);
App.config(mdThemingProvider);
App.config(iconConfig);

//App.config(httpMethodInterceptor);
/*App.config([ 'cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
 cfpLoadingBarProvider.spinnerTemplate = '<div class="g-page-loader"><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>';
 } ]);*/
/*App.config([ 'cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
 cfpLoadingBarProvider.includeSpinner = true;
 } ]);*/

//App.factory("Bookmark", Bookmark);

App.controller('MainController', MainController);

//App.directive('repeatDone', repeatDone);
//# sourceMappingURL=app.js.map
