'use strict';

var app = angular.module('pokeApp');

app.service('Poke', function($http) {

  this.getPage = num => {
    return $http.get(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${num}`, { cache: true});
  }

  this.getPokemon = url => {
    return $http.get(url);
  }

  this.getPokeById = id => {
    return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, { cache: true});
  }

  this.getDesc = url => {
    return $http.get(url, { cache: true});
  }
})
