myApp.controller('signupController', ['$scope','Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    
    Api.Customer.query({}, function (data) {
       $scope.customers = data; 
    })
    
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, function(data){
            // $scope.form = {};
            $scope.customers.push(data);
        });
    }
    
    $scope.delete = function (index) {
        Api.Customer.delete({id: $scope.customers[index]._id}, function(data) {
            $scope.customers.splice(index, 1);
        })        
    }
}]);