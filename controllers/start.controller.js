(function (angular) {
'use strict';

	angular.module('cricketApp')
	    .controller('startController', constructor);
	    	constructor.$inject = ['StatisticService','$scope'];
	    	function constructor(StatisticService,$scope) {
	    		var vm = this;
	    		vm.x = 'hello';
	        	vm.game = {
		     		country1: 'Bangladesh',
		     		country2: 'India',     		
		     		to_bowl: null
		     	};

		     	vm.setGame = function(game){
		     		if(game.to_bowl == game.country1){
				  		game.to_bat = game.country2;
				  	}else{
				  		game.to_bat = game.country1;
				  	}
				  	console.log(game);
					localStorage.setItem("teamData", JSON.stringify(game));
		     	}
	    	}

})(window.angular);