app.controller('MainCtrl', [ "$scope", "$state", function($scope, $state) {
	console.log("entered main");
	$state.transitionTo('main_dashboard');
	// $scope.selectedTab = $scope.tabs[$state.current.name];
	// $scope.selectedTab = $scope.tabs['main_dashboard'];
	
	$scope.backToApp = function() {
		$state.transitionTo("viewapp");
	};
	
	$scope.gotoTab = function(tab) {
		$state.transitionTo(tab);
	};
	
} ]);

app.controller('TabsCtrl', [ "$scope", "$state", function($scope, $state) {
	$scope.tabs = {
		'main_dashboard' : {
			link : 'main_dashboard',
			label : 'Dashboard'
		},
		'main_emp' : {
			link : 'main_emp',
			label : 'Employees'
		},
		'main_report' : {
			link : 'main_report',
			label : 'Reports'
		},
		'main_sites' : {
			link : 'main_sites',
			label : 'Sites'
		}
	};
	console.log($state.current.name);
	$state.transitionTo($state.current.name);
	$scope.selectedTab = $scope.tabs[$state.current.name];
	$scope.$watch('location.$$url', function(path) {
		$scope.selectedTab = $scope.tabs[$state.current.name];
		console.log($state.current.name);
	});
	$scope.setSelectedTab = function(tab) {
		$scope.selectedTab = tab;
	}

	$scope.tabClass = function(tab) {
		if ($scope.selectedTab == tab) {
			return "active";
		} else {
			return "";
		}
	}
} ]);