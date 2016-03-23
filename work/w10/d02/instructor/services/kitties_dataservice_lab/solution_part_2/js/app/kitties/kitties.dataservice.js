(function(){
  "use strict";

  angular
    .module("app")
    .factory("kittiesDataService", kittiesDataService);

  kittiesDataService.$inject = ["$log"];

  function kittiesDataService($log) {
    return {
      kittiesList: [
        {
          catName: 'Karl',
          monthsOld: 5,
          gender: 'boy',
          image: "images/carl.png",
          adopted: true
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
      ],
      deleteKitty: deleteKitty
    };

    function deleteKitty(kitten){
      var idx = this.kittiesList.indexOf(kitten);
      var goneKitty = this.kittiesList.splice(idx, 1)[0];

      $log.info("Deleted kitty:", goneKitty);
      $log.info("Kitties remaining:", this.kittiesList);
    }
  }

})();
