(function() {
  'use strict';

  angular
      .module('app.congregation-list')
      .controller('CongregationListController', CongregationListController);


    CongregationListController.$inject = ['$scope', 'congregation'];
    /* @ngInject */
    function CongregationListController($scope, congregation) {
      var vm = this;
      activate();

      function activate() {
        console.log("congregation list controller activated");

        vm.congregations = congregation.query();
        vm.orderProp = 'name'
      }

      vm.openLeftMenu = function($mdSidenav) {
        $mdSidenav('left').toggle();
      };

    }
})();
