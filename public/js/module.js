'use strict';

var app = angular.module('pokeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('list', {
    url: '/list',
    templateUrl: '/html/list.html',
    controller: 'listCtrl'
  })
  .state('pokemon', {
    url:'/pokemon/:id',
    templateUrl: '/html/pokemon.html',
    controller: 'pokeCtrl'
  })
  $urlRouterProvider.otherwise('/list');
})
