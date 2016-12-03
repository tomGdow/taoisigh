angular.module('myApp.controllers', ['ngSanitize' 
])
.controller('MyNavCtrl', ['$scope', '$route', '$location','$sce','functions',
		function ($scope, $route, $location, $sce, functions) {

			var vm = this;
			$scope.$watch(function(vm){
				return $location.path();
			}, function(value){
				vm.active=functions.activeNav(value);
			});
		}
])
.controller('MyCtrl1', ['constants', 'functions', 'dowapi',
		function (constants, functions, dowapi) {

			var vm = this;
			vm.templateTitle = constants.TEMPLATE_ONE_TITLE; 
			functions.retrieveJson('dowapi.tomgdow.com/taoisigh').then(function(data) {
				vm.taoisigh  = dowapi.modifyJson(data);
			});
		}                         
])
.controller('MyCtrl2', ['$scope', 'constants', 'functions','dowapi',
		function ($scope, constants, functions, dowapi) {

			var vm = this;
			vm.templateTitle = constants.TEMPLATE_TWO_TITLE; 
			functions.retrieveJson('dowapi.tomgdow.com/taoisigh/fiannafail').then(function(data) {
				vm.taoisigh_fianna_fail = dowapi.modifyJson(data);
			});
		}
])
.controller('MyCtrl3', ['$scope', 'functions', 'constants', '$sce','dowapi',
		function ($scope, functions, constants, $sce, dowapi) {

			var vm = this;
			vm.templateTitle = constants.TEMPLATE_THREE_TITLE; 
			functions.retrieveJson('dowapi.tomgdow.com/taoisigh/finegael').then(function(data) {
				vm.taoisigh_fine_gael = dowapi.modifyJson(data);
			});
		}
]);
