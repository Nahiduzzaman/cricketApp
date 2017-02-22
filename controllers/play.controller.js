(function(angular) {
'use strict';
	
	angular.module('cricketApp')
		.controller('playController', constructor);
		    constructor.$inject = ['$stateParams','StatisticService','$scope','$window','$state'];
		    function constructor($stateParams,StatisticService,$scope,$window,$state) {
		    	var vm = this;
		    	var gameData = [];
		        vm.resetData = function(){
		            console.log('removeItem');
		            vm.gameData = localStorage.removeItem("gameData");
		            vm.teamData = localStorage.removeItem("teamData");
		            $window.location.reload();
		        }
		      	
		      	vm.teamData = JSON.parse(localStorage.getItem("teamData"));
		      	console.log('teamData',vm.teamData);
		      
		      	vm.bowl = function(){
		      		gameData = StatisticService.play();
		      		localStorage.setItem("gameData", JSON.stringify(gameData));
		            vm.gameData = JSON.parse(localStorage.getItem("gameData"));
		      		console.log('gameData',vm.gameData);
		            if(vm.gameData[vm.gameData.length-1].score == 'WD' || vm.gameData[vm.gameData.length-1].score == 'NB' ){
		            $state.reload();
		          }              
		      	}

		        vm.gameData = JSON.parse(localStorage.getItem("gameData")); //it shows when controller reinitialize after route changed

		        vm.sendIndex = function(item,idx){
		            vm.getStats = item;
		            console.log('getStats in  sendIndex',vm.getStats);
		        }
		 
		      	vm.getStats = StatisticService.get($stateParams.ball,$stateParams.over,vm.gameData);
		      	console.log('getStats',vm.getStats); 
		    }

})(window.angular);