var pokeApp3 = angular.module('blo', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp3.constant('POKEAPI', 'https://pokeapi.co');


pokeApp3.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

//Q11:

  //ServicePokemon
  pokeApp3.factory('Pokemon', ['$resource',
    function($resource){
      return $resource("https://pokeapi.co/api/v2/pokemon/:id/", {id:'@id'}); }]
  );



//ServicePokemon1 : definit les setters et getters pr faire la communication



  pokeApp3.service('PokService', ['$resource',
    function($resource){

  this.setId = function(idp) {
    this.id = idp
  };
  this.getId = function() {
    return this.id;
  };
  this.setName = function(name) {
    this.name = name
  };
  this.getName = function() {
    return this.name;
  };

}]);




  /**
  pokemonApp.factory('User', ['$resource','$http',
    function($http){
			$resource('http://pokeapi.co/api/v2/pokedex/1', {id:'@id'})
		//	$http.get("https://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response;
 })
		  // return $resource('http://pokeapi.co/api/v2/pokedex/1', {id:'@id'});
		   //('http://pokeapi.co/api/v2/pokedex', {userId:'@id'});

   }]);
**/

/**

pokemonApp.controller("myCtrl",function($scope,$http,$stateParams){
  $resource('http://pokeapi.co/api/v2/pokedex/1', {id:'@id'}
  $http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response;
 }), function errorCallback(response) {
      console.log(response);

      alert('error');
    })
});
	**/

	//Q10 :

		pokeApp3.controller('myCtrl', function($scope, $http,Pokemon,PokService) {

		$scope.myWelcome=[];

    $http.get("https://pokeapi.co/api/v2/pokedex/1").then(function(response) {
        $scope.myWelcome = response.data.pokemon_entries;
    }, function(response) {
        $scope.myWelcome = response.statusText;
    });

    $scope.$watch('selected', function(value) {
        $scope.pokemonselected = value;
        PokService.setId($scope.pokemonselected);
});
console.log(	$scope.pokemonselected)  ;

    $scope.getInfo= function() {

  PokService.setId($scope.pokemonselected);

}

});


	//Controleur

pokeApp3.controller('PokemonCtrl',function($scope,Pokemon,PokService){
  //des que je clique sur le button il me linstancie obligatoirement du coup je le recupere ensuite, avant il met undefined car il las pas creer obligatoireùent

// mettre à jour les information des pokémons en modifiant le l


//$scope.pokemon_structure = Pokemon.get({ id : $scope.PokemonId });}
//$scope.pokemon_structure = Pokemon.get({ id : });

return  null ; });




