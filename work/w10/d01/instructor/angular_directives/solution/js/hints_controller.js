(function() {
  'use strict';

  angular
      .module("hintApp")
      .controller("HintsController", HintsController);

  HintsController.$inject = [];

  function HintsController() {
    var vm = this;

    // seed data from the mind of Tilda
    vm.allHints = [
        {id: 0,wisdom: "Not blinking isn't an option, but an advantage.", incorporated: false},
        {id: 1,wisdom: "You should only practice throat singing in the evening, when the sunlight is amber.", incorporated: false},
        {id: 2,wisdom: "The eclipse can give much power.", incorporated: false},
        {id: 3,wisdom: "Walk until no matter encroaches upon you. Shed your clothes and lay here. You are lonely/complete.", incorporated: false}
    ];

    // this will add our new function as a property on our controller
    vm.addHint             = addHint;
    vm.ids                 = 4;
    vm.remove              = remove;
    vm.numberToIncorporate = numberToIncorporate;
    vm.newHint             = {
                              id: 0,
                              wisdom: '',
                              incorporated: false
                            };

    function addHint() {
      vm.allHints.push({
        id:           vm.ids,
        wisdom:       vm.newHint.wisdom,
        incorporated: false
      });
      vm.ids++;
      vm.newHint.wisdom = '';
    }

    function remove(removeHint) {
      vm.allHints = vm.allHints.filter(function(hint) {
        return hint.id != removeHint.id;
      });
    };

    function numberToIncorporate() {
      return vm.allHints.filter(function(hint) {
        return !hint.incorporated;
      }).length;
    };
  }
})();


