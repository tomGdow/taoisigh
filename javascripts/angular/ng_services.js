'use strict';
/* Services */
angular.module('myApp.services', [])
.value('version', '0.1')
.constant('constants', {

	APP_TITLE: 'Irish Taoisigh',
	APP_OWNER: 'Tom Doe',
	TEMPLATE_ONE_TITLE: 'Irish Taoisigh',
	TEMPLATE_TWO_TITLE: 'Fianna Fail Taoisigh',
	TEMPLATE_THREE_TITLE: 'Fine Gael Taoisigh',
	APP_DESCRIPTION: 'An AngularJS Single Page Application',
	APP_VERSION: '1.0'

})
.factory('functions', ['$http', function ($http) {

	function activeNav (location){
		//make navbar active tab correspond with url hash
		function activeHelper(arg) {
			return arg.test(location);
		};

		var data = {
			"nav1" : {"url": "view1", "class": "home"},
			"nav2" : {"url": "view2", "class": "viewtwo"},
			"nav3" : {"url": "view3", "class": "viewthree"},
		}; 

		switch (true) {
			case activeHelper(RegExp(data.nav1.url)):
				return  data.nav1.class;
				break;
			case activeHelper(RegExp(data.nav2.url)):
				return data.nav2.class;
				break;
			case activeHelper(RegExp(data.nav3.url)):
				return data.nav3.class;
				break;
			default:
				return data.nav1.class;
		}
	}

	function retrieveJson(arg) {
		return $http({
			method: 'GET',
			url: 'https://' + arg
		}).then(function successCallback(response) {
			return response.data;
		}); 
	};

	function modifyString (str, replaceMe, replaceWith) {
		return	str.replace(replaceMe, replaceWith);
	}

	function fullDate(a) {
		return new Date(Date.parse(a));
	}
	function calcAge(dob, rip) {
		// requires fullDate()
		var ageDate;
		if (/^([-]{1,5})$/.test(rip)) {
			ageDate = new Date(Date.now() - fullDate(dob));
		} else {
			ageDate = new Date(fullDate(rip) - fullDate(dob));
		}
		return ageDate.getUTCFullYear() - 1970;
	}

	function timeInYears(begin, end) {
		const millisecond_to_year = 1000*60*60*24*365;
		var t = Math.floor((begin - end)/millisecond_to_year);
		if (isNaN(t)) {
			return '---';
		} else {
			return t;
		}
	}

	return {
		activeNav: activeNav,
		retrieveJson: retrieveJson,
		modifyString: modifyString,
		fullDate: fullDate,
		calcAge: calcAge,
		timeInYears: timeInYears,
	};

}])
.factory('dowapi', ['$http','functions',function($http, functions) {

	function modifyJson (data) {


		for (var i = 0; i < data.length; i++) {

			var birth_date = functions.fullDate((data[i]).date_of_birth);
			var taoiseach_begin_date  = functions.fullDate((data[i]).taoiseach_start);
			var taoiseach_end_date  = functions.fullDate((data[i]).taoiseach_finish);
			var dail_elect_date  = functions.fullDate((data[i]).dail_elected);
			var dail_leave_date  = functions.fullDate((data[i]).dail_leave);
			var age  = functions.calcAge((data[i]).date_of_birth, (data[i]).date_of_death);

			(data[i])["age_elected_taoiseach"] = functions.timeInYears(taoiseach_begin_date, birth_date);
			(data[i])["age_end_taoiseach"] = functions.timeInYears(taoiseach_end_date, birth_date);
			(data[i])["age_elected_dail"] = functions.timeInYears(dail_elect_date, birth_date);
			(data[i])["age_leave_dail"] = functions.timeInYears(dail_leave_date, birth_date);
			(data[i])["age"] = age;

			(data[i]).party=functions.modifyString((data[i]).party, "Cumann", "C");

		}

		return data;
	}

	return {
		modifyJson: modifyJson
	};

}]);
