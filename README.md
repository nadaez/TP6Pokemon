# TP6 Pokedex (AngularJS)
```
                                       Un jour je serai le meilleur codeur
                                       
       Je développerai sans répit       
       Je ferai tout pour être vainqueur       
       Et gagner les défis
       Je parcourrai le web entier         
       Traquant avec espoir      
       Les frameworks et leurs mystères
       Le secret de leurs pouvoirs
       
[Refrain]     Angular ! Angular ! Angular !

       Développez les tous    
       C'est notre Dev         
       Ensemble pour la victoire
[Refrain]     Angular ! Angular ! Angular !

       Rien ne nous arrêtera
       Notre binôme triomphera
```
![](/pokepoke.jpg?raw=true)

## Objectifs :
1.	Manipuler les variable avec $scope
2.	Tester la liaison grâce au ng-model, 
3.	Création d'un contrôleur et parcourir une liste avec ng-repeat
4.	Tester les services  $http, $resource et factory (creation d'un service)
5.	Communication entre contrôleurs a l’aide  de $watch
6.	Création d'une directive


### Prerequisites

```txt
 Un navigateur WEB (Chrome)  -
 Un IDE (WebStorm) 

```

### Installation
 Dans ce TP il n'y a pas d'installation à faire , il suffit d'avoir un éditeur de texte et un navigateur web.
 
Exécuter l'appli du pokemon en ouvrant le fichier **‘index.html’** a partir d'un navigateur .

- Le controleur il s'agit du fichier  **‘pokedex.js’** qu'on trouve dans le dossier js .<br>

- Le modele il s'agit du fichier **‘index.html’** . <br>


## Recherche d'un Pokémon via son numéro
ng-model et $scope sont les 2 directives qui permettent de faire le data-binding en angular (unidirectionnel ou bidirectionnel).

### Du Modele => Controleur => Modele (bidirctionnel)	 :
On commence par définir une balise qui correspond a une variable  en mettant la valeur dans ng-model , dans l'ex suivant on a associé "selected" a la balise de selection  :

```html
  <select ng-model="selected" class="form-control">
        <option ng-repeat="x in allPokemons | filter : searchId | filter : searchName" value="{{x.pokemon_species.name}}">
          {{x.pokemon_species.name}}
         </option>
  </select>
```
 
#### Controleur => Modele
On l’a modifie dans le contrôleur associé à ce modèle en faisant :
  ```html
  <div ng-controller="PokemonCtrl1" class="row">
  ```
  
Controleur dans lequel qon va modifier la valeur du var "selected" :
 ```javascript
 pokeApp3.controller('PokemonCtrl1', function ($scope, $http, Pokemon, PokService) {
  
  // Manipulation de la variable ici
};

```


La modification se fait comme ceci :
```javascript
  $scope.selected= ‘6’;
```

Pour afficher la valeur:
```html
  {{selected}}
```

### Du Contrôleur => Modele (uniderctionnel)
```javascript
   $scope.allPokemons = [];
  $http.get("https://pokeapi.co/api/v2/pokedex/1").then(function (response) {
    $scope.allPokemons = response.data.pokemon_entries;
  }, function (response) {
    $scope.allPokemons = response.statusText;

  });
  ```
  
Et afficher sa valeur dans le modèle en faisant :
```html
  {{allPokemons}}
```

## Accès à l’API :
-	L’accès se fait à travers des services $http
-	On a récupéré la liste des Pokémons en utilisant le service $http

Pour la récupération des informations sur un Pokémon particulier on utilise le service **$ressource** car elle vous permet d'interagir avec les sources de données API Rest qui implémente les requêtes de bases  (get, save, query, remove, delete) .
```javascript
$resource("http://pokeapi.co/api/v1/type/:id/")
```

Pour encapsuler l’appel a $ressource on a défini un service de type  factory **‘Pokemon ‘**
-	La fonction Service Factory génère l'objet ou la fonction qui représente le service pour le reste de l'application.

```javascript
pokemonApp.factory('Pokemon', ['$resource',
  function ($resource) {
    return $resource("https://pokeapi.co/api/v2/pokemon/:id/", {id: '@id'});
  }]
);
```

-	Dans le service  **‘PokService’** on a créé des getters et setters pour mettre à jour l’id du Pokémon récupéré par le factory **‘Pokemon’** comme ceci :
   ```javascript
  $scope.pokemon_structure = Pokemon.get({id: PokService.getId()});
  ```

-	La différence majeure entre Service et factory est la syntaxe  : factory retourne ce que la fonction retourne, alors qu'avec un service y’a pas de return .

-	Un service  que ça soit de type  service ou de type factory peut être associé à plusieurs contrôleurs dans la même application, il suffit de l’ajouter dans la fonction du contrôleur de la façon suivante :
    
```javascript
pokemonApp.controller('PokemonCtrl2', function ($scope, Pokemon, PokService) {
  PokService.setChange(function () {
    $scope.pokemon_structure = Pokemon.get({id: PokService.getId()});
  });
});
```



## Communication entre contrôleurs
-	Le service **$watch** est un service qui permet de mettre à jour (l'élément Observateur ) l’affichage du Pokémon avec ses informations a chaque fois qu'on change du Pokémon recherché (Observer).
 ```javascript
   $scope.$watch('selected', function () {
    PokService.setId($scope.selected);
  });
  ```


## Création d'une directive

Nous avons créé une directive nommé **‘pokedir’**, cette directive on l’a présenté de la façon suivante :
```javascript
pokemonApp.directive('pokedir', function () {
  return {
    restrict: 'AEC',
    templateUrl: "pokeDirective.html"
  };
});
```


## Auteurs
* **Nabé N. Diarrassouba** (https://github.com/diarranabe)
* **Nada Ez Ziraiy** (https://github.com/nadaez)
* **Charles Oliviers Maud** (https://github.com/maudmcok)

## License

This project is licensed under the GNU License.

