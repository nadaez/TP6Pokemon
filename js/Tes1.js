var pokeApp3 = angular.module('blo', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp3.constant('POKEAPI', 'http://pokeapi.co');

pokeApp3.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);



  //Service
  /**
pokeApp3.factory('User', ['$resource','$http',
    function($http){
			$http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response;
 })
		  // return $resource('http://pokeapi.co/api/v2/pokedex/1', {id:'@id'});
		   //('http://pokeapi.co/api/v2/pokedex', {userId:'@id'});
   
   }]);
**/






/**

pokeApp3.controller("HoreCtrl",function($scope,$http,$stateParams){
  $http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response;
 }), function errorCallback(response) {
      console.log(response);

      alert('error');
    })
});
	**/
	
	pokeApp3.controller('myCtrl', function($scope, $http) {
    $http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
        $scope.myWelcome = response.data;
    }, function(response) {
        $scope.myWelcome = response.statusText;
    });
}); 
	
	
	
	
	
	/***
	
	
	
	
	
	
	
	//Controleur

	
pokeApp3.controller('UsersCtrl',function($scope,User){
    $scope.user = User.get({id:3});
}
   /** $scope.validate(user) {
      user.$update();
    }
	
    $scope.delete(user) {
      user.$delete();
    }
	
    $scope.create(newUserName) {
      var user = new User();
      user.name = newUserName;
      user.$save();
      $scope.users.push(user);
    }**/
	
  
    

    
