angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  
])

.config(['$urlRouterProvider','$locationProvider', '$stateProvider', function($urlRouterProvider,$locationProvider, $stateProvider){
  $urlRouterProvider.otherwise("/");



  $stateProvider

    .state('home',{
      url:'/',
      templateUrl: 'templates/home.html',
      controller: 'mainCtrl',

    })

    .state('endgame',{
      url: '/endgame',
      templateUrl: 'templates/endgame.html',
      controller: 'endGameController',
    })


}])



/** 
  * @desc Servis koji definise
  * funkcije za prebacivanje podataka
  * iz jednog u drugi kontroler
*/
.service('cityService', function() {
  var cities = [], addCity, getCitiesList;
      addCity = function(obj1, obj2) {
         cities.push(obj1, obj2);
      };
      getCitiesList = function(){
         return cities;
      };
      return {
         addCity: addCity,
         getCitiesList: getCitiesList
      };
 });






