(function() {
  'use strict';

  angular
      .module('core.congregation')
      .factory('congregation', congregation);

  /* @ngInject */
  function congregation($firebaseArray) {
    var service = {
      query: query
    };
    return service;

    function query() {
      console.log("querying congregation");
      var ref = firebase.database().ref().child("congregations");
      return $firebaseArray(ref);
    }
  }
})();
