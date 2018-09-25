app.controller('HeaderActionCtrl', [ "$scope", "$state", "$mdDialog", function($scope, $state, $mdDialog) {
	
	$scope.createApp = function() {
		$state.transitionTo("createapp");
	}

	$scope.addOffers = function() {
		$state.transitionTo("dashboard");
	}
	$scope.backToApp = function() {
		var confirm = $mdDialog.confirm().title('Do you want to Back ?').textContent('').ariaLabel('Do you want to go back').ok('Yes').cancel('No');
		
		$mdDialog.show(confirm).then(function() {
			$state.transitionTo("dashboardoffers");
		});
	};
	$scope.backToDashboard = function() {
		var confirm = $mdDialog.confirm().title('Do you want to go to dasboard ?').textContent('').ariaLabel('Do you want to go back').ok('Yes').cancel('No');
		
		$mdDialog.show(confirm).then(function() {
			$state.transitionTo("dashboard");
		});
	};
	$scope.addEmployee = function() {
		$state.transitionTo("addemp");
	};
	
} ]);

app.controller('TabsCtrl', [ "$scope", "$state", "$location", function($scope, $state, $location) {
	$scope.tabs = [ {
		link : '#/candidateReport',
		label : 'Candidate Report',
		state : 'candidateReport'
	}, {
		link : '#/dashboardoffers',
		label : 'Offers',
		state : 'dashboardoffers'
	}, {
		link : '#/manager_db',
		label : 'Analytics',
		state : 'manager_dashboard'
	} ];
	$scope.setSelectedTab = function(tab, state) {
		$scope.selectedTab = tab;
		$state.transitionTo(state);
		$scope.isActiveTab(tab.state)
	}
	$scope.isActiveTab = function(tab) {
		return (tab == $state.current.name);
	}
} ]);
