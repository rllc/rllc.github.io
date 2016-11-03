(function() {
  'use strict';

  angular
      .module('app.congregation-details')
      .controller('CongregationDetailsController', CongregationDetailsController);


    CongregationDetailsController.$inject = ['$scope', 'Congregation'];
    /* @ngInject */
    function CongregationDetailsController($scope, Congregation) {
      var vm = this;
      activate();

      function activate() {
        console.log("congregation details controller activated");

        vm.congregations = Congregation.query();
        vm.orderProp = 'name'
      }
    }
})();
