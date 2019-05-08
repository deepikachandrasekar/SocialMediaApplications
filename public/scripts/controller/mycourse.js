'use strict';
var app = angular.module("Mycourse", []);
app.controller('MyCourseController', ['$scope', '$rootScope', '$location', 'MycourseService',
  function ($scope, $rootScope, $location, MycourseService) {
    // reset login status
    /** ******
    Controller to call the Modules API
    ******* */
    MycourseService.getModule($rootScope.globals.currentUser.course_id, function (response) {
      if (response.success) {
        $scope.modulesData = response.success
      } else {
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });


  }
]);
'use strict';