(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'firebase',
    'ngMaterial',
    'app.core',
    'app.layout',
    'app.home',
    'app.layout.theme',
    'app.congregation-list'
  ]);
})();
