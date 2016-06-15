angular.module("Publicidad",['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
     .when('/', {
         templateUrl: 'templates/mainView.html',
         controller: 'MainViewController'
     })
    
     .otherwise({
         redirectTo: '/'
     });
});

