(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {};
  core.value('config', config);
  core.config(configure);

  configure.$inject = ['$locationProvider' ,'$routeProvider'];
  /* @ngInject */
  function configure($locationProvider ,$routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/congregations', {
        templateUrl: 'app/congregation-list/congregation-list.template.html',
        controller: 'CongregationListController',
        controllerAs: 'vm'
      }).
      otherwise('/congregations');

  }
})();
