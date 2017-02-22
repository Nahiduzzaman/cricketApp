(function(angular) {
'use strict';
	
	angular.module('cricketApp')
		.controller('playController', constructor);
		    constructor.$inject = ['$stateParams','StatisticService','$scope','$window','$state'];
		    function constructor($stateParams,StatisticService,$scope,$window,$state) {
		    	var gameData = [];
		        $scope.resetData = function(){
		            console.log('removeItem');
		            $scope.gameData = localStorage.removeItem("gameData");
		            $scope.teamData = localStorage.removeItem("teamData");
		            $window.location.reload();
		        }
		      	
		      	$scope.teamData = JSON.parse(localStorage.getItem("teamData"));
		      	console.log('teamData',$scope.teamData);
		      
		      	$scope.bowl = function(){
		      		gameData = StatisticService.play();
		      		localStorage.setItem("gameData", JSON.stringify(gameData));
		            $scope.gameData = JSON.parse(localStorage.getItem("gameData"));
		      		console.log('gameData',$scope.gameData);
		            if($scope.gameData[$scope.gameData.length-1].score == 'WD' || $scope.gameData[$scope.gameData.length-1].score == 'NB' ){
		            $state.reload();
		          }              
		      	}

		        $scope.gameData = JSON.parse(localStorage.getItem("gameData")); //it shows when controller reinitialize after route changed

		        $scope.sendIndex = function(item,idx){
		            $scope.getStats = item;
		            console.log('getStats in  sendIndex',$scope.getStats);
		        }
		 
		      	$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
		      	console.log('getStats',$scope.getStats); 
		    }

})(window.angular);