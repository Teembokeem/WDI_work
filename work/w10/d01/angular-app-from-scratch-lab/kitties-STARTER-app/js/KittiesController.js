(function() {
'use strict'

angular
  .module('kittiesApp')
  .controller("kController", KittiesController);

  KittiesController.$inject = [];



  function KittiesController() {
    var vm = this;

    vm.adoptList = [
      {
        catName: 'Karl',
        monthsOld: 5,
        gender: 'boy',
        image: "images/carl.png",
        adopted: true,
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
    ];

    vm.addCat = addCat;
    vm.remove = removeCat;


    // vm.newCat = {
    //   catName: '',
    //   monthsOld: '',
    //   gender: '',
    //   adopted: false
    // };

    function addCat() {
      vm.adoptList.push({
        catName: vm.newCat.catName,
        monthsOld: vm.newCat.monthsOld,
        gender: vm.newCat.gender,
        adopted: false
      });
      vm.newCat.catName = '';
      vm.newCat.monthsOld = '';
      vm.newCat.gender = '';
    }

    function removeCat(index) {
      vm.adoptList.splice(index, 1)
    }



  }


})();
