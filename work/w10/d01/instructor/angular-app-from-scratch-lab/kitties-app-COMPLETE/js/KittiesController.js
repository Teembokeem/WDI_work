// IIFE
(function(){
	'use strict';

	angular
		.module("kittiesApp")
		.controller("KittiesController", KittiesController);

		KittiesController.$inject = []; // makes it minification safe

		function KittiesController(){
	  // We're naming this controller KittiesController, which we can see in that first argument above. We are allowed to have many controllers if we want to, and can bind them to different parts of our view. The function($scope) allows us to set the initial state of our scope -- in this case, we're declaring $scope.kittiesList below. If our users manipulate this app, $scope.kittiesList will change.

			var vm = this; // We refer to this as a capture variable. The capture variable ensures that when you reference "vm" it's always referencing the KittiesController.

			vm.kittiesList = [ // an array of objects, each with 5 properties
			{
				catName: 'Karl', // for display in the view with {{k.catName}}
				monthsOld: 5,  // for display in the view with {{k.monthsOld}}
				gender: 'boy',  // for display in the view with {{k.gender}}
				image: "images/carl.png", // path to the kitten's image, displayed in the view with <img x-ng-src={{k.image}}>
				adopted: true // boolean to separate adopted and available kittens via filter
			},
			{
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false
			},
			{
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false
			},
			{
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false
			}
		];  // end of kitties array

		this.deleteKitty = deleteKitty;

		function deleteKitty(k){
			// Find the true offset in the Kitties array
			var idx = this.kittiesList.indexOf(k);
			// Remove that exact Kitty
			this.kittiesList.splice(idx, 1);
			console.log(this.kittiesList);
		}

	}; // end of controller

})(); //Immediatley call our IFFE function
