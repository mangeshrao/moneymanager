(function(angular){
	'use strict';
	angular.module('moneyManager')
			.directive('registerPanel', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/registerPanel.html',
					scope: {
			          returnObj : '=',
			          registrationSubmit : '&'
 					},
 					controller : 'registerPanelController'
				}
			});


})(window.angular);