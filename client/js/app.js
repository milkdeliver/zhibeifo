var myApp = angular.module('myApp', [
    'ngRoute', 'ui.bootstrap','ngResource']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $loationProvider) {
        $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: 'aboutController'});
        $loationProvider.html5Mode({enabled: true, requireBase: false});
        
        $routeProvider.when('/projects/signup', {
            templateUrl: '/partials/projects/signup.html',
            controller: 'signupController'
        }); 
        // $routeProvider.when('/projects/:project', {
        //     templateUrl: function(params) {
        //     return '/partials/projects/' + params.project + '.html'
        // },
        //     controller: 'customerController'
        // });
        
    }]);