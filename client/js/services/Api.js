myApp.factory('Api', ['$resource', function($resource){
   return {
       Customer: $resource('/api/customers/:id', {id:'@id'}),
       User: $resource('/api/users/:id', {id:'@id'}),
       Record: $resource('/api/records/:id', {id:'@id'})
   }
}]);