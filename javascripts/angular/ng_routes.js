'use strict'
// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1',  
      {templateUrl: 'html/templates/template1.html',  controller: 'MyCtrl1', controllerAs: 'ct1'});
  $routeProvider.when('/view2', 
      {templateUrl: 'html/templates/template2.html',  controller: 'MyCtrl2', controllerAs: 'ct2'});
  $routeProvider.when('/view3',
      {templateUrl: 'html/templates/template3.html',  controller: 'MyCtrl3', controllerAs: 'ct3'}); //products 
  $routeProvider.when('/view4', 
      {templateUrl: 'html/templates/template4.html',  controller: 'MyCtrl4', controllerAs: 'ct4'}); // products-new
  $routeProvider.when('/view5', 
      {templateUrl: 'html/templates/template5.html',  controller: 'MyCtrl5', controllerAs: 'ct5'}); // products-show
  $routeProvider.when('/view6', 
      {templateUrl: 'html/templates/template6.html',  controller: 'MyCtrl6', controllerAs: 'ct6'}); // products-edit
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);



