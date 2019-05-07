'use strict';
var app = angular.module("Authentication", []);
app.controller('LoginController', ['$scope', '$rootScope', '$location', 'AuthenticationService',
  function ($scope, $rootScope, $location, AuthenticationService) {
    // reset login status
        /** ******
        Controller to call the check pic API
        ******* */
    $scope.checkPic = function (email) {
      AuthenticationService.GetPic(email, function (response) {
        if (response.success) {
          $scope.name = response.success.name
          $scope.pic = response.success.profile_picture
        }
      });
    }
    
        /** ******
        Controller to call the Login API
        ******* */
    $scope.login = function () {
      $scope.dataLoading = true;
      AuthenticationService.Login($scope.email, $scope.password, function (response) {
        if (response.success) {
          AuthenticationService.SetCredentials(response.success);
          $location.path('/');
        } else {
          $scope.error = response.message;
          $scope.dataLoading = false;
        }
      });
    };
    
        /** ******
        Controller to call the Logout API
        ******* */    
    
    $scope.logout = function () {
      AuthenticationService.ClearCredentials();
    };
  }
]);
'use strict';
