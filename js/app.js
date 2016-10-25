var app = angular.module("theportfolio", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
  		.when('/', {
  			templateUrl: 'views/main.html',
  			controller: 'ViewController'
  		})
      .when('/project-section#project-section', {
  			templateUrl: 'views/main.html',
  			controller: 'ViewController'
  		})
      .when('/portfolio', {
  			templateUrl: 'views/portfolio.html',
  			controller: 'PortfolioController'
      })
  		.when('/project/:projectId', {
  			templateUrl: 'views/project.html',
  			controller: 'ProjectController'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectController'
      })
      .when('/vice', {
        templateUrl: 'views/vice.html',
        controller: 'ProjectController'
      })
      .when('/tinder', {
        templateUrl: 'views/tinder.html',
        controller: 'ProjectController'
      })
      .otherwise({
        templateUrl: 'views/main.html',
  			controller: 'ViewController'
      });
 });
