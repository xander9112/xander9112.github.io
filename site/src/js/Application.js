var App = angular.module('app', Dependencies, function ($httpProvider) {
	"use strict";
	$httpProvider.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.transformRequest = [
		function (data) {
			var param = function (obj) {
				var query = '';
				var name, value, fullSubName, subValue, innerObj, i;

				for (name in obj) {
					value = obj[ name ];

					if (value instanceof Array) {
						for (i = 0; i < value.length; ++i) {
							subValue = value[ i ];
							fullSubName = name + '[' + i + ']';
							innerObj = {};
							innerObj[ fullSubName ] = subValue;
							query += param(innerObj) + '&';
						}
					}
					else if (value instanceof Object) {
						for (var subName in value) {
							if (value.hasOwnProperty(subName) && subName !== '$$hashKey') {
								subValue = value[ subName ];
								fullSubName = name + '[' + subName + ']';
								innerObj = {};
								innerObj[ fullSubName ] = subValue;
								query += param(innerObj) + '&';
							}
						}
					}
					else {
						query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
					}
				}

				return query.length ? query.substr(0, query.length - 1) : query;
			};

			return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
		}
	];
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
