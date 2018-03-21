var pokemonApp = angular.module('blo', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokemonApp.constant('POKEAPI', 'https://pokeapi.co');

pokemonApp.config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

//ServicePokemon
pokemonApp.factory('Pokemon', ['$resource',
  function ($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:id/", {id: '@id'});
  }]
);

//ServicePokemon1 : definit les setters et getters pr faire la communication
pokemonApp.service('PokService', ['$resource',
  function ($resource) {
    this.setId = function (idp) {
      this.id = idp
      this.change()
    };

    this.setChange = function (toto) {
      this.change = toto
    };

    this.getId = function () {
      return this.id;
    };
    this.setName = function (name) {
      this.name = name
    };

    this.getName = function () {
      return this.name;
    };
  }]);

//quand il charge html au  debut il va au controleur de js et ca marche pas au debut il est vide cqr onq pqs selectionne selected du coup apres quqnd il va appeler
//qun lutilisateur selctionne il va appele setid et set id appele change ol vq fpuiller dqns le code pour trouver sa definition et change c une fct aui est definie
// dans le 2eme controleur du coup il lqppele et il nous initiqlise lq vqleur

pokemonApp.controller('myCtrl', function ($scope, $http, Pokemon, PokService) {

  $scope.myWelcome = [];

  $http.get("https://pokeapi.co/api/v2/pokedex/1").then(function (response) {
    $scope.myWelcome = response.data.pokemon_entries;
  }, function (response) {
    $scope.myWelcome = response.statusText;
    console.log("details id");
  });

  $scope.$watch('selected', function () {
    PokService.setId($scope.selected);
  })
});

//Controleur
pokemonApp.controller('PokemonCtrl', function ($scope, Pokemon, PokService) {
  //des que je clique sur le button il me linstancie obligatoirement du coup je le recupere ensuite, avant il met undefined car il las pas creer obligatoireùent

// mettre à jour les information des pokémons en modifiant le l
  PokService.setChange(function () {
    $scope.pokemon_structure = Pokemon.get({id: PokService.getId()});
  });


});

//$scope.pokemon_structure = Pokemon.get({ id : $scope.PokemonId });}






