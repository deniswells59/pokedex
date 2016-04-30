'use strict';

var app = angular.module('pokeApp');

app.controller('listCtrl', function($scope, $state, Poke) {
  $scope.getPokemon = (link) => {
    $scope.pokeList = [];
    Poke.getPage(link)
    .then(list => {

      $scope.next = list.data.next;
      $scope.prev = list.data.previous;
      var pokeList = list.data.results;
      pokeList.forEach(obj => {
        var poke = obj.name.split('')
        poke[0] = poke[0].toUpperCase();
        poke = poke.join('');
        obj.name = poke;

        var split = obj.url.split('/')
        obj.id = split[6];

        $scope.pokeList.push(obj);
      })
    })
    .catch(err => {
      console.error(err);
    })
  }
  $scope.getPokemon("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0");
})


app.controller('pokeCtrl', function(Poke, $stateParams, $scope) {
    $scope.poke = null;
    Poke.getPokeById($stateParams.id)
    .then(res => {
      $scope.poke = res.data;
      console.log($scope.poke);
    })
    .catch(err => {
      console.error(err);
    })


})





app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
