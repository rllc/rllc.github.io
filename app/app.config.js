(function() {
  'use strict';

  var app = angular.module('app');

  app.config(configure);
  configure.$inject = ['$routeProvider'];
  /* @ngInject */
  function configure($routeProvider) {
    $routeProvider.
      when('/congregations', {
        templateUrl: 'app/congregation-list/congregation-list.template.html',
        controller: 'CongregationListController',
        controllerAs: 'vm'
      }).
      when('/congregations/:congregationId', {
        templateUrl: 'app/congregation-details/congregation-details.template.html',
        controller: 'CongregationDetailsController',
        controllerAs: 'vm'
      }).
      otherwise('/congregations');
  }
})();
