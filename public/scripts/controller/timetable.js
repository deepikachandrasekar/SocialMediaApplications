'use strict';
var app = angular.module("Timetable", []);
app.controller('TimetableController', ['$scope', '$rootScope', '$location', 'TimetableService', '$sce',
  function ($scope, $rootScope, $location, TimetableService, $sce, NgMap) {
    // reset login status
    $scope.getTrustedUrl = function (src) {
      return $sce.trustAsResourceUrl(src);
    }
    TimetableService.getTimetable($rootScope.globals.currentUser.course_id, function (response) {
      if (response.success) {
        for (var i = 0; i < response.success.length; i++) {

        }
        $scope.timetableData = response.success
      } else {
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  }
]);
'use strict';