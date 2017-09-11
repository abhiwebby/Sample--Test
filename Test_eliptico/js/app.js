
var app = angular.module("myApp", ['chart.js']);

	app.controller("mainCtrl", function($scope, $http){
		$http.get("https://api.myjson.com/bins/5bdb3").then(function(response){
			$scope.yogaLists = response.data;
		});

		$scope.showMe = false;
    	$scope.myFunc = function(){
    		$scope.showMe = !$scope.showMe;
    	}

   	});

	app.controller("subCtrl", function($scope, $http){
		$http.get("https://api.myjson.com/bins/47axv").then(function(response){
			$scope.yogaInnerLists = response.data;
		});
	});

	app.controller("BarCtrl", function($scope, $http){

		$scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  		$scope.series = ['CurrentYear', 'PreviousYear'];

  		$scope.data = [
		    [30001, 28889, 39000, 29084, 29084, 19080, 24854],
		    [29015, 26188, 40100, 27055, 21055, 24055, 26055]
		];

	});

	app.controller("LineCtrl", function($scope, $http){

		$http.get("https://api.myjson.com/bins/5bdb3").then(function(resp){
			$scope.yearLists = resp.data;
		});

		$scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
		$scope.data = [
		    [65, 59, 80, 81, 56, 55, 40]
		];
		
	});

	