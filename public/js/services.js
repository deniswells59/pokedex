'use strict';

var app = angular.module('pokeApp');

app.service('Poke', function($http) {

  this.getPage = link => {
    return $http.get(link);
  }

  this.getPokemon = url => {
    return $http.get(url);
  }
})
