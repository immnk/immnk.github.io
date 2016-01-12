angular.module('mani.controllers', []);
angular.module('mani.services', []);

angular.module('mani', ['ui.bootstrap', 'ui.bootstrap.collapse',
 'ui.router', 'mani.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('menu.dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller : 'DashboardCtrl'
  })

  .state('menu.aboutus', {
    url: '/aboutus',
    templateUrl: 'templates/about-us.html'
  })

  .state('menu.contact', {
    url: '/contact',
    templateUrl: 'templates/contact.html'
  });

  $urlRouterProvider.otherwise('/menu/dashboard');
});