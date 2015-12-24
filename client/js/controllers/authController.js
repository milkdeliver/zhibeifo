myApp.controller('authController', function($scope, $http, $rootScope, $location){
    $scope.user = {username: "", password: ""};
    $scope.error_message = "";
    $scope.login = function(){
        $http.post('/auth/login', $scope.form)
        .success(function(data){
            $scope.form = {}; 
            if(data.state == "success"){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/about');
            }else{
                $scope.error_message = data.message;
            }
            
        })
    }
    
    $scope.register = function(){
        $http.post('/auth/signup', $scope.form)
        .success(function(data) {
            $scope.form = {}; 
            if(data.state == "success"){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/about');
            }else{
                $scope.error_message = data.message;
            }
        })
    }
    
});