'use strict';

angular.module('Mycourse')

  .factory('MycourseService', ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
      var service = {};
        /** ******
        Get all the modules Service
        ******* */
      service.getModule = function (courseId, callback) {
        $http({
            url: 'http://localhost:3000/api/modules',
            method: "POST",
            data: {
              'courseId': courseId
            }
          })
          .then(function (response) {
              console.log(response.data.result)
              if (response.data.result == 'Incorrect Course Id') {
                response.message = response.data.result;
              } else {
                var postData = {
                  success: response.data.result
                }
              }
              callback(postData);
            },
            function (response) { // optional
              // failed
            });
      };


      return service;
    }
  ])
