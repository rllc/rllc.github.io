(function() {
  'use strict';

  angular
      .module('app.home')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$mdSidenav', 'congregation'];
    /* @ngInject */
    function HomeController($scope, $mdSidenav, congregation) {
      var vm = this;
      activate();

      function activate() {
        console.log("home controller activated");
        vm.congregations = congregation.query();
      }

      vm.toggleSideNav = function() {
        $mdSidenav('left').toggle();
      };

    }
})();
