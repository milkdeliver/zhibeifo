var myApp = angular.module('myApp', [
    'ngRoute', 'ui.bootstrap']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $loationProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
        $loationProvider.html5Mode({enabled: true, requireBase: false});
        
    }]);