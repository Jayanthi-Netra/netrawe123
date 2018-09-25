app.controller('HeaderCtrl', [ "$scope", "$state", "$window", "LogoutService", function($scope, $state, $window, LogoutService) {
	$scope.logout = function() {
		
		// var token = $window.localStorage['token'];
		var user_email = $window.localStorage['user_email'];
		
/*		var data = LogoutService.logout(user_email);
		data.then(function(res) {
			console.log(res.data.status);
			
			if (res.data.status == 'proceed') {
				// $window.localStorage.removeItem('token');
*/				$window.localStorage.removeItem('user_email');
				$window.localStorage.removeItem('role');
				$state.transitionTo('login');
			/*} else if (res.data.data == 'failure') {
				console.log('failure to logout');
			} else {
				console.log('some issue');
			}
			
		});
		*/
	};
} ]);