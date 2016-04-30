'use strict';

var app = angular.module('pokeApp');

app.controller('listCtrl', function($scope, $stateParams, Poke) {
  $scope.getPokemon = (num) => {
    $scope.pokeList = [];
    Poke.getPage(num)
    .then(list => {

      $scope.next = list.data.next;
      console.log($scope.next);
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
  $scope.getPokemon(0);
})


app.controller('pokeCtrl', function(Poke, $stateParams, $scope) {
    $scope.poke = null;
    Poke.getPokeById($stateParams.id)
    .then(res => {
      $scope.poke = res.data;
      return Poke.getDesc(res.data.species.url);
    })
    .then(speciesInfo => {
      $scope.poke.desc = speciesInfo.data.flavor_text_entries[1];
      if(speciesInfo.data.evolves_from_species){
        $scope.poke.evolves = speciesInfo.data.evolves_from_species.name;
        $scope.poke.devolveId = speciesInfo.data.evolves_from_species.url.split('/')[6]
      }
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
