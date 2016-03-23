(function(){
  "use strict";

  angular
    .module("app")
    .factory("kittiesDataService", kittiesDataService);

  kittiesDataService.$inject = ["$log", "$window"];

  function kittiesDataService($log, $window) {
    var localStorage = $window.localStorage,
        defaultList  = [
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

        // the cached version of the list we have the controller
        // bind to…
        kittiesList;

    return {
      getKitties:  getKitties,
      adoptKitty:  adoptKitty,
      deleteKitty: deleteKitty,
      reset:       reset,
    };

    function getKitties() {
      var storedKitties = localStorage.getItem("kittiesList");

      // if there is no stored kitties list, initialize it with
      // a reset
      if (!storedKitties) {
        $log.info("No kitties found, re-initializing storage!");
        reset();
        storedKitties = localStorage.getItem("kittiesList");
      }

      // if the kitties list in storage is not the current list,
      // set the current list to the saved version
      if (!angular.equals(kittiesList, retrieve()))
        load();

      // always return the cached version, not a newly parsed
      // copy of the version stored in localStorage, to avoid
      // angular's fear of objects that are changing
      // (the "$rootScope infdig" error)
      return kittiesList;
    }

    function adoptKitty(kitty, isAdopted) {
      var idx = kittiesList.indexOf(kitty);

      // update adopted status
      kittiesList[0].isAdopted = isAdopted;

      // save the change in localstorage
      store(kittiesList);
    }

    function deleteKitty(kitty) {
      var idx       = kittiesList.indexOf(kitty);
      var goneKitty = kittiesList.splice(idx, 1)[0];

      // save the change in localstorage
      store(kittiesList);

      $log.warn("Deleted kitty:", goneKitty);
      $log.info("Kitties remaining:", kittiesList);
    }

    /* ******************** *
     * LOCALSTORAGE HELPERS *
     * ******************** */

    function store(kittiesList) {
      localStorage.setItem("kittiesList", angular.toJson(kittiesList));
      $log.info("Kitty data saved!");
    }

    function reset() {
      store(defaultList);
      $log.info("Reseting kitty data!");
    }

    function retrieve() {
      return angular.fromJson(localStorage.getItem("kittiesList"));
      $log.info("Kitty data retrieved!");
    }

    function load() {
      kittiesList = retrieve();
      $log.info("Loading kitty data!");
    }
  }

})();
