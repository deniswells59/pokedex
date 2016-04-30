'use strict';

var app = angular.module('pokeApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('list', {
    url: '/',
    templateUrl: '/html/list.html',
    controller: 'listCtrl'
  })

})
