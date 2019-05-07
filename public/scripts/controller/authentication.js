'use strict';
var app = angular.module("Authentication", []);
app.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                  console.log(response.success)
                    AuthenticationService.SetCredentials(response.success);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
        $scope.logout = function () {
           AuthenticationService.ClearCredentials();
        };
    }]);
    'use strict';
    
