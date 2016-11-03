(function() {
  'use strict';

  angular
      .module('app.core')
      .factory('congregation', congregation);

  congregation.$inject = ['$firebaseArray'];
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
