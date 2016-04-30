'use strict';

var app = angular.module('pokeApp');

app.service('Poke', function($http) {

  this.getPage = link => {
    return $http.get(link);
  }

  this.getPokemon = url => {
    return $http.get(url);
  }

  this.getPokeById = id => {
    return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  this.getDesc = url => {
    return $http.get(url);
  }
})
