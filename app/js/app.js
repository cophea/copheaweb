'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/operation', {templateUrl: 'partials/operation/index.html', controller: 'operationCtrl'});
  $routeProvider.when('/cardcategory', {templateUrl: 'partials/cardcategory/index.html', controller: 'cardcategoryCtrl'});
  $routeProvider.when('/member', {templateUrl: 'partials/member/index.html', controller: 'memberCtrl'});
  $routeProvider.when('/credit', {templateUrl: 'partials/credit/index.html', controller: 'creditCtrl'});
  $routeProvider.when('/analysis', {templateUrl: 'partials/analysis/index.html', controller: 'analysisCtrl'});
  $routeProvider.when('/setting', {templateUrl: 'partials/setting/index.html', controller: 'settingCtrl'});
  $routeProvider.otherwise({redirectTo: '/operation'});
}]);
