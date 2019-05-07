'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Mycourse', []);
angular.module('Timetable', []);

angular.module('deepika-app', [
    'Authentication',
    'Home',
    'Mycourse',
    'ngRoute',
    'Timetable',
    'ngCookies'
  ])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/login.html',
        hideMenus: true
      })

      .when('/', {
        controller: 'HomeController',
        templateUrl: 'html/home.html'
      })
      .when('/module', {
        controller: 'MyCourseController',
        templateUrl: 'html/mycourse.html'
      })
      .when('/timetable', {
        controller: 'TimetableController',
        templateUrl: 'html/timetable.html'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
          $location.path('/login');
        }
        if ($location.path() === '/login' && $rootScope.globals.currentUser) {
          $location.path('/');
        }
      });
    }
  ]);