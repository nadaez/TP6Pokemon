angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('poked', function() {
    return {
      templateUrl: 'pokeDirective.html'
    };
  });
