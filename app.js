"use strict";
var app = angular.module("myDemo",['ui.router']);

app.run(function(){
    console.log("angular run function running");
}) //run function


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){
    console.log("config function running")

    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state("home",{
      url:'/',
      templateUrl:'app/views/home.html',
      controller:'homeCtrl'  
    })
}])// config  function
