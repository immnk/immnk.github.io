angular.module('mani.controllers')
.controller('DashboardCtrl', ['$scope', 
  function($scope){
    init();

    function init(){
      console.log('Dashboard is initializing...');
      $scope.projects = [{
        id: 1,
        name: 'Library Management System',
        icon: 'glyphicon-book'
      }, {
        id: 2,
        name: 'Angular UI-Grid',
        icon: 'glyphicon-book'
      }, {
        id: 3,
        name: 'Fuzzy Component selection',
        icon: 'glyphicon-book'
      }, {
        id: 4,
        name: 'eCommerce site',
        icon: 'glyphicon-book'
      }
      ]
    }

}]);