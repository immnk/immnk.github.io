angular.module('mani.controllers')
.controller('MenuCtrl', ['$scope', 
  function($scope){
    init();

    function init(){
      console.log('Menu is initializing...');
      $scope.dashboardActive = true;
      $scope.aboutActive = false;
      $scope.contactActive = false;
    }

    $scope.dashboardClick = function(){
      $scope.dashboardActive = true;
      $scope.aboutActive = false;
      $scope.contactActive = false;
    }

    $scope.aboutClick = function(){
      $scope.dashboardActive = false;
      $scope.aboutActive = true;
      $scope.contactActive = false;
    }

    $scope.contactClick = function(){
      $scope.dashboardActive = false;
      $scope.aboutActive = false;
      $scope.contactActive = true;
    }

}]);