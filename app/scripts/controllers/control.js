var app = angular.module('Projekt', []);

app.controller('kontrola', ['$scope', 'filterFilter', function($scope, filterFilter){

  $scope.formSave = false;
  $scope.komunikat = false;
  $scope.useOurMail = false;
  $scope.user = {};

  $scope.header = {
    pic: 'images/yeoman.png'
  };

  $scope.specjalnosc = [
    { name: 'Gitara', type: 'muzyka' },
    { name: 'C#', type: 'programowanie' },
    { name: 'Lutnia', type: 'muzyka'},
    { name: 'JavaScript', type: 'programowanie'},
  ];
  $scope.ulubione = [
    { name: 'Photoshop', selected: false },
    { name: 'Atom', selected: false },
    { name: 'WebStorm', selected: false },
    { name: 'Fl', selected: false },
  ];

  $scope.wysProg = function(){
    $scope.user.ulubione = filterFilter($scope.ulubione, {selected: true});
  };

  $scope.staz = [
    { name: '0-1 lata'},
    { name: '1-2 lata'},
    { name: '3-5 lat'},
    { name: '5> lat'},
  ];



}]);
