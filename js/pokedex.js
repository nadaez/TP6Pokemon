var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);




/**

//Création de service via factory pour encapsuler notre appel à $resource
pokeApp.factory('PokeFactory',function($resource) {
	return $resource("http://pokeapi.co/api/v1/type/:id");
}

//Création de service qui utilse $resource(service deja encapsulé) pour afficher les info de pokemons
 
pokeApp.service('PokeService', function($resource) {
	this.setId = function(idp) {
		this.id = idp
	};
	this.getId = function() {
		return this.id;
	};
	this.setName = function(name2) {
		this.name = name2;
	};
	this.getName = function() {
		return this.name;
};
});
**/





 pokeApp.controller('ExampleController',['$scope',function($scope) {
 
// $scope.pokemons =[];

 
 $scope.pokemons = [{id:1,name : "Pikatcho"},{id:2,name : "Pikatcho2"},{id:3,name : "PiTOTY"}];
 
 	$scope.getInfo= function() {	
	$scope.infowithoutLog = $scope.selected;
}
 }
 ]);






/**
 
 //Controlleur de service resource 


   pokeApp.controller('pokeServiceController', function($scope, PokeService,
		PokeFactory, $http) {

	pokeService.setId(8);

	$scope.pake = PokeFactory.get({
		id : PokeService.getId()
	});
	console.log($scope.pake);
	

    }); // get() returns a single pokemon


  

/**
var myModule = angular.module('myModule', [HttpModule]);
myModule.factory('serviceId', function() {
  var shinyNewServiceInstance;
  // factory function body that constructs shinyNewServiceInstance
  return shinyNewServiceInstance;
  
  
  
   
  //$scope.pokemons = PokeFactory.query();
  
  
 	// recupération des données via $http
	$http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response.data;
 }}
 ]);
});**/






  
 	//IdP: <input type="text" ng-model='idPok'></br> Nom: <input
		//type="text" ng-model='nomPok'> 
