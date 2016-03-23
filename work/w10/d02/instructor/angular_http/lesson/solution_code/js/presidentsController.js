(function() {
  'use strict';

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){

    var vm = this;

    vm.all             = [];
    vm.addPresident    = addPresident;
    vm.newPresident    = {};
    vm.deletePresident = deletePresident;
    vm.uncover         = uncover;

    getPresidents();

    function getPresidents() {
      $http
        .get('http://localhost:3000/api/presidents')
        .then(function(res) {
          vm.all = res.data.presidents;
        }, function(err) {
          console.log(err);
      });
    }

    function addPresident(){
      $http
        .post('http://localhost:3000/api/presidents', vm.newPresident)
        .then(function(res) {
          vm.all.push(res.data.president);
          vm.newPresident = {};
        }, function(err) {
          console.log(err);
        });
    }

    function deletePresident(rmPresident) {
      var id = rmPresident._id;
      $http
        .delete(`http://localhost:3000/api/presidents/${id}`)
        .then(function(res) {
          console.log(res.data.message);
          vm.all = vm.all.filter(function(pres) {
            return pres._id != id;
          })
        },
        function(err) {
          console.log(err);
        });
    };

    function uncover(putPresident) {
      putPresident.uncovered = !putPresident.uncovered;
      $http
        .put(`http://localhost:3000/api/presidents/${putPresident._id}`, putPresident)
        .then(function(res) {
          console.log(res.data.message);
        },
        function(err) {
          console.log(err);
        });
    };
  };
})();
