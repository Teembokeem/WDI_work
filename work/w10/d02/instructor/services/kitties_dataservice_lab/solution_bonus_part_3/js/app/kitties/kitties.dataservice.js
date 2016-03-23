(function(){
  "use strict";

  angular
    .module("app")
    .factory("kittiesDataService", kittiesDataService);

  kittiesDataService.$inject = ["$log"];

  function kittiesDataService($log) {
    var defaultList = [
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

        current = [],

        // in order to maintain referential integrity, bind to an
        // object that contains the data as properties, so that we
        // can simply re-assign them, instead of having to
        // mutate them…
        kittiesLists = {
          current: current,
          default: defaultList
        };

    // populate the current list with the default list when the page
    // is loaded
    reset();

    return {
      lists:       kittiesLists,
      deleteKitty: deleteKitty,
      reset:       reset
    };

    function deleteKitty(k) {
      var idx       = kittiesLists.current.indexOf(k);
      var goneKitty = kittiesLists.current.splice(idx, 1)[0];

      $log.info("Deleted kitty:", goneKitty);
      $log.info("Kitties remaining:", kittiesLists.current);
    }

    function reset() {
      kittiesLists.current = angular.copy(kittiesLists.default);
      $log.info("Reseting kitty data!");
    }
  }

})();
