var myApp = angular.module('myApp', [
    'ngRoute', 'ui.bootstrap','ngResource', 'ngAnimate']).
    run(function($rootScope, $http, $location){
        $rootScope.authenticated = false;
        $rootScope.current_user = "";
        
        $rootScope.signout = function(){
            $http.get('auth/signout');
            $rootScope.authenticated = false;
            $rootScope.current_user = "";
            $location.path('/home');
            
        }
    })
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $loationProvider) {
       
        
        $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
        // $loationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/recording', {templateUrl: '/partials/recording.html', controller: 'recordingController'});

        $routeProvider.when('/projects/signup', {
            templateUrl: '/partials/projects/signup_1.html',
            controller: 'authController'
        }); 
        $routeProvider.otherwise({redirectTo: '/home'});
        // $routeProvider.when('/projects/:project', {
        //     templateUrl: function(params) {
        //     return '/partials/projects/' + params.project + '.html'
        // },
        //     controller: 'customerController'
        // });
        
    }])
    .filter('startFrom', function() {
        return function(data, start){
            return data.slice(start);
        }
    });