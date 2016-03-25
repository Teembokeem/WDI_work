(function() {
  "use strict";

  angular
      .module("rokoApp")
      .controller("PledgesController", PledgesController);

  PledgesController.$inject = ["$state", "userDataService", "$log", "$http"];

  function PledgesController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;

    vm.pledges = [];

    vm.newPledge = {
      content: "",
      category: "Choose Category"
    };

    vm.editPledge = {
      content: "",
      category: "Choose Category"
    }

    vm.deletePledge  = deletePledge;
    vm.updatePledge  = updatePledge;
    vm.postPledge    = postPledge;
    vm.resetEditForm = resetEditForm;

    getPledges();

    function getPledges() {
      $http.get('http://localhost:3000/api/pledges').then(function(response) {
        vm.pledges = response.data;
      }, function(errRes) {
        console.error('Error gathering pledges!', errRes);
      });
    }

    function deletePledge(id) {
      $http.delete('http://localhost:3000/api/pledges/' + id).then(function(response) {
        console.log(response);
      }, function(errRes) {
        console.error('Error deleting pledge!', errRes);
      }).then(getPledges);
    }

    function postPledge() {
      if (vm.newPledge.category === "Choose Category") {
        $log.info("You must choose a category!");
      } else {
        $http.post('http://localhost:3000/api/pledges', vm.newPledge)
        .then(getPledges)
        .then(function(response) {
          vm.newPledge = {
            content: "",
            category: "Choose Category"
          };
        });
      }
    }

    function updatePledge(id) {
      if (vm.editPledge.category === "Choose Category") {
        $log.info("You must choose a category!");
      } else {
        $http.put('http://localhost:3000/api/pledges/' + id, vm.editPledge).then(function(response) {
          vm.editPledge = {
            content: "",
            category: "Choose Category"
          };
        }, function(errRes) {
          console.log('Error updating pledge!', errRes);
        }).then(getPledges);
      }
    }

    function resetEditForm() {
      vm.pledgeCategory = '';
      vm.pledgeName = '';
      vm.editPledge = {
        content: "",
        category: "Choose Category"
      };
    }

  }

})();
