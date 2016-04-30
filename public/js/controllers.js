'use strict';

var app = angular.module('pokeApp');

app.controller('listCtrl', function($scope, $state, Poke) {

  $scope.getPokemon = (link) => {
    $scope.pokeList = [];
    Poke.getPage(link)
    .then(list => {


      $scope.next = list.data.next;
      $scope.prev = list.data.previous;
      console.log($scope.next);
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
