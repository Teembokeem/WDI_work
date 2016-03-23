(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;

    vm.all = [];
    vm.addPresident = addPresident;
    vm.newPresident = {};
    vm.updatePresident = updatePresident;
    vm.deletePresident = deletePresident;

    function getPrezzies() {
      $http
        .get('http://localhost:3000/api/presidents')
        .then(function(res) {
          vm.all = res.data.presidents
        }, function(err) {

        })
    }

    function addPresident(){
      $http
        .post('http://localhost:3000/api/presidents', vm.newPresident)
        .then(function(res) {
          vm.all.push(res.data.president);
          vm.newPresident = {};
        }, function(err) {
          $log.info(err);
        })
    }


    function updatePresident(president, index) {
      president.uncovered = !president.uncovered;
      $http
        .put('http://localhost:3000/api/presidents/' + president._id, president)
        .then(function(res) {
          vm.all.splice(index, 1, res.data.president)
        }, function(err) {
          $log.info(err)
        })
    }

    function deletePresident(id, index) {
      $http
        .delete('http://localhost:3000/api/presidents/' + id)
        .then(function(res) {
          vm.all.splice(index, 1)
        }, function(err) {
          $log.info(err);
      })
    }

    getPrezzies();
  }
})();
