'use strict';

/* Directives */


angular.module('myApp.directives', []).
	  directive('appVersion', ['version', function(version) {
		  return {
		    template: 'Name: {{customer.name}} Address: {{customer.address}}'
		  };
	  }])
	.directive('myCustomer', function() {
	  return {
	  	restrict: 'E',
        scope: {
          customerInfo: '=info'
        },
	    template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}} test {{name}}'
	  };
	})
	.directive('cardAdd',function(){
	  return {
	    templateUrl: 'partials/cardcategory/add.html'
	  };
	})
	.directive('membercardAdd',function(){
	  return {
	    templateUrl: 'partials/member/add.html'
	  };
	})
	.directive('accoutEdit',function(){
	  return {
	    templateUrl: 'partials/public/accoutEdit.html'
	  };
	})
	.directive('accoutSecurity',function(){
	  return {
	    templateUrl: 'partials/public/accoutSecurity.html'
	  };
	});
