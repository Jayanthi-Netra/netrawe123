var app = angular.module(
		'netra',
		[ 'ngAnimate', 'ngCookies', 'ngMessages','ngMaterial', 'ngResource', 'ngSanitize',
				'ngLodash', 'ngTouch', 'ui.router', 'ui.bootstrap',
				'ui.materialize','ngFileUpload','ngCsv' ]).config(
		function($stateProvider, $urlRouterProvider, $httpProvider) {
			// $httpProvider.interceptors.push('InterceptorService');
			// $httpProvider.defaults.headers.post['Content-Type'] =
			// 'application/x-www-form-urlencoded; charset=UTF-8';
			$httpProvider.defaults.transformRequest = function(data) {
				if (data)
					data.v = 1.1;
				else {
					return data;
				}
				return $.param(data);
			};
			$stateProvider.state('main', {
				url : '/main',
				views : {
					'body' : {
						templateUrl : 'views/main_dashboard.html',
						controller : 'MainCtrl'
					},
					'header_action' : {
						templateUrl : 'views/headeraction.html',
						controller : 'HeaderActionCtrl'
					},
					'header' : {
						templateUrl : 'views/header.html',
						controller : 'HeaderCtrl'
					},
					'footer' : {
						templateUrl : 'views/footer.html',
						controller : 'FooterCtrl'
					}
				}
			}).state('home', {
				url : '/home',
				views : {
					'body' : {
						templateUrl : 'views/home.html',
						controller : 'HomeController'
					},
					'header_action' : {
						templateUrl : 'views/headeraction.html',
						controller : 'HeaderActionCtrl'
					},
					'header' : {
						templateUrl : 'views/header.html',
						controller : 'HeaderCtrl'
					},
					'footer' : {
						templateUrl : 'views/footer.html',
						controller : 'FooterCtrl'
					}
				}
			}).state('addcan', {
				url : '/addCan',
				views : {
				'body' : {
				templateUrl : 'views/addcan.html',
				controller : 'AddCanCtrl'
				},
				'header_action' : {
				templateUrl : 'views/headeraction.html',
				controller : 'HeaderActionCtrl'
				},
				'header' : {
				templateUrl : 'views/header.html',
				controller : 'HeaderCtrl'
				},
				'footer' : {
				templateUrl : 'views/footer.html',
				controller : 'FooterCtrl'
				}
				}

				});

			$urlRouterProvider.otherwise('/home');
			}).run(
		[
				'$rootScope',
				'$location',
				function($rootScope, $location) {
					$rootScope.$on('$stateChangeSuccess', function(event,
							toState, toParams, fromState, fromParams) {
						$rootScope.currentPage = toState.name;
					});
				} ]);

app.controller("myctrl", [ "$scope", "$state", function($scope, $state) {
	$scope.navigateTo = function() {
		$state.transitionTo("login");
	}

} ])
