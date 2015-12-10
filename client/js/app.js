var myApp = angular.module('myApp', [
    'ngRoute']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $loationProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', container: 'contactController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', container: 'aboutController'});
        $loationProvider.html5Mode({enabled: true, requireBase: false});
        
    }]);