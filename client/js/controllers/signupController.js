myApp.controller('signupController', ['$scope','Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    $scope.users = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    Api.Customer.query({}, function (data) {
       $scope.customers = data; 
    })
    
    Api.User.query({}, function (data) {
       $scope.users = data; 
    })
    
    $scope.addToUserDatabase = function(){
        console.log($scope.form);
        var newUser = {};
        newUser.username = $scope.form.username;
        newUser.password = $scope.form.password;
        newUser.email = $scope.form.email;
        Api.User.save({}, newUser, 
        function(data){
            // $scope.form = {};
            $scope.users.push(data);
        },
        function(err) {
            bootbox.alert('Error: ' + err);
        });
    }
    
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, 
        function(data){
            // $scope.form = {};
            $scope.customers.push(data);
        },
        function(err) {
            bootbox.alert('Error: ' + err);
        });
    }
    
    $scope.delete = function (index) {
        bootbox.confirm("Are you want to delete this customer?", function(answer) {
            if(answer == true){
              Api.Customer.delete({id: $scope.customers[index]._id}, function(data) {
                  $scope.customers.splice(index, 1);
              });   
            }
            // body...
        })
              
    }
    
    $scope.deleteUser = function (index) {
        bootbox.confirm("Are you want to delete this User?", function(answer) {
            if(answer == true){
              Api.User.delete({id: $scope.users[index]._id}, function(data) {
                  $scope.users.splice(index, 1);
              });   
            }
            // body...
        })
              
    }
}]);