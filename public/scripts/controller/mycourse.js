'use strict';
var app = angular.module("Mycourse", []);
app.controller('MyCourseController',
    ['$scope', '$rootScope', '$location', 'MycourseService',
    function ($scope, $rootScope, $location, MycourseService) {
        // reset login status

            MycourseService.getModule($rootScope.globals.currentUser.course_id, function(response) {
                if(response.success) {
                //  console.log(response)
                  $scope.modulesData = response.success
                  console.log(  $scope.modulesData)
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });


    }]);
    'use strict';
