# teaching-jxs-tp5
TP5 : AngularJS
# TP6Pokemon
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



















TP 6 de SIR: Pokedex
Goals :
1.	Manipuler les variable avec $scope
2.	Tester la liaison grâce au ng-model, 
3.	Création d'un contrôleur et parcourir une liste avec ng-repeat
4.	Tester les services  $http, $resource et factory (creation d'un service)
5.	Communication entre contrôleurs a l’aide  de $watch
6.	Création d'une directive
Recherche d'un Pokémon via son numéro
Y’a ng-model , $scope c’est 2 directives permettent de faire le data-binding (unidirectionnel ou biderectionnel).
Du Modele => Controleur => Modele (biderctionnel)	 :
On commence par définir une balise qui correspond a une variable en mettant :
 
Controleur => Modele
On l’as modifie dans le contrôleur associé à ce modèle en faisant :
  
Et coté controleur :
 

La modification par ex :
$scope.selected= ‘6’ .
Et à la fin on affiche la valeur coté modele :
{{selected}}
Du Contrôleur => Modele (uniderctionnel)
 
Et afficher sa valeur dans le modèle en faisant :
{{myWelcome}}

Accès à l’API :
-	L’accès se fait à travers des services $http
-	On a récupéré la liste des Pokémons en utilisant le service $http
Pour la récupération des informations sur un Pokémon particulier on utilise le service $ressource car elle vous permet d'interagir avec les sources de données API Rest car il implémente des requêtes de bases  (get, save, query, remove, delete) .
$resource("http://pokeapi.co/api/v1/type/:id/")

Pour encapsuler l’appel a $ressource on a défini un servicede type  factory ‘Pokemon ‘
	La fonction Service Factory génère l'objet ou la fonction qui représente le service pour le reste de l'application.
 

	Dans le service  ‘PokService’ on a créé des getters et setters pour mettre à jour l’id du Pokémon récupéré par le factory ‘Pokemon’ comme ceci :
 
	La différence majeure entre Service et factory est la syntaxe qui est différente : factory retourne ce que la fonction retourne, et avec  un service y’a pas de return .

	Un service  que ça soit de type  service ou de type factory peut être associé à plusieurs contrôleurs dans la même application, il suffit de l’ajouter dans la fonction du contrôleur de la façon suivante :
 




Communication entre contrôleurs
-	Le service $watch est un service qui permet de mettre à jour (l'élément Observateur ) l’affichage du Pokémon avec ses informations  lors du changement du Pokémon recherché (Observer).
 


Création d'une directive

Nous avons créé une nommé ‘myCustomer’, cette directive on l’a présenté de la façon suivante :

 








### Professeur Chen
```
Pour vous aider dans votre quète, 
je vous est laissé des instructions 
ainsi que les éléments de bases pour créer un Pokédex à cette adresse :
```
[Professeur Chen Github](https://github.com/barais/teaching-jxs-tp5) 
(l'utilisation d'une bicyclette est conseillée pour s'y rendre plus vite).

### Prerequisites

```
 Navigateur WEB (Chrome)  -
 Bloc note 

```

### Installation



## Auteurs

* **Nabé N. Diarrassouba** (https://github.com/diarranabe)
* **Nada Ez Zirray** (https://github.com/nadaez)
* **Charles Oliviers Maud** (https://github.com/maudmcok)

## License

This project is licensed under the GNU License.

