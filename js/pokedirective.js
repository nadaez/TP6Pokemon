angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('poke-dir', function() {
    return {
      templateUrl: '../pokeDirective.html'
    };
  });
