(function() {
  'use strict';

  angular
    .module('app.layout.theme', [
      'app.layout'
    ])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
    });

})();
