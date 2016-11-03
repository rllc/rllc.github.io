(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'firebase',
    'ngMaterial',
    'core.congregation',
    'app.congregation-list',
    'app.congregation-details'
  ]);
})();
