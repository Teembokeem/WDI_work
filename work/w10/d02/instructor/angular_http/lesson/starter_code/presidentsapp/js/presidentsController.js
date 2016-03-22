(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = [];

  function PresidentsController(){
    this.all = [
      {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
      {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
      {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
      {"name": "Mike", "start": 1949, "end": 1947 }
    ];
    this.addPresident = addPresident;
    this.newPresident = {};

    function addPresident(){
      this.all.push(this.newPresident);
      this.newPresident = {};
    }
  }
})();
