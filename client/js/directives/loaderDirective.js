(function(angular){
	'use strict';
	angular.module('moneyManager')
			.directive("loader", function ($rootScope) {
			    return function ($scope, element, attrs) {
			        $scope.$on("loader_show", function () {
			            return element.show();
			        });
			        return $scope.$on("loader_hide", function () {
			            return element.hide();
			        });
			    };
			});


})(window.angular);